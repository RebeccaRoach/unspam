import React, {useState} from 'react'


const SearchBar = () => {

    // Example for proof of concept
    const countries = [
        { name: "Belgium", continent: "Europe" },
        { name: "India", continent: "Asia" },
        { name: "Bolivia", continent: "South America" },
        { name: "Ghana", continent: "Africa" },
        { name: "Japan", continent: "Asia" },
        { name: "Canada", continent: "North America" },
        { name: "New Zealand", continent: "Australasia" },
        { name: "Italy", continent: "Europe" },
        { name: "South Africa", continent: "Africa" },
        { name: "China", continent: "Asia" },
        { name: "Paraguay", continent: "South America" },
        { name: "Usa", continent: "North America" },
        { name: "France", continent: "Europe" },
        { name: "Botswana", continent: "Africa" },
        { name: "Spain", continent: "Europe" },
        { name: "Senegal", continent: "Africa" },
        { name: "Brazil", continent: "South America" },
        { name: "Denmark", continent: "Europe" },
        { name: "Mexico", continent: "South America" },
        { name: "Australia", continent: "Australasia" },
        { name: "Tanzania", continent: "Africa" },
        { name: "Bangladesh", continent: "Asia" },
        { name: "Portugal", continent: "Europe" },
        { name: "Pakistan", continent: "Asia" },
    ];

    const [filteredList, setFilteredList] = new useState(countries);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...countries];
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