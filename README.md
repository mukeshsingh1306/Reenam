# 🏨 Reenam Hotel - Interactive Booking System

A modern, responsive Angular application for the Reenam Hotel with a fully functional booking engine, amenities showcase, and guest reviews.

## ✨ Features

### Core Features
- **Interactive Booking Engine**
  - Multi-step booking process (Search → Select → Guest Info → Confirmation)
  - Real-time availability checking
  - Date range selection with validation
  - Guest capacity and room quantity selection
  - Automatic total price calculation
  - Booking confirmation with unique ID generation

- **Room Management**
  - 4 different room types: Single, Double, Deluxe, and Suite
  - Room descriptions with amenity lists
  - Dynamic pricing based on room type and number of nights
  - Room image support with fallback placeholders

- **Hotel Amenities**
  - 12+ amenities showcase with icons
  - Responsive grid layout
  - Professional category icons

- **Guest Testimonials**
  - 6+ customer reviews
  - 5-star rating system
  - Guest name, room type, and date information
  - Beautiful card-based layout

### UI/UX Features
- Responsive design (Mobile, Tablet, Desktop)
- Smooth animations and transitions
- Sticky navigation header
- Mobile-friendly navigation menu
- Professional gradient backgrounds
- Accessibility-focused design

## 🛠️ Technologies Used

- **Angular 18**: Standalone components with latest Angular features
- **Angular Material**: UI components and icons
- **TypeScript**: Type-safe development
- **SCSS**: Advanced styling and animations
- **RxJS**: Reactive programming
- **LocalStorage**: Client-side data persistence

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── booking-engine/      # Multi-step booking component
│   │   ├── hero/                # Hero section with CTA
│   │   ├── amenities/           # Hotel amenities showcase
│   │   ├── testimonials/        # Guest reviews section
│   │   ├── header/              # Navigation header
│   │   └── footer/              # Footer with links
│   ├── services/
│   │   └── booking.service.ts   # Booking management service
│   ├── models/
│   │   └── index.ts             # TypeScript interfaces
│   ├── app.component.*          # Root component
│   ├── app.routes.ts            # Route definitions
│   └── main.ts                  # Bootstrap
├── index.html                   # HTML template
├── styles.scss                  # Global styles
└── favicon.ico                  # Favicon
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation

1. **Install dependencies**
```bash
cd /Users/mukesh/Project/ReenamHot
npm install
```

2. **Start development server**
```bash
npm start
```

3. **Open in browser**
```
http://localhost:4200
```

## 📋 Component Details

### BookingEngineComponent
Multi-step booking interface:
- **Step 1 (Search)**: Date selection, guest count, room quantity
- **Step 2 (Select)**: Available rooms based on criteria
- **Step 3 (Guest Info)**: Name, email, phone input
- **Step 4 (Confirmation)**: Review and confirm booking

### HeroComponent
Eye-catching hero section with:
- Hotel branding
- Call-to-action button
- Feature highlights

### AmenitiesComponent
Showcase of 12+ amenities with icons and descriptions

### TestimonialsComponent
Display guest reviews with ratings and room information

### HeaderComponent
Sticky navigation with:
- Logo
- Navigation links
- Mobile-responsive menu

### FooterComponent
Footer with:
- Hotel information
- Contact details
- Social media links
- Business hours
- Back-to-top button

## 🔄 Data Flow

```
User Input (Booking Engine)
    ↓
BookingService.checkAvailability()
    ↓
Filter Rooms / Show Available
    ↓
User Selects Room & Enters Details
    ↓
BookingService.createBooking()
    ↓
Booking Confirmation (LocalStorage)
```

## 💾 Data Persistence

Bookings are stored in browser LocalStorage under the key: `reenamHotelBookings`

**Booking Object Structure:**
```typescript
{
  id: string;              // Unique booking ID (BK{timestamp}{random})
  roomId: string;          // Selected room ID
  guestName: string;       // Guest's full name
  email: string;           // Guest's email
  phone: string;           // Guest's phone number
  checkInDate: Date;       // Check-in date
  checkOutDate: Date;      // Check-out date
  numberOfGuests: number;  // Number of guests
  numberOfRooms: number;   // Number of rooms booked
  totalPrice: number;      // Total booking price
  status: string;          // 'confirmed' | 'pending' | 'cancelled'
  bookingDate: Date;       // When booking was created
}
```

## 🎨 Color Scheme

- **Primary**: #667eea (Purple Blue)
- **Secondary**: #764ba2 (Deep Purple)
- **Accent**: #ff6b6b (Red)
- **Text**: #333 (Dark Gray)
- **Light Background**: #f9f9f9 (Off White)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## ✅ Available Rooms

1. **Single Room** - $80/night
   - Capacity: 1 guest
   - Amenities: WiFi, AC, Flat-screen TV, Private Bathroom

2. **Double Room** - $120/night
   - Capacity: 2 guests
   - Amenities: WiFi, AC, Flat-screen TV, Mini Bar, Work Desk, Bathrobe

3. **Deluxe Room** - $180/night
   - Capacity: 2 guests
   - Amenities: WiFi, AC, Smart TV, Mini Bar, City View, Premium Toiletries

4. **Suite** - $280/night
   - Capacity: 4 guests
   - Amenities: WiFi, AC, Smart TV, Panoramic View, Jacuzzi Tub, Premium Toiletries

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
```

Output will be in `dist/reenam-hotel/`

### Development Build
```bash
npm start
```

## 📚 Angular Material Icons

The project uses Material Icons. Common icons used:
- `home`, `calendar_today`, `phone`, `email`, `location_on`
- `star_rate`, `wifi`, `fitness_center`, `spa`, `room_service`
- `menu`, `close`, `arrow_back`, `arrow_upward`, `check_circle`

## 🎯 Future Enhancements

- Backend API integration
- User authentication and profiles
- Payment gateway integration
- Email notifications
- Admin dashboard for booking management
- Multi-language support
- Advanced filtering options
- Room gallery with more images
- Special offers/promotional rates
- Guest preferences and history

## 📄 License

This project is created for educational purposes.

## 📞 Contact Information

**Reenam Hotel**
- Address: 123 Hotel Street, City, Country
- Phone: +1 (234) 567-8900
- Email: info@reenamhotel.com

---

**Created with ❤️ using Angular 18**
