import axios from "axios";

export const LoginAPI = async (url, email, password) => {
  try {
    const response = await axios.post(url, {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
