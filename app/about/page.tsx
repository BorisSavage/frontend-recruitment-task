import Flower from "@/public/flower.webp";
import Jungle from "@/public/jungle.webp";
import Shore from "@/public/shore.webp";
import PictureCard from "@/components/PictureCard";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="relative">
      <h1 className="text-center text-7xl font-thin -tracking-widest sm:text-9xl">
        Michael
      </h1>
      <main className="p-4">
        <p className="py-4 text-justify text-sm sm:text-base">
          I hold a degree in Computer Science and Forensic Chemistry and
          Toxicology. I bring a passion for web development and a commitment to
          excellence. Proficient in React and Next.js for full-stack
          applications made with Typescript, I stay abreast of the latest web
          features. My approach is characterized by meticulous attention to
          detail, demonstrated on{" "}
          <a
            className="text-blue-600 underline dark:text-green-400"
            href="https://boris-savage-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            my portfolio page
          </a>
          . I thrive on deep dives into emerging technologies, drawing
          inspiration from top-skilled programmers. As a solution-oriented
          individual, I deliver real value where it matters.
        </p>
        <div
          className={cn(
            "flex flex-col space-x-0 space-y-4 py-4",
            "sm:flex-row sm:space-x-4 sm:space-y-0"
          )}
        >
          <PictureCard
            image={Flower}
            alt="a beautiful flower captured on the background of sunrise"
          />
          <PictureCard
            image={Jungle}
            alt="mountains in a green jungle on a misty day"
          />
          <PictureCard image={Shore} alt="calm sea shore during a sunset" />
        </div>
        <div>
          <h3 className="py-8 text-center text-2xl sm:text-3xl">
            Some technologies I&apos;m familiar with and used on this website:
          </h3>
          <ul className="list-disc pl-8">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>shadcn/ui</li>
            <li>NextUI</li>
            <li>React Server Components</li>
            <li>Responsive Web Design</li>
            <li>React Query</li>
            <li>Next.js 13 App Router</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
