import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation(),
    search = location.state?.search,
    API_URL = process.env.REACT_APP_API_URL,
    API_KEY = process.env.REACT_APP_API_KEY,

    [results, setResults] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/svc/search/v2/articlesearch.json?q=${search}&api-key=${API_KEY}`)
      .then(response => setResults(response.data.response.docs))
      .catch(error => console.log(error))
  }, [])

  return (
    <>

    </>
  )
}

export default SearchResults;