import { Button, ModalWindow } from "@shared/components";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function BooleanConfig({ isOpen, setIsOpen }: ConfiguratorProps) {
  return (
    <ModalWindow isOpen={isOpen} width={50} height={60} title="Boolean configurator">
      Boolean
      <Button
        text="Close modal"
        onPress={() => setIsOpen(false)}
        className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"
      />
    </ModalWindow>
  );
}

export default BooleanConfig;
