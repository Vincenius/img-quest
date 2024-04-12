import React from 'react'
import styles from './GeneratedImage.module.css'

export const defaultBgColor = '#263238'
export const defaultColor = '#f2f3f3'
export const defaultImage = 'https://img-quest.vercel.app/background.jpg'
export const defaultTitle = 'My Title'
export const defaultDescription = 'My Description'

const cleanObj = obj => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));

export const getContainerCss = ({ color, bgColor, isFrontend = true }) => cleanObj({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  color,
  aspectRatio: isFrontend ? '16 / 9' : null,
  background: bgColor,
  width: '100%',
  height: '100%',
})

export const getContentCss = ({ bgColor }) => ({
  1: {
    position:'relative',
    width: '75%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '0 5%',
  },
  2: {
    position:'relative',
    width: '100%',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '0 5%',
  },
  3: {
    position:'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '0 5%',
  },
  4: {
    position:'relative',
    width: '55%',
    marginLeft: '40%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
  }
})

export const getDeviderCss = ({ bgColor, isFrontend = true }) => ({
  1: {
    position: 'absolute',
    right: '0',
    top: '-50%',
    display: 'flex',
    height: '200%',
    width: '33%',
    background: bgColor,
    transform: 'rotate(10deg)'
  },
  2: {
    position: 'absolute',
    left: '-5%',
    top: '100%',
    display: 'flex',
    width: '130%',
    height: '15%',
    backgroundSize: '5% 100%',
    backgroundImage: `linear-gradient(135deg, ${bgColor} ${isFrontend ? '25' : '47.5'}%, transparent ${isFrontend ? '25' : '47.5'}%), linear-gradient(225deg, ${bgColor} 25%, transparent 25%)`,
    backgroundPosition: '0 0',
  },
  3: {
    display: 'none'
  },
  4: {
    display: 'none'
  }
})

export const getHeadlineCss = ({ title = '', isFrontend = true }) => ({
  fontSize: `${isFrontend ? '3vw' : '84px'}`,
  textTransform: 'uppercase',
  position: 'relative',
  marginBottom: '12px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  fontWeight: '600',
})

export const getDescriptionCss = ({ description = '', isFrontend = true }) => ({
  fontSize: `${isFrontend ? '1.8vw' : '48px'}`,
  fontWeight: '400',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

export const getImageCss = ({  }) => ({
  1: {
    position: 'absolute',
    width: '33%',
    height: '100%',
    objectFit: 'cover',
    right: '0',
    bottom: '0',
  },
  2: {
    position: 'absolute',
    width: '100%',
    height: '25%',
    objectFit: 'cover',
    left: '0',
    bottom: '0',
  },
  3: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    left: '0',
    bottom: '0',
  },
  4: {
    position: 'absolute',
    top: '50%',
    left: '0',
    width: '30%',
    height: '80%',
    marginLeft: '5%',
    transform: 'translateY(-50%)',
    borderRadius: '5%',
    objectFit: 'cover',
  }
})

const GeneratedImage = ({
  title,
  description,
  background = defaultImage,
  color = defaultColor,
  bgColor = defaultBgColor,
  variant = 1,
}) => {
  return <div
    style={getContainerCss({ bgColor, color })}
  >
    <img src={background} style={getImageCss({ background })[variant]} />
    <div style={getContentCss({ variant, bgColor })[variant]}>
      <div style={getDeviderCss({ bgColor })[variant]}></div>
      <h1 style={getHeadlineCss({ title })} className={styles.headline}>{ title }</h1>
      <h2 style={getDescriptionCss({ description })} className={styles.description}>{ description }</h2>
    </div>
  </div>
}

export default GeneratedImage
