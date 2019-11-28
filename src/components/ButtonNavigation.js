import React from "react";
import { Link } from "react-router-dom";

export default function ButtonNavigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/new">New</Link>
    </div>
  );
}
