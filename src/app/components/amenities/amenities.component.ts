import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent {
  amenitiesList = [
    { icon: 'wifi', title: 'Free WiFi', description: 'High-speed internet throughout the property' },
    { icon: 'fitness_center', title: 'Fitness Center', description: 'Modern gym with state-of-the-art equipment' },
    { icon: 'pool', title: 'Swimming Pool', description: 'Olympic-sized heated swimming pool' },
    { icon: 'restaurant', title: 'Restaurant', description: 'Fine dining with international cuisine' },
    { icon: 'bar', title: 'Bar & Lounge', description: 'Rooftop bar with panoramic views' },
    { icon: 'spa', title: 'Spa & Wellness', description: 'Full-service spa with massage and therapies' },
    { icon: 'local_parking', title: 'Free Parking', description: 'Complimentary valet and self-parking' },
    { icon: 'room_service', title: 'Room Service', description: '24/7 in-room dining and services' },
    { icon: 'business_center', title: 'Business Center', description: 'Fully equipped workspace' },
    { icon: 'event_note', title: 'Event Spaces', description: 'Conference and banquet facilities' },
    { icon: 'shuttle', title: 'Airport Shuttle', description: 'Complimentary transportation service' },
    { icon: 'concierge', title: 'Concierge', description: 'Professional concierge service 24/7' }
  ];
}
