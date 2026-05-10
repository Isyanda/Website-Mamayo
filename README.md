# MAMAYO - Aneka Risol Enak

Aplikasi web mobile-first untuk pemesanan risol dengan sistem pembayaran terintegrasi.

## 📁 Struktur File

```
mamayo/
├── index.html          # File HTML utama - struktur dan markup
├── styles.css          # File CSS - semua styling
├── script.js           # File JavaScript - logika dan interaktivitas
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Menggunakan

1. **Download semua file** dari folder output
2. **Letakkan dalam 1 folder** yang sama
3. **Buka file `index.html`** di browser

Struktur file harus:
```
mamayo/
├── index.html
├── styles.css
└── script.js
```

## 📱 Fitur Utama

### User Features
- ✅ Registrasi & Login
- ✅ Browsing Menu Produk
- ✅ Pemesanan dengan Keranjang
- ✅ Pilihan Metode Pembayaran:
  - GO PAY (QRIS)
  - Transfer Bank (BCA, BNI, BRI, BSI, GoPay, Dana)
  - Bayar di Tempat
- ✅ Riwayat Pesanan
- ✅ Edit Profil Pengguna

### Admin Features
- ✅ Kelola Produk (Tambah, Edit, Hapus)
- ✅ Status Toko (Buka/Tutup)
- ✅ Manajemen Stok Produk
- ✅ Tabel Inventori
- ✅ Edit Profil Admin

## 🎨 Desain & Styling

### Warna Utama
- **Orange**: `#F47C20` (Primary Color)
- **Dark**: `#1C1C1E` (Background)
- **Cream**: `#FDF8F3` (Content Background)
- **Green**: `#34C759` (Success)
- **Red**: `#FF3B30` (Error)

### Font
- **Body**: Nunito (Google Fonts)
- **Heading**: Fraunces (Google Fonts)

## 📝 Dokumentasi Kode

### JavaScript Functions

#### Navigation
```javascript
go(screenId)  // Navigate ke screen dengan ID tertentu
```

#### Cart Management
```javascript
updateQty(i, delta)       // Update jumlah produk
renderOrderDetail()       // Render detail pesanan
goOrder()                 // Navigate ke halaman order
goKonfirmasi()           // Navigate ke konfirmasi pembayaran
```

#### Payment
```javascript
selPay(m)                 // Select metode pembayaran
doBayar()                 // Process pembayaran
selBank(el, name, rek)   // Select bank untuk transfer
setDeadline()            // Set deadline pembayaran
```

#### Profile
```javascript
showSubProfile(tab)      // Toggle profile menu (user)
showSubAdmin(tab)        // Toggle profile menu (admin)
```

#### Admin
```javascript
toggleToko()             // Toggle status toko
```

#### Modal
```javascript
showModal(name)          // Show delete confirmation
closeModal(e)            // Close modal
doHapus()               // Confirm delete
```

#### Toast
```javascript
toast(msg)              // Show notification toast
```

## 🔗 Screen Navigation Map

```
Home (s-home)
├── Pesan (s-order)
│   └── Konfirmasi (s-konfirmasi)
│       ├── QRIS (s-qris) → Sukses (s-sukses)
│       └── Transfer (s-transfer) → Sukses (s-sukses)
├── Profil (s-profil-user)
│   └── Riwayat (s-riwayat)
├── Auth
│   ├── Daftar (s-daftar)
│   └── Masuk (s-masuk)
└── Admin
    ├── Profil Admin (s-admin-profil)
    └── Kelola Toko (s-admin-toko)
        └── Tambah Produk (s-admin-tambah)
```

## 💾 Data Structure

### Produk (Cart Items)
```javascript
products = [
  'Risol Mentai',
  'Risol Mayo',
  'Risol Mercon',
  'Risol Reguler',
  'Risol Beef',
  'Risol Piscok'
]

qtys = [0, 0, 0, 0, 0, 0]  // Quantity untuk setiap produk
PRICE = 2000                // Harga per buah
```

### Payment Methods
```javascript
selPayMethod = 'gopay'  // 'gopay', 'transfer', atau 'cash'
```

### Shop Status
```javascript
tokoOpen = true         // Status toko (buka/tutup)
```

## 🎯 Customize untuk Kebutuhan Anda

### 1. Mengubah Nama Toko
Edit di `index.html`:
```html
<div class="hero-brand">MA<span>MAYO</span></div>
```

### 2. Mengubah Daftar Produk
Edit di `script.js`:
```javascript
const products = [
  'Produk Anda 1',
  'Produk Anda 2',
  // ... dst
];
```

### 3. Mengubah Harga
Edit di `script.js`:
```javascript
const PRICE = 2500;  // Ubah harga per buah
```

### 4. Mengubah Kontak & Jam Operasional
Edit di `index.html`:
```html
<div class="hero-contact">📞 081234567876</div>
<div class="hero-hours">🕐 Senin–Sabtu 09:00 – 16:00</div>
```

### 5. Mengubah Warna Brand
Edit di `styles.css`:
```css
:root {
  --orange: #F47C20;  /* Ubah ke warna pilihan Anda */
  /* ... */
}
```

## 📦 Integrasi Backend

Saat ini adalah demo dengan data statis. Untuk integrasi backend:

1. **Setup API Endpoint** untuk:
   - User Registration & Login
   - Product Management
   - Order Processing
   - Payment Gateway Integration

2. **Ubah `script.js`** untuk fetch data dari API:
```javascript
// Contoh: Fetch produk dari API
async function loadProducts() {
  const response = await fetch('/api/products');
  const data = await response.json();
  // Update UI dengan data dari API
}
```

## 🔒 Security Notes

- ⚠️ Jangan simpan credentials di local storage tanpa enkripsi
- ⚠️ Validasi input di server-side, bukan hanya client-side
- ⚠️ Gunakan HTTPS untuk transmisi data sensitif
- ⚠️ Implement CSRF protection untuk form submissions

## 📱 Responsive Design

Aplikasi ini dioptimalkan untuk:
- ✅ Mobile (320px - 480px)
- ✅ Tablet (481px - 768px)
- ✅ Desktop (769px+)

Max-width: 420px untuk mobile-first design.

## 🐛 Troubleshooting

### Styling tidak muncul
- Pastikan `styles.css` berada di folder yang sama dengan `index.html`
- Periksa console browser (F12) untuk error

### JavaScript tidak berfungsi
- Pastikan `script.js` berada di folder yang sama dengan `index.html`
- Periksa console browser untuk syntax error
- Pastikan browser support modern JavaScript (ES6+)

### Fonts tidak muncul
- Periksa koneksi internet (fonts dari Google Fonts)
- Browser mungkin cache, coba clear cache atau hard refresh (Ctrl+F5)

## 📄 License

Bebas digunakan dan dimodifikasi untuk keperluan pribadi maupun komersial.

## 👨‍💻 Tech Stack

- **HTML5** - Struktur dan Semantic Markup
- **CSS3** - Styling dengan CSS Variables dan Flexbox/Grid
- **JavaScript (Vanilla)** - Interaktivitas tanpa library
- **Google Fonts** - Typography (Nunito, Fraunces)

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)

---

**Version**: 1.0.0  
**Last Updated**: 2026  
**Created with ❤️ for MAMAYO**
