/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import { Artworks } from "../configs";
import styles from '../styles/Artworks.module.scss'

const ArtPage: NextPage = (): JSX.Element => {
    return  (
        <>
            <Head>
                <title>Art - Happy Birthday Fumi!</title>
                <meta name="og:site_name" content="Happy Birthday Fumi!" />
                <meta name="description" content="This is the website responsible for all the content generated for Fumi's birthday" />
                <meta name="og:title" content="Art - Happy Birthday Fumi!" />
                <meta name="og:url" content="https://hbd-fumi.torten.xyz/art" />
                <meta name="og:type" content="website" />
                <meta name="og:image" content="https://hbd-fumi.torten.xyz/fm-static/thumbnail.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={styles.notice}>
                <img src="/alert-circle.svg" alt="" width={24} height={24} style={{ fill: '#fff', color: '#fff' }} />
                <span>Images takes a while to load, sorry for that.</span>
            </div>
            <main className={styles.main}>
                {
                    Artworks.map(image => (
                        <div className={styles.image_container} key={Math.random()}>
                            <img src={image.src} className={styles.image} alt="Image" />
                            <div>
                                <button>
                                    <a href={image.src} target="_blank" rel="noreferrer">View Image</a>
                                </button>
                                <button>
                                    <a href={image.src} target="_blank" rel="noreferrer" download="image.png">Download Image</a>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </main>
        </>   
    )
}

export default ArtPage