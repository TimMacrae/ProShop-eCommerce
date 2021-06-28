import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="uk-padding-small dashboard">
      <h3 className="dashboard-title">
        <Link to="/dashboard">Dashboard</Link>
      </h3>
      <Link to="/dashboard/user-profile">Profile</Link>
    </div>
  );
}
