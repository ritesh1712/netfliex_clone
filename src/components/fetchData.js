import axios from "axios";

let APIkey = "a2fbc9c9faaf96fd4b7f82e12416d463";
export const fetchData = async (category,nextNO=1,type='movie') => {
let url = `https://api.themoviedb.org/3/${type}/${category}?api_key=${APIkey}&language=en-US&page=${nextNO}`;
  const { data } = await axios.get(url);
 return data.results
};


let youTubeAPIkey = "AIzaSyAGh82b12SV_0LHeV5U5waoVMNczJW_Ir8";
 export const trailer = async (movieName) => {
    let url = `https://www.googleapis.com/youtube/v3/search?q=${movieName}%20trailer&key=${youTubeAPIkey}`;
    const { data } = await axios.get(url);
    return data.items
  };
