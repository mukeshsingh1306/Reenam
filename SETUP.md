# Reenam Hotel - Setup & Installation Guide

## Quick Start

### 1. Install Dependencies
```bash
cd /Users/mukesh/Project/ReenamHot
npm install
```

### 2. Start Development Server
```bash
npm start
```

The application will be available at: **http://localhost:4200**

### 3. Start Booking!
- Navigate to the booking section
- Select dates and room preferences
- Complete the booking process
- View confirmation with booking ID

## Project Structure

```
ReenamHot/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── booking-engine/
│   │   │   │   ├── booking-engine.component.ts
│   │   │   │   ├── booking-engine.component.html
│   │   │   │   └── booking-engine.component.scss
│   │   │   ├── hero/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── amenities/
│   │   │   └── testimonials/
│   │   ├── services/
│   │   │   └── booking.service.ts
│   │   ├── models/
│   │   │   └── index.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.routes.ts
│   │   └── main.ts
│   ├── styles.scss
│   ├── index.html
│   └── favicon.ico
├── angular.json
├── tsconfig.json
├── package.json
├── README.md
└── .gitignore
```

## Available Commands

```bash
# Development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint
```

## Features Overview

### 🔍 Booking Engine
- **Step 1**: Select dates, guests, and rooms
- **Step 2**: Browse and select available rooms
- **Step 3**: Enter guest information
- **Step 4**: Confirm booking with price breakdown

### 🏨 Room Types
- Single Room ($80/night)
- Double Room ($120/night)
- Deluxe Room ($180/night)
- Suite ($280/night)

### ✨ Additional Sections
- Hero section with hotel branding
- 12+ amenities showcase
- Guest testimonials and reviews
- Navigation header with smooth scrolling
- Responsive footer

## Data Storage

All bookings are saved in browser LocalStorage:
- Key: `reenamHotelBookings`
- Format: JSON array of booking objects
- Persists across browser sessions

## Customization

### Change Hotel Name
Edit in:
- [src/index.html](src/index.html) - `<title>`
- [src/app/components/hero/hero.component.html](src/app/components/hero/hero.component.html)
- [src/app/components/header/header.component.html](src/app/components/header/header.component.html)

### Add Room
Update [src/app/services/booking.service.ts](src/app/services/booking.service.ts):
```typescript
private rooms: Room[] = [
  // Add new room object here
  {
    id: 'new-id',
    name: 'Room Name',
    type: 'room-type',
    capacity: 2,
    price: 150,
    image: 'assets/room.jpg',
    description: 'Room description',
    amenities: ['WiFi', 'AC'],
    available: true
  }
];
```

### Change Colors
Update CSS variables in [src/app/app.component.scss](src/app/app.component.scss):
```scss
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ff6b6b;
}
```

### Add Hotel Amenities
Update [src/app/components/amenities/amenities.component.ts](src/app/components/amenities/amenities.component.ts):
```typescript
amenitiesList = [
  { icon: 'icon-name', title: 'Amenity', description: 'Description' },
  // Add more amenities
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Issue: Port 4200 already in use
```bash
ng serve --port 4300
```

### Issue: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: SCSS compilation error
Ensure SCSS is properly configured in angular.json

### Clear Browser Cache
The booking data is stored in LocalStorage. To clear:
```javascript
localStorage.removeItem('reenamHotelBookings');
```

## Development Tips

1. **Add breakpoints in SCSS**:
   ```scss
   @media (max-width: 768px) {
     // Mobile styles
   }
   ```

2. **Use Material Icons**: 
   [Material Icons Library](https://fonts.google.com/icons)

3. **Testing Bookings**:
   - Open DevTools → Application → LocalStorage
   - Look for `reenamHotelBookings` key
   - View JSON array of bookings

4. **Responsive Design Testing**:
   - Chrome DevTools: Cmd+Shift+M (Mac) or F12 → Toggle device toolbar
   - Test on 320px, 768px, 1024px breakpoints

## Production Deployment

### Build
```bash
npm run build
```

### Output Location
```
dist/reenam-hotel/
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist/reenam-hotel
```

### Deploy to Vercel
```bash
npm install -g vercel
npm run build
vercel --prod
```

## Performance Optimization

- Images should be <100KB
- Use modern image formats (WebP)
- Lazy load images if added
- Minify CSS and JavaScript (automatic with ng build)

## Security Considerations

- Input validation on forms (already implemented)
- No sensitive data in LocalStorage
- CORS headers if adding backend API
- Content Security Policy headers

## Support & Documentation

- [Angular Documentation](https://angular.io)
- [Angular Material](https://material.angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation)

---

**Happy Booking! 🎉**

For more details, see [README.md](README.md)
