import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4px;
  padding: 2px;
  border-radius: 20px;
`;

const Map = styled.img`
  height: 120px;
  width: 120px;
`;

const Flag = styled.img`
  height: 120px;
`;

export default function CountryCard({ map, name, lang, flag }) {
  return (
    <Card>
      <div>
        <Map src={map} alt="map" />
      </div>
      <div>
        {name} - {lang}
      </div>
      <div>
        <Flag src={flag} alt="flag" />
      </div>
    </Card>
  );
}
