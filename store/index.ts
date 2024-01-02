import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        bg: "",
        color: ""
    }),
    actions: {
        changeBg(data: string) {
            console.log('=>', data);
            this.bg = data;
        },
        changeColor(data: string) {
            this.color = data;
        }
    },
})