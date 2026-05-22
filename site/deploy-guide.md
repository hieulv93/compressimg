# Deploy Guide — compressimg.pro

**Project dir:** `d:\Work\Project\image-compressor`  
**GitHub:** hieulv93/compressimg  
**Live:** https://compressimg.pro  
**Vercel:** auto-deploy khi push lên branch `main`

---

## BƯỚC 1 — Di chuyển vào thư mục dự án

```bash
cd d:/Work/Project/image-compressor
```

---

## BƯỚC 2 — Kiểm tra TypeScript (không sinh ra file)

Phát hiện lỗi type trước khi build. Nếu có lỗi → sửa trước khi qua bước 3.

```bash
npx tsc --noEmit
```

**Kết quả bình thường:** không có output (im lặng = không lỗi)  
**Kết quả lỗi:** danh sách file + dòng lỗi → sửa trước khi tiếp tục

---

## BƯỚC 3 — Build production

```bash
npm run build
```

**Kết quả bình thường:**
```
✓ Compiled successfully
✓ Generating static pages (65/65)
```

**Kết quả lỗi:** thông báo đỏ → đọc dòng lỗi, sửa file, chạy lại bước 3

> Nếu số trang thay đổi (ví dụ 65 → 68) = đã thêm page mới → bình thường

---

## BƯỚC 4 — Kiểm tra file đã thay đổi

```bash
git status
```

Xem danh sách file đã sửa. Dùng để chọn đúng file stage ở bước 5.

```bash
git diff
```

Xem chi tiết nội dung thay đổi (trước khi stage).

---

## BƯỚC 5 — Stage các file cần commit

Stage từng file cụ thể (KHÔNG dùng `git add .` để tránh commit file thừa):

```bash
git add src/components/tool/TenFileVuaSua.tsx
git add src/app/ten-page/page.tsx
git add src/app/ten-page/layout.tsx
```

Hoặc stage tất cả file trong 1 folder:

```bash
git add src/components/tool/
git add src/app/ten-page/
```

Kiểm tra lại những gì sắp commit:

```bash
git diff --staged
```

---

## BƯỚC 6 — Commit

```bash
git commit -m "feat: mô tả ngắn gọn việc đã làm"
```

**Prefix thường dùng:**
- `feat:` — thêm tính năng / page mới
- `fix:` — sửa lỗi
- `content:` — cập nhật nội dung SEO
- `perf:` — cải thiện performance
- `seo:` — thay đổi metadata / schema

---

## BƯỚC 7 — Push lên GitHub → Vercel tự deploy

```bash
git push
```

**Vercel sẽ tự động:**
1. Nhận code từ GitHub
2. Chạy `npm run build`
3. Deploy lên https://compressimg.pro

---

## BƯỚC 8 — Verify deploy

Kiểm tra Vercel đã deploy thành công:

```bash
# Xem commit mới nhất đã push chưa
git log --oneline -5
```

Sau đó mở trình duyệt kiểm tra trang live (chờ ~1-2 phút sau push):
- https://compressimg.pro
- https://compressimg.pro/ten-page-vua-them/

---

## TOÀN BỘ FLOW (copy-paste nhanh)

```bash
cd d:/Work/Project/image-compressor
npx tsc --noEmit
npm run build
git status
git add src/path/to/file.tsx
git diff --staged
git commit -m "feat: mô tả"
git push
```

---

## XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi TypeScript: `Type 'X' is not assignable to type 'Y'`
→ Sửa file được chỉ ra, chạy lại `npx tsc --noEmit`

### Lỗi build: `Module not found`
→ Kiểm tra tên file import có đúng không (case-sensitive trên Linux)

### Build pass nhưng Vercel fail
→ Vào Vercel Dashboard → Deployments → xem log build của Vercel

### Vercel không deploy tự động
→ Kiểm tra `git push` đã thành công chưa: `git log --oneline -1`  
→ Vào GitHub kiểm tra commit đã lên chưa

### Muốn xem số page hiện tại
```bash
find src/app -name "page.tsx" | wc -l
```

---

## THÔNG TIN QUAN TRỌNG

| Mục | Giá trị |
|---|---|
| Node version | 18+ |
| Package manager | npm |
| Build output | `out/` folder |
| Sitemap | tự generate sau build (`public/sitemap-0.xml`) |
| Trailing slash | `true` (tất cả URL có `/` cuối) |
| AdSense ID | `ca-pub-5429920062430374` |
| GA4 ID | `G-D2SQQET6RC` |
