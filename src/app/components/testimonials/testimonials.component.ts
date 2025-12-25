import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface TestimonialItem {
  name: string;
  rating: number;
  comment: string;
  roomType: string;
  date: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: TestimonialItem[] = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Absolutely wonderful experience! The staff was incredibly helpful and the rooms were pristine. Will definitely come back!',
      roomType: 'Deluxe Room',
      date: 'December 2024'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'The best hotel experience I\'ve had. The amenities are top-notch and the location is perfect for exploring the city.',
      roomType: 'Suite',
      date: 'November 2024'
    },
    {
      name: 'Emma Williams',
      rating: 4,
      comment: 'Beautiful hotel with excellent service. The breakfast was delicious and the spa facilities were relaxing.',
      roomType: 'Double Room',
      date: 'October 2024'
    },
    {
      name: 'James Martinez',
      rating: 5,
      comment: 'Outstanding value for money! Everything was perfect, from check-in to check-out. Highly recommended!',
      roomType: 'Suite',
      date: 'September 2024'
    },
    {
      name: 'Lisa Anderson',
      rating: 5,
      comment: 'The views from my room were breathtaking! Staff went above and beyond to make our stay special.',
      roomType: 'Deluxe Room',
      date: 'August 2024'
    },
    {
      name: 'David Brown',
      rating: 4,
      comment: 'Great hotel overall. Very clean, comfortable beds, and the rooftop bar has amazing views.',
      roomType: 'Single Room',
      date: 'July 2024'
    }
  ];

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }
}
