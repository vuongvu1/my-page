import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, About } from "pages";
import { Header } from "atoms";

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
        </Switch>
      </>
    </Router>
  );
};

export default App;
