import axios from "../api";

const PER_PAGE = 3;

export const fetchUsers = async (page) => {
  try {
    const { data } = await axios.get(`/users?page=${page}&perPage=${PER_PAGE}`);
    return data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    console.error("error.message:", error.message);
  }
};

export const fetchUserById = async (userId) => {
  try {
    const { data } = await axios.get(`/users/${userId}`);
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    console.error("error.message:", error.message);
  }
};

export const updateUserFollowers = async (userId, followers) => {
  try {
    const { data } = await axios.put(`/users/${userId}`, {
      followers,
    });
    return data;
  } catch (error) {
    console.error("Failed to update user:", error);
    console.error("error.message:", error.message);
  }
};
