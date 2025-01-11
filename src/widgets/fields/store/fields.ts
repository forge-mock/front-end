import { create } from "zustand";

interface FieldsState {
  fields: string[];
  addField: (field: string) => void;
  deleteField: (field: string) => void;
  clearFields: () => void;
}

export const useFieldsStore = create<FieldsState>((set) => ({
  fields: [],
  addField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  deleteField: (field) => set((state) => ({ fields: state.fields.filter((f) => f !== field) })),
  clearFields: () => set(() => ({ fields: [] })),
}));
