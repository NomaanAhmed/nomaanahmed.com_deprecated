import React, { Fragment } from 'react'
import SkillBar from './skillbar'
import Tooltip from "react-simple-tooltip"

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
        {skills.map(skill => (
          <Tooltip background='rgba(37, 48, 60, 0.95)' border='#25303B' 
             fontSize='2' content={skill.details}
            fadeDuration='500' placement='right' radius='5'>            
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          </Tooltip>
      ))}
    </Fragment>
  )
}