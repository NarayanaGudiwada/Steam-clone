export interface Game {
  id: string;
  title: string;
  price: number;
  discount?: number;
  coverImage: string;
  description: string;
  tags: string[];
  rating: number;
  releaseDate: string;
  developer: string;
  publisher: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  library: string[];
  wishlist: string[];
}