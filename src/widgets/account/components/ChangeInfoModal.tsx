import React from "react";
import { Modal, Button } from "@shared/components";

export interface ChangeInfoModalProps {
  title: string;
  description: string[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleSubmit: () => Promise<void>;
}

function ChangeInfoModal({
  title = "",
  description = [],
  isOpen = false,
  setIsOpen,
  handleSubmit,
}: Readonly<ChangeInfoModalProps>): React.JSX.Element {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      <div>
        {description.map((row) => (
          <p key={row} className="text-center">
            {row}
          </p>
        ))}

        <div className="flex flex-row justify-center gap-4 mt-4">
          <Button text="Cancel" outline onPress={() => setIsOpen(false)} />
          <Button text="Accept" onPress={() => handleSubmit()} />
        </div>
      </div>
    </Modal>
  );
}

export default ChangeInfoModal;
