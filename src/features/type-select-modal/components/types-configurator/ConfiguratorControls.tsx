"use client";

import React from "react";
import { useConfigStore } from "./useConfigStore";
import type { FieldConfig } from "./useConfigStore";

interface ConfiguratorControlsProps {
  fieldId: string;
  fieldType: string;
  config: Record<string, any>;
  onSave?: () => void;
  onCancel?: () => void;
  onReset?: () => void; // Add this callback for resetting state
}

function ConfiguratorControls({
  fieldId,
  fieldType,
  config,
  onSave,
  onCancel,
  onReset,
}: Readonly<ConfiguratorControlsProps>) {
  const { updateConfig } = useConfigStore();

  const createConfig = (): FieldConfig => {
    if (!fieldId) {
      throw new Error("Missing fieldId in ConfiguratorControls");
    }

    const baseConfig = {
      fieldId,
      blankValue: config.blankValue ?? 0,
    };

    switch (fieldType) {
      case "number":
        return {
          ...baseConfig,
          type: "number",
          decimalValue: config.decimalValue ?? 0,
          minValue: config.minValue ?? 0,
          maxValue: config.maxValue ?? 0,
          numberValue: config.numberValue ?? 0,
          isLeft: config.isLeft ?? true,
        } as FieldConfig;
      case "string":
        return {
          ...baseConfig,
          type: "string",
          isSense: config.isSense ?? false,
          minValue: config.minValue ?? 0,
          maxValue: config.maxValue ?? 0,
          numberValue: config.numberValue ?? 0,
          isLeft: config.isLeft ?? true,
        } as FieldConfig;
      case "text":
        return {
          ...baseConfig,
          type: "text",
          isSense: config.isSense ?? false,
          paragraphsAmount: config.paragraphsAmount ?? 1,
        } as FieldConfig;
      case "boolean":
        return {
          ...baseConfig,
          type: "boolean",
          isSelected: config.isSelected ?? false,
          booleanValues: config.booleanValues ?? 0.5,
        } as FieldConfig;
      case "datetime":
        return {
          ...baseConfig,
          type: "datetime",
          timeFormat: config.timeFormat ?? 1,
          dateFormat: config.dateFormat ?? 1,
          separator: config.separator ?? 1,
          isDateRangeSelected: config.isDateRangeSelected ?? false,
          isTimeRangeSelected: config.isTimeRangeSelected ?? false,
        } as FieldConfig;
      case "uuid":
        return {
          ...baseConfig,
          type: "uuid",
          selectedVersion: config.selectedVersion ?? 4,
        } as FieldConfig;
      default:
        throw new Error(`Unsupported field type: ${fieldType}`);
    }
  };

  const handleSave = () => {
    try {
      const configToSave = createConfig();
      updateConfig(fieldId, configToSave);

      if (onSave) {
        onSave();
      }
    } catch (error) {
      console.error("Failed to save configuration:", error);
    }
  };

  const handleCancel = () => {
    // First reset form values if onReset is provided
    if (onReset) {
      onReset();
    }

    // Then close the modal
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="flex justify-end gap-2 mt-8">
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors" onClick={handleCancel}>
        Cancel
      </button>
      <button
        className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}

export default ConfiguratorControls;
