import React, { useState, useEffect } from "react";

const FLICKR_KEY = "1bcf0d15671ddc9c2cf27cc4279aee6c";
const FLICKR_TAG = "mountainbike";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_KEY}&tags=${FLICKR_TAG}&safe_search=1&content_type=1&media=photos&geo_context=2&per_page=15&page=${
        page + 1
      }&format=json&nojsoncallback=1&=https://farm66.staticflickr.com/65535/51881766730_94b48c7951.jpg`
    );

    const data = await res.json();

    setPhotos([...photos, ...data.photos.photo]);
    setPage(data.photos.page);
  };

  console.log({ photos });

  return (
    <div className="gallery-content">
      <div>
        <h2 className="title-gallery">Photo Gallery</h2>
      </div>
      <div className="container">
        <div className="photos-mosaic">
          {photos.map((p) => (
            <div key={p.id} className="card-photos">
              <img
                src={`https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
                alt={p.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3 text-center">
            <button
              onClick={fetchData}
              className="btn btn-primary btn-load-more"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
