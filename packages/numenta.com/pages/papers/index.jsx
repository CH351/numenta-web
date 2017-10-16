// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import capitalize from 'lodash/capitalize'
import Helmet from 'react-helmet'
import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Section from 'numenta-web-shared-components/lib/Section'
import {sortOrderAscend} from 'numenta-web-shared-utils/lib/universal'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import styles from './index.css'

const title = 'Research Papers'


/**
 * Research Papers page and MainSection wrapper - React view component.
 */
const PapersPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^papers\/.*\.md/)))
  const items = posts.sort(sortOrderAscend).map(({data, file, path}) => {
    const categoryNice = capitalize(data.category.replace(/-/, ' '))
    const url = (data.type === 'link') ? data.link : path
    let media = null
    if (data.image) {
      media = (
        <ImageLink to={url}>
          <Image
            alt={data.title}
            border={true}
            respond="mw"
            shadow={true}
            src={`${path}${data.image}`}
          />
        </ImageLink>
      )
    }
    return (
      <ListItem key={file.stem}>
        <div className={styles.paper}>
          <div className={styles.columns}>
            <div className={styles.aside}>
              {media}
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <TextLink to={url}>
                  {data.title}
                </TextLink>
              </div>
              <div className={styles.meta}>
                <Subtle>
                  {data.author}
                  <Spacer />
                  {categoryNice}
                  <br />
                  {data.org}
                  <Spacer />
                  {data.date}
                </Subtle>
              </div>
              <Paragraph>
                {data.brief}
                <br />
                <span className={styles.remarks}>
                  {data.remarks}
                </span>
              </Paragraph>
            </div>
          </div>
        </div>
      </ListItem>
    )
  })

  return (
    <article className={styles.papers}>
      <Helmet title={title}>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Research Papers" />
      </Helmet>
      <Section headline={true} open={true} title={title}>
        <ListOrder copy={false}>
          {items}
        </ListOrder>
      </Section>
    </article>
  )
}

PapersPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PapersPage
