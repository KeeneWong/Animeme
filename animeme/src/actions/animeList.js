import { CREATE_ANIME, UPDATE_ANIME } from "../constants/animeList.js";

export function createNewAnime(
  enName,
  enJpName,
  type,
  synopsis,
  smallImage,
  mediumImage,
  largeImage,
  image,
  episodeCount,
  rating,
  status
) {
  return {
    type: CREATE_ANIME,
    payload: {
      titles: {
        en: enName,
        en_jp: enJpName
      },
      type: type,
      synopsis: synopsis,
      rating: rating,
      status: status,
      images: {
        small: smallImage,
        medium: mediumImage,
        large: largeImage,
        original: image
      },
      episodeCount: episodeCount
    }
  };
}

export const updateAnime = (id, updatedAnime) => ({
  type: UPDATE_ANIME,
  payload: {
    id,
    updatedAnime
  }
});
