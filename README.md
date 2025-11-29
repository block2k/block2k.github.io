# UbuntuCare Initiative - Professional Nonprofit Website

A comprehensive, professional multi-page website designed for Nigerian nonprofit organizations focused on poverty alleviation. Built specifically to meet Google Workspace for Nonprofits eligibility requirements with transparent governance, detailed program information, and verified impact data.

## 📋 Overview

This website showcases a complete nonprofit organization with:
- **Mission-driven content** about poverty alleviation in Nigeria
- **Four detailed programs**: Nutrition Security, Girls Education, Mobile Healthcare, Women's Economic Empowerment
- **Transparent governance**: Board of Trustees, financial reports, organizational policies
- **Verified impact data**: Measurable outcomes, beneficiary statistics, annual reports
- **Professional structure**: Separate pages for each major section
- **Legal compliance**: Privacy Policy and Terms of Use pages

## 🏗️ Website Structure

```
website-ngo/
├── index.html              # Homepage with mission and overview
├── about.html              # Detailed about page with team, governance, policies
├── programs.html           # Comprehensive program descriptions
├── impact.html             # Impact data, annual reports, success stories
├── get-involved.html       # Donation, volunteer, partnership opportunities
├── contact.html            # Contact information and inquiry form
├── privacy.html            # Privacy Policy (NDPR compliant)
├── terms.html              # Terms of Use
├── css/
│   └── styles.css          # Complete stylesheet for all pages
├── js/
│   └── script.js           # Interactive features and animations
└── README.md               # This file
```

## ✨ Key Features

### 📱 Responsive Design
- Mobile-first approach with hamburger navigation
- Optimized for all screen sizes
- Accessible color contrast and focus states

### 🎯 SEO Optimized
- Semantic HTML5 structure
- Meta descriptions on every page
- Clear heading hierarchy
- Fast loading times

### 🔒 Trust & Credibility
- CAC registration number displayed
- FIRS tax-exempt status mentioned
- Board of Trustees with detailed bios
- Financial transparency (82% program spending)
- Independently audited financial statements
- Comprehensive legal policies

### 💼 Detailed Programs
Each program includes:
- Clear objectives and target beneficiaries
- Specific activities and services
- Measurable impact metrics
- Operating locations
- Partner organizations
- Real success stories

### 📊 Impact Tracking
- Animated statistics counters
- Detailed outcome metrics for each program
- Timeline of organizational growth
- Financial transparency (revenue sources and expenditure)
- Annual reports section

### 🤝 Multiple Engagement Pathways
- **Donations**: Bank transfer details, giving tiers, tax information
- **Volunteering**: Specific roles with requirements
- **Corporate Partnerships**: Sponsorships, employee giving, CSR
- **Fundraising**: Peer-to-peer campaign support

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in any modern web browser
2. Navigate through the site using the top navigation menu
3. All pages are fully functional without requiring a server

### For Development
```bash
# Serve with a local server for better testing
npx serve .

# Or use Python's built-in server
python -m http.server 8000

# Or use PHP's built-in server
php -S localhost:8000
```

## 🎨 Customization Guide

### 1. Update Organization Information

**In ALL HTML files**, replace:
- `UbuntuCare Initiative` → Your organization name
- `CAC/IT/NO 123456` → Your CAC registration number
- `12345678-0001` → Your tax ID
- Email addresses → Your actual email addresses
- Phone numbers → Your actual phone numbers
- Office address → Your actual address

### 2. Update Program Content

**In `programs.html`:**
- Modify the 4 program sections with your actual programs
- Update statistics, locations, partners
- Replace success stories with real testimonials (with consent)

### 3. Update Team & Governance

**In `about.html`:**
- Replace team member names, titles, and bios
- Update Board of Trustees information
- Modify organizational history and founding date
- Update mission and vision statements

### 4. Update Impact Data

**In `impact.html`:**
- Update all statistics to reflect your real data
- Modify timeline with your organization's history
- Update financial data in reports section
- Replace success stories

### 5. Update Visual Branding

**In `css/styles.css` (lines 1-12):**
```css
:root {
  --primary: #1f6feb;      /* Your primary brand color */
  --primary-dark: #1749a1; /* Darker shade */
  --accent: #ffb830;       /* Accent color */
  --text: #0f1b2d;        /* Main text color */
  --muted: #5c6c8a;       /* Secondary text */
}
```

**Replace Logo Mark:**
- In all HTML files, update the `.logo-mark` content
- Currently shows "U" - change to your organization's initial

### 6. Update Contact Form Email

**In `js/script.js` (line 81):**
```javascript
window.location.href = `mailto:info@ubuntucare.ng?subject=${subject}&body=${body}`;
```
Change `info@ubuntucare.ng` to your actual email

### 7. Add Real Social Media Links

**In footer of ALL HTML files**, update:
```html
<a href="https://instagram.com/your-handle" aria-label="Instagram">
<a href="https://linkedin.com/company/your-company" aria-label="LinkedIn">
<a href="https://twitter.com/your-handle" aria-label="Twitter">
<a href="https://facebook.com/your-page" aria-label="Facebook">
```

## 📝 For Google Workspace Nonprofit Application

This website includes everything Google typically looks for:

### ✅ Eligibility Requirements Covered
1. **Clear charitable mission**: Poverty alleviation in Nigeria
2. **Registered nonprofit status**: CAC registration displayed prominently
3. **Tax-exempt status**: FIRS certification mentioned
4. **Professional web presence**: Multi-page professional website
5. **Transparent governance**: Board, policies, financial reports
6. **Active programs**: Detailed, measurable program descriptions
7. **Verified impact**: Statistics, outcomes, success stories
8. **Contact information**: Multiple contact methods provided
9. **Legal compliance**: Privacy Policy and Terms of Use
10. **Financial transparency**: Budget breakdown, audit information

### 📋 Application Tips
- Use your **actual organization data** before applying
- Ensure CAC registration number is correct and current
- Have real email addresses at your domain (after getting Google Workspace)
- Update social media links to actual profiles
- Replace placeholder statistics with verified data
- Add real photos if possible (with beneficiary consent)

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select branch and root folder
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your website folder
3. Get instant deployment with HTTPS
4. Optional: Connect custom domain

### Option 3: Cloudflare Pages (Free)
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Deploy with automatic HTTPS
4. Excellent performance worldwide

### Option 4: Nigerian Hosting
- **Whogohost**: Popular Nigerian hosting provider
- **Qservers**: Reliable Nigerian hosting
- **Web4Africa**: African-focused hosting

## 🔒 Privacy & Legal

- **Privacy Policy**: Compliant with Nigeria Data Protection Regulation (NDPR) 2019
- **Terms of Use**: Covers website use, donations, programs, volunteers
- **Data Protection**: Includes safeguards for beneficiary data
- **NDPR Compliance**: Right to access, rectification, erasure, etc.

## ♿ Accessibility

- Semantic HTML5 markup
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Focus states on interactive elements
- Responsive text sizing

## 🎯 Performance

- No external frameworks (vanilla CSS and JavaScript)
- Optimized images (when you add them)
- Minimal JavaScript for fast loading
- CSS Grid and Flexbox for layouts
- Google Fonts with preconnect for speed

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a template for nonprofit organizations. Feel free to:
- Adapt for your organization
- Modify design and content
- Add additional features
- Improve accessibility

## 📄 License

MIT License - Free to use for nonprofit purposes. Attribution appreciated but not required.

## 🆘 Support

For questions about customization:
1. Review this README thoroughly
2. Check the HTML comments in files for guidance
3. Refer to inline CSS comments for styling explanations

## 🎉 Credits

Designed and developed specifically for Nigerian nonprofit organizations seeking professional web presence and Google Workspace for Nonprofits eligibility.

---

**Remember**: Replace ALL placeholder information with your real organization data before deploying or applying for Google Workspace for Nonprofits. Authenticity and transparency are crucial for nonprofit credibility.
