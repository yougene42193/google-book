import React from 'react';
import './filters.css';

export default function Filters(props) {
    return (
        <div className="filters">
            <label for="print-type">Print Type: </label>
            <select 
                id="printType"
                name="printType"
                onchange={e => props.changeHandler(e)}
            >
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazine">Magazines</option>
            </select>
            <label for="book-type">Book Type: </label>
            <select
                id="filter"
                onChange={e => props.changeHandler(e)}
            >
                <option value="none">No Filter</option>
                <option value="partial">Partial</option>
                <option value="full">Full</option>
                <option value="free-ebooks">Free eBooks</option>
                <option value="paid-ebooks">Paid eBooks</option>
                <option value="ebooks">eBooks</option>
            </select>
        </div>
    )
}