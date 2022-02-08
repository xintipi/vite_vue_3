import { defineStore } from 'pinia'

export interface Product {
  id: string
  name: string
  cost: number
  icon: string
}

interface ProductState {
  all: Record<string, Product>
  ids: string[]
}

export const useProductStore = defineStore({
  id: 'products',

  state: (): ProductState => ({
    all: {},
    ids: []
  }),

  getters: {
    list() {}
  },

  actions: {}
})
