import React from "react";
import "../style/notFound.css";

function NotFound() {
  return (
    <div className="notFound">
      Ooops! No phone was found.
      <br />
      Search by phone type, e.g. "iphone 11" or "11"
    </div>
  );
}

export default NotFound;
