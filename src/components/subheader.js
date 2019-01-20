import React, { Fragment } from 'react'
import Tooltip from '../components/tooltip'

export default ({ title = 'subheader'}) => {
  return (
    <Fragment>
        <h1 class='info'>{title}</h1>
        <h4>
            <span class="superscript">
                <Tooltip message={'Hover for more details.'} position={'top'} styling={'Default'}>
                    {'\u24D8'}
                </Tooltip>
            </span>
        </h4>
    </Fragment>
  )
}                

