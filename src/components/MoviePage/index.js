import { Link } from "react-router-dom"
import "./index.css"

const MoviePage=(props)=>{
    const {details}=props
    const {poster_path,original_title,vote_average,id}=details
    return(
    <Link className="list" to={`/single-movie/${id}`}>
    <li>
        <img className="image" alt="movie" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        
       <p className="movie-title"> {original_title}</p>
       <p className="movie-title">Rating: {vote_average}</p>
       </li></Link>)
}
export default MoviePage