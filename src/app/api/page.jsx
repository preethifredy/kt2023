import axios from "axios";
import { API_CONSTANT } from "@app/constants/page";

axios.defaults.baseURL = API_CONSTANT.BASE_URL;

export const fetchHomeStories = async () => {
  return await axios.get("/home-page/banner-story");
};

export const fetchWhatsNew = async () => {
  return await axios.get("/home-page/whats-new");
};

export const fetchStoriesFromKerala = async () => {
  return await axios.get('/home-page/stories-for-kerala')
};

export const fetchMemoriesForLifeTime = async () => {
  return await axios.get('/home-page/memories-for-lifetime')
};

export const fetchDiscoverKerala = async () => {
  return await axios.get('/home-page/discover-kerala');
};

