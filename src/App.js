import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./themes/default";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonNavigation from "./components/ButtonNavigation";

import styled from "@emotion/styled";
import Title from "./components/Title";
import CountryList from "./components/CountryList";
import NewCountry from "./pages/NewCountry";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Header = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
`;

const Footer = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
`;


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>

        <Container>
          <Header>
            <Title>Some Africa</Title>
          </Header>
          <Main>
            <Switch>
              <Route exact path="/">
                <CountryList />
              </Route>
              <Route path="/new">
                <NewCountry />
              </Route>
              <Route>
                <div>Not found</div>
              </Route>
            </Switch>
          </Main>
          <Footer>
            <ButtonNavigation />
          </Footer>
        </Container>

      </Router>
    </ThemeProvider>
  );
}

export default App;
