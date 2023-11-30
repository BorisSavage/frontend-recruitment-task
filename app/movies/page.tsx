import Movies from "@/components/Movies";
import getMovies from "@/lib/getMovies";
import getQueryClient from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(),
  });
  return (
    <div className="relative flex flex-col items-center justify-start">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Movies />
      </HydrationBoundary>
    </div>
  );
}
