import React from 'react';
import './search.css';

export default function Search(props) {
    return (
        <div className="searchbar">
            <label for="search">Search: </label>
            <input
                type="text"
                id="search"
                name="search"
                onChange={e => props.inputHandler(e.target.value)}
            />
            <input type="submit" id="submit-button" value="Search" />
        </div>
    );
}