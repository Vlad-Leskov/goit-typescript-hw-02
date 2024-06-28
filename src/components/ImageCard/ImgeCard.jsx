import css from "./ImgeCard.module.css";
const ImageCard = ({ image, onClick }) => {
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
