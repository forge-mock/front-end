import React from "react";
import { useRouter } from "next/navigation";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { removeLocalStorageItem } from "@shared/helpers";
import { Modal, Button, addToast } from "@shared/components";
import { logout } from "@entities/auth";

export interface LogoutModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

function LogoutModal({ isOpen = false, setIsOpen, setIsLoggedIn }: Readonly<LogoutModalProps>): React.JSX.Element {
  const router = useRouter();

  function handleSignOut(): void {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ITEMS.accessToken);

    logout(accessToken ?? "");
    setIsLoggedIn(false);
    removeLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken);
    removeLocalStorageItem(LOCAL_STORAGE_ITEMS.isLoggedIn);
    addToast("Successfully signed out", "success");
    setIsOpen(false);
    router.push("/");
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Log out">
      <>
        <p>Do you want to sign out?</p>

        <div className="flex flex-row gap-4 mt-4">
          <Button text="Cancel" outline onPress={() => setIsOpen(false)} />
          <Button text="Sign Out" onPress={handleSignOut} />
        </div>
      </>
    </Modal>
  );
}

export default LogoutModal;
