import { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import style from '../../styles/Video.module.scss'
import thumbnail1 from '../../public/fm-static/thumbnail.png'

const VideoPage: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Video - Happy Birthday Fumi</title>
                <meta name="og:site_name" content="Happy Birthday Fumi!" />
                <meta name="description" content="This is the website responsible for all the content generated for Fumi's birthday" />
                <meta name="og:title" content="Videos - Happy Birthday Fumi!" />
                <meta name="og:url" content="https://hbd-fumi.torten.xyz/video" />
                <meta name="og:type" content="website" />
                <meta name="og:image" content="https://hbd-fumi.torten.xyz/fm-static/thumbnail.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className={style.main}>
                <div className={style.card}>
                    <Image src={thumbnail1}
                            alt="Ate Sushi's Thumbnail"
                            width={1920/5}
                            height={1080/5}
                    />
                    <h1>The Fumi Kiritsugu Experience</h1>
                    <Link href="video/fumiexperience" passHref>
                        <button>Watch</button>
                    </Link>
                </div>
                <div className={style.card}>
                    <Image src="/fm-static/thumbnail-2.png"
                            alt="Fishuu's Thumbnail"
                            width={1920/5}
                            height={1080/5}
                    />
                    <h1>Fish&apos;s Animation</h1>
                    <Link href="video/animation" passHref>
                        <button>Watch</button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default VideoPage