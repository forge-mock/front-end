import { useState } from "react";
import { Label, type Key } from "react-aria-components";
import BlankSlider from "@features/blank-slider/blank-slider";
import { Button, ModalWindow, Selector } from "@shared/components";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function UUIDConfig({ isOpen, setIsOpen }: ConfiguratorProps) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [selectedVersion, setSelectedVersion] = useState<Key>();

  const uuidVersions = [
    { id: 1, name: "UUIDV1" },
    { id: 2, name: "UUIDV3" },
    { id: 3, name: "UUIDV4" },
    { id: 4, name: "UUIDV5" },
    { id: 5, name: "UUIDV6" },
    { id: 6, name: "UUIDV7" },
  ];

  const changeUuidVersion = (version: Key) => {
    setSelectedVersion(version);
  };

  return (
    <ModalWindow isOpen={isOpen} width={"30%"} height={"50%"} title="UUID configurator">
      <div className="mt-10">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <div className="flex gap-7 mt-14">
          <Label className="text-black">Version</Label>
          <Selector
            items={uuidVersions}
            onSelectionChange={(key) => changeUuidVersion(key)}
            placeholder="Select UUID version"
            selectedKey={selectedVersion}
            selectorClasses="w-[50%]"
          />
        </div>
      </div>
      <Button
        text="Close modal"
        onPress={() => setIsOpen(false)}
        className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"
      />
    </ModalWindow>
  );
}

export default UUIDConfig;
