import React from 'react';
import { Router, Route } from 'react-router';

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}
function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

const Home = (location, cb) => {
  System.import('./Home/Home').then(loadRoute(cb)).catch(errorLoading);

};
const PointRainfall = (location, cb) => {
  System.import('./Monitor/PointRainfall/PointRainfall').then(loadRoute(cb)).catch(errorLoading);
};

const Routes = ({history}) =>
  <Router history={history}>
    <div>
      <Route path="/" getComponent={Home} />
      <Route path="/monitor/pointRainfall" getComponent={PointRainfall} />
    </div>
  </Router>;

// import App from './App';
// import PointRainfall from './Monitor/PointRainfall/PointRainfall';
// const Routes = () =>
//   <Router>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route path="/monitor/pointRainfall" component={PointRainfall} />
//     </div>
//
//   </Router>;

export default Routes;
