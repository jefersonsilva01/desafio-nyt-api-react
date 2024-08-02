import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuList = styled.ul`
  display: flex;
  width: max-content;
  list-style: none;
`,

  ListItem = styled.li`
    font-size: 1em;
    font-weight: 500;
    color: #fff;
    margin: 0 0 0 16px;

    &:hover {
      color: #d00;
      cursor: pointer;
    }
  `,

  ItemLink = styled(Link)`
    text-decoration: none;
    color: unset;
  `,

  FooterItem = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 0 32px;
    background-color: #000;
    position: absolute;
    bottom: 0;
  `,

  Image = styled.img`
    width: 200px;
  `,

  Footer = () => {
    return (
      <FooterItem>
        <Link to={"https://developer.nytimes.com/"} target="_blank">
          <Image src="./assets/poweredby_nytimes_200c.png" alt="logo" />
        </Link>
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
      </FooterItem>
    )
  }

export default Footer;