import React, { Fragment } from 'react'

export default ({ title = 'subheader'}) => {
  return (
    <Fragment>
        <h1 class='info'>{title}</h1>
        <h4>
            <span class="superscript">
                {/* <Tooltip background='rgba(37, 48, 60, 0.95)' border='#25303B' 
                    fontSize='4' content='Hover for more details.'
                    fadeDuration='500' placement='right' radius='5'> */}
                    {'\u24D8'}
                {/* </Tooltip> */}
            </span>
        </h4>
    </Fragment>
  )
}