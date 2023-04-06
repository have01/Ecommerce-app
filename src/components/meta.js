import Head from "next/head";

const Meta = ({ title, description, children }) => {
  return (
<<<<<<< Updated upstream
    <Head>
      <title>{title ? title : "Ecommerce App"}</title>
      <meta name="description" content={description} />
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
=======
    <>
      <Head>
        <title>{title ? title : "Ecommerce App"}</title>
        <meta name="description" content={description} />
      </Head>
>>>>>>> Stashed changes
      {children}
    </>
  );
};

export default Meta;
