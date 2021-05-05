import React from 'react'

import styles from './grid-header.module.css'
import Grid from '../grid'

const GridHeader = ({ infoIndentRef, infoRef, contactRef, workRef, title }) => {
  const scrollToRef = ref => {
    console.log(ref)
    if (ref.current !== null) {
      //   ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
      window.scrollTo(0, ref.current.offsetTop - 30)
    }
  }

  return (
    <div className={styles.gridHeader}>
      <Grid>
        <Grid.Item col='1'>
          <div className={styles.gridHeaderTitle}>
            <p>{title}</p>
          </div>
        </Grid.Item>
        <Grid.Item col='2'>
          <div
            ref={infoIndentRef}
            className={styles.gridHeaderItem}
            onClick={() => scrollToRef(infoRef)}
          >
            <p>INFO</p>
          </div>
        </Grid.Item>
        <Grid.Item col='3'>
          <div className={styles.gridHeaderItem} onClick={() => scrollToRef(contactRef)}>
            <p> CONTACT</p>
          </div>
        </Grid.Item>
        <Grid.Item col='4'>
          <div className={styles.gridHeaderItem} onClick={() => scrollToRef(workRef)}>
            <p> WORK</p>
          </div>
        </Grid.Item>
      </Grid>
    </div>
  )
}

export default GridHeader
