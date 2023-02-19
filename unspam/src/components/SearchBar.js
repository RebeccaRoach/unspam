import React, {useState} from 'react'
import Countries from "../data/countries.json"


const SearchBar = () => {

    const [filteredList, setFilteredList] = new useState(Countries);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...Countries];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => 
            {return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;}
        );
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    const onClick = (e) => {
        document.getElementById('search-box').value = e.target.title;
    }
    
    return (
        <div>

            <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" type="search" onChange={filterBySearch} placeholder="Enter an organization"/>
            </div>

            <div className="buttons-list">
                {filteredList.map((item, index) => (
                <button key={index} onClick={onClick} title={`${item.name} - ${item.continent}`}>{item.name}</button>
                ))}
            </div>

        </div>
    )
}

export default SearchBar;