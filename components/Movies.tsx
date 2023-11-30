"use client";

import getMovies from "@/lib/getMovies";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import debounce from "lodash.debounce";
import MovieLink from "./MovieLink";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Movies() {
  const [filterQuery, setFilterQuery] = useState("");
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery<FilmsResponse, Error>({
    queryKey: ["movies"],
    queryFn: () => getMovies(),
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
        <h2>L O A D I N G...</h2>
      </div>
    );

  if (movies) {
    return (
      <div className="flex min-h-[80dvh] w-full flex-col items-center justify-start space-y-8 px-4 text-xl sm:w-fit">
        <h1 className="text-center text-5xl font-semibold">Star Wars Movies</h1>
        <Input
          variant="bordered"
          onChange={debounce((e) => {
            setFilterQuery(e.target.value.trim());
          }, 200)}
          label={
            <span>
              <MagnifyingGlassIcon className="inline h-4 text-slate-900 dark:text-slate-100" />{" "}
              Filter movies by name{" "}
            </span>
          }
        />
        <ul className="flex list-disc flex-col items-start justify-start space-y-4 pl-8">
          {movies.results
            .filter((movie: Film) => {
              return (
                !filterQuery ||
                movie.title.toLowerCase().includes(filterQuery.toLowerCase())
              );
            })
            .map((movie: Film) => {
              return <MovieLink movie={movie} key={movie.title} />;
            })}
        </ul>
      </div>
    );
  }
}
