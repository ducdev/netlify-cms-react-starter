import React from 'react'
import styled from 'styled-components'
import { Section, Container } from './common'

const Header = styled(Section)`
  line-height: 1em;
  color: var(--col1);
  background: var(--col1);
  color: white;
  h2{
    font-weight: 100;
  }
`

const PageHeader = (props) => (
  <Header>
    <Container>
      <h1>{props.title}</h1>
      {props.subTitle ? <h2>{props.subTitle}</h2> : ''}
    </Container>
  </Header>
)

PageHeader.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string
}

export default PageHeader
