import React, { useState } from 'react';
import { Input } from 'antd'; // Assuming you are using Ant Design for the Search component

const Venue = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = (value) => {
    // Implement the logic for handling the form submission
    console.log('Search value:', value);
  };

  return (
    <>
    
      <div className="mainVenue">
        <h1 className="title">Venue</h1>
        <h3 className="subTitle">The where isn't most important b-but it does add a l-li-little something! </h3>
        <img src="robot.png" width="200px" alt="Robot"></img>
        <div className="topBar">
          <h1>VENUES!</h1>
          <Input.Search
            placeholder="Search for Venues"
            allowClear
            enterButton="Search"
            size="large"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onSearch={handleFormSubmit}
          />
        </div>
      </div>
	  
    </>
  );
};

export default Venue;
