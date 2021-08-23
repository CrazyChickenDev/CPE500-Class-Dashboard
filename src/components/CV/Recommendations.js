import React from 'react'
import { Card, Col, Row, Avatar } from 'antd'

const Recommendations = ({ recommendations }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Course Representatives and Lecturers</h3>
    <Card>
      {recommendations.map((rec, i) => (
        <Row type="flex" justify="space-around" key={i} className="text-lg">
          <Col span={5}>
            <h3 className="mb-0">{rec.name}</h3>
            <p align = "center">{rec.jobTitle}</p>
            <Avatar align = "center"
              icon={<img src={`/people/${rec.photo}`} />}
              alt={rec.name}
              size={50}
            />
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Recommendations
