import { fetcher } from "../fetcher";
import useSWR from "swr";
import { Listing } from "./listing.interface";

export const useSingleListing = ({ id }: { id: string }) => {
  const { data, error, isValidating, mutate } = useSWR(
    `/api/features/get-listing/${id}`,
    fetcher
  );

  const singleListingLoading = !data && !error;
  const listing: Listing = data?.listing;

  return {
    listing,
    error,
    singleListingLoading,
    isValidating,
    mutateSingleListing: mutate,
  };
};
