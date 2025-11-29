# Hướng Dẫn Sử Dụng Hình Ảnh Cho Website

## 📸 Cấu Trúc Thư Mục Hình Ảnh

```
images/
├── logo.png                    # Logo tổ chức (khuyên dùng 400x400px)
├── hero-image.jpg              # Hình chính trang chủ
├── about-banner.jpg            # Banner trang About
├── programs/
│   ├── nutrition.jpg           # Chương trình dinh dưỡng
│   ├── education.jpg           # Chương trình giáo dục
│   ├── healthcare.jpg          # Chương trình y tế
│   └── economic.jpg            # Chương trình kinh tế
├── team/
│   ├── director.jpg            # Giám đốc điều hành
│   ├── programs-director.jpg  # Giám đốc chương trình
│   ├── finance-director.jpg   # Giám đốc tài chính
│   └── partnerships-director.jpg
└── impact/
    ├── story-1.jpg             # Câu chuyện tác động 1
    ├── story-2.jpg             # Câu chuyện tác động 2
    └── story-3.jpg             # Câu chuyện tác động 3
```

## 🌐 Nguồn Hình Ảnh Miễn Phí & Hợp Pháp

### 1. **Unsplash** (Khuyên dùng nhất)
- Website: https://unsplash.com
- Giấy phép: Miễn phí 100%, thương mại
- Chất lượng: Rất cao
- Từ khóa tìm kiếm:
  - "africa children education"
  - "nigerian community"
  - "africa women business"
  - "africa healthcare clinic"
  - "food distribution africa"

### 2. **Pexels**
- Website: https://pexels.com
- Giấy phép: Miễn phí, không cần ghi nguồn
- Chất lượng: Cao
- Từ khóa:
  - "african school"
  - "community support"
  - "volunteer africa"
  - "nigeria market"

### 3. **Pixabay**
- Website: https://pixabay.com
- Giấy phép: Miễn phí cho mục đích phi lợi nhuận
- Chất lượng: Trung bình đến cao

### 4. **UN Women Photos** (Ảnh Châu Phi Thật)
- Website: https://www.flickr.com/photos/unwomen
- Giấy phép: CC BY-NC-ND (phi thương mại)
- Ảnh thật từ các dự án ở Châu Phi

### 5. **World Bank Photo Collection**
- Website: https://www.flickr.com/photos/worldbank
- Giấy phép: CC BY-NC-ND
- Ảnh thật từ dự án phát triển

## 📐 Kích Thước Hình Ảnh Khuyên Dùng

| Vị trí | Kích thước | Tỷ lệ | Dung lượng |
|--------|-----------|-------|-----------|
| Logo | 400x400px | 1:1 | < 100KB |
| Hero/Banner | 1920x800px | 2.4:1 | < 500KB |
| Program Image | 800x600px | 4:3 | < 300KB |
| Team Photo | 400x400px | 1:1 | < 150KB |
| Story Image | 800x600px | 4:3 | < 300KB |

## 🛠️ Công Cụ Chỉnh Sửa & Tối Ưu Hình

### Online (Miễn phí):
1. **Canva** (https://canva.com)
   - Chỉnh kích thước
   - Thêm text overlay
   - Cắt, xoay, filter

2. **TinyPNG** (https://tinypng.com)
   - Nén ảnh không mất chất lượng
   - Giảm 70% dung lượng

3. **Remove.bg** (https://remove.bg)
   - Xóa background cho ảnh team
   - 50 ảnh miễn phí/tháng

### Offline:
- **GIMP** (miễn phí, Windows/Mac/Linux)
- **Paint.NET** (miễn phí, Windows)
- **Photopea** (online Photoshop miễn phí)

## 📝 Hướng Dẫn Từng Bước

### Bước 1: Tải Hình Ảnh

**Ví dụ tìm hình cho Chương trình Giáo dục:**

1. Vào https://unsplash.com
2. Tìm: "african children school"
3. Chọn ảnh phù hợp (trẻ em Nigeria/Châu Phi)
4. Click "Download free" → chọn "Medium" (1920px)
5. Lưu vào `images/programs/education.jpg`

**Lặp lại cho các chương trình khác:**
- Nutrition: Tìm "africa food distribution" hoặc "community kitchen africa"
- Healthcare: Tìm "africa mobile clinic" hoặc "doctor africa"
- Economic: Tìm "african women business" hoặc "market nigeria"

### Bước 2: Tối Ưu Hình Ảnh

1. Vào https://tinypng.com
2. Upload ảnh vừa tải
3. Download ảnh đã nén
4. Thay thế ảnh gốc

### Bước 3: Đặt Tên File Đúng

```
✅ ĐÚNG:
- education-program.jpg
- nutrition-support.jpg
- team-director.jpg

❌ SAI:
- IMG_1234.jpg
- photo (1).jpg
- Untitled.jpg
```

### Bước 4: Thêm Alt Text

Khi thêm vào HTML, luôn có mô tả:

```html
<!-- ĐÚNG -->
<img src="images/programs/education.jpg" 
     alt="Nigerian girls in classroom receiving educational support">

<!-- SAI -->
<img src="images/programs/education.jpg" alt="image">
```

## 🎨 Gợi Ý Từ Khóa Tìm Kiếm Cụ Thể

### Trang Chủ (Hero):
- "nigerian community together"
- "africa volunteers helping"
- "community development africa"

### Chương Trình Dinh Dưỡng:
- "food distribution africa"
- "community feeding program"
- "african children eating healthy"
- "vegetable garden africa"

### Chương Trình Giáo dục:
- "african girls studying"
- "nigeria school classroom"
- "students africa learning"
- "female education africa"

### Chương Trình Y tế:
- "mobile clinic africa"
- "doctor patient africa"
- "health screening community"
- "vaccination children africa"

### Chương trình Kinh tế:
- "african women entrepreneur"
- "market vendor nigeria"
- "women business africa"
- "microfinance africa"

### Đội ngũ (Team):
- Tốt nhất là ảnh thật của team
- Nếu chưa có: "professional african portrait"
- "business woman nigeria"
- "african professional headshot"

## 🚨 Lưu Ý Quan Trọng Về Bản Quyền

### ✅ ĐƯỢC PHÉP:
- Ảnh từ Unsplash, Pexels, Pixabay (miễn phí)
- Ảnh tự chụp của tổ chức
- Ảnh có giấy phép Creative Commons (kiểm tra điều khoản)
- Ảnh mua từ stock photo sites

### ❌ KHÔNG ĐƯỢC:
- Copy ảnh từ Google Images
- Copy từ website tổ chức khác
- Ảnh không rõ nguồn gốc
- Ảnh có watermark

### 📜 Về Ảnh Người Thật:

**NẾU dùng ảnh beneficiaries thật:**
1. ✅ Phải có consent form (đồng ý bằng văn bản)
2. ✅ Giải thích rõ ảnh dùng để làm gì
3. ✅ Cho phép họ từ chối
4. ✅ Bảo vệ danh tính trẻ em (có thể che mặt/làm mờ)
5. ✅ Không dùng ảnh gây tổn hại hình ảnh

**FORM ĐỒNG Ý MẪU:**
```
Tôi đồng ý cho [Tên Tổ Chức] sử dụng ảnh của tôi/con tôi 
trên website và tài liệu truyền thông để giới thiệu các 
chương trình. Tôi hiểu rằng ảnh sẽ được công khai.

Tên: _______________ 
Chữ ký: _______________ 
Ngày: _______________
```

## 📱 Hình Ảnh Responsive

Tất cả hình trong website đã được code responsive:

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

Có nghĩa là:
- ✅ Tự động co giãn theo màn hình
- ✅ Không bị méo trên mobile
- ✅ Load nhanh

## 🎯 Checklist Trước Khi Upload

- [ ] Ảnh có liên quan đến nội dung
- [ ] Kích thước phù hợp (không quá lớn)
- [ ] Đã nén qua TinyPNG
- [ ] Tên file rõ ràng, không dấu
- [ ] Có alt text mô tả
- [ ] Kiểm tra bản quyền (miễn phí/có phép)
- [ ] Nếu là ảnh người: có consent form
- [ ] Chất lượng tốt, không bị mờ

## 💡 Mẹo Chuyên Nghiệp

1. **Màu sắc nhất quán**: Chọn ảnh có tone màu giống nhau
2. **Chủ đề rõ ràng**: Ảnh phải phản ánh đúng chương trình
3. **Con người**: Ưu tiên ảnh có người (tạo kết nối cảm xúc)
4. **Địa phương**: Tốt nhất là ảnh thật từ Nigeria/địa phương
5. **Chân thực**: Tránh ảnh quá "stock photo" (giả tạo)

## 🔄 Cập Nhật Website Với Hình Ảnh

Sau khi có ảnh, tôi đã tạo file `UPDATE-IMAGES.md` với code HTML cụ thể để thêm ảnh vào từng trang.

## 📞 Gợi Ý Nếu Chưa Có Ảnh Thật

**Giai đoạn đầu:**
1. Dùng ảnh stock từ Unsplash/Pexels
2. Chọn ảnh "chân thực", không quá đẹp
3. Ghi rõ: "Representative image" ở caption

**Khi có ngân sách:**
1. Thuê photographer địa phương
2. Tự chụp ảnh các hoạt động
3. Nhờ tình nguyện viên có kỹ năng

**Chi phí ảnh thật ở Nigeria:**
- Photographer 1 ngày: ~₦30,000-50,000
- Hoặc nhờ tình nguyện viên: Miễn phí
- Phone camera tốt (iPhone/Samsung): Đủ dùng!

## ✅ Tổng Kết

1. Vào **Unsplash/Pexels**
2. Tìm ảnh phù hợp với từ khóa gợi ý
3. Tải về, nén qua **TinyPNG**
4. Đặt vào thư mục `images/`
5. Cập nhật HTML theo file `UPDATE-IMAGES.md`
6. Test trên mobile & desktop

**Nếu cần giúp thêm về hình ảnh cụ thể nào, hãy hỏi tôi!**

