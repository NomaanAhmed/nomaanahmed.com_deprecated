import React, { Fragment } from 'react'
import Tooltip from "react-simple-tooltip"

export default ({ title = 'subheader', text = '' }) => {
  return (
    <Fragment>
            <h1 class='info'>{title}</h1>
            <h4>
                <span class="superscript">
                    <Tooltip background='rgba(37, 48, 60, 0.95)' border='#25303B' 
                        fontSize='4' content='Hover for more details.'
                        fadeDuration='500' placement='right' radius='5'>
                        {'\u24D8'}
                    </Tooltip>
                </span>
            </h4>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </Fragment>
  )
}