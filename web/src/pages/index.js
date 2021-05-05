import React, { useRef, useState } from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Grid from '../components/grid'
import GridHeader from '../components/grid-header'
import BlogPostPreview from '../components/blog-post-preview'
import WorkItem from '../components/work-item'
import Masonry from 'react-masonry-css'
import useResize from './use-resize'

import styles from './index.module.css'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  const infoRef = useRef(null)
  const contactRef = useRef(null)
  const workRef = useRef(null)

  const infoIndentRef = useRef(null)
  const contactIndentRef = useRef(null)
  const [textIndent, setTextIndent] = useState(0)
  const [contactTextIndent, setContactTextIndent] = useState(0)

  const [isDesktop, setIsDesktop] = useState(false)

  const handleResize = () => {
    let localIsDesktop = false
    if (window.innerWidth > 768) {
      setIsDesktop(true)
      localIsDesktop = true
    } else {
      setIsDesktop(false)
      localIsDesktop = false
    }

    let infoIndent = getTextIndent(infoIndentRef, localIsDesktop)
    let contactIndent = getTextIndent(contactIndentRef, localIsDesktop)

    setTextIndent(infoIndent)
    setContactTextIndent(localIsDesktop ? contactIndent : infoIndent)
  }

  const getTextIndent = (ref, isDesktop) => {
    if (ref.current !== null) {
      let { left } = ref.current.getBoundingClientRect()
      let indent = isDesktop ? left - 20 : left - 10
      return indent > 0 ? indent : 0
    }
    return 0
  }

  useResize(handleResize)

  return (
    <Container>
      <GridHeader
        title={site.title}
        infoIndentRef={infoIndentRef}
        contactIndentRef={contactIndentRef}
        infoRef={infoRef}
        contactRef={contactRef}
        workRef={workRef}
      />
      <div>
        <Grid>
          <Grid.Item col='1 / 7' ref={infoRef}>
            <p className={styles.info} style={{ textIndent: textIndent }}>
              Mitt navn er Øyvind Ruud. Jeg jobber som strategisk rådgiver og prosjektleder for
              Knowit Experience med tverrfaglig kompetanse innen strategi, design, teknologi og
              kommunikasjon. Jeg er 35 år, oppvokst i Øvre Eiker og har bakgrunn fra high end
              fashion marketing i London. Jeg søker på stillingen som Market Communication Manager
              for Snøhetta fordi jeg ønsker å jobbe strategisk, langsiktig, tverrfaglig og målrettet
              med prosjekter jeg brenner for.
            </p>
          </Grid.Item>
          <Grid.Item col='1 / 7' ref={contactRef}>
            <p style={{ marginLeft: contactTextIndent }} className={styles.contact}>
              {' '}
              +47 40641402
              <br />
              <a href='mailto:mail@oyvindruud.com'>mail@oyvindruud.com</a>
            </p>
          </Grid.Item>
        </Grid>
        <div className={styles.masonryContainer} ref={workRef}>
          <Masonry
            breakpointCols={isDesktop ? 2 : 1}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
          >
            {postNodes.map(node => (
              <WorkItem key={node.id} {...node} />
            ))}
          </Masonry>
        </div>
      </div>
    </Container>
  )
}

export default IndexPage
