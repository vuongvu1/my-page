import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer, Loading } from "components";
const Home = lazy(() => import("pages/home"));
const About = lazy(() => import("pages/about"));
const Playground = lazy(() => import("pages/playground"));
const Error = lazy(() => import("pages/error"));

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/playground" exact component={Playground} />
            <Route path="*" component={Error} />
          </Suspense>
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;
