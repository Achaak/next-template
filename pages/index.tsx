import { globalTranslateFiles } from '@/config/translate'
<<<<<<< HEAD
import { GetStaticProps, NextPage } from 'next'
=======
import { GetStaticProps } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'
>>>>>>> b0002fd1c9e23bffb74b4ab9bf29db5783c3deab
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import React from 'react'

const Home: NextPage = () => {
  const { t } = useTranslation(['common'])
  const { data: session } = useSession()

  return (
    <>
      <NextSeo description={t('common:seo.description')} title={t('home:seo.title')} />

      {session ? (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [...globalTranslateFiles])),
  },
})

export default Home
