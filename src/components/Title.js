import React from "react";
import styled from "@emotion/styled";

const H1 = styled.h1`
  margin: 10px;
  font-size: 2rem;
  text-align: center;
  font-weight: 800;
`;

export default function Title({ children }) {
  return <H1>🦍 {children} 🌍</H1>;
}
