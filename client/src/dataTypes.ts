interface statusTypes {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

interface esrbTypes {
  id: number;
  name: string;
  slug: string;
}

interface genresTypes {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

interface parentPlatformTypes {
  id: number;
  name: string;
  slug: string;
}

interface platformsTypes {
  platform: {
    games_count: number;
    id: number;
    image?: string;
    image_background: string;
    name: string;
    slug: string;
    year_end: any;
    year_start: any;
  };
  released_at: string;
  requirements?: {} | any;
  requirements_en?: any;
  requirements_ru?: any;
}

interface ratingsTypes {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface screenshotsTypes {
  id: number;
  image: string;
}

interface storesTypes {
  id: number;
  store: {
    domain: string;
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
  };
  url?: string;
}

interface tagsTypes {
  games_count: number;
  id: number;
  image_background: string;
  language: string;
  name: string;
  slug: string;
}

interface developersTypes {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

interface publishersTypes {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

///////////////////////////////////////

interface IMainData {
  count: number;
  next: string | null;
  previous: string | null;
  user_platforms?: boolean;
}

interface IAddedByStatus {
  beaten: number;
  dropped: number;
  owned: number;
  playing: number;
  toplay: number;
  yet: number;
}

interface IEsrbRating {
  id: number;
  name: string;
  slug: string;
  name_en?: string;
  name_ru?: string;
}

interface IGenre {
  id: number;
  name: string;
  slug: string;
}

interface IPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface IRating {
  count: number;
  id: number;
  percent: number;
  title: string;
}

interface IStores {
  store: {
    id: number;
    name: string;
    slug: string;
  };
}

interface ITags {
  games_count: number;
  id: number;
  image_background: string;
  language: string;
  name: string;
  slug: string;
}

export interface IResults {
  added: number;
  added_by_status: IAddedByStatus[];
  background_image: string;
  clip: any;
  dominant_color: string;
  esrb_rating?: IEsrbRating;
  genres: IGenre[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: IPlatform[];
  platforms: IPlatform[];
  playtime: number;
  rating: number;
  rating_top: number;
  ratings: IRating[];
  ratings_count: number;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  score: any;
  short_screenshots?: {
    id: number;
    image: string;
  }[];
  slug: string;
  stores: IStores[];
  suggestions_count: number;
  tags: ITags[];
  tba: boolean;
  updated: string;
  user_game: any;
}

export interface IGameListResults extends IMainData {
  results: IResults[];
}

///////////////////////
interface IAdditions extends IMainData {
  results: [];
}

interface ISameSeries extends IMainData {
  results: [];
}

interface IScreenshots extends IMainData {
  results: [];
}

interface ITrailers extends IMainData {
  results: [];
}

export interface IGameData {
  achievement_count?: number;
  added: number;
  added_by_status: statusTypes;
  additions_count: number;
  alternative_names?: [];
  background_image: string;
  background_image_additional?: string;
  clip: any;
  creators_count?: number;
  description: string;
  description_raw: string;
  developers?: developersTypes[];
  dominant_color: string;
  esb_rating: esrbTypes;
  game_series_count?: number;
  genres: genresTypes[];
  id: number;
  metacritic: number;
  metacritic_platforms?: [];
  metacritic_url?: string;
  movies_count?: number;
  name: string;
  name_original?: string;
  parent_achievements_count?: number;
  parent_platforms: parentPlatformTypes[];
  parents_count?: number;
  platforms: platformsTypes[];
  playtime: number;
  publishers?: publishersTypes[];
  rating: number;
  rating_top: number;
  ratings: ratingsTypes[];
  ratings_count: number;
  reactions?: any;
  reddit_count?: number;
  reddit_description?: string;
  reddit_logo?: string;
  reddit_name?: string;
  reddit_url?: string;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  screenshots_count?: number;
  short_screenshots?: screenshotsTypes[];
  slug: string;
  stores: storesTypes[];
  suggestions_count: number;
  tags: tagsTypes[];
  tba: boolean;
  twitch_count?: number;
  updated: string;
  user_game: any;
  website?: string;
  youtube_count?: number;
}
[];

export interface IGamesData {
  additionsData: IAdditions[];
  sameSeries: ISameSeries[];
  screenshotData: IScreenshots[];
  trailerData: ITrailers[];
  data: IGameData;
}


// genre data types
interface IGenreGames {
  added: number;
  id: number;
  name: string;
  slug: string;
}

export interface IGenreResults {
  games: IGenreGames[];
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}


// types for Browse.tsx
interface IGenres extends IMainData {
  results: IGenreResults[];
}

interface IGames extends IMainData {
  results: IGameData[];
}

export interface IBrowse {
  gamesArr: IGames[];
  genresArr: IGenres[];
}

