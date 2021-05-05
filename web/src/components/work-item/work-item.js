import React from 'react'

import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import styles from './work-item.module.css'

const WorkItem = props => {
  return (
    <div>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            className={styles.image}
            src={imageUrlFor(buildImageObj(props.mainImage)).url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <p className={styles.title}>{props.title}</p>
      </div>
    </div>
  )
}

export default WorkItem
