# PORTFOLIO WEBSITE - QUICK START GUIDE

## 🎯 What You Need To Do Next

### 1. Add Your Personal Information

Open `index.html` and update:

**Line 50-52:** Change "Your Name" to your actual name
```html
<h1 class="hero-title">
    <span class="gradient-text">Your Name</span>
</h1>
```

**Line 343-345:** Update your email
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

**Line 350:** Update your phone number
```html
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

**Line 357:** Update your location
```html
<p>Your City, Country</p>
```

**Lines 363-378:** Add your social media links (GitHub, LinkedIn, Twitter, Facebook)

### 2. Add Your Profile Photo

- Take or choose a professional photo
- Resize it to approximately 400x500 pixels
- Save it as `profile.jpg` in the `images/` folder
- Path: `portfolio/images/profile.jpg`

### 3. Add Project Screenshots

For each of your 12 projects, take screenshots and save them in `images/projects/`:

Required images:
- `evote.jpg` - E-Vote System
- `clinic.jpg` - Clinic Management
- `farmvet.jpg` - FarmVet Platform
- `rental.jpg` - Rental Management
- `school.jpg` - School Management
- `pawprint.jpg` - Pet Adoption
- `thesis.jpg` - Thesis System
- `store.jpg` - Online Store
- `lending.jpg` - Lending System
- `water.jpg` - Water Refilling
- `pwd.jpg` - PWD System
- `ilcyd.jpg` - ILCYD Platform

**Tip:** Screenshots should be 400x250 pixels for best results

### 4. Update Project Links

Open `script.js` and update the project links (starting around line 8):

```javascript
{
    title: "STII E-Vote System",
    // ...
    link: "#",  // Change to actual project URL
    github: "#" // Change to GitHub repository URL
}
```

### 5. Customize Your Stats

In `index.html` around line 74-86, update your statistics:
- Years of Experience
- Number of Projects
- Technologies Mastered

### 6. Update Footer

In `index.html` around line 439-441:
- Add your full name in copyright
- Current year (already set to 2026)

## 🚀 How to View Your Portfolio

1. Make sure XAMPP is running (Apache server)
2. Open your web browser
3. Go to: `http://localhost/portfolio/`
4. Your portfolio should load!

## 🎨 Optional Customizations

### Change Color Scheme

Open `style.css` and modify lines 8-12:
```css
:root {
    --primary-color: #667eea;     /* Change this */
    --secondary-color: #764ba2;   /* Change this */
    --accent-color: #f093fb;      /* Change this */
}
```

### Add More Projects

Open `script.js` and add new project objects to the `projects` array:
```javascript
{
    id: 13,
    title: "Your New Project",
    category: "healthcare", // or civic, education, ecommerce, services
    description: "Description here",
    tech: ["PHP", "MySQL"],
    image: "images/projects/newproject.jpg",
    link: "#",
    github: "#"
}
```

## ✅ Checklist Before Publishing

- [ ] Added your name
- [ ] Added profile photo
- [ ] Added all project screenshots
- [ ] Updated email and contact info
- [ ] Updated social media links
- [ ] Updated project URLs
- [ ] Updated statistics
- [ ] Tested on mobile devices
- [ ] Tested all navigation links
- [ ] Tested contact form
- [ ] Checked all images load correctly

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Make sure images are in the correct folder
- Check file extensions (.jpg, .png)

**Portfolio not loading?**
- Make sure XAMPP Apache is running
- Check the folder is in `htdocs`
- Try clearing browser cache

**Mobile menu not working?**
- Check if JavaScript is enabled
- Open browser console for errors

## 📧 Need Help?

Check the README.md file for more detailed information about:
- Project structure
- Technologies used
- Customization options
- Future enhancements

## 🎉 You're All Set!

Once you've completed these steps, your portfolio will be ready to showcase your amazing projects!

---

**Pro Tip:** Test your portfolio on different devices (phone, tablet, desktop) to ensure everything looks great!
