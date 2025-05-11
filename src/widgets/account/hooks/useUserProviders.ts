import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@shared/constants";
import { getUserProviders } from "@entities/user-info";

export function useUserProviders() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEYS.userProviders],
    queryFn: getUserProviders,
    refetchOnMount: false,
  });

  const providers: string[] = data?.isSuccess ? (data.data ?? []) : [];

  return {
    providers,
    isLoading,
    refetch,
  };
}
