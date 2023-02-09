import ExportTypography from "antd/lib/typography/Typography";
import axios from "axios";

const URL = "http://localhost:5000";

//#region Auth
export const loginUser = (userForm) =>
  axios.post(`${URL}/user/login`, userForm);

export const registerUser = (userForm, profileForm) =>
  axios.post(`${URL}/user/register`, {
    registerData: userForm,
    profileData: profileForm,
  });

export const verifyAuthToken = () => axios.get(`${URL}/user/Auth`);

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};



export const fetchPosts = () => axios.get(`${URL}/posts`);
// export const createUser = (payload) => axios.post(`${URL}/Users`, payload);
// export const updateUser = (payload) => axios.patch(`${URL}/Users/${payload._id}`, payload);

export const fetchProfile = () => axios.get(`${URL}/profile`);

export const fetchUser = () => axios.get(`${URL}/user`);
export const createUsers = (payload) => axios.post(`${URL}/user/register`, payload);

export const fetchProvince = () => axios.get(`${URL}/province`);

export const fetchPlace = () => axios.get(`${URL}/place`);

export const fetchHotel = () => axios.get(`${URL}/hotel`);
export const createHotels = (payload) => axios.post(`${URL}/hotel/create-hotel`, payload);

export const fetchFoodAndDrink = () => axios.get(`${URL}/foodAndDrink`);

export const fetchAttraction = () => axios.get(`${URL}/attraction`);

export const fetchRequest = () => axios.get(`${URL}/request`);
export const updateRequest = (payload) => axios.patch(`${URL}/request/${payload._id}`, payload);
export const createRequests = (payload)=> axios.post(`${URL}/request/create-request`,payload)

export const fetchMyTrip = (payload) => axios.get(`${URL}/myTrip/${payload}`);
export const createCollections = (payload) => axios.patch(`${URL}/myTrip/${payload.UserID}`, payload);
export const createPlaceLists = (payload) => axios.patch(`${URL}/myTrip/${payload.UserID}/${payload.collectionID}`, payload);


