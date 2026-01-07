# Portfolio Website

## 🚀 Modern & Unique Portfolio Design

A professionally designed portfolio website showcasing your full-stack development projects across multiple domains.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Engaging scroll animations and transitions
- **Project Filtering** - Filter projects by category
- **Interactive Skills Section** - Animated skill bars
- **Contact Form** - Functional contact form ready for backend integration
- **Modern UI/UX** - Clean, professional design with gradient accents

## 🎨 Design Highlights

- Custom gradient color scheme
- Floating background shapes animation
- Smooth scroll navigation
- Interactive project cards
- Professional typography using Poppins & Playfair Display fonts
- Mobile-responsive hamburger menu

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styling
├── script.js           # JavaScript functionality
├── images/
│   ├── profile.jpg     # Your profile photo (add this)
│   └── projects/       # Project screenshots (add these)
└── README.md           # This file
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom animations, gradients, flexbox, grid)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts

## 📋 Projects Included

The portfolio showcases 12 major projects:

### Healthcare
- Clinic Management System

### Civic Technology
- STII E-Vote System
- PWD Management System
- ILCYD Platform

### Agriculture
- FarmVet Platform

### Education
- School Management System
- Thesis Management System

### E-Commerce
- Rental Management System
- Online Store Platform

### Services
- PawPrint Pet Adoption
- Lending Management System
- Water Refilling Station System

## 🎯 Customization Guide

### 1. Update Personal Information

In `index.html`, replace:
- "Your Name" with your actual name
- Update contact information (email, phone, location)
- Add your social media links
- Replace profile image path

### 2. Add Project Images

Place your project screenshots in the `images/projects/` folder with these names:
- evote.jpg
- clinic.jpg
- farmvet.jpg
- rental.jpg
- school.jpg
- pawprint.jpg
- thesis.jpg
- store.jpg
- lending.jpg
- water.jpg
- pwd.jpg
- ilcyd.jpg

Or update the image paths in `script.js` in the projects array.

### 3. Update Project Links

In `script.js`, update the `link` and `github` properties for each project with actual URLs.

### 4. Customize Colors

In `style.css`, modify the CSS variables in `:root` to change the color scheme:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... more colors */
}
```

### 5. Add Your Profile Photo

Add your photo as `images/profile.jpg` (400x500px recommended)

## 🚀 How to Run

1. Ensure you have XAMPP installed and running
2. Place the portfolio folder in your htdocs directory
3. Open your browser and navigate to:
   ```
   http://localhost/portfolio/
   ```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

## 🎨 Color Palette

- Primary: #667eea (Purple-Blue)
- Secondary: #764ba2 (Deep Purple)
- Accent: #f093fb (Pink)
- Success: #4ade80 (Green)
- Dark: #0f172a
- Light: #f8fafc

## 📧 Contact Form

The contact form currently logs to console. To make it functional:
1. Create a PHP backend file (e.g., `contact.php`)
2. Update the form submission handler in `script.js`
3. Add server-side validation and email sending functionality

## 🔧 Future Enhancements

- Add blog section
- Integrate with backend API
- Add dark mode toggle
- Include testimonials section
- Add more animation effects
- Implement project detail modals

## 📄 License

This portfolio template is free to use for personal projects.

## 👨‍💻 Author

Your Name - Full Stack Developer

---

**Note**: Remember to update all placeholder content with your actual information before publishing!
