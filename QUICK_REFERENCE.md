# 🏨 Reenam Hotel - Quick Reference Guide

## 🚀 Quick Start

```bash
cd /Users/mukesh/Project/ReenamHot
npm install
npm start
```

Visit: **http://localhost:4200**

---

## 📋 Project Files at a Glance

| File/Folder | Purpose |
|---|---|
| `src/app/components/booking-engine/` | Multi-step booking interface |
| `src/app/components/hero/` | Landing page hero section |
| `src/app/components/header/` | Navigation and menu |
| `src/app/components/footer/` | Footer with contact info |
| `src/app/components/amenities/` | Hotel amenities showcase |
| `src/app/components/testimonials/` | Guest reviews |
| `src/app/services/booking.service.ts` | Booking logic and data management |
| `src/app/models/index.ts` | TypeScript interfaces |
| `README.md` | Full project documentation |
| `SETUP.md` | Installation and customization guide |

---

## 🎯 Core Components

### BookingEngineComponent
- 4-step booking process
- Real-time availability checking
- Price calculation
- Confirmation ID generation

**File**: [src/app/components/booking-engine/](src/app/components/booking-engine/)

### HeroComponent
- Eye-catching hero banner
- CTA button to booking engine
- Feature highlights

**File**: [src/app/components/hero/](src/app/components/hero/)

### AmenitiesComponent
- Grid layout with 12+ amenities
- Material icons
- Hover animations

**File**: [src/app/components/amenities/](src/app/components/amenities/)

### TestimonialsComponent
- Guest reviews with ratings
- Star rating display
- Guest information

**File**: [src/app/components/testimonials/](src/app/components/testimonials/)

### HeaderComponent
- Sticky navigation
- Mobile responsive menu
- Smooth scroll to sections

**File**: [src/app/components/header/](src/app/components/header/)

### FooterComponent
- Hotel contact information
- Social media links
- Business hours
- Back-to-top button

**File**: [src/app/components/footer/](src/app/components/footer/)

---

## 🛏️ Room Types

| Room Type | Price/Night | Capacity | Key Amenities |
|---|---|---|---|
| Single | $80 | 1 | WiFi, AC, TV, Bathroom |
| Double | $120 | 2 | WiFi, AC, TV, Mini Bar, Desk |
| Deluxe | $180 | 2 | Smart TV, City View, Premium Toiletries |
| Suite | $280 | 4 | Panoramic View, Jacuzzi, Smart TV |

---

## 🎨 Color System

```scss
Primary:    #667eea (Purple Blue)
Secondary:  #764ba2 (Deep Purple)
Accent:     #ff6b6b (Red)
Text:       #333 (Dark Gray)
Light BG:   #f9f9f9 (Off White)
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px  
- **Desktop**: > 768px

---

## 🔧 Common Tasks

### Add a New Room
1. Open: [src/app/services/booking.service.ts](src/app/services/booking.service.ts)
2. Add to `rooms` array:
```typescript
{
  id: 'unique-id',
  name: 'Room Name',
  type: 'room-type',
  capacity: 2,
  price: 150,
  image: 'assets/image.jpg',
  description: 'Description',
  amenities: ['WiFi', 'AC'],
  available: true
}
```

### Change Hotel Color Scheme
Edit: [src/app/app.component.scss](src/app/app.component.scss)
```scss
:root {
  --primary-color: #YOUR_COLOR;
}
```

### Add Hotel Amenity
Edit: [src/app/components/amenities/amenities.component.ts](src/app/components/amenities/amenities.component.ts)
```typescript
amenitiesList = [
  { icon: 'icon-name', title: 'Title', description: 'Description' }
];
```

### Add Guest Review
Edit: [src/app/components/testimonials/testimonials.component.ts](src/app/components/testimonials/testimonials.component.ts)
```typescript
testimonials: TestimonialItem[] = [
  {
    name: 'Guest Name',
    rating: 5,
    comment: 'Great stay!',
    roomType: 'Deluxe Room',
    date: 'December 2024'
  }
];
```

---

## 💾 Data & Storage

### LocalStorage Key
```
reenamHotelBookings
```

### Booking Object Structure
```json
{
  "id": "BK1234567890abc",
  "roomId": "1",
  "guestName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "checkInDate": "2024-12-25",
  "checkOutDate": "2024-12-27",
  "numberOfGuests": 2,
  "numberOfRooms": 1,
  "totalPrice": 240,
  "status": "confirmed",
  "bookingDate": "2024-12-20"
}
```

### Clear Bookings (DevTools Console)
```javascript
localStorage.removeItem('reenamHotelBookings');
```

---

## 🚀 Build & Deploy

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```
Output: `dist/reenam-hotel/`

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist/reenam-hotel
```

---

## 🔌 Key Services

### BookingService
- Manages rooms and bookings
- Availability checking
- Booking creation
- Data persistence
- Cancellation handling

**Methods**:
- `getRooms()` - Get all rooms
- `createBooking(booking)` - Create new booking
- `checkAvailability(...)` - Check room availability
- `cancelBooking(id)` - Cancel booking
- `getBookings()` - Get all bookings

---

## 🎯 Booking Flow

```
1. Search
   ↓
2. Select Room
   ↓
3. Enter Guest Info
   ↓
4. Confirm & Book
   ↓
5. Get Confirmation ID
```

---

## ⚠️ Important Notes

- Bookings are stored locally (no backend required)
- Dates are validated (check-out must be after check-in)
- Room capacity validates guest count
- Confirmation ID generated automatically
- All bookings persistent across sessions

---

## 🐛 Debugging

### Check Bookings in Browser
1. Open DevTools (F12)
2. Go to Application → LocalStorage
3. Find `reenamHotelBookings` key
4. View JSON array

### Check Component State
1. Install Angular DevTools
2. Inspect component in Chrome DevTools
3. View properties and state

---

## 📚 Key Files to Edit

| Need to... | Edit this file |
|---|---|
| Add rooms | `src/app/services/booking.service.ts` |
| Change colors | `src/app/app.component.scss` |
| Add amenities | `src/app/components/amenities/amenities.component.ts` |
| Add reviews | `src/app/components/testimonials/testimonials.component.ts` |
| Edit header/nav | `src/app/components/header/` |
| Edit footer | `src/app/components/footer/` |
| Modify booking flow | `src/app/components/booking-engine/` |

---

## 🔗 Useful Links

- [Angular Docs](https://angular.io)
- [Material Icons](https://fonts.google.com/icons)
- [Angular Material](https://material.angular.io)
- [TypeScript Docs](https://www.typescriptlang.org)
- [SCSS Docs](https://sass-lang.com)

---

## ✅ Checklist for Getting Started

- [ ] Clone/navigate to project folder
- [ ] Run `npm install`
- [ ] Run `npm start`
- [ ] Visit http://localhost:4200
- [ ] Test booking flow
- [ ] Check DevTools → Application → LocalStorage
- [ ] View created booking
- [ ] Customize colors/content as needed

---

**Created**: December 24, 2024  
**Technology**: Angular 18 + TypeScript + SCSS  
**Status**: ✅ Ready to Use
