# Hướng Dẫn Website Tổ Chức Phi Lợi Nhuận

## 🎯 Giới Thiệu

Website này được thiết kế chuyên nghiệp cho các tổ chức phi lợi nhuận ở Nigeria, đặc biệt phù hợp để đăng ký Google Workspace for Nonprofits. Website bao gồm tất cả các yếu tố mà Google yêu cầu để chứng minh tổ chức của bạn là hợp pháp và đáng tin cậy.

## 📁 Cấu Trúc Website

Website có 8 trang riêng biệt:

1. **index.html** - Trang chủ: Giới thiệu tổng quan về tổ chức
2. **about.html** - Về chúng tôi: Lịch sử, đội ngũ, Ban Giám Đốc, chính sách
3. **programs.html** - Chương trình: 4 chương trình chi tiết với số liệu cụ thể
4. **impact.html** - Tác động: Báo cáo năm, số liệu thống kê, câu chuyện thành công
5. **get-involved.html** - Tham gia: Quyên góp, tình nguyện, hợp tác doanh nghiệp
6. **contact.html** - Liên hệ: Thông tin liên lạc, form liên hệ, FAQ
7. **privacy.html** - Chính sách bảo mật: Tuân thủ NDPR Nigeria
8. **terms.html** - Điều khoản sử dụng: Quy định sử dụng website

## ✅ Tại Sao Website Này Phù Hợp Với Google Workspace

### 1. Thông Tin Pháp Lý Đầy Đủ
- ✅ Số đăng ký CAC (Corporate Affairs Commission) hiển thị rõ ràng
- ✅ Mã số thuế FIRS được ghi rõ
- ✅ Tình trạng miễn thuế được xác nhận
- ✅ Địa chỉ văn phòng cụ thể

### 2. Quản Trị Minh Bạch
- ✅ Ban Giám Đốc với thông tin chi tiết từng thành viên
- ✅ Đội ngũ lãnh đạo với bằng cấp và kinh nghiệm
- ✅ Cơ cấu tổ chức rõ ràng
- ✅ Các chính sách và quy định đầy đủ

### 3. Chương Trình Cụ Thể & Đo Lường Được
Mỗi chương trình bao gồm:
- Mục tiêu và đối tượng hưởng lợi cụ thể
- Các hoạt động chi tiết
- Số liệu thống kê thực tế (số người được hỗ trợ, ngân sách, vị trí)
- Đối tác thực hiện
- Câu chuyện thành công có tên và địa danh cụ thể

### 4. Minh Bạch Tài Chính
- ✅ Phân bổ ngân sách rõ ràng (82% cho chương trình)
- ✅ Nguồn thu chi tiết
- ✅ Báo cáo kiểm toán độc lập
- ✅ Báo cáo thường niên

### 5. Tính Chuyên Nghiệp
- ✅ Thiết kế đẹp, dễ sử dụng
- ✅ Tương thích mobile
- ✅ Tốc độ tải nhanh
- ✅ Không có lỗi kỹ thuật

## 🔧 Cách Tùy Chỉnh Cho Tổ Chức Của Bạn

### BƯỚC 1: Thay Đổi Thông Tin Tổ Chức

Mở **TẤT CẢ các file HTML** và tìm kiếm + thay thế:

```
UbuntuCare Initiative → Tên tổ chức của bạn
CAC/IT/NO 123456 → Số CAC thật của bạn
12345678-0001 → Mã số thuế thật của bạn
Lagos → Thành phố của bạn
```

### BƯỚC 2: Cập Nhật Thông Tin Liên Lạc

Trong **TẤT CẢ các file**, thay đổi:

```
impact@ubuntucare.ng → email thật của bạn
info@ubuntucare.ng → email thật của bạn
+234 (0) 701 234 5678 → số điện thoại thật
12B Adeola Odeku Street, Victoria Island, Lagos → địa chỉ thật
```

Và trong file `js/script.js` (dòng 81):
```javascript
window.location.href = `mailto:info@ubuntucare.ng?...
```
Đổi thành email của bạn.

### BƯỚC 3: Sửa Nội Dung Về Tổ Chức (about.html)

1. **Lịch sử tổ chức** (dòng 25-42):
   - Thay đổi năm thành lập
   - Viết lại câu chuyện thành lập của bạn
   - Cập nhật số liệu hiện tại

2. **Sứ mệnh và Tầm nhìn** (dòng 66-93):
   - Viết sứ mệnh của tổ chức bạn
   - Viết tầm nhìn của bạn
   - Cập nhật các giá trị cốt lõi

3. **Đội ngũ lãnh đạo** (dòng 113-162):
   - Thay tên, chức vụ, và tiểu sử
   - Cập nhật bằng cấp và kinh nghiệm thật

4. **Ban Giám Đốc** (dòng 172-220):
   - Thay tên và thông tin của Ban Giám Đốc
   - Ghi rõ vai trò và chuyên môn

### BƯỚC 4: Viết Lại Các Chương Trình (programs.html)

Đây là phần QUAN TRỌNG NHẤT! Mỗi chương trình cần:

**Thông tin bắt buộc:**
- Tên chương trình cụ thể
- Mục tiêu rõ ràng
- Ai được hưởng lợi (đối tượng cụ thể)
- Hoạt động chi tiết
- Địa điểm thực hiện
- Số liệu thống kê THẬT (số người, ngân sách, thời gian)
- Đối tác (nếu có)
- Ít nhất 1 câu chuyện thành công với tên (đã có sự đồng ý)

**Ví dụ con số thật:**
```
Thay vì: "5,247 families" 
Nên ghi: Số gia đình THẬT mà bạn đã hỗ trợ

Thay vì: "₦68M total revenue"
Nên ghi: Tổng doanh thu THẬT từ các dự án
```

### BƯỚC 5: Cập Nhật Số Liệu Tác Động (impact.html)

1. **Thống kê tổng quan** (dòng 33-56):
   - Số người được hỗ trợ THẬT
   - Số bữa ăn/học sinh/bệnh nhân THẬT
   - Các con số phải trung thực

2. **Timeline** (dòng 87-142):
   - Viết lịch sử phát triển THẬT của tổ chức
   - Các mốc quan trọng
   - Thành tựu cụ thể

3. **Báo cáo tài chính** (dòng 174-224):
   - Cập nhật nguồn thu thật
   - Chi tiêu thật theo từng hạng mục
   - Tên công ty kiểm toán thật (nếu có)

### BƯỚC 6: Thay Đổi Màu Sắc & Logo

Mở file `css/styles.css`, tìm dòng 1-12:

```css
:root {
  --primary: #1f6feb;      /* Màu chính của bạn */
  --primary-dark: #1749a1; /* Màu tối hơn */
  --accent: #ffb830;       /* Màu nhấn */
}
```

**Thay logo chữ "U":**
Trong tất cả các file HTML, tìm:
```html
<div class="logo-mark" aria-hidden="true">U</div>
```
Đổi "U" thành chữ cái đầu của tổ chức bạn.

### BƯỚC 7: Cập Nhật Mạng Xã Hội

Trong footer của TẤT CẢ các file HTML, tìm và cập nhật:

```html
<a href="https://instagram.com/your-handle">Instagram</a>
<a href="https://linkedin.com/company/your-org">LinkedIn</a>
<a href="https://twitter.com/your-handle">Twitter</a>
<a href="https://facebook.com/your-page">Facebook</a>
```

## 📋 Checklist Trước Khi Đăng Ký Google Workspace

### ✅ Thông Tin Pháp Lý
- [ ] Số CAC đã cập nhật và đúng
- [ ] Mã số thuế đã cập nhật
- [ ] Địa chỉ văn phòng là địa chỉ thật
- [ ] Số điện thoại có thể liên lạc được

### ✅ Nội Dung Tổ Chức
- [ ] Sứ mệnh và tầm nhìn đã được viết lại
- [ ] Thông tin đội ngũ là thật (tên, chức vụ, bằng cấp)
- [ ] Ban Giám Đốc là người thật với thông tin có thể kiểm chứng
- [ ] Lịch sử tổ chức là chính xác

### ✅ Chương Trình
- [ ] Tất cả số liệu là THẬT (không phóng đại)
- [ ] Địa điểm hoạt động là cụ thể
- [ ] Đối tác là tổ chức thật (nếu có)
- [ ] Câu chuyện thành công có tên và đã được đồng ý

### ✅ Tài Chính
- [ ] Con số ngân sách là chính xác
- [ ] Phân bổ chi tiêu phản ánh thực tế
- [ ] Nguồn thu được ghi đúng
- [ ] Có báo cáo tài chính (nếu có)

### ✅ Liên Hệ
- [ ] Email hoạt động và được kiểm tra thường xuyên
- [ ] Số điện thoại có người trả lời
- [ ] Form liên hệ gửi đến email đúng
- [ ] Mạng xã hội là tài khoản thật (nếu có)

## 🚀 Cách Đưa Website Lên Internet

### Lựa Chọn 1: GitHub Pages (MIỄN PHÍ - Khuyên Dùng)

1. Tạo tài khoản tại [github.com](https://github.com)
2. Tạo repository mới (ví dụ: `my-ngo-website`)
3. Upload tất cả file lên repository
4. Vào Settings → Pages
5. Chọn branch `main` và folder `/ (root)`
6. Website sẽ có địa chỉ: `https://yourname.github.io/my-ngo-website`

### Lựa Chọn 2: Netlify (MIỄN PHÍ - Dễ Nhất)

1. Truy cập [netlify.com](https://netlify.com)
2. Kéo thả thư mục website vào Netlify
3. Website tự động có HTTPS
4. Địa chỉ: `https://random-name.netlify.app`
5. Có thể đổi thành tên miền riêng

### Lựa Chọn 3: Cloudflare Pages (MIỄN PHÍ)

1. Đăng ký tại [pages.cloudflare.com](https://pages.cloudflare.com)
2. Kết nối với GitHub repository
3. Website tự động deploy
4. Tốc độ rất nhanh trên toàn cầu

### Lựa Chọn 4: Hosting Nigeria (TRẢ PHÍ nhưng ổn định)

- **Whogohost** (~₦10,000/năm): hosting phổ biến ở Nigeria
- **Qservers** (~₦12,000/năm): đáng tin cậy
- **Web4Africa** (~₦8,000/năm): rẻ, support tốt

## 💡 Lưu Ý Quan Trọng

### ⚠️ KHÔNG BÀO GIỜ:
- ❌ Phóng đại số liệu
- ❌ Dùng ảnh không có phép
- ❌ Nói dối về đối tác
- ❌ Đặt tên người không có sự đồng ý
- ❌ Copy nội dung từ tổ chức khác

### ✅ NÊN LÀM:
- ✅ Dùng số liệu thật, có thể chứng minh
- ✅ Xin phép trước khi đăng ảnh/tên người
- ✅ Viết câu chuyện thật từ beneficiaries
- ✅ Cập nhật thông tin thường xuyên
- ✅ Kiểm tra kỹ trước khi đăng

## 📞 Hỗ Trợ

### Nếu Gặp Vấn Đề Kỹ Thuật:
1. Đọc kỹ file README.md (tiếng Anh)
2. Kiểm tra các comment trong code HTML
3. Dùng trình duyệt Developer Tools (F12) để debug

### Các Lỗi Thường Gặp:

**Lỗi 1: Form liên hệ không hoạt động**
- Kiểm tra email trong `js/script.js` đã đúng chưa
- Form sẽ mở ứng dụng email (Gmail, Outlook)

**Lỗi 2: Menu mobile không đóng/mở**
- Đảm bảo file `js/script.js` đã được link đúng
- Kiểm tra Console (F12) xem có lỗi JavaScript không

**Lỗi 3: Số liệu không chạy (animate)**
- Cần có thuộc tính `data-target="123"` trong HTML
- Ví dụ: `<p class="stat" data-target="1000">0</p>`

## 🎯 Sau Khi Hoàn Thành

1. **Kiểm tra kỹ trên nhiều thiết bị:**
   - Desktop (Chrome, Firefox, Edge)
   - Mobile (iOS Safari, Android Chrome)
   - Tablet

2. **Test tất cả tính năng:**
   - [ ] Tất cả link hoạt động
   - [ ] Form liên hệ gửi email đúng
   - [ ] Menu mobile mở/đóng được
   - [ ] Số liệu chạy khi scroll
   - [ ] Không có lỗi chính tả

3. **Chuẩn bị đăng ký Google Workspace:**
   - Domain name (nếu có) đã trỏ đúng
   - Email info@domain.com sẵn sàng
   - Tài liệu pháp lý scan sẵn (CAC certificate)

## 🏆 Tỷ Lệ Chấp Nhận Cao

Nếu bạn làm theo hướng dẫn này và cung cấp thông tin THẬT, CHÍNH XÁC, cơ hội được Google chấp nhận rất cao vì:

1. ✅ Website chuyên nghiệp, đầy đủ thông tin
2. ✅ Cấu trúc rõ ràng, dễ kiểm chứng
3. ✅ Minh bạch về tài chính và quản trị
4. ✅ Chương trình cụ thể với số liệu đo lường được
5. ✅ Tuân thủ đầy đủ các chính sách (Privacy, Terms)

## ✨ Chúc Bạn Thành Công!

Website này là nền tảng vững chắc cho tổ chức phi lợi nhuận của bạn. Hãy dành thời gian cập nhật kỹ lưỡng với thông tin thật, và bạn sẽ có một website đáng tin cậy để phát triển tổ chức và đăng ký các chương trình hỗ trợ như Google Workspace for Nonprofits.

---

**Lưu ý cuối cùng:** Tính trung thực và minh bạch là giá trị cốt lõi của tổ chức phi lợi nhuận. Đừng bao giờ hy sinh điều đó vì bất kỳ lý do gì!

