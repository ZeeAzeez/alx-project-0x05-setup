import { GeneratedImageProps } from "../../interfaces";

const ImageCard: React.FC<GeneratedImageProps> = ({
  imageUrl,
  prompt,
  width,
  action,
}) => {
  return <div onClick={() => action(imageUrl)} className="mt-6 border"></div>;
};
