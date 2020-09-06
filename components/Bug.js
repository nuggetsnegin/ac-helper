export default function Bug({ data }) {
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
