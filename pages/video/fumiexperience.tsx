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
                <h1>The Fumi Kiritsugu Experience</h1>
                <div className={styles.videoHolder}>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/-87eiuj_DZU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe className={styles.chat} height="1000px" src="https://www.youtube.com/live_chat?v=-87eiuj_DZU&embed_domain=hbd-fumi.torten.xyz" frameBorder="0"></iframe>
                </div>
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