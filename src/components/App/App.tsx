import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import css from "./App.module.css";
import { Image } from "../../types";

Modal.setAppElement("#root");

interface ApiResponse {
  results: Image[];
  total_pages: number;
}
const getImages = async (query: string, page: number): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page: 12,
        client_id: "_VPAkdyHqSXp0JM7CXaTNNE5bIxFPBiO4XuY7ibcLWc",
      },
    }
  );
  return response.data;
};

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    fetchImages();
  }, [query, page]);

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getImages(query, page);
      if (page === 1) {
        setImages(data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...data.results]);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={modalImage}
      />
    </div>
  );
};

export default App;
