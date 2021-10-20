import { NextPageWithLayout } from './_app'
import { LayoutDefault } from '@/components/layouts/default'
import { I18nContext } from '@/i18n/i18n-react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import React, { useContext } from 'react'

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession()
  const { LL } = useContext(I18nContext)

  return (
    <>
      <NextSeo description={LL.common.seo.description()} title={LL.common.seo.title()} />

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

Home.getLayout = (page: React.ReactElement) => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Home
