import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://6438fee64660f26eb1a7e5cd.mockapi.io/api";

export async function getUsers(page) {
  try {
    const { data } = await axios(`/users?page=${page}&limit=3`);
    return data;
  } catch (error) {
    toast.error(`${error.request.statusText}`);
    return error.request.statusText;
  }
}

export async function putUserCount(id, newCount) {
  try {
    const { data } = await axios.put(`/users/${id}`, {
      followers: newCount,
    });
    console.log(data);
    return data;
  } catch (error) {
    toast.error(`${error.request.statusText}`);
    return error.request.statusText;
  }
}

export async function getUsersSort(user_name) {
  try {
    const { data } = await axios(`/users?sortBy=${user_name}`);
    console.log(data);
  } catch (error) {
    toast.error(`${error.request.statusText}`);
    return error.request.statusText;
  }
}
