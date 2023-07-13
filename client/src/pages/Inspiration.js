import React, {useState} from 'react';
import { Input } from 'antd';
import { searchPinterest } from '../utils/API';

const Inspiration = () => {
  const [searchedPins, setSearchedPins] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const { Search } = Input;

  const handleFormSubmit = async () => {
    if (!searchInput) return false;
    try {
      const response = await searchPinterest(searchInput);
      if (!response.ok) throw new Error('something went wrong!');
      const { pins } = await response.json();
      console.log(JSON.stringify(pins));
      setSearchedPins(pins);
      setSearchInput('');
    } catch (err) {
      console.error("Try/Catch Error: " + err);
    }
  };

  return (
    <>
      <div className="hero">
        <h1>Inspiration</h1>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onSearch={handleFormSubmit}
        />
      </div>
    </>
  );
};

export default Inspiration;
