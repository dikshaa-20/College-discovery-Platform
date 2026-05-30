import { create } from "zustand";

interface CompareStore {
  selectedIds: string[];

  addCollege: (id: string) => void;
  removeCollege: (id: string) => void;
}

export const useCompareStore = create<CompareStore>(
  (set) => ({
    selectedIds: [],

    addCollege: (id) =>
      set((state) => {
        if (
          state.selectedIds.includes(id) ||
          state.selectedIds.length >= 3
        ) {
          return state;
        }

        return {
          selectedIds: [
            ...state.selectedIds,
            id,
          ],
        };
      }),

    removeCollege: (id) =>
      set((state) => ({
        selectedIds: state.selectedIds.filter(
          (collegeId) => collegeId !== id
        ),
      })),
  })
);