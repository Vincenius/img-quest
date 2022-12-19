import React from 'react'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import styles from './Layout.module.css'

const Layout = ({ children, title, description, link = '' }) => {
  return <div className={styles.container}>
    <div className={styles.containerInner}>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IMG Quest | {description}</title>

        <meta name="description" content={description} />
        <meta property="og:title" content={`IMG Quest | ${description}`} />
        <meta property="og:image" content="https://img.quest/api/v1?&title=img.quest&description=An%20open-source%20API%20to%20generate%20Open%20Graph%20images" />
        <meta property="og:site_name" content={`IMG Quest | ${description}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://img.quest${link}`} />

        <meta name="twitter:creator" content="@wweb_dev" />
        <meta name="twitter:title" content={`IMG Quest | ${description}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://img.quest/api/v1?&title=img.quest&description=An%20open-source%20API%20to%20generate%20Open%20Graph%20images" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <link rel="canonical" href={`https://img.quest${link}`} />
        <link rel="icon" href="/favicon.ico" />
        <script async defer data-website-id="02fe4246-2c88-483e-85c4-2fcbe53f34b5" src="https://analytics.vincentwill.com/umami.js"></script>
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
        { children }
      </main>
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span>
          Created by <a
            href="https://twitter.com/wweb_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            @wweb_dev
          </a>
        </span>

        <a href="/privacy">
          Privacy
        </a>
      </div>
    </footer>
  </div>
}

export default Layout
