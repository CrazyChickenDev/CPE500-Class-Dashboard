import React from 'react'
import { Layout } from 'antd'
import Experience from './Experience'
import PitchLine from './PitchLine'
import Volunteer from './Volunteer'
import Education from './Education'
import Experiments from './Experiments'
import Recommendations from './Recommendations'
import Header from './Header'
import Sidebar from '../Sidebar'
import TopTech from './TopTech'
import SkillList from './SkillList'
import Footer from './Footer'
import data from './data.json'

const { Content } = Layout
const CV = () => (
  <>
    <Sidebar hideMobile={true} />
    <Content className="m-5">
      {data.experience && <Experience experience={data.experience} />}
      {data.volunteer && <Volunteer volunteer={data.volunteer} />}
      {data.recommendations && <Recommendations recommendations={data.recommendations} />}
      {data.header && <Header header={data.header} />}
      {data.footer && <Footer footer={data.footer} />}
    </Content>
  </>
)

export default CV
