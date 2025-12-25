export interface Room {
  id: string;
  name: string;
  type: 'single' | 'double' | 'suite' | 'deluxe';
  capacity: number;
  price: number;
  image: string;
  description: string;
  amenities: string[];
  available: boolean;
}

export interface Booking {
  id: string;
  roomId: string;
  guestName: string;
  email: string;
  phone: string;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfGuests: number;
  numberOfRooms: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  bookingDate: Date;
}

export interface Hotel {
  name: string;
  location: string;
  rating: number;
  totalRooms: number;
  amenities: string[];
  description: string;
}

export interface Review {
  id: string;
  guestName: string;
  rating: number;
  comment: string;
  date: Date;
  roomType: string;
}
