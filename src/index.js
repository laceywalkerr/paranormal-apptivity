import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Para from './components/Para';

ReactDOM.render(
  <Router>
    <Para />
  </Router>,
  document.getElementById('root')
);
