import React from 'react'
import styles from './GeneratedImage.module.css'

export const defaultBgColor = '#263238'
export const defaultColor = '#f2f3f3'
export const defaultImage = '/background.jpg'
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

export const getDeviderCss = ({ bgColor }) => ({
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
    left: '0',
    top: '100%',
    display: 'flex',
    width: '100%',
    height: '25px',
    backgroundSize: '5% 100%',
    backgroundImage: `linear-gradient(135deg, ${bgColor} 25%, transparent 25%), linear-gradient(225deg, ${bgColor} 25%, transparent 25%)`,
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
  fontSize: `${isFrontend ? '1.5vw' : '48px'}`, // `clamp(20px, ${200 / description.length}px, 50px)`,
  fontWeight: '400',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

// export const getInfoCss = ({  }) => ({
//   fontSize: 16,
//   opacity: 0.7,
//   position: 'absolute',
//   bottom: '10px',
//   right: '10px',
//   position: 'relative',
//   zIndex: '2',
// })

// todo check valid variant
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
      {/* <p style={getInfoCss({ })}>created with IMG Quest</p> */}
    </div>
  </div>
}

export default GeneratedImage
