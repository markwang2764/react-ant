import React from 'react'
import {Row, Col} from 'antd'


export default class PCNewsDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      newsItem: ''
    }
  }
  componentDidMount(){
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    });
  }
  createMarkUp(){
    return {__html: this.state.newsItem.pagecontent}
  }
  render() {
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div className="articleContainer"
            dangerouslySetInnerHTML={this.createMarkUp()}></div>
          </Col>
          <Col span={6}></Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
