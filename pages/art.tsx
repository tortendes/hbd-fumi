import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";

const ArtPage: NextPage = (): JSX.Element => {
    return  (
        <>
            <Head>
                <title>Art - Happy Birthday Fumi!</title>
            </Head>
            <Navigation></Navigation>
        </>   
    )
}

export default ArtPage