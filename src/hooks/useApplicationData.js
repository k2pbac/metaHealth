import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [clinics, setClinics] = useState();

  useEffect(() => {
    axios.get(`/api/clinics`).then((clinics) => {
      setClinics({ ...clinics.data });
    });
  }, [clinics]);

  return {
    clinics,
  };
};

export default useApplicationData;
