import { Button } from "@shared/components";
import ModalWindow from "@shared/components/modal/modal";

interface ConfiguratorProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

function TextConfig({ isOpen, setIsOpen }: ConfiguratorProps) {
    return (
        <ModalWindow isOpen={isOpen} width={50} height={60}>
            Text
            <Button text="Close modal" onPress={() => setIsOpen(false)} className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"/>
        </ModalWindow>
    )
}

export default TextConfig;