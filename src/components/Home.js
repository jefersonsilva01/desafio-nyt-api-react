import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import InputSearch from "./InputSerach";

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

  Home = (props) => {
    const [lastNews, setLastNews] = useState(null),
      API_URL = process.env.REACT_APP_API_URL,
      API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
      axios.get(`${API_URL}/svc/news/v3/content/all/all.json?api-key=${API_KEY}`)
        .then(response => setLastNews(response.data.results))
        .catch(error => console.log(error))
    }, []);

    return (
      <>
        <InputSearch {...props} />
        <hr style={{ border: "1.5px solid #000" }} />
        <div id="news" style={{ paddingBottom: "132px" }}>
          {lastNews
            ? lastNews.map((news, index) => {
              return (
                <NewsLink key={index} to={news.url} target="_blank">
                  {
                    news.multimedia && news.multimedia.length > 0
                    && (<img style={{ width: "120px" }} src={news.multimedia[0].url} alt="cover" />)
                  }
                  <div className="info"
                    style={
                      {
                        marginLeft: "16px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly"
                      }
                    }>
                    <h3>{news.title}</h3>
                    <p>{news.abstract}</p>
                    <span>{news.byline}</span>
                  </div>
                </NewsLink>
              )
            })
            : ""
          }
        </div>
      </>
    )
  }

export default Home;