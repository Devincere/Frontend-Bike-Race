import React, { useEffect, useState } from "react";

const Riders = () => {
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    fetchRiders();
  }, []);

  const fetchRiders = async () => {
    const res = await fetch(`https://backend-bike-race.herokuapp.com/riders`);

    const data = await res.json();

    setRiders(data);
  };

  return (
    <>
      <div>
        {riders.map((r) => (
          <div key={r.id}>
            <p>{r.firstname}</p>
            <p>{r.lastname}</p>
            <p>{r.city}</p>
            <p>{r.state}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Riders;
