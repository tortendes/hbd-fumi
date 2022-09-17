import { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import styles from '../../styles/VideoExperience.module.scss'


const VideoAnimation: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Fish&apos;s Animation - Happy Birthday Fumi!</title>
                <meta name="og:site_name" content="Happy Birthday Fumi!" />
                <meta name="description" content="This is the website responsible for all the content generated for Fumi's birthday" />
                <meta name="og:title" content="Happy Birthday Fumi!" />
                <meta name="og:url" content="https://hbd-fumi.torten.xyz" />
                <meta name="og:type" content="website" />
                <meta name="og:description" content="Hello there Mr. Fumi Kiritsugu! It's your birthday! In here, contains all the gift's we made just for you! We hope you appreciate it, so with that, happy birthday, have a nice day, and happy browsing!" />
                <meta name="og:image" content="https://hbd-fumi.torten.xyz/fm-static/thumbnail.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={styles.main}>
                <h1>Waiting for Fish to pass the video to me</h1>
                <Link href="/video" passHref>
                    <button className={styles.button}>
                        Go Back
                    </button>
                </Link>
            </div>
        </>
    )
}

export default VideoAnimation