import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import Navbar from "./Navbar"
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore()

const App = () => (
      <Provider store={store}>
        <Router>
          <div className="onboarding">
            <Navbar />
            <Main />
          </div>
        </Router>
      </Provider>
    );

export default App;
