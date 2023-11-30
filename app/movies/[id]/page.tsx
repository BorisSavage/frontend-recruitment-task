import Film from "@/components/Film";
import getMovies from "@/lib/getMovies";
import getQueryClient from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [`film-${id}`],
    queryFn: () => getMovies(id),
  });
  return (
    <div className="relative flex flex-col items-center justify-start">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Film id={id} />
      </HydrationBoundary>
    </div>
  );
}
