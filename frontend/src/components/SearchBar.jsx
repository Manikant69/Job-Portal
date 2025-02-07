import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function SearchBar() {
    const [searchPlaceholder, setSearchPlaceholder] = useState('Frontend Developer');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
  
    useEffect(() => {
      const placeholders = ['Frontend Developer', 'UI/UX Designer', 'Data Analyst', 'Product Manager'];
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % placeholders.length;
        setSearchPlaceholder(placeholders[currentIndex]);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        console.log(query);
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
  
    return (
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder={`Search for ${searchPlaceholder}...`}
          className="w-full px-6 py-2 rounded-full border-2 border-transparent focus:border-orange-400 focus:outline-none shadow-lg pr-12"
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
        <button className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
          isSearchFocused ? 'bg-orange-500 hover:bg-orange-600' : 'bg-purple-600 hover:bg-purple-700'
        }`}>
          <Search onClick={searchJobHandler} className="h-4 w-4 text-white" />
        </button>
      </div>
    );
}

export default SearchBar;