import create from "zustand";
import { persist } from 'zustand/middleware'
let store = (set) => ({
    language: 'uz',
    setLanguage: (lan) => set((state) => ({
        language: lan
    })),
    korzina : [],
    addKorzina : (product)=>set((state)=>({
        korzina : [...state.korzina,product]
    }))
})

store = persist(store, { name: 'nmadrlar' })

export const useStorage = create(store)