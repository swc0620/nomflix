import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// using 'style-components' you can isolate css to the component and also manage them in the same file
const List = styled.ul`
    display: flex;
`;

const StyledHeader = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${
      props => (props.current ? "#3498db" : "transparent") 
    };
    transition: border-bottom 0.5s ease-in-out;
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({location : { pathname }}) => (
    <StyledHeader>
        <List>
            <Item current={pathname === "/"}>
                <StyledLink to="/">Movies</StyledLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <StyledLink to="/tv">TV</StyledLink>
            </Item>
            <Item current={pathname === "/search"}>
                <StyledLink to="/search">Search</StyledLink>
            </Item>
        </List>
    </StyledHeader>
)

// 'withRouter' is a component that wraps other component and provides the information about the router to it
export default withRouter(Header);