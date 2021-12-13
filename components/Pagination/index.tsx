import { useRouter } from "next/router";
import React, { FC } from "react";

import { Button } from "../Button";

interface PaginationProps {
  currentPage: number;
}

export const Pagination: FC<PaginationProps> = ({ currentPage }) => {
  const router = useRouter();
  return (
    <div className=" w-screen flex justify-center mb-4">
      <div className="flex w-full md:w-3/4 xl:w-1/2 justify-evenly">
        {currentPage > 1 && (
          <Button
            buttonText="<"
            light
            small
            onClick={() =>
              router.push(`/?page=${currentPage > 10 ? 9 : currentPage - 1}`)
            }
          />
        )}
        {[...Array(10)].map((e, i) => {
          const page = i + 1;
          return (
            <div key={page} className="hidden md:block">
              <Button
                buttonText={page}
                onClick={() => router.push(`/?page=${page}`)}
                light={page === currentPage ? false : true}
                small
              />
            </div>
          );
        })}

        {currentPage < 10 && (
          <Button
            buttonText=">"
            light
            small
            onClick={() =>
              router.push(`/?page=${currentPage < 1 ? 2 : currentPage + 1}`)
            }
          />
        )}
      </div>
    </div>
  );
};
