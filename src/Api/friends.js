import { endpoints, fetcher } from "../utils/enpoint";
import useSWR from "swr";
import { useMemo } from "react";

//-----------------------------------------------------------------------
const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};
//-----------------------------------------------------------------------

export const useFriendsAPI = () => {
  const url = endpoints.friends.list_friends;
  const { data, isLoading, error, isValidating } = useSWR(url, fetcher, options);

  const memoizedValue = useMemo(
    () => ({
      friendsData: data?.results || [],
      friendsDataLoading: isLoading,
      friendsDataError: error,
      friendsDataValidating: isValidating,
      friendsDataEmpty: !isLoading && data?.results?.length === 0,
    }),
    [data?.results, error, isLoading, isValidating]
  );

  return memoizedValue;
};
