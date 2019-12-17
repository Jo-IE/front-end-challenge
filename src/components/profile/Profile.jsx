import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'

import The_Giant from 'images/The_Giant.jpg'


const Changelog = () => (
  <Container>
    <Segment>
      <Image src={The_Giant} size='large' centered style={{ paddingTop: '30px' }} />
    </Segment>
  </Container>
)

export default withRouter(Changelog)
