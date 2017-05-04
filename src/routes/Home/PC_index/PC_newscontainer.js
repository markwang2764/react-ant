import React from 'react'
import {Row, Col, Tabs, Carousel} from 'antd'
const TabPane = Tabs.TabPane
import PCNewsBlock from './PC_news_block'
import PCNewsImageBlock from './PC_news_image_block'

export default class PCNewsContainer extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
    }
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div>
                    <img src="../../../../static/images/carousel_1.jpg"/>
                  </div>
                  <div>
                    <img src="../../../../static/images/carousel_2.jpg"/>
                  </div>
                  <div>
                    <img src="../../../../static/images/carousel_3.jpg"/>
                  </div>
                  <div>
                    <img src="../../../../static/images/carousel_4.jpg"/>
                  </div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type='guoji' width="400px" cartTitle="国际头条" width="400px" imageWidth='112px' />
              <PCNewsImageBlock count={6} type='yule' width="400px" cartTitle="娱乐头条" width="400px" imageWidth='112px' />
            </div>
            <Tabs className="tabs_news">
              <TabPane tab='新闻' key="1">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
              <TabPane tab='国际' key="2">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
