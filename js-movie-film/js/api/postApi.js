import axiosClient from "./axiosClient";

const postApi = {
  getAll(params) {
    const url = "/";
    return axiosClient.get(url, { params });
  },

  getById(id) {
    const url = `/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/${id}`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/${id}`;
    return axiosClient.patch(url);
  },
};
export default postApi;
