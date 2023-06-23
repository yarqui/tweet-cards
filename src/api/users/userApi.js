import axios from "../api";

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get("/users");
    return data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    console.error("error.message:", error.message);
  }
};

export const fetchUserById = async (userId) => {
  try {
    const { data } = await axios.get(`/users/${userId}`);
    console.log("data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    console.error("error.message:", error.message);
  }
};
