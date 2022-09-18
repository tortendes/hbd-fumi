import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link"
import styles from '../../styles/VideoExperience.module.scss'

const VideoExperience: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>The Fumi Kiritsugu Experience - Happy Birthday Fumi!</title>
                <meta name="description" content="This is the website responsible for all the content generated for Fumi's birthday" />
            </Head>
            <div className={styles.main}>
                <h1>Available at: sometime today</h1>
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