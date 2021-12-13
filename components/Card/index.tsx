import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { Button } from "../Button";

interface CardProps {
  url: string;
  name?: string;
  breedId?: number;
}

export const Card: FC<CardProps> = ({ url, name, breedId }) => {
  return (
    <Link href={`${breedId ? `/detail/${breedId}` : "#/"}`} passHref>
      <a className="group">
        <div className="flex flex-col group-even:md:flex-row-reverse group-odd:md:flex-row md:max-w-4xl max-w-sm mx-auto bg-white border border-gray-200 my-5 shadow-2xl rounded-lg overflow-hidden group cursor-pointer">
          <div className="p-4 md:w-1/2">
            <Image
              src={url}
              className="w-full h-80 object-cover transition-all duration-100 ease-in-out group-hover:scale-95"
              alt={name}
              width="420"
              height="315"
            />
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full flex flex-col justify-center">
              <div className="flex justify-center text-center text-zinc-700 transition-all duration-100 ease-in-out group-hover:text-zinc-900 uppercase text-4xl font-extrabold">
                {name ?? (
                  <span>
                    Unknown Breed
                    <br />
                    <span className="text-2xl">Just a sweet dog</span>
                  </span>
                )}
              </div>
              {name && (
                <div className="flex justify-center">
                  <Button buttonText="Details" onClick={() => {}} />
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
