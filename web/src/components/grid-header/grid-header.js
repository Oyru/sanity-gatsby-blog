import React from 'react'

import styles from './grid-header.module.css'
import Grid from '../grid'

const GridHeader = ({ infoIndentRef, contactIndentRef, infoRef, contactRef, workRef, title }) => {
  const scrollToRef = ref => {
    console.log(ref, ref.current.offsetTop)
    if (ref.current !== null) {
      const yOffset = -60
      const element = ref.current
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.gridHeader}>
      <Grid>
        <Grid.Item col='1'>
          <div className={styles.gridHeaderTitle}>{title}</div>
        </Grid.Item>
        <Grid.Item col='2'>
          <div ref={infoIndentRef} onClick={() => scrollToRef(infoRef)}>
            <div className={styles.gridHeaderItem}>INFO</div>
          </div>
        </Grid.Item>
        <Grid.Item col='3'>
          <div ref={contactIndentRef} onClick={() => scrollToRef(contactRef)}>
            <div className={styles.gridHeaderItem}>CONTACT</div>
          </div>
        </Grid.Item>
        <Grid.Item col='4'>
          <div className={styles.gridHeaderItem} onClick={() => scrollToRef(workRef)}>
            WORK
          </div>
        </Grid.Item>
      </Grid>
    </div>
  )
}

export default GridHeader
