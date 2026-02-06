export type Review = {
  id: string;
  name: string;
  trade: string;
  rating: number;
  text: string;
  location: string;
};

export type GalleryItem = {
  id: string;
  trade: string;
  title: string;
  image: string;
};

export type ServiceItem = {
  id: string;
  name: string;
  basePrice: number;
};

export type BookingSlot = {
  id: string;
  date: string;
  time: string;
};

export type PackageItem = {
  name: string;
  price: string;
  setup: string;
  features: string[];
};

export type DemoData = {
  reviews: Review[];
  gallery: GalleryItem[];
  services: Record<string, ServiceItem[]>;
  bookingSlots: BookingSlot[];
  towns: string[];
  packages: PackageItem[];
};

export type QuoteSubmission = {
  id: string;
  createdAt: string;
  trade: string;
  services: string[];
  area: string;
  urgency: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
};

export type BookingSubmission = {
  id: string;
  createdAt: string;
  slotId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
};

export type EnquirySubmission = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};
