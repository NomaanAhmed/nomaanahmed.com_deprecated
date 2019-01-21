import React, { Fragment } from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import Section from '../components/section'

export default ({ title = 'Education', text = '' }) => {
  return (
    <Fragment>
      <Section title='Education & Related Courses'/>
        <Row>
        <Col xs={4} sm={4}>
            <div>
              <img
                className='section-icon'
                src='/../images/concordia.png'
                alt='Concordia Logo'
              />
              <span className='heading2'>Concordia University</span>
              <span className='heading3'>Bachelor's of Engineering</span>
              <span className='heading4'>Major Software Engineering</span>
            </div>
        </Col>
        <Col xs={4} sm={4}>
            <div style={{textAlign: 'right'}}>
              <span className='heading3'>Expected: May 2019</span>
            </div>
        </Col>
      </Row>
      <Row>
        <p className='heading4'>Currently enrolled at the Gina Cody School of
          Engineering & Computer Science at Concordia University in Montreal, Quebec.</p>
      </Row>
      <Row>
          <ul style={{marginLeft: '15%', marginRight: '5%'}}>
            <li>Big Data Analytics</li>
            <li>Artificial Intelligence</li>
            <li>Computer Graphics</li>
            <li>Web Applications</li>
            <li>System Hardware</li>
            <li>Operating Systems</li>
          </ul>
          <ul>
            <li>Principles of Programming Languages</li>
            <li >Formal Methods for Software Engineering</li>
            <li>Software Process</li>
            <li>Control Systems Engineering</li>
            <li>Discrete Math for Computer Science</li>
            <li>Data Structures & Algorithms</li>
          </ul>
      </Row>
  </Fragment>
  )
}