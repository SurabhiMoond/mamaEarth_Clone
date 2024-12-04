import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = (jsonFilePath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(jsonFilePath);
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jsonFilePath]);

  return { data, loading, error };
};
