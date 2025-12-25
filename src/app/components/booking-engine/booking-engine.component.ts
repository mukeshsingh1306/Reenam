import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BookingService } from '../../services/booking.service';
import { Room, Booking } from '../../models';

@Component({
  selector: 'app-booking-engine',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './booking-engine.component.html',
  styleUrls: ['./booking-engine.component.scss']
})
export class BookingEngineComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoom: Room | null = null;
  
  bookingData = {
    checkInDate: new Date(),
    checkOutDate: new Date(new Date().getTime() + 86400000),
    numberOfGuests: 1,
    numberOfRooms: 1,
    guestName: '',
    email: '',
    phone: ''
  };

  currentStep: 'search' | 'select' | 'guest-info' | 'confirmation' = 'search';
  minDate = new Date();
  filteredRooms: Room[] = [];
  bookingInProgress = false;
  createdBooking: Booking | null = null;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  searchAvailability(): void {
    if (this.bookingData.checkInDate >= this.bookingData.checkOutDate) {
      alert('Check-out date must be after check-in date');
      return;
    }

    this.filteredRooms = this.rooms.filter(room => 
      room.capacity >= this.bookingData.numberOfGuests &&
      this.bookingService.checkAvailability(
        this.bookingData.checkInDate,
        this.bookingData.checkOutDate,
        room.id
      )
    );

    if (this.filteredRooms.length > 0) {
      this.currentStep = 'select';
    } else {
      alert('No rooms available for the selected dates. Please try different dates.');
    }
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
    this.currentStep = 'guest-info';
  }

  backToSearch(): void {
    this.currentStep = 'search';
    this.selectedRoom = null;
  }

  backToSelect(): void {
    this.currentStep = 'select';
  }

  proceedToBooking(): void {
    if (!this.bookingData.guestName.trim() || !this.bookingData.email.trim() || !this.bookingData.phone.trim()) {
      alert('Please fill in all guest details');
      return;
    }
    this.currentStep = 'confirmation';
  }

  calculateTotalPrice(): number {
    if (!this.selectedRoom) return 0;
    const nights = Math.ceil((this.bookingData.checkOutDate.getTime() - this.bookingData.checkInDate.getTime()) / (1000 * 3600 * 24));
    return this.selectedRoom.price * nights * this.bookingData.numberOfRooms;
  }

  async confirmBooking(): Promise<void> {
    if (!this.selectedRoom) return;

    this.bookingInProgress = true;

    const booking: Booking = {
      id: '',
      roomId: this.selectedRoom.id,
      guestName: this.bookingData.guestName,
      email: this.bookingData.email,
      phone: this.bookingData.phone,
      checkInDate: this.bookingData.checkInDate,
      checkOutDate: this.bookingData.checkOutDate,
      numberOfGuests: this.bookingData.numberOfGuests,
      numberOfRooms: this.bookingData.numberOfRooms,
      totalPrice: this.calculateTotalPrice(),
      status: 'confirmed',
      bookingDate: new Date()
    };

    try {
      this.createdBooking = await this.bookingService.createBooking(booking);
      alert(`Booking confirmed! Confirmation ID: ${this.createdBooking.id}`);
      this.resetBookingForm();
    } catch (error) {
      alert('Error creating booking. Please try again.');
    } finally {
      this.bookingInProgress = false;
    }
  }

  resetBookingForm(): void {
    this.currentStep = 'search';
    this.selectedRoom = null;
    this.createdBooking = null;
    this.bookingData = {
      checkInDate: new Date(),
      checkOutDate: new Date(new Date().getTime() + 86400000),
      numberOfGuests: 1,
      numberOfRooms: 1,
      guestName: '',
      email: '',
      phone: ''
    };
  }

  getNightsCount(): number {
    return Math.ceil((this.bookingData.checkOutDate.getTime() - this.bookingData.checkInDate.getTime()) / (1000 * 3600 * 24));
  }
}
