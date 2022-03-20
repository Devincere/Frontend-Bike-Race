import React from "react";
import Timer from "../Components/timer/timer";

const Home = () => (
  <>
    <div className="container-fluid" id="home-header-bg">
      <div className="row justify-content-center">
        <div className="col-md-5 col-sm-9 text-center">
          <div className="header-content-wrap">
            <h1 className="title-home">Hell's Mountains Race</h1>
            <div className="timer-box">
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid" id="home-about">
      <div className="row justify-content-center box-about">
        <div className="col-lg-6 col-sm-12">
          <img
            src="/img/image-home-1.jpeg"
            alt="Image1"
            className="image-about"
          />
        </div>
        <div className="col-lg-6 col-sm-12 text-center align-self-center">
          <h3>About</h3>
          <p>
            The Hell's Mountains Race is back ! <br />
            We are a notorious bike race event known worldwide for his track.
          </p>
          <a className="btn btn-danger" href="/about" role="button">
            Know more
          </a>
        </div>
      </div>
    </div>
    <div className="container-fluid" id="home-preparation">
      <div className="row box-prepare">
        <div className="col-lg-6 col-sm-12 text-center align-self-center">
          <h3>Prepare yourself </h3>
          <p>
            Want to prepare for the event ? <br />
            Then have a look to this video. This will give you some tips to get
            a good preparation.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <iframe
            className="prepare-video"
            height="247px"
            src="https://www.youtube.com/embed/4C72fvk9jH8"
            title="YouTube video player"
          />
        </div>
      </div>
    </div>
  </>
);

export default Home;
