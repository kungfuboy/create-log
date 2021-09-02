export const state = () => ({
  bg: "",
  color: ""
});

export const mutations = {
  changeBg(state, data) {
    state.bg = data;
  },
  changeColor(state, data) {
    state.color = data;
  }
};
