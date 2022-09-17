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
                        </div>
                    ))
                }
            </main>
        </>   
    )
}

export default ArtPage