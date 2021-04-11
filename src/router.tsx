import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header, Footer, Loading } from "components";
const HomePage = lazy(() => import("pages/home"));
const ContactPage = lazy(() => import("pages/contact"));
const PlaygroundPage = lazy(() => import("pages/playground"));
const ErrorPage = lazy(() => import("pages/error"));

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/playground" exact component={PlaygroundPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/404" component={ErrorPage} />
            <Redirect to="/404" />
          </Switch>
        </Suspense>
        <Footer />
      </>
    </Router>
  );
};

export default App;
