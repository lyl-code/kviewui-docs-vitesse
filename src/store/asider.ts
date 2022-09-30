import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAsiderStore = defineStore('asider', {
  state: () => {
    return {
      currentURL: '',
    }
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAsiderStore, import.meta.hot))
