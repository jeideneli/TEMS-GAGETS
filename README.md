# TEMS Phones and Accessories Website

A modern, responsive website for TEMS Phones and Accessories showcasing all available phone models with filtering and search capabilities.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Phone Catalog**: Complete inventory of all available phones with prices
- **Advanced Filtering**: Filter by brand, price range, and condition (UK Used/Boxed)
- **Search Functionality**: Search for specific phone models
- **Contact Integration**: Direct phone and WhatsApp contact buttons
- **Modern UI**: Clean, professional design with smooth animations

## Phone Categories

### UK Used Phones
- Aquos (V45, Sense 5, V40, V43, R2, Sense 2, Sense 3 V46, Zero 5G, Zero 2 5G)
- Sony Xperia (XZ3, Mono, XZ2, XZ1 Compact)
- Arrows (F-02L, F-04K, U)
- Huawei (Nova 2 Plus, P10 Lite, Honor 8X)
- Sharp (Basio, Basio 5 A001SH, 704 SH)
- LG Style, KYV45 Urbano, Oppo A83, Google Pixel 4a
- Samsung (Galaxy S series, Note series, A series, Tab A)

### Boxed Phones
- Infinix (Hot 30, Hot 30i, Smart 7HD)
- Tecno (7 Pop, 10 Spark, 7 Pro Pop, 10 Pro Spark)
- iPhone (12, 13, 14, 15, 16 series)

## How to Use

1. **Open the Website**: Open `index.html` in any modern web browser
2. **Browse Phones**: Scroll through the complete phone catalog
3. **Filter Results**: Use the filter dropdowns to narrow down your search:
   - **Brand**: Select specific phone brands
   - **Price**: Choose price ranges (Under 300k, 300k-600k, etc.)
   - **Condition**: Filter by UK Used or Boxed phones
4. **Search**: Type in the search box to find specific models
5. **Contact**: Click the phone or WhatsApp buttons to contact TEMS Phones

## Contact Information

- **Location**: Grand Corner, Level 4, Shop 358B
- **Phone**: 0773074155
- **WhatsApp**: 0773074155

## File Structure

```
├── index.html          # Main website file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and phone data
├── README.md           # This file
└── logo.jpg            # Company logo (if available)
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

To add new phones or modify existing ones, edit the `phones` array in `script.js`. Each phone object should have:

```javascript
{
    brand: 'Brand Name',
    name: 'Model Name',
    storage: 'Storage Capacity',
    price: PriceInThousands, // e.g., 280 for 280k
    condition: 'UK Used' or 'Boxed'
}
```

## Features for Future Enhancement

- Shopping cart functionality
- Phone comparison tool
- Image gallery for each phone
- Customer reviews and ratings
- Online ordering system
- Payment integration

---

**TEMS Phones and Accessories** - Your Number One Phone Store with Affordable Phones and Accessories 