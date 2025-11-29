# Cách Cập Nhật HTML Để Thêm Hình Ảnh

## 📋 Danh Sách Hình Ảnh Cần Có

### Bắt Buộc (Priority 1):
- [ ] `images/logo.png` - Logo tổ chức (400x400px)
- [ ] `images/hero-image.jpg` - Hình chính trang chủ (1920x800px)
- [ ] `images/programs/nutrition.jpg` - Chương trình dinh dưỡng (800x600px)
- [ ] `images/programs/education.jpg` - Chương trình giáo dục (800x600px)
- [ ] `images/programs/healthcare.jpg` - Chương trình y tế (800x600px)
- [ ] `images/programs/economic.jpg` - Chương trình kinh tế (800x600px)

### Khuyên Dùng (Priority 2):
- [ ] `images/team/director.jpg` - Giám đốc (400x400px)
- [ ] `images/about-banner.jpg` - Banner trang About (1920x600px)
- [ ] `images/impact/timeline.jpg` - Ảnh cho timeline (800x600px)

### Tùy Chọn (Priority 3):
- [ ] `images/team/*.jpg` - Các thành viên team khác
- [ ] `images/impact/story-*.jpg` - Ảnh cho success stories

---

## 1. TRANG CHỦ (index.html)

### Thay Logo Chữ "U" Bằng Logo Hình

**TÌM (dòng ~23):**
```html
<div class="logo-mark" aria-hidden="true">U</div>
```

**THAY BẰNG:**
```html
<img src="images/logo.png" 
     alt="UbuntuCare Initiative Logo" 
     class="logo-image">
```

**Thêm CSS vào `css/styles.css` (sau dòng 142):**
```css
.logo-image {
  width: 90px;
  height: 90px;
  border-radius: 36px;
  object-fit: cover;
  box-shadow: var(--shadow);
}
```

### Thêm Hero Image

**TÌM phần header-grid (dòng ~20-49) và THAY:**

**CŨ:**
```html
<div class="hero-card" role="img" aria-label="Community outreach in Lagos">
  <div class="glow"></div>
  <p><strong>Active in 12 Nigerian States</strong></p>
  <ul>
    <li>Serving 15,000+ beneficiaries monthly</li>
    <li>Partnership with 25+ community organizations</li>
    <li>100% transparent financial reporting</li>
    <li>Registered with Corporate Affairs Commission</li>
  </ul>
</div>
```

**MỚI:**
```html
<div class="hero-image-container">
  <img src="images/hero-image.jpg" 
       alt="Community members at UbuntuCare Initiative program in Lagos, Nigeria"
       class="hero-image">
  <div class="hero-overlay">
    <p><strong>Active in 12 Nigerian States</strong></p>
    <ul>
      <li>Serving 15,000+ beneficiaries monthly</li>
      <li>Partnership with 25+ community organizations</li>
      <li>100% transparent financial reporting</li>
      <li>Registered with Corporate Affairs Commission</li>
    </ul>
  </div>
</div>
```

**Thêm CSS vào `css/styles.css`:**
```css
.hero-image-container {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  min-height: 400px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(15, 27, 45, 0.95), transparent);
  padding: 2rem;
  color: white;
}

.hero-overlay p {
  color: white;
  margin-bottom: 1rem;
}

.hero-overlay ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
}

.hero-overlay li {
  padding: 0.25rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.hero-overlay li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}
```

### Thêm Hình Ảnh Cho Program Cards

**TÌM phần card-grid (dòng ~105-153), THÊM thẻ img vào đầu mỗi article:**

**Ví dụ cho Nutrition Program:**
```html
<article>
  <img src="images/programs/nutrition.jpg" 
       alt="Community members receiving food parcels at nutrition program"
       class="program-preview-image">
  <div class="card-icon">🍲</div>
  <h3>Nutrition Security Program</h3>
  <p>...</p>
</article>
```

**Thêm CSS:**
```css
.program-preview-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}
```

---

## 2. TRANG ABOUT (about.html)

### Thêm Banner Image

**THÊM sau phần page-header (sau dòng ~34):**

```html
<section class="about-banner">
  <img src="images/about-banner.jpg" 
       alt="UbuntuCare Initiative team and community members"
       class="banner-image">
</section>
```

**Thêm CSS:**
```css
.about-banner {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  margin-bottom: 4rem;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Thay Ảnh Team Members

**TÌM phần member-photo (dòng ~117, 124, 131, 138) và THAY:**

**CŨ:**
```html
<div class="member-photo">DA</div>
```

**MỚI:**
```html
<img src="images/team/director.jpg" 
     alt="Dr. Adaeze Nwosu, Executive Director"
     class="member-photo-img">
```

**Thêm CSS:**
```css
.member-photo-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 4px solid var(--primary);
}
```

---

## 3. TRANG PROGRAMS (programs.html)

### Thêm Ảnh Header Cho Mỗi Chương Trình

**TÌM program-icon (có 4 chỗ), THAY:**

**CŨ:**
```html
<div class="program-icon">🍲</div>
```

**MỚI:**
```html
<div class="program-image-header">
  <img src="images/programs/nutrition.jpg" 
       alt="Nutrition Security Program activities"
       class="program-header-img">
</div>
```

**Thêm CSS:**
```css
.program-image-header {
  width: 100%;
  max-width: 300px;
  margin-bottom: 2rem;
}

.program-header-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

@media (max-width: 768px) {
  .program-image-header {
    max-width: 100%;
  }
}
```

### Thêm Ảnh Trong Case Study

**TÌM case-study (có 4 chỗ), THÊM img trước thẻ h3:**

```html
<div class="case-study">
  <img src="images/impact/nutrition-story.jpg" 
       alt="Mama Blessing with her vegetable garden"
       class="case-study-image">
  <h3>Success Story: Mama Blessing's Journey</h3>
  <p>...</p>
</div>
```

**Thêm CSS:**
```css
.case-study-image {
  width: 100%;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}
```

---

## 4. TRANG IMPACT (impact.html)

### Thêm Ảnh Timeline

**TÌM timeline-item (dòng ~87-142), THÊM img vào mỗi item:**

```html
<article class="timeline-item">
  <div class="timeline-year">2020</div>
  <div class="timeline-content">
    <img src="images/impact/2020-founding.jpg" 
         alt="UbuntuCare Initiative founding team in 2020"
         class="timeline-image">
    <h3>Organization Founded</h3>
    <p>...</p>
  </div>
</article>
```

**Thêm CSS:**
```css
.timeline-image {
  width: 100%;
  max-width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  float: right;
  margin-left: 1.5rem;
}

@media (max-width: 768px) {
  .timeline-image {
    float: none;
    margin-left: 0;
    max-width: 100%;
  }
}
```

### Thêm Ảnh Success Stories

**TÌM story-detailed (có 3 chỗ), THÊM img sau story-header:**

```html
<article class="story-detailed">
  <div class="story-header">
    <h3>From Street Vendor to Business Owner</h3>
    <p class="story-meta">Women's Economic Empowerment • Ibadan, Oyo State</p>
  </div>
  <img src="images/impact/adeola-story.jpg" 
       alt="Adeola Johnson at her restaurant in Ibadan"
       class="story-image">
  <p class="story-body">...</p>
</article>
```

**Thêm CSS:**
```css
.story-image {
  width: 100%;
  max-width: 600px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: var(--shadow);
}
```

---

## 5. TRANG GET INVOLVED (get-involved.html)

### Thêm Icon Ảnh Cho Ways to Support

**TÌM way-icon (dòng ~51, 57, 63, 69), CÓ THỂ THAY bằng:**

```html
<div class="way-icon-img">
  <img src="images/icons/donate.svg" 
       alt="Donation icon">
</div>
```

Hoặc giữ emoji nếu chưa có icon SVG.

---

## 🎨 CSS Bổ Sung Cho Tất Cả Hình Ảnh

**THÊM VÀO CUỐI FILE `css/styles.css`:**

```css
/* ===== IMAGE STYLES ===== */

/* Lazy loading effect */
img {
  opacity: 0;
  transition: opacity 0.3s ease;
}

img.loaded,
img[src] {
  opacity: 1;
}

/* Responsive images */
.responsive-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Image with caption */
.image-with-caption {
  margin: 2rem 0;
}

.image-caption {
  font-size: 0.9rem;
  color: var(--muted);
  text-align: center;
  margin-top: 0.5rem;
  font-style: italic;
}

/* Image grid for galleries */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.image-grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-grid img:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow);
}

/* Placeholder for missing images */
.image-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f0f4ff, #d9e1f2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 3rem;
}
```

---

## 📱 JavaScript Để Lazy Load Images

**THÊM VÀO CUỐI FILE `js/script.js`:**

```javascript
// Lazy load images for better performance
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});

// Add error handler for missing images
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", function() {
    this.style.display = "none";
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    placeholder.innerHTML = "📷";
    this.parentNode.insertBefore(placeholder, this);
  });
});
```

---

## ✅ Checklist Sau Khi Thêm Hình

- [ ] Tất cả hình đã được nén qua TinyPNG
- [ ] Tên file không có dấu, khoảng trắng
- [ ] Mỗi img có alt text mô tả rõ ràng
- [ ] Hình responsive trên mobile và desktop
- [ ] Load nhanh (< 500KB mỗi hình)
- [ ] Kiểm tra bản quyền (stock photo hoặc tự chụp)

---

## 💡 Tip: Test Nhanh

Tạo file `test-images.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Test</title>
  <style>
    body { padding: 2rem; }
    img { max-width: 300px; margin: 1rem; border: 1px solid #ccc; }
    .missing { color: red; }
  </style>
</head>
<body>
  <h1>Image Test Page</h1>
  
  <h2>Logo</h2>
  <img src="images/logo.png" alt="Logo" onerror="this.parentNode.innerHTML='<p class=missing>Missing: logo.png</p>'">
  
  <h2>Hero</h2>
  <img src="images/hero-image.jpg" alt="Hero" onerror="this.parentNode.innerHTML='<p class=missing>Missing: hero-image.jpg</p>'">
  
  <h2>Programs</h2>
  <img src="images/programs/nutrition.jpg" alt="Nutrition" onerror="this.parentNode.innerHTML='<p class=missing>Missing: nutrition.jpg</p>'">
  <img src="images/programs/education.jpg" alt="Education" onerror="this.parentNode.innerHTML='<p class=missing>Missing: education.jpg</p>'">
  <img src="images/programs/healthcare.jpg" alt="Healthcare" onerror="this.parentNode.innerHTML='<p class=missing>Missing: healthcare.jpg</p>'">
  <img src="images/programs/economic.jpg" alt="Economic" onerror="this.parentNode.innerHTML='<p class=missing>Missing: economic.jpg</p>'">
  
  <h2>Team</h2>
  <img src="images/team/director.jpg" alt="Director" onerror="this.parentNode.innerHTML='<p class=missing>Missing: director.jpg</p>'">
</body>
</html>
```

Mở file này để xem hình nào còn thiếu!

---

## 🎯 Tóm Tắt

1. **Tải hình từ Unsplash/Pexels**
2. **Nén qua TinyPNG**
3. **Đặt vào thư mục `images/`**
4. **Copy code HTML từ file này**
5. **Paste vào đúng vị trí trong HTML files**
6. **Copy CSS và JS bổ sung**
7. **Test trên browser**
8. **Kiểm tra mobile responsive**

Done! 🎉

