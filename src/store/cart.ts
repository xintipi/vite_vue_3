import { defineStore } from 'pinia'
import { useProductStore, Product } from './products'

export interface Purchase {
  productId: string,
  quantity: number
}

export interface CartState {
  contents: Record<string, Purchase>
}

export interface CartPreview {
  name: string
  quantity: number
  cost: number
}

export const useCartStore = defineStore({
  id: 'cart',

  state: (): CartState => ({
    contents: {}
  }),

  getters: {
    total(): any {
      return 'test'
    },

    formattedCart(): CartPreview[] {
      const products = useProductStore()

      return Object.keys(this.contents).map((productId: string) => {
        const purchase = this.contents[productId]

        return {
          name: products.all[purchase.productId].name,
          quantity: purchase.quantity,
          cost: purchase.quantity * products.all[purchase.productId].cost
        }
      })
    }
  },

  actions: {
    add(product: Product) {},

    remove(product: Product) {}
  }
})
