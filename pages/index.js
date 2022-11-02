import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import request from "../utils/request";

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const response = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      movies: response.results,
    },
  };
};

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link
          rel="icon"
          href="https://th.bing.com/th/id/OIP.YTCQFQzrvR3BDIP5l_aRnQAAAA?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        ></link>
      </Head>
      <Header />
      <Navbar />
      <Results movies={movies} />
    </div>
  );
}
