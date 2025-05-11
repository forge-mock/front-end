import { useState } from "react";
import { Label, type Key } from "react-aria-components";
import BlankSlider from "@features/blank-slider/BlankSlider";
import { Modal, Selector } from "@shared/components";
import { uuidVersions } from "./constants";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function UUIDConfig({ isOpen, setIsOpen }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [selectedVersion, setSelectedVersion] = useState<Key>();

  const changeUuidVersion = (version: Key) => {
    setSelectedVersion(version);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="UUID configurator">
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
      </div>
    </Modal>
  );
}

export default UUIDConfig;
