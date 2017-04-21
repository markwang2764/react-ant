import React from 'react';
import {Link} from 'react-router';
import App from '../../App';
const PointRainfall = ({ location }) => {
  return (
    <App>
      <PointRainfallContainer location={location} />
    </App>
  );
};
class PointRainfallContainer extends React.Component {
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
      <div><Link to="/">PointRainfall</Link></div>
    )
  }
}

export default PointRainfall;
