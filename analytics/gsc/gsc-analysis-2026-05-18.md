# Phân tích GSC — compressimg.pro
**Ngày phân tích:** 2026-05-18
**Kỳ dữ liệu:** ~3 tháng gần nhất (data bắt đầu từ ~17/4/2026, site ~1 tháng tuổi)

---

## Tổng quan

| Metric | Giá trị | Đánh giá |
|---|---|---|
| Total Clicks | 6 | Rất thấp |
| Total Impressions | 1,250 | Thấp nhưng đang tăng |
| Average CTR | 0.5% | Rất kém (benchmark 2–5%) |
| Average Position | 37.5 | Trang 4 — quá xa top 10 |
| Indexed pages | 67 | ✅ Sitemap submit 65 — gần khớp |
| Not indexed | 31 | ⚠️ Cần xử lý |

Site là mới (data chỉ bắt đầu từ ~17/4/2026, ~1 tháng tuổi). Impressions có xu hướng tăng đều — Google đang dần khám phá site, đây là tín hiệu tốt.

---

## 1. Chẩn đoán Indexing — 31 trang không được index

| Lý do | Số trang | Ưu tiên xử lý |
|---|---|---|
| Trang có lệnh chuyển hướng (redirect) | 17 | 🟡 Trung bình — review xem redirect có cần thiết không |
| Trang thay thế có thẻ canonical thích hợp | 9 | 🟢 Bình thường — duplicate được canonical đúng |
| Lỗi chuyển hướng | 3 | 🔴 Cao — phải fix redirect loops/chains |
| Đã phát hiện – hiện chưa được lập chỉ mục | 2 | 🟡 Cần cải thiện internal linking |
| Đã thu thập – chưa lập chỉ mục | 0 | ✅ Không có vấn đề chất lượng nội dung |

**Hành động ngay:** Click vào "Lỗi chuyển hướng" (3 trang) trong GSC → xem URL cụ thể → fix redirect chain hoặc loop.

---

## 2. Top Queries — Vấn đề CTR cực thấp

| Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| twitter image quality | 1 | 25 | 0% | 4.0 ⭐ |
| does teams compress images | 0 | 52 | 0% | 8.1 |
| does slack compress images | 0 | 52 | 0% | 9.1 |
| jpg to webp | 0 | 29 | 0% | 117.1 |
| png to jpg convertissima.online | 0 | 26 | 0% | 126.7 |
| does slack reduce image quality | 0 | 17 | 0% | 7.9 |
| compressimg (brand) | 0 | 17 | 0% | 12.2 |
| compress image to 100kb | 0 | 10 | 0% | 65.7 |

**Insights quan trọng:**
- Vấn đề lớn nhất: Có 4 query đang ở top 10 (position 7–12) nhưng CTR = 0% — title/meta description không hấp dẫn, cần A/B test lại.
- Brand search "compressimg" position 12.2 với 0 click — site chưa có authority cho chính brand name. Cần submit URL/site links.
- Nhiều query rất xa (position 100+) như jpg to webp, png to webp convertissima.online — đang được serve nhưng không xếp hạng nổi.
- Tổng cộng 265 queries đang có impressions — pool query khá đa dạng.

---

## 3. Top Pages

| URL | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| /compress-image-for-linkedin | 2 | 67 | 3.0% | 9.5 |
| /compress-image-for-youtube/ | 2 | 56 | 3.6% | 12.7 |
| / (homepage) | 2 | 111 | 8.2% | 6.0 ⭐ |
| /blog/why-photos-look-blurry-social-media/ | 1 | 105 | 1.0% | 9.6 |
| /compress-image-for-slack/ | 0 | 195 | 0% | 8.8 ❌ |
| /compress-image-for-teams/ | 0 | 192 | 0% | 8.3 ❌ |
| /compress-image-to-100kb | 0 | 80 | 0% | 67.8 |
| /compress-gif-online/ | 0 | 45 | 0% | 83.6 |
| /jpg-to-webp/ | 0 | 35 | 0% | 115.8 |

**Vấn đề nổi cộm:**
- `/compress-image-for-slack/` và `/compress-image-for-teams/` có gần 400 impressions kết hợp, position 8–9 (top 10!) nhưng 0 clicks → title/meta SEO bị lỗi nặng. **Đây là quick-win lớn nhất.**
- Có sự pha trộn cả `https://compressimg.pro/` và `https://www.compressimg.pro/` trong top pages → cần xác minh canonical version đã chọn đúng chưa (xem 17 redirect ở phần Indexing có thể liên quan).

---

## 4. Quốc gia

| Quốc gia | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| Hoa Kỳ (US) | 2 | 458 | 0.4% | 32.6 |
| Việt Nam | 2 | 27 | 7.4% | 17.3 |
| Nam Phi | 1 | 91 | 1.1% | 27.1 |
| Đài Loan | 1 | 52 | 0% | 6.6 |
| Ấn Độ | 0 | 122 | 0% | 44.0 |
| UK | 0 | 65 | 0% | 29.1 |
| Canada | 0 | 54 | 0% | 40.0 |
| Úc | 0 | 47 | 0% | 45.8 |
| Pakistan | 0 | 34 | 0% | 42.2 |

US chiếm ~37% impressions nhưng position 32.6 → cần content English chất lượng hơn. Việt Nam CTR cao (7.4%) cho thấy có thể có ngách tiếng Việt tiềm năng.

---

## 5. Thiết bị

| Thiết bị | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| Máy tính (Desktop) | 5 | 1,116 | 0.4% | 40.7 |
| Mobile | 1 | 131 | 0.8% | 10.3 ⭐ |
| Tablet | 0 | 2 | 0% | 1.0 |

**Phát hiện thú vị:** Position trên Mobile (10.3) tốt hơn Desktop (40.7) RẤT NHIỀU. Có thể do mobile có ít competitor hoặc Google ưu tiên mobile-first version của site. Tận dụng bằng cách tối ưu mobile UX để tăng CTR mobile.

---

## 6. Sitemap & Technical

- ✅ Sitemap `sitemap.xml` submit thành công ngày 21/4/2026, đọc cuối 15/5/2026
- ✅ 65 URLs được khám phá từ sitemap → khớp với 67 indexed (overhead 2 URL)
- ⚠️ Core Web Vitals: chưa đủ data 90 ngày (site quá mới)

---

## Khuyến nghị hành động (theo độ ưu tiên)

### 🔴 Ưu tiên cao — Quick wins

1. **Fix CTR cho 2 trang Slack/Teams:** position 8–9 nhưng 0 clicks → rewrite `<title>` và meta description cho `/compress-image-for-slack/` và `/compress-image-for-teams/`. Tiềm năng ~10–20 clicks/tháng từ 2 trang này.
2. **Fix 3 lỗi chuyển hướng** trong Indexing report.
3. **Thống nhất domain canonical:** chọn `compressimg.pro` hoặc `www.compressimg.pro` rồi 301 redirect — hiện tại đang có cả hai trong top pages.

### 🟡 Ưu tiên trung bình

4. **Brand SEO:** "compressimg" query position 12.2 — submit homepage qua URL Inspection → Request indexing, thêm Organization schema markup.
5. Trang `/compress-image-to-100kb` có 80 impressions ở position 67.8 — đây là keyword high-intent, đáng tối ưu nội dung để leo lên top 20.
6. Review 17 trang redirect — nếu là old URLs không cần thiết thì xóa khỏi sitemap.

### 🟢 Ưu tiên dài hạn

7. Mở rộng nội dung cho query có intent cao như "does teams/slack compress images" (đã có position 8–9, cần thêm authority).
8. Xây dựng backlinks — site mới cần authority để leo từ position 30+ lên top 10.
9. Sau 90 ngày: revisit Core Web Vitals để có data.
