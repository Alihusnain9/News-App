import React from "react";
import { Link } from "react-router-dom";

export default function newsitem(props) {
  let { title, description, url, href, author, date } = props;
  return (
    <>
      <div className="my-2">
        <div className="card">
          <img
            src={url}
            className="card-img-top"
            style={{ height: "13rem", objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <Link to={href} target="_blank" className="btn btn-primary btn-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
