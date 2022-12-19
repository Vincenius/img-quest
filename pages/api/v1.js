import { ImageResponse } from '@vercel/og'
import {
  defaultBgColor,
  defaultColor,
  defaultImage,
  getContainerCss,
  getContentCss,
  getDeviderCss,
  getHeadlineCss,
  getDescriptionCss,
  getImageCss,
} from '../../components/GeneratedImage/GeneratedImage'

export const config = {
  runtime: 'experimental-edge',
};

const variants = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
}

export default async function handler(req, res) {
  const [robotoFont, robotoBoldFont] = await Promise.all([
    fetch('https://img.quest/Roboto-Medium.ttf'), // todo env variable
    fetch('https://img.quest/Roboto-Medium.ttf')
  ])
  const [robotoArrayBuffer, robotoBoldArrayBuffer] = await Promise.all([
    robotoFont.arrayBuffer(),
    robotoBoldFont.arrayBuffer()
  ])

  const { searchParams } = new URL(req.url)
  const hasTitle = searchParams.has('title')
  const hasDescription = searchParams.has('description')
  const hasImage = searchParams.has('image')
  const hasColor = searchParams.has('color')
  const hasBgColor = searchParams.has('bgColor')
  const hasVariant = searchParams.has('variant')

  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 1000)
    : '';

  const description = hasDescription
    ? searchParams.get('description')?.slice(0, 2000)
    : '';

  const background = hasImage
    ? decodeURI(searchParams.get('image'))
    : defaultImage;

  const color = hasColor
    ? '#' + searchParams.get('color')?.slice(0, 6)
    : defaultColor;

  const bgColor = hasBgColor
    ? '#' + searchParams.get('bgColor')?.slice(0, 6)
    : defaultBgColor;

  const variant = hasVariant
    ? variants[searchParams.get('variant')] || 1
    : 1;

  // todo fix variant 2 design
  return new ImageResponse(
    (
      <div
        style={getContainerCss({ bgColor, color, isFrontend: false })}
      >
        <img src={background} style={getImageCss({ background })[variant]}/>
        <div style={getContentCss({ variant, bgColor })[variant]}>
          <div style={getDeviderCss({ bgColor, isFrontend: false })[variant]}></div>
          <h1 style={getHeadlineCss({ title, isFrontend: false })}>{ title }</h1>
          <h2 style={getDescriptionCss({ description, isFrontend: false })}>{ description }</h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // debug: true,
      fonts: [
        {
          name: 'Roboto',
          data: robotoArrayBuffer,
          weight: 400,
          style: 'normal',
        },{
          name: 'Roboto',
          data: robotoBoldArrayBuffer,
          weight: 600,
          style: 'normal',
        },
      ],
    },
  );
}
