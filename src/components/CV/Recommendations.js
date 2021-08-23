import React from 'react'
import { Card, Col, Divider, Row, Avatar } from 'antd'

const Recommendations = ({ recommendations }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Course Representatives and Lecturers</h3>
    <Card>
      {recommendations.map((rec, i) => (
        <Row type="flex" justify="space-around" key={i} className="text-lg">
          <Col span={5}>
            <h3 align = "center" className="mb-0">{rec.name}</h3>
            <p>{rec.jobTitle}</p>
            <Avatar
              icon={<img src={`/people/${rec.photo}`} />}
              alt={rec.name}
              size={100}
            />
          </Col>
          <Col span={5}>
            <h3 align = "center" className="mb-0">{rec.name}</h3>
            <p>{rec.jobTitle}</p>
            <Avatar
              icon={<img src={`/people/${rec.photo}`} />}
              alt={rec.name}
              size={100}
            />
          </Col>
          <Col span={5}>
            <h3 align = "center" className="mb-0">{rec.name}</h3>
            <p>{rec.jobTitle}</p>
            <Avatar
              icon={<img src={`/people/${rec.photo}`} />}
              alt={rec.name}
              size={100}
            />
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Recommendations
