import { create } from "zustand";
import type { Field } from "@entities/fields";

interface FieldsState {
  fields: Field[];
  setAllFields: (fields: Field[]) => void;
  addField: (field: Field) => void;
  updateFieldName: (fieldId: string, fieldName: string) => void;
  updateFieldType: (fieldId: string, fieldType: string) => void;
  removeField: (fieldId: string) => void;
  clearFields: () => void;
}

export const useFieldsStore = create<FieldsState>((set) => ({
  fields: [],
  setAllFields: (fields) => set(() => ({ fields: [...fields] })),
  addField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  updateFieldName: (fieldId, fieldName) =>
    set((state) => {
      const updatedFields = state.fields.map((field) => {
        return field.id === fieldId ? { ...field, name: fieldName } : field;
      });

      return { fields: updatedFields };
    }),
  updateFieldType: (fieldId, fieldType) =>
    set((state) => {
      const updatedFields = state.fields.map((field) => {
        return field.id === fieldId ? { ...field, type: fieldType } : field;
      });

      return { fields: updatedFields };
    }),
  removeField: (fieldId) => set((state) => ({ fields: state.fields.filter((f) => f.id !== fieldId) })),
  clearFields: () => set(() => ({ fields: [] })),
}));
