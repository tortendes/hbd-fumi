import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Home.module.scss'
import thumbnail from '../public/fm-static/thumbnail.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Happy Birthday Fumi!</title>
          <meta name="og:site_name" content="Happy Birthday Fumi!" />
          <meta name="description" content="This is the website responsible for all the content generated for Fumi's birthday" />
          <meta name="og:title" content="Happy Birthday Fumi!" />
          <meta name="og:url" content="https://hbd-fumi.torten.xyz/video" />
          <meta name="og:type" content="website" />
          <meta name="og:image" content="https://hbd-fumi.torten.xyz/fm-static/thumbnail.png" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>
       <div className={style.thumbnail}>
        <Image
          src={thumbnail}
          alt="The Fumi Kiritsugu Experience Thumbnail"
        />
      </div>
      <main className={style.main_content}>
        <div className={style.card}>
          After dying at the hands of an unfortunate fate, Fumiyo found himself in purgatory waiting to be judged for his actions. unbeknownst to him in order for him to walk across the pearly gates, Fumiyo must reach a minimum amount of wealth accumulated over his life span. Due to his lifestyle prior to his death, he did not meet the requirements. He streams and creates content in hopes of making money to finally be able to reach that light
        </div>
        <div className={style.buttonGroup}>
          <Link href="/video" passHref> 
            <button>Videos</button>
          </Link>
          <a href="https://www.kudoboard.com/boards/pjy9FnjN" target="_blank" rel="noreferrer"> 
            <button>Messages</button>
          </a>
          <Link href="/art" passHref> 
            <button>Artworks</button>
          </Link>
        </div>
      </main> 
    </>
  )
}

export default Home
