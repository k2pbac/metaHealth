import React, { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [clinics, setClinics] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/clinics").then((response) => {
      setClinics(response.data);
    });
  }, []);

  return {
    clinics,
  };
};

export default useApplicationData;
