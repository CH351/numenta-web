// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import {getConfig, stampUrl} from 'numenta-web-shared-utils/shared'
import Helmet from 'react-helmet'
import Pingdom from 'numenta-web-shared-components/Pingdom'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import {version} from './package'


/**
 * Main HTML Document Site wrapper - React view component.
 */
const HtmlDocument = ({body}) => {
  const {analytics} = getConfig()
  const {htmlAttributes, link, meta, title} = Helmet.rewind()
  const attrs = htmlAttributes.toComponent()

  // Gatsby provides HTML5 !doctype at render-time
  return (
    <html {...attrs}>
      <head>
        {title.toComponent()}
        {meta.toComponent()}
        {link.toComponent()}
        <Pingdom id={analytics.pingdom} />
      </head>
      <body className="body">
        <div id="react-mount" dangerouslySetInnerHTML={{__html: body}} />
        <script src={prefixLink(stampUrl('/bundle.js', version))} />
      </body>
    </html>
  )
}

HtmlDocument.propTypes = {
  body: React.PropTypes.string.isRequired,
}

export default HtmlDocument