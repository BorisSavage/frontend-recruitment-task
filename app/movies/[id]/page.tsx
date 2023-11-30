import Film from "@/components/Film";
import getMovies from "@/lib/getMovies";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["film"],
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
