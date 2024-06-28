import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImgeCard";
import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.listItem} key={image.id}>
          <ImageCard image={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
