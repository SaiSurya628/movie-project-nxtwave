import { useParams } from 'react-router-dom'
import './index.css'
import { useEffect, useState } from 'react';
import CastPage from '../CastPage';
import Navbar from '../Navbar';
const SingleMoviePage=()=>{
    const [Apidata,setApiData]=useState([])
    const [apiCast,setApiCast]=useState([])
const data=useParams();
const {id}=data
const apiDataFunction=async()=>{
    try{
        const api=`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;
        const response=await fetch(api);
        const data=await response.json();
        // setApiData(data.results.id)
       
      setApiData(data)
      console.log(data)
        }
        catch(error){
            // setError(error)
        }
}
const apiCastFunction= async()=>{
    const api=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`;
    const response=await fetch(api);
    const data=await response.json();
   
  setApiCast(data.cast)
  console.log(data.cast)
}
useEffect(()=>{
apiDataFunction();
apiCastFunction();
},[])
    return(<><Navbar/>
    <div className='single-container'>
 
     <div className='single-description' style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${Apidata.backdrop_path})`
        }}>
         <div className='single-details'>
         <img className="image" alt="movie" src={`https://image.tmdb.org/t/p/w500${Apidata.poster_path}`} />
         <div>
                <h3>{Apidata.original_title}</h3>
                <p>Rating: {Apidata.vote_average}</p>
                <p>{Apidata.runtime} min  <span></span></p>
                <p>release date: {Apidata.release_date} </p></div>
                </div>
                <div className='overview'>
                <p>Overview</p>
                <p>{Apidata.overview}</p></div>
                
                </div>
                <h1 className='overview'>Cast</h1>
        <ul className='cast-list-container'>
            {apiCast.map((each)=><CastPage key={each.id} details={each} />)}
        </ul>
    
    </div></>)
}

export default SingleMoviePage