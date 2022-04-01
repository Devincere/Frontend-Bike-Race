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
    <div className="container-fluid riders-page">
      <div className="row justify-content-center">
        <div className="col-12 riders-img-box">
          <img className="riders-img" src="/img/riders.jpeg" alt="riders" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-sm-12 ">
          <div className="wrapper-riders text-center">
            <h2 className="riders-table-title">Riders</h2>
            <div className="table-responsive">
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
                    <td>{r.firstName}</td>
                    <td>{r.lastName}</td>
                    <td>{r.city}</td>
                    <td>{r.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riders;
