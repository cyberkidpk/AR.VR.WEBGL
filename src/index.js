import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  HashRouter,
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const PortfolioARVRLayoutLazy = React.lazy(() => import('./app-layouts/Protfolio.AR.VR.Layout'));

ReactDOM.render(
  <BrowserRouter>
    <HashRouter>
      <Route path="/AR.VR.WEBGL/" element={<App />} />
      <Route path="/AR.VR.WEBGL/portfolio" element={<Suspense fallback={<div>Loading...</div>}><PortfolioARVRLayoutLazy /></Suspense>} />
    </HashRouter>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
