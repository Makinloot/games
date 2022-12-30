interface statusType {
  beaten: number;
  dropped: number;
  owned: number;
  playing: number;
  toplay: number;
  yet: number;
}

interface esrbRatingType {
  id: number;
  name: string;
  name_en?: string;
  name_ru?: string;
  slug: string;
}

interface genresTypes {
  id: number;
  number: string;
  slug: string;
}

interface platforms {
  platform: {
    id: number;
    name: string;
    slug: string;
  }
}

interface ratings {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface shortScreenshots {
  id: number;
  image: string;
}

interface stores {
  store: {
    id: number;
    name: string;
    slug: string;
  }
}

interface tags {
  games_count: number;
  id: number;
  image_background: string;
  language: string;
  name: string;
  slug: string;
}

export interface resultsType {
  added: number;
  added_by_status: statusType;
  background_image: string;
  clip: null | any;
  dominant_color: string;
  esrb_rating?: esrbRatingType;
  genres: genresTypes[];
  id: number;
  metacritic: number | null;
  name: string;
  parent_platforms?: platforms[];
  platforms?: platforms[];
  playtime: number;
  rating: number;
  rating_top: number;
  ratings?: ratings[];
  ratings_count: number;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  score: null | number;
  short_screenshots?: shortScreenshots[];
  slug: string;
  stores: stores[];
  tags?: tags[];
  tba: boolean;
  updated: string;
  user_game: null | string;
}

export interface gameDataType {
  count: number;
  next: string;
  previous: string;
  results: resultsType[];
  user_platforms: boolean;
}