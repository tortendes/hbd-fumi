import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link"
import styles from '../../styles/VideoExperience.module.scss'

const VideoExperience: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>The Fumi Kiritsugu Experience - Happy Birthday Fumi!</title>
            </Head>
            <div className={styles.main}>
                <h1>The video isin&apos;t available until atleast Sunday, check back later</h1>
                <Link href="/video" passHref>
                    <button className={styles.button}>
                        Go Back
                    </button>
                </Link>
            </div>
        </>
    )
}

export default VideoExperience