import { useState } from 'react';

export default function Bug({ bug }) {
  const [caught, setCaught] = useState(false);

  function handleChange() {
    setCaught(true);
  }

  return (
    <div className="bug-info">
      <ul>
        <li>
          <h2>{bug.name['name-USen']}</h2>
        </li>
        <li>
          <span>Caught</span>
          <input type="checkbox" checked={caught} onChange={handleChange} />
        </li>
        <li className="bug-img">
          <img src={bug.image_uri}></img>
        </li>
        <li>
          <span>Month </span>
          {bug.availability['month-northern']}
        </li>
        <li>
          <span>Time </span>
          {bug.availability['time']}
        </li>
        <li>
          <span>Rarity </span>
          {bug.availability['rarity']}
        </li>
        <li>
          <span>Price </span>
          {bug.price}
        </li>
      </ul>

      <style jsx>{`
        li {
          list-style: none;
        }

        img {
          width: 20%;
          height: 20%;
          object-fit: contain;
        }

        span {
          font-weight: 500;
          text-transform: uppercase;
        }

        h2 {
          margin-bottom: 5px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
