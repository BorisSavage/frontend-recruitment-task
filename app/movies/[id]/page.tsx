import Film from "@/components/Film";
import getMovies from "@/lib/getMovies";
import getQueryClient from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <div className="relative flex flex-col items-center justify-start">
      <Film id={id} />
    </div>
  );
}
