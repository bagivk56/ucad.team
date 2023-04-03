export const state = () => ({
  openPopUpTeam: null
});

export const mutations = {
  openPopUp: function (state, team) {
    state.openPopUpTeam = team
  },
  closePopUp: function (state, team) {
    state.openPopUpTeam = null
  },
};
