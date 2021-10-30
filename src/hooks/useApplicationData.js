import React, { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [appState, setAppState] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get("/api/clinics"),
      axios.get("/api/patients"),
      axios.get("/api/employees"),
    ]).then((all) => {
      const [first, second, third] = all;
      setAppState({
        clinics: first.data,
        patients: second.data,
        employee: third.data,
      });
    });
  }, []);

  return {
    appState,
  };
};

export default useApplicationData;
