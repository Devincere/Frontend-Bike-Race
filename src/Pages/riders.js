import React, { useEffect, useState } from "react";
import { API_ROOT } from "../service";

const Riders = () => {
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    fetchRiders();
  }, []);

  const fetchRiders = async () => {
    const res = await fetch(`${API_ROOT}/riders`);

    const data = await res.json();

    setRiders(data);
  };

  return (
    <>
      <div className="container-fluid riders-img-box">
        <div className="row">
          <div className="col">
            <img className="riders-img" src="/img/riders.jpeg" alt="riders" />
          </div>
        </div>
      </div>
      <div className="container-fluid riders-page">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>Riders</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">City of orgin</th>
                  <th scope="col">State of orgin</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((r) => (
                  <tr key={r.id}>
                    <th scope="row">{r.id}</th>
                    <td>{r.firstname}</td>
                    <td>{r.lastname}</td>
                    <td>{r.city}</td>
                    <td>{r.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Riders;
