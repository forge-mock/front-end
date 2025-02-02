import { create } from "zustand";
import type { Field } from "@entities/fields";

interface FieldsState {
  fields: Field[];
  setAllFields: (fields: Field[]) => void;
  addField: (field: Field) => void;
  removeField: (field: Field) => void;
  clearFields: () => void;
}

export const useFieldsStore = create<FieldsState>((set) => ({
  fields: [],
  setAllFields: (fields) => set(() => ({ fields: [...fields] })),
  addField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  removeField: (field) => set((state) => ({ fields: state.fields.filter((f) => f !== field) })),
  clearFields: () => set(() => ({ fields: [] })),
}));
