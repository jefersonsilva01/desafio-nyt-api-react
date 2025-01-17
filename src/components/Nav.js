import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 30%;
`,

  Button = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  MenuList = styled.ul`
    display: flex;
    list-style: none;
    width: 35%;
    margin: 32px auto 16px;
    justify-content: space-around;
  `,

  ListItem = styled.li`
    font-size: 1.1em;
    font-weight: 500;

    &:hover {
      color: #d00;
      cursor: pointer;
    }
  `,

  ItemLink = styled(Link)`
    text-decoration: none;
    color: unset;
  `,

  Nav = () => {
    return (
      <nav>
        <Button to={"/"}>
          <Image src="./assets/nytimes-logo.png" alt="logo" />
        </Button>
        <MenuList>
          <ListItem>
            <ItemLink to={"/trends"}>
              Trends
            </ItemLink>
          </ListItem>

          <ListItem>
            <ItemLink to={"/shared"}>
              Shared
            </ItemLink>
          </ListItem>

          <ListItem>
            <ItemLink to={"/about"}>
              About
            </ItemLink>
          </ListItem>
        </MenuList>
      </nav>
    )
  }

export default Nav;