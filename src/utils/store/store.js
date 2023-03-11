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
    })),
    removeKorinza : (id)=>set((state)=>({
        korzina : state.korzina.filter(i=>i.id != id)
    })),
})

store = persist(store, { name: 'nmadrlar' })

export const useStorage = create(store)