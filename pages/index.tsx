import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Navigation from '../components/Navigation'
import thumbnail from '../public/fm-static/thumbnail.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Happy Birthday Fumi!</title>
      </Head>
      <Navigation></Navigation>
      <div className={style.thumbnail}>
        <Image
          src={thumbnail}
          alt="The Fumi Kiritsugu Experience Thumbnail"
        />
      </div>
      <main className={style.main_content}>
        <div className={style.card}>
          Hello there <strong>Mr. Fumi Kiritsugu!</strong> It&apos;s your birthday! In here, contains all the gift&apos;s we made just for you! We hope you appreciate it, so with that, happy birthday, have a nice day, and happy browsing!
        </div>
      </main>
    </>
  )
}

export default Home
