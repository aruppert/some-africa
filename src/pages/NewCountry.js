import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.h3`
  font-size: 1em;
`;

const Input = styled.input`
  width: 90vw;
  height: 40px;
  font-size: 0.7em;
  align-items: center;
`;

const Button = styled.button`
  height: 40px;
  font-size: 1em;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  margin-top: 15px;
`;

export default function NewCountry() {
  const [country, setCountry] = React.useState("");
  const [language, setLanguage] = React.useState("");

  async function handleSubmit(event) {
    // e.preventDefault();
    await fetch("http://localhost:4444/states", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: country, lang: language })
    });
    setCountry("");
    setLanguage("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Country visited</Title>
      <Input
        type="text"
        placeholder="Enter country name here ..."
        value={country}
        onChange={event => setCountry(event.target.value)}
      />
      <Title>Which language did you speak there</Title>
      <Input
        type="text"
        placeholder="Enter main language here ..."
        value={language}
        onChange={event => setLanguage(event.target.value)}
      />
      <Button>Been there, done that</Button>
    </Form>
  );
}
