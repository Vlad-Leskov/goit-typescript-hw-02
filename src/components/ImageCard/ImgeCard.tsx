import css from "./ImgeCard.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
