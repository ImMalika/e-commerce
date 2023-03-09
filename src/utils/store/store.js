import create from "zustand";
import { persist } from 'zustand/middleware'
let store = (set) => ({
    language: 'uz',
    setLanguage: (lan) => set((state) => ({
        language: lan
    }))
})

store = persist(store, { name: 'language' })

export const useStorage = create(store)