import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>Well this is awkward...</h1>
      <h1>
        Nothing to see here (yet?), I'd say its time to head{" "}
        <Link to="/">home.</Link>
      </h1>
    </div>
  );
};

export default NotFound;
