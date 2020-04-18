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
};
