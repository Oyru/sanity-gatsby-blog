import React, { forwardRef } from 'react'

import styles from './grid.module.css'

const Grid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>
}

const GridItem = forwardRef(({ col, row, children }, ref) => (
  <div ref={ref} style={{ gridColumn: col, gridRow: row }}>
    {children}
  </div>
))

Grid.Item = GridItem

export default Grid
