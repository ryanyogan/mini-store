type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  categoryId: string;
};

type Category = {
  id: string;
  slug: string;
  name: string;
  products: string[];
};
