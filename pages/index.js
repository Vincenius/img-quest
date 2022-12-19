import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { MuiColorInput } from 'mui-color-input'
import Layout from '../components/Layout/Layout'
import BrowserBorder from '../components/BrowserBorder/BrowserBorder'
import GeneratedImage, { defaultBgColor, defaultColor, defaultImage, defaultTitle, defaultDescription } from '../components/GeneratedImage/GeneratedImage'
import styles from '../styles/Home.module.css'

const documentationRows = [{
    parameter: 'title',
    default: '',
    description: 'URL encoded string that will be displayed at the top'
  }, {
    parameter: 'description',
    default: '',
    description: 'URL encoded string that will be displayed below the title'
  }, {
    parameter: 'variant',
    default: '1',
    description: 'Design theme of the generated image - can be 1, 2, 3 or 4'
  }, {
    parameter: 'image',
    default: defaultImage,
    description: 'URL of a image'
  }, {
    parameter: 'color',
    default: defaultColor.replace('#', ''),
    description: 'hexadecimal color string without the #'
  }, {
    parameter: 'bgColor',
    default: defaultBgColor.replace('#', ''),
    description: 'hexadecimal color string without the #'
  }
]

export default function Home() {
  const [variant, setVariant] = React.useState(1)
  const [headline, setHeadline] = React.useState(defaultTitle)
  const [description, setDescription] = React.useState(defaultDescription)
  const [image, setImage] = React.useState(defaultImage)
  const [color, setColor] = React.useState(defaultColor)
  const [bgColor, setBgColor] = React.useState(defaultBgColor)
  const [isCopied, setIsCopied] = React.useState(false)

  const headlineParam = headline ? `&title=${encodeURI(headline)}` : ''
  const descriptionParam = description? `&description=${encodeURI(description)}` : ''
  const colorParam = color && color !== defaultColor ? `&color=${color.replace('#', '')}` : ''
  const bgColorParam = bgColor && bgColor !== defaultBgColor ? `&bgColor=${bgColor.replace('#', '')}` : ''
  const imageParam = image && image !== defaultImage ? `&image=${encodeURI(image)}` : ''
  const variantPram = variant !== 1 ? `&variant=${variant}` : ''

  const apiLink = `https://img.quest/api/v1?${headlineParam}${descriptionParam}${variantPram}${colorParam}${bgColorParam}${imageParam}`

  const copyApiCode = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(apiLink)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <Layout description="An open-source API to generate Open Graph images">
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
            <span className={isCopied ? styles.copied : styles.copiedHidden}>copied</span>
            <IconButton onClick={copyApiCode}>
              <ContentCopyIcon/>
            </IconButton>
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
              <GeneratedImage description="Theme" title="#1" variant={1} />
            </Card>
            <Card className={styles.preview} onClick={() => setVariant(2)}>
              <GeneratedImage description="Theme" title="#2" variant={2} />
            </Card>
            <Card className={styles.preview} onClick={() => setVariant(3)}>
              <GeneratedImage description="Theme" title="#3"variant={3} color="#263238" />
            </Card>
            <Card className={styles.preview} onClick={() => setVariant(4)}>
              <GeneratedImage description="Theme" title="#4" variant={4} />
            </Card>
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

      <Typography component="h2" variant="h5" gutterBottom>
        Documentation
      </Typography>

      <div className={styles.baseUrl}>
        <label>Base URL:</label>
        <code>https://img.quest/api/v1</code>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }}>
          <TableHead className={styles.tableHead}>
            <TableRow>
              <TableCell>Parameter</TableCell>
              <TableCell>Default</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentationRows.map((row) => (
              <TableRow
                key={row.parameter}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.parameter}
                </TableCell>
                <TableCell><code>{row.default}</code></TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}