import React, { useState, useEffect } from "react";

function GoogleCallback() {
  const [data, setData] = useState({});

  // On page load, we take "search" parameters
  // and proxy them to /api/auth/callback on our Laravel API
  useEffect(() => {
    fetch(`http://api.lenjelenanmadura.id/api/auth/signup/callback`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
}

export default GoogleCallback;
