import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { searchFetch } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

export const refs = {
  searchForm: document.querySelector(".form"),
  gallery: document.querySelector(".gallery"),
};

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayopacity: 0.8,
});

