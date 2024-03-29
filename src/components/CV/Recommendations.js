import React from 'react'
import { Card, Col, Row, Avatar } from 'antd'

const Recommendations = ({ recommendations }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Course Representatives</h3>
    <Card>
      {recommendations.map((rec, i) => (
        <Row orientation="left" type="flex" justify="space-around" key={i} className="text-lg">
          <Col span={5}>
            <h3 className="mb-0">{rec.name}</h3>
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
