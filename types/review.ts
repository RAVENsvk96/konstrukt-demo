export interface Review {
  name: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;

  location?: string;
  date?: string;

  featured?: boolean;
}