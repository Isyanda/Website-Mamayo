# 🎨 Dokumentasi Styling Per Halaman

Setiap halaman di MAMAYO memiliki identitas visual yang unik dan konsisten dengan brand.

---

## 📱 1. HOME (s-home) - Dark Theme dengan Orange Accent

**Warna Utama:**
- Background: Dark gradient (#1C1C1E → #2D2D30)
- Accent: Orange (#F47C20)
- Content: Cream (#FDF8F3)

**Fitur Styling:**
- Hero section dengan gradient background
- Menu cards dengan smooth transition
- Active state dengan scale down effect
- Foto toko asli di profil toko

**Visual Elements:**
```
┌─────────────────────────────────┐
│ 🎬 HERO SECTION (Dark Gradient) │
│ ├─ Logo: MA[MAYO]               │
│ ├─ Foto Toko (100x100px)         │
│ ├─ Deskripsi & Kontak           │
│ └─ Status Toko: BUKA 🟢          │
├─────────────────────────────────┤
│ MENU KAMI                        │
│ ├─ [Risol Mentai] [Risol Mayo]  │
│ ├─ [Risol Mercon] [Risol Reg]   │
│ └─ ... (6 produk dalam grid 2x3)│
└─────────────────────────────────┘
```

**CSS Classes:**
- `.home-hero` - Dark gradient background
- `.menu-grid-2col` - 2-column grid layout
- `.menu-card` - Card dengan hover effect
- `.hero-photo` - Foto toko dengan border putih

---

## 📝 2. DAFTAR (s-daftar) - Clean Minimal Theme

**Warna Utama:**
- Background: Gradient putih ke cream
- Input: White dengan shadow subtle
- Focus: Orange glow

**Fitur Styling:**
- Clean form layout
- Soft shadows pada input
- Smooth focus transitions
- Minimal color palette

**Visual Elements:**
```
┌─────────────────────────────────┐
│ MA[MAYO]                        │
│ Buat akun untuk mulai memesan   │
├─────────────────────────────────┤
│ DAFTAR                          │
│                                 │
│ [Nama Lengkap]                  │
│ [Email]                         │
│ [Password]                      │
│ [OTP]                           │
│                                 │
│ [📝 DAFTARKAN AKUN]             │
│                                 │
│ Sudah punya akun? Login di sini │
└─────────────────────────────────┘
```

**CSS Classes:**
- `#s-daftar` - Gradient background
- `.form-input` - White input dengan shadow
- `.form-input:focus` - Orange glow effect

---

## 🔑 3. MASUK (s-masuk) - Login Theme

**Warna Utama:**
- Background: Gradient putih ke cream
- Focus: Orange highlight
- Checkbox: Interactive state

**Fitur Styling:**
- Login-focused layout
- Remember checkbox dengan hover effect
- "Lupa Password" link styled
- Divider "Atau" untuk alternatif login

**Visual Elements:**
```
┌─────────────────────────────────┐
│ MA[MAYO]                        │
│ Selamat datang kembali          │
├─────────────────────────────────┤
│ MASUK                           │
│                                 │
│ [Email]                         │
│ [Password]                      │
│                                 │
│ ☑ Ingat Saya                    │
│                                 │
│ [🔑 MASUK]                      │
│        Atau                     │
│ ╳ Lupa Password?                │
│                                 │
│ Belum punya akun? Daftar di sini│
└─────────────────────────────────┘
```

**CSS Classes:**
- `.checkbox` - Interactive checkbox
- `.forgot-link` - Orange password reset link
- `.divider-or` - Visual divider

---

## 🛒 4. PEMESANAN (s-order) - Shopping Cart Theme

**Warna Utama:**
- Topbar: Orange gradient (#F47C20 → #D6640A)
- Cards: White dengan left border orange
- Hover: Shadow + translate effect

**Fitur Styling:**
- Orange gradient topbar
- Product rows dengan left border highlight
- Quantity buttons dengan scale effect
- Summary box dengan gradient background

**Visual Elements:**
```
┌─────────────────────────────────┐
│ ← PEMESANAN 🛒   (Orange Bar)   │
├─────────────────────────────────┤
│ ║ 🥟 Risol Mentai  [- 0 +]      │
│ ║    Rp 2.000 / buah             │
├─────────────────────────────────┤
│ ║ 🥟 Risol Mayo    [- 0 +]      │
│ ║    Rp 2.000 / buah             │
├─────────────────────────────────┤
│ ║ 🌶️  Risol Mercon  [- 0 +]      │
│ ║    Rp 2.000 / buah             │
├─────────────────────────────────┤
│          PESANAN ANDA            │
│ Atas Nama: User                 │
│ ────────────────────────────    │
│ Total Pesanan: Rp 0             │
├─────────────────────────────────┤
│ [💳 BAYAR →]                     │
└─────────────────────────────────┘
```

**CSS Classes:**
- `#s-order .topbar` - Orange gradient
- `.order-row` - White card dengan left border
- `.qty-btn` - Button dengan scale on active
- `.order-summary-box` - Gradient background

---

## 💳 5. KONFIRMASI (s-konfirmasi) - Payment Confirmation Theme

**Warna Utama:**
- Background: White/cream
- Summary box: Orange dashed border
- Payment methods: Interactive states

**Fitur Styling:**
- Dashed border pada summary
- Payment method buttons dengan hover lift
- Active payment method dengan scale effect
- Smooth transitions

**Visual Elements:**
```
┌─────────────────────────────────┐
│ ← KONFIRMASI PEMBAYARAN         │
├─────────────────────────────────┤
│ ╭─ PESANAN ANDA (Dashed Border) │
│ │ Atas Nama: User               │
│ │ Risol Mentai × 3: Rp 6.000   │
│ │ ─────────────────────────    │
│ │ Total Pesanan: Rp 6.000      │
│ ╰─                              │
├─────────────────────────────────┤
│ Pilih Metode Pembayaran         │
│ ┌─────────────────────────────┐ │
│ │ 💚 GO PAY        ✓          │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ 🏦 TRANSFER BANK           │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ 💵 BAYAR DI TEMPAT         │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ [LANJUTKAN PEMBAYARAN]          │
└─────────────────────────────────┘
```

**CSS Classes:**
- `.pay-summary-box` - Dashed orange border
- `.pmethod-btn` - Interactive payment buttons
- `.pmethod-btn.active` - Scale effect

---

## 📱 6. QR CODE (s-qris) - Payment QR Theme

**Warna Utama:**
- Background: Dark gradient dengan orange glow
- QR Box: White dengan pulsing animation
- Amount: Orange gradient

**Fitur Styling:**
- Dark mysterious background
- Pulsing glow animation pada QR box
- Orange gradient untuk amount
- Timer dengan red highlight

**Visual Elements:**
```
┌─────────────────────────────────┐
│ ← KONFIRMASI PEMBAYARAN         │
├─────────────────────────────────┤
│ (Dark Background)               │
│                                 │
│        GO PAY                   │
│ Scan QR Code ini untuk melakukan│
│ pembayaran melalui GO-PAY       │
│                                 │
│      ┌─────────────┐            │
│      │  ┏━━━┓ ≈≈  │   (Pulsing)│
│      │  ┗━┛ ░░░░  │            │
│      │  MAMAYO    │            │
│      └─────────────┘            │
│                                 │
│  Berlaku selama 04:59           │
│  ┌───────────────────────────┐ │
│  │ Total Pembayaran          │ │
│  │ Rp 6.000    (Gradient)    │ │
│  └───────────────────────────┘ │
├─────────────────────────────────┤
│ [✓ KONFIRMASI SUDAH BAYAR]      │
│ [← KEMBALI]                     │
└─────────────────────────────────┘
```

**CSS Classes:**
- `#s-qris` - Dark gradient background
- `.qr-box` - Pulsing animation
- `.qr-amount` - Orange gradient
- Animation: `pulse` 2s infinite

---

## 🏦 7. TRANSFER BANK (s-transfer) - Bank Transfer Theme

**Warna Utama:**
- Topbar: White clean
- Bank tiles: Colorful dengan hover lift
- Info box: Dark header gradient

**Fitur Styling:**
- Colorful bank logos
- Lift effect on hover (translateY)
- Dark gradient header
- Step-by-step instructions

**Visual Elements:**
```
┌─────────────────────────────────┐
│ ← TRANSFER BANK                 │
├─────────────────────────────────┤
│ Pilih Bank Tujuan               │
│ ┌──────┬──────┐                 │
│ │ BCA  │ BNI  │                 │
│ └──────┴──────┘                 │
│ ┌──────┬──────┐                 │
│ │ BRI  │ BSI  │                 │
│ └──────┴──────┘                 │
│ ┌──────┬──────┐                 │
│ │GoPay │ Dana │                 │
│ └──────┴──────┘                 │
├─────────────────────────────────┤
│ 🏦 Bank BCA  (Dark Header)      │
│ ─────────────────────────────  │
│ No. Rekening: 1234567890 [Salin]│
│ Atas Nama: MAMAYO FOOD          │
│ Nominal: Rp 6.000 [Salin]       │
│ Batas Bayar: 28 Mar, 15:30      │
├─────────────────────────────────┤
│ Petunjuk Pembayaran             │
│ ①  Buka aplikasi mobile banking │
│ ②  Pilih Transfer dan masukkan  │
│ ③  Pastikan nominal sesuai      │
├─────────────────────────────────┤
│ [KONFIRMASI] [BATAL]            │
└─────────────────────────────────┘
```

**CSS Classes:**
- `.bank-tile` - Colorful dengan lift effect
- `.transfer-info-box` - Dark border
- `.tib-header` - Dark gradient header
- `.step-num` - Orange circular numbers

---

## ✅ 8. PEMBAYARAN SUKSES (s-sukses) - Success Theme

**Warna Utama:**
- Background: Green gradient (#E3F9E5 → #F0FFF4)
- Icon: Bouncing green circle
- Text: Green color

**Fitur Styling:**
- Green success background
- Animated bouncing success icon
- Green gradient button
- Celebratory animations

**Visual Elements:**
```
┌─────────────────────────────────┐
│ STATUS PEMBAYARAN               │
├─────────────────────────────────┤
│ (Green Gradient Background)     │
│                                 │
│          ⭕ ✅                    │
│         (Bouncing)              │
│                                 │
│    Pembayaran Berhasil!         │
│                                 │
│  Pesanan Anda sedang diproses.  │
│  Terima kasih sudah memesan di  │
│  Mamayo! 🥟                      │
│                                 │
│  Total: Rp 6.000 (Orange)       │
│                                 │
├─────────────────────────────────┤
│ [✓ KEMBALI KE HALAMAN UTAMA]    │
│ [LIHAT RIWAYAT PESANAN]         │
└─────────────────────────────────┘
```

**CSS Classes:**
- `#s-sukses` - Green gradient background
- `.success-icon-big` - Bouncing animation
- `.btn-primary` - Green gradient
- Animation: `popBounce` with scale

---

## 👤 9. PROFIL USER (s-profil-user) - User Profile Theme

**Warna Utama:**
- Header: Dark gradient
- Avatar: Floating animation
- Menu items: Left border highlight

**Fitur Styling:**
- Dark header dengan avatar floating
- Menu items dengan left border on hover
- Active state dengan orange background
- Smooth transitions

**Visual Elements:**
```
┌─────────────────────────────────┐
│ (Dark Gradient Header)          │
│ 👤 Username123  ⚙ Ubah         │
│ Pelanggan · Surabaya            │
├─────────────────────────────────┤
│ ║ 👤 Profil Saya         ›      │
│ ║ 📋 Pesanan Saya        ›      │
│ ║ ❓ Bantuan             ›      │
│ ║ 🚪 Keluar              ›      │
└─────────────────────────────────┘
```

**CSS Classes:**
- `.profile-top-card` - Dark gradient
- `.profile-avatar` - Floating animation
- `.profile-menu-item` - Left border highlight
- Animation: `float` 3s ease-in-out

---

## 📋 10. RIWAYAT PESANAN (s-riwayat) - Order History Theme

**Warna Utama:**
- Topbar: Orange gradient
- Cards: Left border highlight
- Hover: Shadow + border change

**Fitur Styling:**
- Orange gradient topbar
- Cards dengan left border yang berubah on hover
- Smooth shadow transitions
- History list layout

**Visual Elements:**
```
┌─────────────────────────────────┐
│ ← RIWAYAT PESANAN (Orange)      │
├─────────────────────────────────┤
│ ║ 🥟 Pesanan 001               │
│ ║ 28 · 3 · 2026               │
│ ║ [Selesai]            Rp 10K  │
├─────────────────────────────────┤
│ ║ 🌶️  Pesanan 002               │
│ ║ 28 · 3 · 2026               │
│ ║ [Diproses]           Rp 10K  │
├─────────────────────────────────┤
│ ║ 🍫 Pesanan 003               │
│ ║ 28 · 3 · 2026               │
│ ║ [Diproses]           Rp 10K  │
└─────────────────────────────────┘
```

**CSS Classes:**
- `#s-riwayat .topbar` - Orange gradient
- `.riwayat-card` - Left border highlight
- Hover effect: border-left-color change

---

## ⚙️ 11. ADMIN PROFIL (s-admin-profil) - Admin Profile Theme

**Warna Utama:**
- Header: Orange gradient
- Avatar: Rotating animation
- Text: White dengan shadow

**Fitur Styling:**
- Orange gradient header
- Rotating avatar icon
- Admin-specific menu items
- Professional styling

**Visual Elements:**
```
┌─────────────────────────────────┐
│ (Orange Gradient Header)        │
│ 🛠️  Admin123    ⚙ Ubah         │
│ Administrator · Mamayo          │
├─────────────────────────────────┤
│ ║ 👤 Profil            ›        │
│ ║ 🏪 Kelola Toko       ›        │
│ ║ 🚪 Keluar            ›        │
└─────────────────────────────────┘
```

**CSS Classes:**
- `#s-admin-profil .profile-top-card` - Orange gradient
- `.profile-avatar` - Rotating animation
- Animation: `rotate` 20s linear infinite

---

## 🏪 12. KELOLA TOKO (s-admin-toko) - Store Management Theme

**Warna Utama:**
- Topbar: Orange gradient
- Status bar: Orange background dengan border
- Table: Dark header gradient
- Buttons: Color-coded (edit/delete)

**Fitur Styling:**
- Orange gradient topbar
- Status toggle dengan visual feedback
- Styled data table
- Color-coded action buttons

**Visual Elements:**
```
┌─────────────────────────────────┐
│ ← KELOLA TOKO ➕ (Orange Bar)   │
├─────────────────────────────────┤
│ Status Toko     [Tutup / Buka]  │
│ Atur buka/tutup toko    🟢 ON   │
├─────────────────────────────────┤
│                    + TAMBAH PRODUK
│ ┌──────────────────────────────┐│
│ │ No  Produk       Stok  Aksi  ││
│ ├──────────────────────────────┤│
│ │ 1   Risol Mayo   ✓   E  H    ││
│ │ 2   Risol Reg    ⚠   E  H    ││
│ │ 3   Risol Mayo   ✗   E  H    ││
│ │ 4   Risol Beef   ✗   E  H    ││
│ └──────────────────────────────┘│
└─────────────────────────────────┘
```

**CSS Classes:**
- `#s-admin-toko .topbar` - Orange gradient
- `.admin-status-bar` - Orange background
- `.admin-table th` - Dark gradient header
- `.act-edit/.act-del` - Color-coded buttons

---

## ➕ 13. TAMBAH PRODUK (s-admin-tambah) - Add Product Theme

**Warna Utama:**
- Topbar: Orange gradient
- Upload box: Gradient hover effect
- Input: Focus dengan orange glow

**Fitur Styling:**
- Orange gradient topbar
- Upload box dengan smooth hover
- Form inputs dengan focus styling
- Clean form layout

**Visual Elements:**
```
┌─────────────────────────────────┐
│ ← TAMBAH PRODUK (Orange Bar)    │
├─────────────────────────────────┤
│ DATA PRODUK                     │
│                                 │
│ Nama Produk                     │
│ [Contoh: Risol Mentai]          │
│                                 │
│ Stok                            │
│ [Tersedia ▼]                    │
│                                 │
│ Gambar Produk                   │
│ ┌───────────────────────────┐  │
│ │      📷                    │  │
│ │ Klik untuk upload foto     │  │
│ │ PNG, JPG maks. 2MB         │  │
│ └───────────────────────────┘  │
│ [Choose file] Belum ada file   │
│                                 │
│ [💾 SIMPAN PRODUK]              │
│ [BATAL]                         │
└─────────────────────────────────┘
```

**CSS Classes:**
- `#s-admin-tambah .topbar` - Orange gradient
- `.upload-box` - Gradient with hover lift
- `.form-input:focus` - Orange glow

---

## 🎯 Summary: Warna & Tema Per Halaman

| Halaman | Tema | Warna Utama | Animasi |
|---------|------|------------|----------|
| Home | Dark + Orange | #1C1C1E, #F47C20 | Hover lift |
| Daftar | Clean Minimal | #FFFFFF, #F47C20 | Focus glow |
| Masuk | Login Clean | #FFFFFF, #F47C20 | Checkbox hover |
| Pesan | Shopping | #F47C20 (topbar) | Scale on active |
| Konfirmasi | Payment | Gradient orange | Hover lift |
| QR Code | Dark Glow | #1C1C1E | Pulsing glow |
| Transfer | Bank | Colorful | Lift effect |
| Sukses | Success Green | #E3F9E5, #34C759 | Bounce pop |
| Profil | Professional | #1C1C1E | Float avatar |
| Riwayat | Accent Orange | #F47C20 | Left border |
| Admin | Admin Orange | #F47C20 | Rotate avatar |
| Toko | Management | #F47C20 | Button hover |
| Tambah | Form | #F47C20 | Upload lift |

---

## 🎨 Tips Customize Warna Per Halaman

Untuk mengubah warna di halaman tertentu, edit CSS:

```css
/* Contoh: Ubah warna topbar Pemesanan */
#s-order .topbar {
  background: linear-gradient(90deg, #YOUR-COLOR-1, #YOUR-COLOR-2);
}

/* Contoh: Ubah accent color Success */
#s-sukses .success-icon-big {
  background: linear-gradient(135deg, #YOUR-COLOR, #YOUR-COLOR-2);
}

/* Contoh: Ubah background home */
#s-home .home-hero {
  background: linear-gradient(135deg, #YOUR-COLOR, #YOUR-COLOR-2);
}
```

Setiap halaman dapat dikustomisasi secara independen tanpa mempengaruhi halaman lainnya! 🎯
