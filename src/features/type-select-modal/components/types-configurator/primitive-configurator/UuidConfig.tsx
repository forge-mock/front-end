import { useState } from "react";
import { Label, type Key } from "react-aria-components";
import BlankSlider from "@features/blank-slider/BlankSlider";
import { Modal, Selector } from "@shared/components";
import { uuidVersions } from "./constants";
import ConfiguratorControls from "../ConfiguratorControls";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  fieldId: string;
}

function UUIDConfig({ isOpen, setIsOpen, fieldId }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [selectedVersion, setSelectedVersion] = useState<Key>(uuidVersions[2].id); // Default to UUIDv4

  const changeUuidVersion = (version: Key) => {
    setSelectedVersion(version);
  };

  const handleSave = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="UUID configurator" showCloseButton={false}>
      <div className="mt-20 mb-10">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <div className="flex gap-7 mt-14">
          <Label className="text-black">Version</Label>
          <Selector
            name="uuid-version"
            items={uuidVersions}
            onSelectionChange={(key) => changeUuidVersion(key)}
            placeholder="Select UUID version"
            selectedKey={selectedVersion}
            selectorClasses="w-[50%]"
          />
        </div>

        <ConfiguratorControls
          fieldId={fieldId}
          fieldType="uuid"
          config={{
            blankValue,
            selectedVersion: Number(selectedVersion),
          }}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </Modal>
  );
}

export default UUIDConfig;
