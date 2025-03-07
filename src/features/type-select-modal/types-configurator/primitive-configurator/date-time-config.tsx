import { Button, ModalWindow } from "@shared/components";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function DateTimeConfig({ isOpen, setIsOpen }: ConfiguratorProps) {
  return (
    <ModalWindow isOpen={isOpen} width={50} height={60} title="DateTime configurator">
      DateTime
      <Button
        text="Close modal"
        onPress={() => setIsOpen(false)}
        className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"
      />
    </ModalWindow>
  );
}

export default DateTimeConfig;
