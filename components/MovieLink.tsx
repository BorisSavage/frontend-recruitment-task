import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = { movie: Film };

export default function MovieLink({ movie }: Props) {
  return (
    <Link
      href={`/movies/${
        movie.episode_id > 3 ? movie.episode_id - 3 : movie.episode_id + 3
      }`}
    >
      <li
        className={cn(
          "rounded-bl-xl rounded-br-sm rounded-tl-sm rounded-tr-xl border border-slate-900/20 px-4 py-1 transition duration-500",
          "dark:border-slate-100/20",
          "hover:border-slate-900/80",
          "dark:hover:border-slate-100/80"
        )}
      >
        <span>{movie.title}</span>
      </li>
    </Link>
  );
}
