import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navigation from '../components/Navigation'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Happy Birthday Fumi!</title>
      </Head>
      <Navigation></Navigation>
    </>
  )
}

export default Home
