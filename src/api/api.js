import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ff93502f-3bed-423c-a296-5ac4521551e8",
  },
});

export const usersAPI = {
  getUsers(currentPage, pagesSize) {
    // console.log(currentPage);
    return instance
      .get(`users?page=${currentPage}&count=${pagesSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  getUserProfile(userId) {
    console.warn("Obsolete method. Please profileAPI object");
    return getProfileAPI.getUserProfile(userId);
  },
};

export const getProfileAPI = {
  getUserProfile(userId) {
    console.log(userId);
    return instance.get(`profile/${userId}`);
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
