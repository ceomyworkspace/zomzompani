export interface BookingRequest {
  id: string;
  name: string;
  phone: string;
  email?: string;
  preferredDate?: string;
  flatType?: string;
  message?: string;
  createdAt: string;
}

export interface ValueCard {
  id: string;
  title: string;
  caption: string;
  iconName: string;
}

export interface DifferentiatorPillar {
  id: string;
  title: string;
  body: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  stars: number;
}

export interface FlatType {
  type: string;
  orientation: string;
  size: string;
}
