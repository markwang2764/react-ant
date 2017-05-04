import React from 'react'
import {Row, Col, Carousel} from 'antd'
import MBHeader from './MB_header'
import MBList from './MB_list'
import './mb.less'
import {Tabs} from 'antd'
const TabPane = Tabs.TabPane

export default class MBIndex extends React.Component {
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
        <MBHeader />
        <Tabs>
          <TabPane tab="头条" key='1'>
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
            <MBList count={20} type="top" />
          </TabPane>
          <TabPane tab="社会" key='2'>
            <MBList count={20} type="shehui" />
          </TabPane>
          <TabPane tab="国际" key='3'>
            <MBList count={20} type="guoji" />
          </TabPane>
          <TabPane tab="国内" key='4'>
            <MBList count={20} type="guonei" />
          </TabPane>
          <TabPane tab="娱乐" key='5'>
            <MBList count={20} type="yule" />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
