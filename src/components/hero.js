import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'
import Tooltip from "react-simple-tooltip"

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 525;
  font-size: 3rem;
  margin: 10px 60px;
  margin-bottom: 5px;
  margin-right: 0px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

class Hero extends React.Component {
  render() {
    const { title, className } = this.props

    return (
      <HeroContainer className={className}>
        <TitleContainer>
          <Tooltip arrow='20' background='rgba(37, 48, 60, 0.74)' border='#25303B' 
            fontFamily='cursive' fontSize='6' content={'(n\u014dm\u2212\u00E4\u00E4n)'}
            fadeDuration='500' placement='right' radius='5'>
            <HeroTitle>{title}</HeroTitle>
          </Tooltip>
        </TitleContainer>
      </HeroContainer>
    )
  }
}
export default styled(Hero)`
  
  ${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 70vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`