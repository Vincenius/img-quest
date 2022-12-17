import Head from 'next/head'
import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { MuiColorInput } from 'mui-color-input'
import BrowserBorder from '../components/BrowserBorder/BrowserBorder'
import GeneratedImage, { defaultBgColor, defaultColor, defaultImage, defaultTitle, defaultDescription } from '../components/GeneratedImage/GeneratedImage'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [variant, setVariant] = React.useState(1)
  const [headline, setHeadline] = React.useState(defaultTitle)
  const [description, setDescription] = React.useState(defaultDescription)
  const [image, setImage] = React.useState(defaultImage)
  const [color, setColor] = React.useState(defaultColor)
  const [bgColor, setBgColor] = React.useState(defaultBgColor)

  const headlineParam = headline ? `&title=${encodeURI(headline)}` : ''
  const descriptionParam = description? `&description=${encodeURI(description)}` : ''
  const colorParam = color && color !== defaultColor ? `&color=${color.replace('#', '')}` : ''
  const bgColorParam = bgColor && bgColor !== defaultBgColor ? `&bgColor=${bgColor.replace('#', '')}` : ''
  const imageParam = image && image !== defaultImage ? `&image=${encodeURI(image)}` : ''
  // todo variant param

  const apiLink = `https://img.quest/api/v1?${headlineParam}${descriptionParam}${colorParam}${bgColorParam}${imageParam}`

  return (
    <div className={styles.container}>
      <Head>
        <title>IMG Quest | An open-source API to generate Open Graph images</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a href="/">
          <img src="/logo.png" className={styles.logo} />
          <Typography variant="p" component="h1">
            IMG Quest
          </Typography>
        </a>

        <div className={styles.icons}>
          <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
          <a href="https://github.com/Vincenius/img-quest" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
        </div>
      </header>

      <main className={styles.main}>
        <Typography component="h2" className={styles.description}>
          An open-source API to generate Open Graph images
        </Typography>

        <OutlinedInput
          variant="outlined"
          fullWidth
          className={styles.copyInput}
          disabled
          value={apiLink}
          endAdornment={
            <InputAdornment position="end">
              <ContentCopyIcon />
            </InputAdornment>
          }
        />

        <section className={styles.settingsRow}>
          <div className={styles.settings}>
            <Typography component="h2" variant="h5" gutterBottom>
              Settings
            </Typography>
            <div className={styles.layoutCards}>
              <Card className={styles.preview} onClick={() => setVariant(1)}>
                <GeneratedImage title="1" description="" variant={1} />
              </Card>
              <Card className={styles.preview} onClick={() => setVariant(2)}>
                <GeneratedImage title="2" description="" variant={2} />
              </Card>
              <Card className={styles.preview} onClick={() => setVariant(3)}>
                <GeneratedImage title="3" description="" variant={3} color="#263238" />
              </Card>
              <Card className={styles.preview} onClick={() => setVariant(4)}>
                <GeneratedImage title="4" description="" variant={4} />
              </Card>

              {/* todo info more coming soon */}
            </div>

            <TextField
              label="Headline" variant="outlined"
              className={styles.input} fullWidth
              onChange={e => setHeadline(e.target.value)}
              defaultValue={defaultTitle}
            />
            <TextField
              label="Description" variant="outlined"
              className={styles.input} fullWidth
              onChange={e => setDescription(e.target.value)}
              defaultValue={defaultDescription}
            />
            <TextField
              label="Image (URL)" variant="outlined"
              className={styles.input} fullWidth
              onChange={e => setImage(e.target.value)}
              defaultValue={defaultImage}
            />

            <div className={styles.colorInputContainer}>
              <MuiColorInput value={color} onChange={(c, colors) => setColor(colors.hex)} className={styles.input} label="Color" />
              <MuiColorInput value={bgColor} onChange={(c, colors) => setBgColor(colors.hex)} className={styles.input} label="Background Color" />
            </div>
          </div>
          <div className={styles.demoContainer}>
            <BrowserBorder>
              <GeneratedImage
                color={color}
                bgColor={bgColor}
                title={headline}
                description={description}
                variant={variant}
                background={image}
              />
            </BrowserBorder>

            <Typography className={styles.imageInfo}>
              Need some cool background images? Check the awesome generators at <a href="https://fffuel.co/" target="_blank" rel="noopener noreferrer">fffuel.co</a>
            </Typography>
          </div>
        </section>

        {/* TODO api description */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/wweb_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by @wweb_dev
        </a>
      </footer>
    </div>
  )
}