import { create } from "zustand";

export interface BaseConfig {
  fieldId: string;
  blankValue: number | number[];
}

export interface NumberConfig extends BaseConfig {
  type: "number";
  decimalValue: number | number[];
  minValue: number;
  maxValue: number;
  numberValue: number;
  isLeft: boolean; // Add this to save the toggle state
}

export interface StringConfig extends BaseConfig {
  type: "string";
  isSense: boolean;
  minValue: number;
  maxValue: number;
  numberValue: number;
  isLeft: boolean;
}

export interface TextConfig extends BaseConfig {
  type: "text";
  isSense: boolean;
  paragraphsAmount: number;
}

export interface BooleanConfig extends BaseConfig {
  type: "boolean";
  isSelected: boolean;
  booleanValues: number | number[];
}

export interface DateTimeConfig extends BaseConfig {
  type: "datetime";
  timeFormat: number;
  dateFormat: number;
  separator: number;
  isDateRangeSelected: boolean;
  isTimeRangeSelected: boolean;
  dateRangeStart?: string; // Add these to store actual date values
  dateRangeEnd?: string;
  timeRangeStart?: string; // Add these to store actual time values
  timeRangeEnd?: string;
}

export interface UuidConfig extends BaseConfig {
  type: "uuid";
  selectedVersion: number;
}

export type FieldConfig = NumberConfig | StringConfig | TextConfig | BooleanConfig | DateTimeConfig | UuidConfig;

interface ConfigState {
  configs: Record<string, FieldConfig>;

  getConfigByFieldId: (fieldId: string) => FieldConfig | undefined;
  updateConfig: (fieldId: string, config: FieldConfig) => void;
  removeConfig: (fieldId: string) => void;
  clearConfigs: () => void;
}

export const useConfigStore = create<ConfigState>((set, get) => ({
  configs: {},

  getConfigByFieldId: (fieldId) => {
    return get().configs[fieldId];
  },

  updateConfig: (fieldId, config) => {
    set((state) => ({
      configs: {
        ...state.configs,
        [fieldId]: config,
      },
    }));
  },

  removeConfig: (fieldId) => {
    set((state) => {
      const newConfigs = { ...state.configs };
      delete newConfigs[fieldId];
      return { configs: newConfigs };
    });
  },

  clearConfigs: () => {
    set({ configs: {} });
  },
}));

// Log initial state
console.log("[ConfigStore] Initial state:", useConfigStore.getState().configs);
