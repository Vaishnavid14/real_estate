import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '96b090017amshb904747ed9bbe0fp10a84bjsnc8f4f22498bf'
    },
  });
    
  return data;
}
