import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateBlog from "./components/CreateBlog/CreateBlog";

//Redux
import { Provider } from "react-redux";
import store from "./store/store";
import SingleBlog from "./components/SingleBlog/SingleBlog";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/create" component={() => <CreateBlog />} />
            <Route exact path="/blog/:id" component={() => <SingleBlog />} />
            <Route
              exact
              path="/edit/:id"
              component={() => <CreateBlog edit />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
