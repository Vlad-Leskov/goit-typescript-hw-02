import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => (
  <button className={css.button} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
