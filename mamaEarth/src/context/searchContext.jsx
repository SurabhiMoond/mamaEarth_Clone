import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchValue, allProducts) => {
    setSearchTerm(searchValue);
    const filteredResults = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, handleSearch, searchResults }}
    >
      {children}
    </SearchContext.Provider>
  );
};
