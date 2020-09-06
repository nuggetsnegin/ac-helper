import axios from 'axios';
import { useState, useEffect } from 'react';

export default function BugSearch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //returning a promise
    axios.get('http://acnhapi.com/v1/bugs/').then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);
  console.log(data);

  const test = () => {
    Object.keys(data).map((key) => {
      console.log(data[key].price);
    });
  };
  test();
  return (
    <div>
      {Object.keys(data).map((key) => {
        return (
          <ul key={key}>
            <li>{data[key].name['name-USen']}</li>
            <li>{data[key].price}</li>
            <li>
              <img src={data[key].image_uri}></img>
            </li>
            <li>{data[key].availability['time']}</li>
            <li>{data[key].availability['rarity']}</li>
          </ul>
        );
      })}
    </div>
  );
}
