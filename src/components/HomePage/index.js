import { useState, useEffect } from "react";
import "./index.css";
import MoviePage from "../MoviePage";
import Navbar from "../Navbar";

const HomePage = () => {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const ApiFunction = async () => {
        try {
            const api = "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1";
            const response = await fetch(api);
            const data = await response.json();
            setLoading(false);
            setApiData(data.results);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        ApiFunction();
    }, []);

    return (<><Navbar/>
        <div className="home-container">
            {loading ? (
                  <div className="spinner" ></div>
            ) : (
                <ul className="home-list">
                    {apiData.map((each) => (
                        <MoviePage details={each} key={each.id} />
                    ))}
                </ul>
            )}
        </div></>
    );
}

export default HomePage;
