/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { Artworks } from "../configs";
import styles from '../styles/Artworks.module.css'

const ArtPage: NextPage = (): JSX.Element => {
    return  (
        <>
            <Head>
                <title>Art - Happy Birthday Fumi!</title>
            </Head>
            <Navigation></Navigation>
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