import React from 'react'
import styles from './BrowserBorder.module.css'

const BrowserBorder = ({ children, title, description }) => {
    return <div className={styles.previewContainer}>
      <div className={styles.previewContainerHead}>
        <div className={styles.previewDots}></div>
      </div>
      { children }
    </div>
}

export default BrowserBorder
