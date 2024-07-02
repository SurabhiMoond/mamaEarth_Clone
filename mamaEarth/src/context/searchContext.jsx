import { createContext, useState, useEffect, useRef } from "react";
import { jsonUrls } from "../allJsonUrl/jsonUrls";
import { useFetchData } from "../customHook/useFatchData";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const timeRef = useRef(null);
  const { data, loading, error } = useFetchData(jsonUrls.products);

  useEffect(() => {
    if (data) {
      setAllProducts(data);
      setSearchResults(data);
    }
  }, [data]);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      if (!searchTerm.trim()) {
        setSearchResults(allProducts);
        setIsSearching(false);
        return;
      }

      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(true);
    }, 1000);

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, [searchTerm, allProducts]);

  const updateSearchTerm = (newTerm) => {
    setSearchTerm(newTerm);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm: updateSearchTerm,
        searchResults,
        loading,
        error,
        isSearching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
