import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  width: max-content;
  margin: 0 auto;
  padding-top: 16px; 
`,

  Input = styled.input`
    width: 70vw;
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

  Home = () => {
    const [search, setSearch] = useState(""),

      handleChange = e => setSearch(e.target.value);

    return (
      <Form>
        <Input
          value={search}
          onChange={e => handleChange(e)}
          type="text"
          placeholder="Search" />

        {search
          ? <Button to={"/search-results"} search={search}>Search</Button>
          : <Span>Search</Span>
        }
      </Form>
    )
  }

export default Home;