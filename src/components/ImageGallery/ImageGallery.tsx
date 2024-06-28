import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImgeCard";

const ImageGallery = ({ images, onClick }) => {
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
