import axios from 'axios';

// Automatically use Render backend in production, localhost in dev
const URL = process.env.NODE_ENV === 'production'
  ? 'https://multiservice-88xt.onrender.com'
  : 'http://localhost:8000';

// register
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/api/auth/createuser`, data);
  } catch (error) {
    console.log('error', error);
  }
};

// login
export const verify = async (data) => {
  try {
    return await axios.post(`${URL}/api/auth/login`, data);
  } catch (error) {
    console.log('error', error);
  }
};

// contact
export const addContact = async (data) => {
  try {
    return await axios.post(`${URL}/api/contactUs/contactUs`, data);
  } catch (error) {
    console.log('error', error);
  }
};

// add provider
export const addProvider = async (data) => {
  try {
    return await axios.post(`${URL}/api/buisnessProvider/createProvider`, data);
  } catch (error) {
    console.log('error', error);
  }
};

// service search
export const searchProvider = async (data) => {
  try {
    return await axios.post(`${URL}/api/serviceSearching/searchProvider`, data);
  } catch (error) {
    console.log('error', error);
  }
};
