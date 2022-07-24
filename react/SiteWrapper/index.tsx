import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: JSX.Element;
}

export default function SiteWrapper(props: IProps) {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-screen min-h-screen h-full">{props.children}</main>
      <Footer />
    </>
  );
}
