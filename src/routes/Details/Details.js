import React from 'react';
import PCNewsDetails from './PC_details/PC_news_details'

export default class Details extends React.Component {
  render(){
    console.log(this.props.params.uniquekey)
    return (
      <div>
        <PCNewsDetails uniquekey={this.props.params.uniquekey} />
      </div>
    )
  }
}
