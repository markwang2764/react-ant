import React from 'react'
import {Row, Col} from 'antd'
import PCHeader from './PC_header'
import PCNewsContainer from './PC_newscontainer'
import './pc.less'

export default class PCIndex extends React.Component {
  render() {
    return(
      <div>
        <PCHeader />
        <PCNewsContainer />
      </div>
    )
  }
}
