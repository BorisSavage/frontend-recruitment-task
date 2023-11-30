type Props = {
  paragraph: string;
};
export default function OpeningCrawl({ paragraph }: Props) {
  return (
    <div className="my-4 w-full text-justify">
      {paragraph.split("\r\n").map((line, lineIndex, lineArray) => {
        return (
          <div
            style={
              lineIndex !== lineArray.length - 1
                ? { textAlignLast: "justify" }
                : {}
            }
            key={lineIndex}
          >
            {line}
          </div>
        );
      })}
    </div>
  );
}
