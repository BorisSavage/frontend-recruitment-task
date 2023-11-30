"use client";

import getMovies from "@/lib/getMovies";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import OpeningCrawl from "./OpeningCrawl";
import { Spinner } from "@nextui-org/react";
import { useTheme } from "next-themes";

type Props = { id: number };
export default function Film({ id }: Props) {
  const { theme } = useTheme();
  const {
    data: film,
    error,
    isLoading,
  } = useQuery<Film, Error>({
    queryKey: [`film-${id}`],
    queryFn: () => getMovies(id),
  });

  if (error)
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );

  if (isLoading)
    return (
      <div>
        <Spinner
          size="lg"
          color={theme === "dark" ? "success" : "primary"}
          label="Loading..."
        />
      </div>
    );

  if (film) {
    const formattedDate = formatDate(film.release_date);
    const paragraphs = film.opening_crawl.split("\r\n\r\n");
    const openingCrawlWithLineBreaks = paragraphs.map(
      (paragraph, paragraphIndex) => {
        return <OpeningCrawl key={paragraphIndex} paragraph={paragraph} />;
      }
    );
    return (
      <div className="flex min-h-[80svh] w-full flex-col items-center justify-start space-y-8  px-8 text-lg sm:w-fit sm:text-xl">
        <h1 className="text-center text-4xl font-semibold sm:text-5xl">
          {film.title}
        </h1>
        <ul className="flex w-full max-w-sm flex-col items-center justify-start space-y-8">
          <div className="space-y-1 sm:space-y-2">
            <li>
              <strong>Title: </strong>
              {film.title}
            </li>
            <li>
              <strong>Director: </strong>
              {film.director}
            </li>
            <li>
              <strong>Producer: </strong>
              {film.producer}
            </li>
            <li>
              <strong>Release Date: </strong> {formattedDate}
            </li>
            <li className="">
              <strong>Opening Crawl: </strong>
              <div className="flex w-fit flex-col items-center justify-center ">
                {openingCrawlWithLineBreaks}
              </div>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
