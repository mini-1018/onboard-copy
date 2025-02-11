"use client";

import { PostState } from "@/shared/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storage =
  typeof window !== "undefined"
    ? createJSONStorage(() => sessionStorage)
    : undefined;

export const usePostStore = create<PostState>()(
  persist(
    (set) => ({
      post: null,
      setPost: (post) => set({ post }),
      clearPost: () => set({ post: null }),
    }),
    {
      name: "post-storage",
      storage: storage,
      partialize: (state) => ({ post: state.post }),
    }
  )
);
