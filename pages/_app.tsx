import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import SEO from 'next-seo.config'
import { appWithTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import { globalStyles } from '@/styles/css'
const AppContainer = dynamic(() => import('@/components/_app'))

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  globalStyles()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  )
}

export default appWithTranslation(MyApp)
