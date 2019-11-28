import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  flex-grow: 1;
  flex-basis: 0;
  height: 100%;
  text-decoration: none;
  color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.secondary};
  background: ${props =>
    props.active ? props.theme.colors.secondary : props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
`;

export default function ButtonNavigation() {
  const location = useLocation();

  return (
    <Container>
      <NavLink to="/" active={"/" === location.pathname}>
        Country List
      </NavLink>
      <NavLink to="/new" active={"/new" === location.pathname}>
        Add
      </NavLink>
    </Container>
  );
}
