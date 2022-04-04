import React, { useEffect } from "react";
import axios from "axios";
import info from "../info";

export default function WashStatus(data) {
  useEffect(() => {
    axios
      .post(
        info.backendUrl + "/" + data.locationID + "/start/" + data.programID
      ) 
      .then((result) => {
        console.log(result.data);
      });
  }, []);

  return (
    <div className="component status">
      <h1>Wash status</h1>
      <h2>The choosen program takes:</h2>
      <h3>8 min</h3>
    </div>
  );
}
