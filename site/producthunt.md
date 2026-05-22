# Product Hunt Launch Plan — CompressImg.pro
**Launch date:** 13/5/2026 (Wednesday) — 12:01 AM PST = 14:01 Vietnam time  
**Product:** https://compressimg.pro  
**Category:** Productivity / Design Tools

---

## 1. PRODUCT LISTING

### Name
CompressImg

### Tagline (60 chars max)
```
Compress images in your browser — files never leave your device
```
_(60 chars chính xác — đừng đổi)_

### Description (260 chars max)
```
Free image compressor for JPG, PNG & WebP. Reduce file size up to 90% with no quality loss. 100% browser-based — your photos never touch a server. No sign-up, no watermarks, no limits. Crop, resize & convert too.
```

### Topics / Categories (chọn đúng 3)
1. **Productivity**
2. **Design Tools**
3. **Privacy**

_(Chọn Privacy thay vì Developer Tools — Privacy là USP chính, audience rộng hơn)_

---

## 2. GALLERY — ảnh cần chuẩn bị (theo thứ tự hiện trên PH)

| # | Ảnh | Nội dung |
|---|---|---|
| 1 | **Hero screenshot** | Tool chính `/compress-image` — kéo file vào, show result card với "Saved 73%" |
| 2 | **Privacy angle** | Split screen: "Your files stay here 🔒" vs icon server gạch chéo |
| 3 | **Multi-tool** | Grid 4 ô: Compress / Resize / Crop / Convert — show breadth |
| 4 | **Mobile UX** | iPhone screenshot `/compress-image` — drag & drop on mobile |
| 5 | **Speed proof** | Before/after: 3.2MB → 280KB trong 1.4s (screenshot thật từ tool) |

**Kích thước:** 1270×952px hoặc 1270×760px (PNG hoặc JPG)

---

## 3. FOUNDER COMMENT (đăng ngay sau khi live — quan trọng nhất)

```
Hi Product Hunt! 👋

I built CompressImg after hitting a wall with every image compressor I tried:
either they upload your files to a server (privacy nightmare for client work),
or they're so slow the tab freezes mid-compression.

So I built one that does everything in your browser — Web Worker handles 
the heavy lifting so the UI stays responsive, and your files literally 
never leave your device.

What's inside:
→ Compress JPG, PNG, WebP, HEIC, GIF (up to 90% smaller)
→ Resize, crop, and convert images
→ Batch compress multiple files at once
→ Works with drag & drop, click, or Ctrl+V paste
→ LCP under 2s on mobile 3G

Zero sign-up. Zero watermarks. Zero server uploads.

I'm a solo developer — built this in my spare time because the tools I 
needed didn't exist the way I wanted them to. Currently free, monetized 
only through non-intrusive ads that appear after compression (never before, 
never during).

Would genuinely love your feedback — especially:
- Is there a compression use case this doesn't cover?
- How's mobile UX for you?

🔗 https://compressimg.pro/compress-image

Thanks for hunting this! 🙏
```

---

## 4. REPLY TEMPLATES — cho comments trong ngày launch

### Khi được hỏi "how does it work?"
```
It uses the browser-image-compression library running inside a Web Worker, 
so compression happens off the main thread — that's why the UI stays smooth 
even on large files. For HEIC it uses heic2any, for GIF it uses gifuct-js. 
All processing stays local, nothing is sent to any server.
```

### Khi được hỏi "what's next?"
```
Working on: batch download as ZIP, more format conversions (AVIF, TIFF), 
and possibly a browser extension. Open to suggestions — what would make 
this part of your daily workflow?
```

### Khi có feedback tích cực
```
Really appreciate that — this is exactly the use case I built it for. 
Let me know if you hit any edge cases and I'll fix them!
```

### Khi có feature request
```
Great idea — added to the backlog. If enough people ask for this I'll 
prioritize it. What's your main use case for [feature]?
```

---

## 5. BACKLINK VALUE từ Product Hunt

Product Hunt listing tạo backlinks từ:
- `producthunt.com/posts/compressimg` — DA ~90
- `producthunt.com/r/...` — mỗi upvote/comment có thể tạo thêm ref traffic
- Nếu lọt top 5 ngày → featured trên newsletter PH (~50K subscribers)
- Nhiều media tech (TechCrunch, The Next Web) pick up từ PH top products

**Mục tiêu thực tế:** Top 10 trong ngày → 200-500 upvotes → 50-200 visits organic

---

## 6. PRE-LAUNCH CHECKLIST (làm trước 12/5)

### Tài khoản PH
- [ ] Tạo tài khoản producthunt.com (nếu chưa có) — cần tối thiểu 1 tuần tuổi để post
- [ ] Điền đầy đủ profile: avatar, bio, link website
- [ ] Follow 20-30 người trong niche (creator tools, productivity)
- [ ] Comment/upvote 5-10 sản phẩm khác để account không bị flag là spam

### Assets
- [ ] Chuẩn bị 5 ảnh gallery (xem mục 2)
- [ ] Logo PNG 240×240px (transparent background)
- [ ] OG thumbnail 630×400px cho social share

### Network
- [ ] Nhắn 10-15 bạn bè/đồng nghiệp báo trước ngày launch, nhờ upvote vào 14:01 VN time
- [ ] Chuẩn bị post trên Twitter/X ngay khi launch live
- [ ] Post trong group Facebook/Slack developer VN

### Technical
- [ ] Test toàn bộ flow trên mobile trước ngày launch
- [ ] Đảm bảo site không down — kiểm tra Vercel status
- [ ] Tắt maintenance mode nếu có

---

## 7. LAUNCH DAY TIMELINE (13/5)

| Giờ VN | Action |
|---|---|
| **14:01** | PH listing live — đăng Founder Comment ngay lập tức |
| **14:05** | Post Twitter: "We just launched on Product Hunt 🚀 [link]" |
| **14:10** | Nhắn cá nhân cho 10-15 người nhờ upvote (Messenger/Zalo/Slack) |
| **14:01–16:00** | Reply NGAY mọi comment trong 2 tiếng đầu — PH algorithm ưu tiên engagement |
| **18:00** | Check ranking — nếu top 10: post thêm lên mạng xã hội |
| **Cả ngày** | Reply mọi comment trong vòng 30 phút |
| **23:59** | Cảm ơn community, tổng kết số upvotes |

---

## 8. CLICK-THUMB.COM — Launch riêng sau (20/5 hoặc 27/5)

click-thumb.com launch riêng sau compressimg 1-2 tuần.  
Tagline gợi ý: `"Design YouTube thumbnails that actually get clicked — free, no Canva needed"`  
Angle: privacy + no sign-up + creator-focused community trên PH sẽ hưởng ứng tốt.

---

## 9. POST-LAUNCH — tận dụng backlink

Sau khi PH listing live (dù launch có thành công hay không):
1. **Link từ README** nếu có GitHub repo
2. **Link trong footer** compressimg.pro: "Featured on Product Hunt" badge
3. **Thêm vào About page**: "Used by X developers after Product Hunt launch"
4. **Embed PH badge** vào homepage — signal trust cho Google

Badge code:
```html
<a href="https://www.producthunt.com/posts/compressimg" target="_blank">
  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=YOUR_POST_ID&theme=light" 
       alt="CompressImg on Product Hunt" width="250" height="54" />
</a>
```
_(Thay YOUR_POST_ID sau khi submit)_
