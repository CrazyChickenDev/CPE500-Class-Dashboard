import React from 'react'
import { Layout } from 'antd'
import Experience from './Experience'
import Recommendations from './Recommendations'
import Header from './Header'
import Sidebar from '../Sidebar'
import Footer from './Footer'
import data from './data.json'

const { Content } = Layout
const CV = () => (
  <>
    <Sidebar hideMobile={true} />
    <Content className="m-5">
      {data.experience && <Experience experience={data.experience} />}
      {data.recommendations && <Recommendations recommendations={data.recommendations} />}
      {data.header && <Header header={data.header} />}
      {data.footer && <Footer footer={data.footer} />}
    </Content>
  </>
)

export default CV
