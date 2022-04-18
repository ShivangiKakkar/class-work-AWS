import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useMessages = defineStore('messages', {
  // other options...
  state: () => ({
    notifications:[] as Notifications[]
  }),
  actions: {
    close(index: number) {
        this.notifications.splice(index, 1);
      }
  }
})

export interface Notifications {
    type: 'success' | 'danger' | 'warning' | 'info';
    message: string;
}