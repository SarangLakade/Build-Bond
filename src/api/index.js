import axios from "axios";

const appointmentAPI = "http://localhost:5000/appointment/";

export const fetchPosts = () => axios.get(appointmentAPI);

export const createPost = (newPost) => axios.post(appointmentAPI, newPost);

// const contactAPI = "http://localhost:5000/contact/";

// export const fetchContacts = () => axios.get(contactAPI);

// export const createContacts = (newContact) =>
//   axios.post(contactAPI, newContact);
