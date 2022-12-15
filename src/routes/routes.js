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

export const GetDoctors = async (url) => {
  try{
    const response = await axios.get(url)
    return response
  }catch(error){
    return error.response
  }
}

export const AddDoctorsAPI = async (url,doctor) => {
  try {
    const response = await axios.post(url,doctor)
    return response
  } catch (error) {
    return error.response
  }
} 
