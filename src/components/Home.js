import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  width: max-content;
  margin: 0 auto;
  padding: 16px 0;  
`,

  Input = styled.input`
    width: 60vw;
    height: 36px;
    padding-left: 16px;
    border: 1.5px solid #000;
    border-radius: 4px;
    font-size: 1.3em;
    outline: none;
  `,

  Button = styled(Link)`
    margin-left: 16px;
    text-decoration: none;
    font-size: 1.3em;
    border: 1.5px solid #000;
    padding: 5px 16px;
    border-radius: 4px;
    color: #000;
    transition: 0.5s ease-in-out;

    &:hover {
      background-color: #d00;
      color: #fff;
    }
  `,

  Span = styled.span`
    margin-left: 16px;
    text-decoration: none;
    font-size: 1.3em;
    border: 1.5px solid #999;
    background-color: #ddd;
    padding: 5px 16px;
    border-radius: 4px;
    color: #999;
  `,

  NewsLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: #000;
    margin: 32px;
    padding: 8px 10%;
    transition: all 0.3s linear;

    &:hover {
      background-color: #cff;
      scale: 1.1;
    }
  `,

  Home = () => {
    const [search, setSearch] = useState(""),
      [lastNews, setLastNews] = useState(null),
      API_URL = process.env.REACT_APP_API_URL,
      API_KEY = process.env.REACT_APP_API_KEY,

      handleChange = e => setSearch(e.target.value);

    useEffect(() => {
      axios.get(`${API_URL}/svc/news/v3/content/all/all.json?api-key=${API_KEY}`)
        .then(response => setLastNews([...response.data.results]))
        .catch(error => console.log(error))
    }, [])

    console.log(lastNews);

    return (
      <>
        <Form>
          <Input
            value={search}
            onChange={e => handleChange(e)}
            type="text"
            placeholder="Search" />

          {search
            ? <Button to="/search-results" state={{ search }}>
              Search
            </Button>

            : <Span>
              Search
            </Span>
          }
        </Form>
        <hr style={{ border: "1.5px solid #000" }} />
        {lastNews
          ? lastNews.map((news, index) => {
            return (
              <NewsLink key={index} to={news.url} target="_blank">
                {
                  news.multimedia && news.multimedia.length > 0
                  && <img src={news.multimedia[1].url} alt="cover" />
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
      </>
    )
  }

export default Home;