import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room, Booking } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [];
  private bookingsSubject = new BehaviorSubject<Booking[]>(this.bookings);

  private rooms: Room[] = [
    {
      id: '1',
      name: 'Single Room',
      type: 'single',
      capacity: 1,
      price: 80,
      image: 'assets/room1.jpg',
      description: 'Cozy room perfect for solo travelers with modern amenities.',
      amenities: ['WiFi', 'Air Conditioning', 'Flat-screen TV', 'Private Bathroom'],
      available: true
    },
    {
      id: '2',
      name: 'Double Room',
      type: 'double',
      capacity: 2,
      price: 120,
      image: 'assets/room2.jpg',
      description: 'Spacious room with queen bed, ideal for couples and small families.',
      amenities: ['WiFi', 'Air Conditioning', 'Flat-screen TV', 'Mini Bar', 'Work Desk', 'Bathrobe'],
      available: true
    },
    {
      id: '3',
      name: 'Deluxe Room',
      type: 'deluxe',
      capacity: 2,
      price: 180,
      image: 'assets/room3.jpg',
      description: 'Premium room with king bed, city view, and luxury amenities.',
      amenities: ['WiFi', 'Air Conditioning', 'Smart TV', 'Mini Bar', 'Work Desk', 'Bathrobe', 'City View', 'Premium Toiletries'],
      available: true
    },
    {
      id: '4',
      name: 'Suite',
      type: 'suite',
      capacity: 4,
      price: 280,
      image: 'assets/room4.jpg',
      description: 'Luxurious suite with living area, bedroom, and premium amenities.',
      amenities: ['WiFi', 'Air Conditioning', 'Smart TV', 'Mini Bar', 'Work Desk', 'Bathrobe', 'Panoramic View', 'Premium Toiletries', 'Jacuzzi Tub'],
      available: true
    }
  ];

  private roomsSubject = new BehaviorSubject<Room[]>(this.rooms);

  constructor() {
    this.loadBookings();
  }

  getRooms(): Observable<Room[]> {
    return this.roomsSubject.asObservable();
  }

  getRoomById(id: string): Room | undefined {
    return this.rooms.find(room => room.id === id);
  }

  getBookings(): Observable<Booking[]> {
    return this.bookingsSubject.asObservable();
  }

  createBooking(booking: Booking): Promise<Booking> {
    return new Promise((resolve) => {
      setTimeout(() => {
        booking.id = this.generateId();
        booking.bookingDate = new Date();
        booking.status = 'confirmed';
        this.bookings.push(booking);
        this.bookingsSubject.next([...this.bookings]);
        this.saveBookings();
        resolve(booking);
      }, 1000);
    });
  }

  cancelBooking(bookingId: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const booking = this.bookings.find(b => b.id === bookingId);
        if (booking) {
          booking.status = 'cancelled';
          this.bookingsSubject.next([...this.bookings]);
          this.saveBookings();
          resolve(true);
        }
        resolve(false);
      }, 500);
    });
  }

  checkAvailability(checkInDate: Date, checkOutDate: Date, roomId: string): boolean {
    const conflictingBookings = this.bookings.filter(b => 
      b.roomId === roomId && 
      b.status !== 'cancelled' &&
      !(checkOutDate <= b.checkInDate || checkInDate >= b.checkOutDate)
    );
    return conflictingBookings.length === 0;
  }

  private generateId(): string {
    return 'BK' + Date.now() + Math.random().toString(36).substr(2, 9);
  }

  private saveBookings(): void {
    localStorage.setItem('reenamHotelBookings', JSON.stringify(this.bookings));
  }

  private loadBookings(): void {
    const saved = localStorage.getItem('reenamHotelBookings');
    if (saved) {
      this.bookings = JSON.parse(saved);
      this.bookingsSubject.next([...this.bookings]);
    }
  }
}
