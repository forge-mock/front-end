import { useState } from "react";
import { z } from "zod";

export function useFormValidation<T extends z.ZodObject<any, any>>(schema: T) {
  type FormValues = z.infer<typeof schema>;

  const initialValues = Object.keys(schema.shape).reduce(
    (acc, key) => {
      acc[key as keyof FormValues] = "" as any;
      return acc;
    },
    {} as Record<keyof FormValues, any>
  );

  const [values, setValues] = useState<Partial<FormValues>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({} as Record<keyof FormValues, boolean>);
  const [submitted, setSubmitted] = useState(false);

  const isFieldInvalid = (field: keyof FormValues): boolean => {
    return (touched[field] || submitted) && Boolean(errors[field as string]);
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      validateField(field as string, value);
    }
  };

  const validateField = (field: string, value: any) => {
    const partialValidation = schema.pick({ [field]: true }).safeParse({
      [field]: value,
    });

    if (!partialValidation.success) {
      const fieldError = partialValidation.error.issues[0]?.message || "";
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, [field]: "" }));
      return true;
    }
  };

  const validate = () => {
    setSubmitted(true);

    const allTouched = {} as Record<keyof FormValues, boolean>;
    Object.keys(schema.shape).forEach((key) => {
      allTouched[key as keyof FormValues] = true;
    });
    setTouched(allTouched);

    const result = schema.safeParse(values);

    if (!result.success) {
      const validationErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0].toString();
        validationErrors[path] = issue.message;
      });

      setErrors(validationErrors);

      const invalidFields = Object.keys(validationErrors);
      const invalidValues = invalidFields.reduce(
        (acc, field) => {
          acc[field] = values[field as keyof FormValues];
          return acc;
        },
        {} as Record<string, any>
      );

      return {
        isValid: false,
        data: null,
        invalidFields,
        invalidValues,
      };
    }

    setErrors({});
    return { isValid: true, data: result.data };
  };

  return {
    values,
    errors,
    touched,
    isFieldInvalid,
    handleChange,
    validate,
  };
}
