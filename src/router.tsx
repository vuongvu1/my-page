import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, About, Error } from "pages";
import { Header } from "components";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
