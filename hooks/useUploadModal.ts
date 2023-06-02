import { create } from 'zustand';

interface UploadModallStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUploadModall = create<UploadModallStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModall;