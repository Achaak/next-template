import { NextSeoProps } from 'next-seo'

const seo: NextSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    site_name: 'Secrecy',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  title: "Secrecy",
  description: "Secrecy app"
};

export default seo