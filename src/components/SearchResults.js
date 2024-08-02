import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Home from "./Home";

const NewsLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: #000;
    margin: 16px auto;
    padding: 16px;
    transition: all 0.3s linear;
    width: 80%;

    &:hover {
      background-color: #fef;
      scale: 1.1;
    }
  `,

  SearchResults = () => {
    const location = useLocation(),
      [results, setResults] = useState(null),

      API_URL = process.env.REACT_APP_API_URL,
      API_KEY = process.env.REACT_APP_API_KEY,

      handleReload = () => window.location.reload();

    useEffect(() => {
      axios.get(`${API_URL}/svc/search/v2/articlesearch.json?q=${location.state?.search}&api-key=${API_KEY}`)
        .then(response => setResults(response.data.response.docs))
        .catch(error => console.log(error));
    }, []);

    if (results === null) return;

    return (
      <div id="news" style={{ paddingBottom: "132px" }}>
        {results.length > 0
          ? results.map((news, index) => {
            return (
              <NewsLink key={index} to={news.web_url} target="_blank">
                <div className="info"
                  style={
                    {
                      marginLeft: "16px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly"
                    }
                  }>
                  <h3>{news.headline.main}</h3>
                  <p>{news.abstract}</p>
                  <span>{news.byline.original}</span>
                </div>
              </NewsLink>
            )
          })
          :
          <>
            <h1 style={{ textAlign: "center" }}>
              Not found results for your search
            </h1>
            <Home onClick={handleReload} />
          </>
        }
      </div>
    )
  }

export default SearchResults;