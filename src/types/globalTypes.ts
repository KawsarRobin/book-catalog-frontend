export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: number;
  reviews: string[];
  description?: string;
  imageLink?: string;
  user?: string;
}
