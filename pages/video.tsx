import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";

const VideoPage: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Video - Happy Birthday Fumi</title>
            </Head>
            <Navigation />
        </>
    )
}

export default VideoPage