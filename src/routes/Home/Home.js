import React from 'react';
import {Link} from 'react-router';
import App from '../App';
const Home = ({ location }) => {
  return (
    <App>
      <HomeContainer location={location} />
    </App>
  );
};
class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      // ...
      xIsNext: true,
    };
  }
  componentDidMount () {

  }
  render(){
    return (
      <div><Link to="/monitor/pointRainfall">app</Link></div>
    )
  }
}

export default Home;
