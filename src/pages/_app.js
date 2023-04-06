import "../../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/header";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const cookieData = Cookies.get("userName");
    if (cookieData) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ecommerce App</title>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
