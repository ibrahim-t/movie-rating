import axios from "axios";
const movieList=require("./movies.json");

export function doFetchMovies() {
    return  (dispatch)=>{

    const movieFilter={
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting"
    }
    // try{ since API is not working so loaded data from local json
    //     // const movieList = await axios.post("https://hoblist.com/movieList",{body:movieFilter});
    // }catch(e){
    //     throw e;
    // };
    dispatch( {
        type: "INITIAL_LOAD",
        movies:movieList
    })
}
}
