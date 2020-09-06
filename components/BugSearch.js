import axios from 'axios';
import { useState, useEffect } from 'react';
import Bug from './Bug';

export default function BugSearch() {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    //returning a promise
    axios.get('http://acnhapi.com/v1/bugs/').then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    if (userInput === '') {
      setData(data);
    } else {
      const filteredBugs = Object.keys(data)
        //check if the key matches users input, returns an array
        .filter((key) => key.includes(userInput))
        //using the key and finding the matching obj
        .reduce((obj, key) => {
          //creating a new object that matches the search param
          return {
            ...obj,
            [key]: data[key],
          };
        }, {});
      setSearchResult(filteredBugs);
    }
  }, [userInput]);

  function handleChange(e) {
    const input = e.target.value.toLowerCase();
    setUserInput(input);
  }
  const bugsData = userInput.length > 0 ? searchResult : data;
  return (
    <div className="bug">
      <label>Search </label>
      <input type="text" onChange={handleChange} />
      <label>Caught?</label>
      <input type="checkbox" />
      <div className="bug-container">
        {Object.keys(bugsData).map((key) => {
          const bug = data[key];
          return <Bug key={key} bug={bug} />;
        })}
      </div>
      <style jsx>{`
        .bug-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
      `}</style>
    </div>
  );
}
