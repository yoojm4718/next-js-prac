import Head from "next/head";
import Seo from "../components/Seo";

export default function Home({ results }) {
  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
