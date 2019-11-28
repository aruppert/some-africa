import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./themes/default";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonNavigation from "./components/ButtonNavigation";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <div>App</div>
          </Route>
          <Route path="/new">
            <div>New</div>
          </Route>
          <Route>
            <div>Not found</div>
          </Route>
        </Switch>
        <ButtonNavigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;
