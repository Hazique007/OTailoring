import { useState, createContext } from "react";
const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [bg, setBg] = useState("Home");
  const [track, setTrack] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        isSearch,
        setIsSearch,
        bg,
        setBg,
        track,
        setTrack,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
export default SearchContextProvider;
