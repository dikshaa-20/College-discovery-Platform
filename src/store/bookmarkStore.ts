import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarkStore {
  savedIds: string[];

  saveCollege: (id: string) => void;
  removeCollege: (id: string) => void;
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set) => ({
      savedIds: [],

      saveCollege: (id) =>
        set((state) => ({
          savedIds: state.savedIds.includes(id)
            ? state.savedIds
            : [...state.savedIds, id],
        })),

      removeCollege: (id) =>
        set((state) => ({
          savedIds: state.savedIds.filter(
            (collegeId) => collegeId !== id
          ),
        })),
    }),
    {
      name: "saved-colleges",
    }
  )
);