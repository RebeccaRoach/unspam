import React, {useState} from 'react'
import Orgs from "../data/orgs.json"


const SearchBar = () => {

    const [filteredList, setFilteredList] = new useState(Orgs);
    const [email, setEmail] = new useState('Choose an org to find an email');
    const [selectedOrg, setSelectedOrg] = new useState('No org selected');

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of orgs list
        var updatedList = [...Orgs];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((org) => 
            {return org.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;}
        );
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    const onClick = (e) => {
        e.preventDefault();

        setSelectedOrg(e.target.title);
        setEmail(e.target.value);

        document.getElementById('search-box').value = e.target.title;
    }
    
    return (
        <div>

            <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" type="search" onChange={filterBySearch} placeholder="Enter an organization"/>
            </div>

            <div className="buttons-list">
                {filteredList.map((org, index) => (
                <button key={index} onClick={onClick} title={org.name} value={org.email}>{org.name}</button>
                ))}
            </div>

            <div>
                <p id="display-email">{`${selectedOrg}: ${email}`}</p>
            </div>

        </div>
    )
}

export default SearchBar;