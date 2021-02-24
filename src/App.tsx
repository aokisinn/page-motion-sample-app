import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import None from "./pages/None";
import Left from "./pages/Left";
import Right from "./pages/Right";
import Under from "./pages/Under";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <main role="main" className="pt-5">
          <Switch>
            <Route exact path="/" component={None} />
            <Route exact path="/left" component={Left} />
            <Route exact path="/right" component={Right} />
            <Route exact path="/under" component={Under} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
