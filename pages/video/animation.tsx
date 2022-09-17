import { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import styles from '../../styles/VideoExperience.module.scss'


const VideoAnimation: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Fish&apos;s Animation - Happy Birthday Fumi!</title>
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