import { GetServerSidePropsResult } from "next";
import Head from "next/head";
import { FC } from "react";
import { Pagination } from "../components/Pagination";
import { Results } from "../components/Results";
import { DOG_API_KEY, DOG_API_URL } from "../environment";
import { DogImageData } from "../generated/schemaTypes";

interface Props {
  currentPage: number;
  results?: DogImageData[];
}

const Home: FC<Props> = ({ currentPage, results }) => {
  return (
    <div>
      <Head>
        <title>Dogs-Page</title>
        <meta name="description" content="A page showing latest dog images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex justify-center align-center w-full h-14 border-b border-gray-200 shadow-2xl">
        <h1 className="align-middle mx-4 text-zinc-700 font-bold text-5xl">
          Dogs Page
        </h1>
      </div>
      <Results requests={results} />
      <Pagination currentPage={currentPage} />
    </div>
  );
};

export async function getServerSideProps(
  context
): Promise<GetServerSidePropsResult<Props>> {
  const page = context.query.page ?? 1;
  const request = await fetch(
    `${DOG_API_URL}?limit=10&page=${page}&order=Asc`,
    {
      headers: new Headers({
        "X-API-KEY": DOG_API_KEY,
      }),
    }
  ).then((res) => res.json());

  return {
    props: {
      results: request,
      currentPage: parseInt(page),
    },
  };
}

export default Home;
