export type Category =
  | 'Food Packs'
  | 'Paper Bags'
  | 'Plastic Bags'
  | 'Fabric Bags'
  | 'Bottles & Jars'
  | 'Disposable Plates'
  | 'Cups & Straws'
  | 'Custom Packaging'
  | 'Luxury Bags'
  | 'Event Supplies'
  | 'Bulk Bundles';

export type VariantOption = {
  label: string;
  price: number;
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: Category;
  images: string[];
  basePrice: number;
  sizes: VariantOption[];
  colors: string[];
  available: boolean;
  featured: boolean;
  badge?: string;
  rating: number;
  reviews: number;
  turnaround: string;
};

export type CartItem = {
  productId: string;
  title: string;
  slug: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
  unitPrice: number;
};

export type Inquiry = {
  id: string;
  customerName: string;
  phone: string;
  message: string;
  createdAt: string;
};
