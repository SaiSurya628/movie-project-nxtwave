import { useState } from "react";
import Navbar from "../Navbar";
import MoviePage from "../MoviePage";
import "./index.css";

const SearchPage = () => {
    const [error, setError] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false); // State for loading indicator
    const searchRoute = true;

    const getSearchMoviesData = async (inputData) => {
        try {
            setLoading(true); // Start loading
            const api = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${inputData}&page=1`;
            const response = await fetch(api);
            const data = await response.json();
            console.log(data);
            setSearchResults(data.results);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <Navbar
                getSearchMoviesData={getSearchMoviesData}
                searchRoute={searchRoute}
            />

            <div className="search-container">
                {loading ? (
                     <div className="spinner" ></div>
                ) : (
                    <ul className="home-list">
                        {searchResults.map((each) => (
                            <MoviePage details={each} key={each.id} />
                        ))}
                    </ul>
                )}
            </div>
            {error ? <p>{error}</p> : null}
        </>
    );
};

export default SearchPage;
