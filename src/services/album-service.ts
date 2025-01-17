import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_WHOWHO_API_URL;

export const getTodayAlbum = async () => {
  const response = await axios.get(`${baseUrl}/album/todays`);
  const data = response.data;

  return data;
};
