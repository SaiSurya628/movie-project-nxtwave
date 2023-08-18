import "./index.css"
const CastPage=(props)=>{
    const {details}=props;
    const {character,original_name,profile_path}=details

    return (<li className="cast-list">
       <img className="profile-image" alt="profile" src={`https://image.tmdb.org/t/p/w500${profile_path}`} />
        <p className="cast-para">{original_name}</p>
        <p  className="cast-para">{character}</p>
    </li>)
}

export default CastPage