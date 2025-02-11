import Image from "next/image";

interface MarkdownImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  node?: any;
}

export const MarkdownImage = {
  img: MarkdownImageRenderer,
};

function MarkdownImageRenderer({ node, ...props }: MarkdownImageProps) {
  const width = props.width ? Number(props.width) : 16;

  const height = props.height ? Number(props.height) : 9;
  return (
    <Image
      src={props.src as string}
      alt={props.alt || ""}
      width={width}
      height={height}
      layout="responsive"
    />
  );
}
