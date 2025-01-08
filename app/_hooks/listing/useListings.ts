import useSWR from "swr";
import { fetcher } from "../fetcher";
import { Listing } from "./listing.interface";

export const useListings = () => {
  const { data, error, mutate } = useSWR("/api/features/get-listings", fetcher);

  const listingLoading = !data && !error;
  const listings: Listing[] = data?.listings;
  const page: number = data?.page;

  return {
    data,
    listings,
    page,
    error,
    mutateListings: mutate,
    listingLoading,
  };
};
