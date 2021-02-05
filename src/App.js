import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { data } from "./data/data";
import LoginPage from "./pages/LoginPage";
import "./style.css";
import Header from "./components/header/Header";
import NewsfeedPage from "./pages/Newsfeed";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
  const [account, setAccount] = useState(data.account);

  function logUserIn() {
    setAccount({
      ...account,
      loggedIn: true,
    });
  }

  return (
    <Router>
      <Switch>
        {!account.loggedIn ? (
          <Route path="/">
            <LoginPage logUserIn={logUserIn} />
          </Route>
        ) : (
          <>
            <Route exact path="/">
              <Header />
              <NewsfeedPage />
            </Route>
            <Route path="/:userId">
              <h1>User page</h1>
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
