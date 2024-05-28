import { useState, useEffect } from "react";

import "./App.css";
import StarRating from "./components/starRating";

function App() {
  const [count, setCount] = useState(0);
  const [beers, setBeers] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => setError(error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="mt-8">
        {error && <p>Error fetching data: {error.message}</p>}
        <input
          type="text"
          className="outline-none bg-gray-500 rounded-lg text-white flex items-center m-auto p-3 border-none"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className=" flex flex-wrap m-auto  justify-around ">
          {filteredBeers.map((beer) => (
            <div
              key={beer.id}
              data-aos="fade-up"
              className="w-72 flex items-center flex-col  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border m-3 rounded-xl  p-3"
            >
              <div>
                <img
                  src={beer.image}
                  className="w-60 rounded-xl h-56"
                  alt="Image not Available"
                />
              </div>
              <div>
                <div className="grid grid-flow-col gap-4 p-2 justify-between">
                  <span className="text-xs font-semibold">{beer.name}</span>
                </div>
                <div className="m-2 my-2">
                  <span className="font-semibold text-lg flex-row flex justify-between text-yellow-300 ">
                    <StarRating rating={beer.rating.average} />{" "}
                    <span className="text-yellow-500">
                      {" "}
                      {beer.rating.reviews}
                    </span>
                  </span>
                  <p className="font-semibold text-gray-800 text-sm">
                    <span className="text-xs font-semibold">{beer.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
