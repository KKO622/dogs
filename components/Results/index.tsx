import { FC } from "react";
import { DogImageData } from "../../generated/schemaTypes";
import { Card } from "../Card";

interface ResultProps {
  requests: DogImageData[];
}

export const Results: FC<ResultProps> = ({ requests }) => {
  return (
    <div>
      {requests.map((result) => (
        <Card
          key={result.id}
          breedId={result.breeds?.[0]?.id}
          url={result.url}
          name={result.breeds?.[0]?.name}
        />
      ))}
    </div>
  );
};
