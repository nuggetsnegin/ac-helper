import axios from 'axios';
import { useState, useEffect } from 'react';
import Bug from './Bug';

export default function BugSearch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //returning a promise
    axios.get('http://acnhapi.com/v1/bugs/').then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <Bug data={data} />
    </div>
  );
}
