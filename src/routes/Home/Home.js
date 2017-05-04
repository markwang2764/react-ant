import React from 'react';
import PCIndex from './PC_index/index'
import MBIndex from './MB_index/index'
import MediaQuery from 'react-responsive'
class Home extends React.Component {
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
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
            <PCIndex />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
            <MBIndex />
        </MediaQuery>
      </div>
    )
  }
}

export default Home;
