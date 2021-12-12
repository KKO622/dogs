import { GetServerSidePropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Button } from "../../components/Button";
import {
  DetailInformation,
  DetailInformationAttributes,
} from "../../components/DetailInformation";
import { DOG_API_KEY, DOG_API_URL } from "../../environment";

import { Breed } from "../../generated/schemaTypes";

interface DetailProps {
  detailBreedData: Breed;
  breedImageUrl?: string;
}

const Detail: FC<DetailProps> = ({ detailBreedData, breedImageUrl }) => {
  const router = useRouter();

  const { name, temperament, bred_for, life_span, height, weight } =
    detailBreedData;

  return (
    <div className="h-screen">
      <Head>
        <title>{name}</title>
        <meta name="description" content="A Dog Detail Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-zinc-700 flex items-center justify-center h-1/4">
        <h1 className="text-4xl font-bold text-center text-white">{name}</h1>
      </div>

      <div className="w-screen flex mx-auto justify-center md:justify-start md:max-w-4xl max-w-sm">
        <Button buttonText="Back to List" onClick={() => router.back()} />
      </div>

      <div className="flex flex-col md:flex-row md:max-w-4xl max-w-sm mx-auto bg-white overflow-hidden">
        <div className="py-4 md:px-4 md:w-1/2">
          <Image
            src={breedImageUrl}
            className="w-full h-80 object-cover"
            alt={name}
            width="415"
            height="345"
          />
        </div>
        <div className="p-4 md:w-1/2">
          <div className="h-full flex flex-col justify-center">
            <DetailInformation
              attribute={DetailInformationAttributes.Temperament}
              description={temperament}
            />
            <DetailInformation
              attribute={DetailInformationAttributes.BredFor}
              description={bred_for}
            />
            <DetailInformation
              attribute={DetailInformationAttributes.LifeSpan}
              description={life_span}
            />
            <DetailInformation
              attribute={DetailInformationAttributes.Height}
              description={height.metric}
            />
            <DetailInformation
              attribute={DetailInformationAttributes.Weight}
              description={weight.metric}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(
  context
): Promise<GetServerSidePropsResult<DetailProps>> {
  const id = context.query.id[0];
  const detailBreed = await fetch(
    `${DOG_API_URL}?limit=1&breed_id=${id}&page=0&order=Asc`,
    {
      headers: new Headers({
        "X-API-KEY": DOG_API_KEY,
      }),
    }
  ).then((res) => res.json());

  return {
    props: {
      detailBreedData: detailBreed[0].breeds[0],
      breedImageUrl: detailBreed[0].url,
    },
  };
}
export default Detail;
