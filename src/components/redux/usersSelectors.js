export const getToUsers = (state) => {
  return state.UsersPage.users;
};

export const getPageSize = (state) => {
  return state.UsersPage.pagesSize;
};

export const getTotalUsersCount = (state) => {
  return state.UsersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.UsersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.UsersPage.isFetching;
};

export const getFolowindInProgress = (state) => {
  return state.UsersPage.folowindInProgress;
};
