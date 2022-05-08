import React from "react";

export default function Content({
  startDate,
  imageUrl,
  title,
  location,
  googleMapsUrl,
  endDate,
  description,
  key,
}) {
  return (
    <div>
      <section className="travelPoint">
        <img className="travelPoint--img" src={imageUrl} alt="" />
        <div className="travelPoint--info">
          <div className="travelPoint--location">
            <p>
              <span className="travelPoint--locimg">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              {location}
            </p>
            <a href={googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className="travelPoint--text">
            <h1>{title}</h1>
            <p className="travelPoint--date">{`${startDate} - ${endDate}`}</p>
            <p className="travelPoint--description">{description}</p>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}
