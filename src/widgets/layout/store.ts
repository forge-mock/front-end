import { create } from "zustand";

interface LayoutState {
  mobileSidebarExpanded: boolean;
  expandMobileSidebar: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  mobileSidebarExpanded: false,
  expandMobileSidebar: () => set((state) => ({ mobileSidebarExpanded: !state.mobileSidebarExpanded })),
}));
