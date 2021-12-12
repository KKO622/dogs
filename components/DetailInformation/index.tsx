import { FC } from "react";

export enum DetailInformationAttributes {
  Temperament = "Temperament",
  BredFor = "Bred for",
  LifeSpan = "Life span",
  Height = "Height (metric)",
  Weight = "Weight (metric)",
}
interface DetailInformationProps {
  attribute: DetailInformationAttributes;
  description?: string;
}

export const DetailInformation: FC<DetailInformationProps> = ({
  attribute,
  description = "Not available",
}) => {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between text-zinc-700 transition-all duration-100 ease-in-out uppercase text-sm py-2">
      <div className="w-full sm:w-1/3">
        <strong>{attribute}:</strong>
      </div>
      <div className="w-full sm:w-2/3">{description}</div>
    </div>
  );
};
