import { Link } from "react-router-dom";
import './index.css';
import React, { useState } from "react"; 

const Navbar = (props) => {
    const [searchData, setSearchData] = useState(""); 
    const { searchRoute, getSearchMoviesData } = props;

    const searchDataFunction = (event) => {
        setSearchData(event.target.value); 
    };

    const onSearch = () => {
        if (searchData !== '') {
            getSearchMoviesData(searchData);
            setSearchData("");
        }
    }

    return (
        <nav className="nav-container">
            <Link className="para1" to="/">
                <p>MoviesDb</p>
            </Link>
            <ul>
                <Link className="para2" to="/popular">
                    <li>popular</li>
                </Link>
                <li>
                    {searchRoute && (
                        <input
                            onChange={searchDataFunction}
                            id="search"
                            type="search"
                            placeholder="search the movie"
                        />
                    )}
                    <Link to="/search">
                        <button onClick={onSearch} htmlFor="search">search</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
