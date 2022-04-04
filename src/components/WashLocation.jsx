import React from "react";
export default function WashLocation(data) {
  return (
    <button
      className="btn btn-location"
      onClick={data.locationClicked}
      // Checks if wash location is available
      disabled={data.location.status !== "available" ? "on" : ""}
      value={data.location.id}
    >
      {data.location.name}
    </button>
  );
}
