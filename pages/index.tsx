import { globalTranslateFiles } from '@/config/translate';
import { GetStaticProps } from 'next';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo';

const Home = () => {

  return (
    <>
      <NextSeo
        description={"hello"}
        defaultTitle={"hello"}
        title={"hello"}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale as string, [...globalTranslateFiles]),
  }
})

export default Home;