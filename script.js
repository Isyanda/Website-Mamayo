// ════════════════════════════════════════════════════════════════
// MAMAYO - Aneka Risol Enak
// Main JavaScript File
// ════════════════════════════════════════════════════════════════

// ── NAVIGATION ──
function go(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const sc = document.getElementById(screenId);
  if (sc) sc.classList.add('active');
  window.scrollTo(0,0);
}

// ── TOAST ──
let toastT;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('show'), 2800);
}

// ════════════════════════════════════════════════════════════════
// CART / ORDER MANAGEMENT
// ════════════════════════════════════════════════════════════════

const products = [
  'Risol Mentai',
  'Risol Mayo',
  'Risol Mercon',
  'Risol Reguler',
  'Risol Beef',
  'Risol Piscok'
];

const qtys = [0, 0, 0, 0, 0, 0];
const PRICE = 2000;

/**
 * Update quantity untuk produk tertentu
 * @param {number} i - Index produk
 * @param {number} delta - Perubahan quantity (+1 atau -1)
 */
function updateQty(i, delta) {
  qtys[i] = Math.max(0, qtys[i] + delta);
  document.getElementById('q' + i).textContent = qtys[i];
  renderOrderDetail();
}

/**
 * Render detail pesanan dengan harga
 */
function renderOrderDetail() {
  const total = qtys.reduce((s, q) => s + q * PRICE, 0);
  const lines = qtys
    .map((q, i) => {
      if (q > 0) {
        const price = (q * PRICE).toLocaleString('id-ID');
        return `<div class="osb-row"><span>${products[i]} × ${q}</span><span>Rp ${price}</span></div>`;
      }
      return '';
    })
    .join('');

  const el = document.getElementById('order-detail-lines');
  if (el) {
    el.innerHTML = lines || '<div class="osb-row" style="color:var(--mid);font-size:13px;"><span colspan="2">Belum ada item dipilih</span></div>';
  }

  const td = document.getElementById('order-total-disp');
  if (td) td.textContent = 'Rp ' + total.toLocaleString('id-ID');
}

/**
 * Navigate ke halaman order dan render detail
 */
function goOrder() {
  renderOrderDetail();
  go('s-order');
}

/**
 * Navigate ke halaman konfirmasi dengan sync data
 */
function goKonfirmasi() {
  const total = qtys.reduce((s, q) => s + q * PRICE, 0);

  if (total === 0) {
    toast('Pilih minimal 1 item dulu!');
    return;
  }

  // Sync order detail ke semua screen yang membutuhkan
  const lines = qtys
    .map((q, i) => {
      if (q > 0) {
        const price = (q * PRICE).toLocaleString('id-ID');
        return `<div class="osb-row"><span>${products[i]} × ${q}</span><span>Rp ${price}</span></div>`;
      }
      return '';
    })
    .join('');

  const totalFormatted = 'Rp ' + total.toLocaleString('id-ID');

  // Update konfirmasi screen
  document.getElementById('konfirm-detail-lines').innerHTML = lines;
  document.getElementById('konfirm-total-disp').textContent = totalFormatted;

  // Update QR screen
  document.getElementById('qr-amount-disp').textContent = totalFormatted;

  // Update transfer screen
  document.getElementById('tf-amount').innerHTML = `${totalFormatted}<button class="copy-btn" onclick="toast('Nominal disalin!')">Salin</button>`;

  // Update success screen
  document.getElementById('sukses-total').textContent = 'Total: ' + totalFormatted;

  go('s-konfirmasi');
}

// ════════════════════════════════════════════════════════════════
// PAYMENT METHOD SELECTION
// ════════════════════════════════════════════════════════════════

let selPayMethod = 'gopay';

/**
 * Select payment method
 * @param {string} m - Payment method ID (gopay, transfer, cash)
 */
function selPay(m) {
  selPayMethod = m;
  ['gopay', 'transfer', 'cash'].forEach(id => {
    const btn = document.getElementById('pm-' + id);
    if (!btn) return;

    btn.classList.toggle('active', id === m);
    const chk = btn.querySelector('.pmethod-check');
    if (chk) chk.textContent = id === m ? '✓' : '';
  });
}

/**
 * Process payment berdasarkan metode yang dipilih
 */
function doBayar() {
  if (selPayMethod === 'gopay') {
    go('s-qris');
  } else if (selPayMethod === 'transfer') {
    setDeadline();
    go('s-transfer');
  } else {
    toast('Silakan bayar di tempat saat pengambilan');
    go('s-sukses');
  }
}

// ════════════════════════════════════════════════════════════════
// BANK SELECTION & TRANSFER
// ════════════════════════════════════════════════════════════════

/**
 * Select bank dan update info transfer
 * @param {HTMLElement} el - Elemen bank yang diklik
 * @param {string} name - Nama bank
 * @param {string} rek - Nomor rekening
 */
function selBank(el, name, rek) {
  document.querySelectorAll('.bank-tile').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('sel-bank-name').textContent = 'Bank ' + name;
  document.getElementById('sel-rek').textContent = rek;
}

/**
 * Set deadline pembayaran (24 jam dari sekarang)
 */
function setDeadline() {
  const d = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const el = document.getElementById('tf-deadline');
  if (el) {
    el.textContent = d.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

// ════════════════════════════════════════════════════════════════
// QR CODE TIMER
// ════════════════════════════════════════════════════════════════

let qrSecs = 299; // 4 menit 59 detik

setInterval(() => {
  if (qrSecs > 0) qrSecs--;
  const m = String(Math.floor(qrSecs / 60)).padStart(2, '0');
  const s = String(qrSecs % 60).padStart(2, '0');
  const el = document.getElementById('qr-timer');
  if (el) el.textContent = m + ':' + s;
}, 1000);

// ════════════════════════════════════════════════════════════════
// PROFILE MANAGEMENT
// ════════════════════════════════════════════════════════════════

/**
 * Toggle tampilan sub-menu di profil user
 * @param {string} tab - 'menu' atau 'edit'
 */
function showSubProfile(tab) {
  document.getElementById('profil-menu').style.display = tab === 'menu' ? '' : 'none';
  document.getElementById('profil-edit').style.display = tab === 'edit' ? '' : 'none';
}

/**
 * Toggle tampilan sub-menu di profil admin
 * @param {string} tab - 'menu' atau 'edit'
 */
function showSubAdmin(tab) {
  document.getElementById('admin-menu').style.display = tab === 'menu' ? '' : 'none';
  document.getElementById('admin-edit').style.display = tab === 'edit' ? '' : 'none';
}

// ════════════════════════════════════════════════════════════════
// ADMIN MANAGEMENT
// ════════════════════════════════════════════════════════════════

let tokoOpen = true;

/**
 * Toggle status toko (buka/tutup)
 */
function toggleToko() {
  tokoOpen = !tokoOpen;
  const tog = document.getElementById('tokoToggle');
  tog.classList.toggle('on', tokoOpen);
  toast(tokoOpen ? 'Toko sekarang BUKA 🟢' : 'Toko sekarang TUTUP 🔴');
}

// ════════════════════════════════════════════════════════════════
// MODAL & DELETE CONFIRMATION
// ════════════════════════════════════════════════════════════════

let pendingDel = '';

/**
 * Show delete confirmation modal
 * @param {string} name - Nama produk yang akan dihapus
 */
function showModal(name) {
  pendingDel = name;
  document.getElementById('modal-product-name').textContent = name;
  document.getElementById('delete-modal').classList.add('show');
}

/**
 * Close delete confirmation modal
 * @param {Event} e - Click event
 */
function closeModal(e) {
  if (!e || e.target.id === 'delete-modal') {
    document.getElementById('delete-modal').classList.remove('show');
  }
}

/**
 * Process delete product
 */
function doHapus() {
  document.getElementById('delete-modal').classList.remove('show');
  toast(`${pendingDel} berhasil dihapus 🗑️`);
}

// ════════════════════════════════════════════════════════════════
// INITIALIZATION
// ════════════════════════════════════════════════════════════════

// Initialize saat page load
document.addEventListener('DOMContentLoaded', function() {
  renderOrderDetail();
  setDeadline();
  console.log('MAMAYO App Loaded ✓');
});
