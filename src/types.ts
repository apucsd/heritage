export type Property = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  price: number;
  total_area: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  year_built: number;
  amenities: string[];
  owner: {
    owner_id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  };
};
