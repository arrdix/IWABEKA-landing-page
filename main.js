// Mendeklarasikan object tester
const tester = [
  {
    name: 'Jesse Pinkman',
    testimonial:
      'The Garlic Mayo Brioche is a taste revelation – a simple pleasure with layers of savory delight. Irresistibly satisfying!',
  },
  {
    name: 'Walter White',
    testimonial:
      'Brioche Bliss has redefined my brunch experience. The Peanut Butter Bun is a heavenly treat, capturing the essence of childhood comfort.',
  },
  {
    name: 'Gus Fring',
    testimonial:
      'Indulgence at its best! The Flip Cheese is a crunchy, cheesy masterpiece that keeps me coming back for more. A true delight!',
  },
  {
    name: 'Hector Salamanca',
    testimonial:
      "At Brioche Bliss, every bite tells a story. The menu's diversity, including the Spicy Toast and Flip Cheese, ensures a flavor adventure worth savoring.",
  },
  {
    name: 'Saul Goodman',
    testimonial:
      'A gastronomic haven! The Peanut Butter Bun at Brioche Bliss is a testament to perfection – a nostalgic twist with a modern, delectable touch.',
  },
  {
    name: 'Mike Ehrmantraut',
    testimonial:
      'Brioche Bliss has mastered the art of balance. The diverse menu, including the Flip Cheese, offers a harmonious blend of simplicity and gourmet indulgence.',
  },
];

// Menyeleksi button & dropdown nav
const toggleBtn = document.querySelector('.btn-toggle');
const navList = document.querySelector('.nav-list');
let navHeight;

// Mengubah style height dari class .nav-list berdasarkan klik pada button dengan class .btn-toggle
toggleBtn.addEventListener('click', function () {
  navHeight = navList.getBoundingClientRect().height;
  if (navHeight === 0) {
    navList.style.height = '20vh';
  } else {
    navList.style.height = `0`;
  }
});

// Menyeleksi button & target output dari object tester
const auth = document.querySelector('.name');
const text = document.querySelector('.text');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let item = 0;

// Mendeklarasikan fungsi untuk menampilkan value dari key property name dan testimonial ke html
function showTesti(key) {
  auth.textContent = tester[key].name;
  text.textContent = tester[key].testimonial;
}

// Membuat pengkondisian agar prev button terus berulang berdasarkan jumlah object yg ada
prevBtn.addEventListener('click', function () {
  item--;
  if (item < 0) {
    item = tester.length - 1;
    showTesti(item);
  }
  showTesti(item);
});

// Membuat pengkondisian agar next button terus berulang berdasarkan jumlah object yg ada
nextBtn.addEventListener('click', function () {
  item++;
  if (item === tester.length) {
    item = 0;
    showTesti(item);
  }
  showTesti(item);
});

// Menyeleksi semua button yg memiliki class .scroll
const scrollBtn = document.querySelectorAll('.scroll');
// Membuat pengulangan untuk mencari tau button mana yg diklik
scrollBtn.forEach(function (btns) {
  btns.addEventListener('click', function (event) {
    event.preventDefault();
    // Mengambil value atribut dari button yg diklik dimulai dari index ke-1
    const id = event.currentTarget.getAttribute('href').slice(1);
    // Menyeleksi elemen-elemen yg dibutuhkan
    const element = document.getElementById(id);
    const navContainer = document.querySelector('.nav-container');
    const navconHeight = navContainer.getBoundingClientRect().height;
    navHeight = navList.getBoundingClientRect().height;
    // Mendeklarasikan variable position dengan value jarak antara elemen yg dituju dengan elemen parentnya
    let position = element.offsetTop;

    // Membuat pengkondisian untuk menentukan ke mana auto scroll akan diarahkan
    // pada saat user mengakses menggunakan big screen
    if (navList.style.height === '0px') {
      if (id === 'home') {
        window.scrollTo({
          left: 0,
          top: position - 200,
        });
      } else {
        window.scrollTo({
          left: 0,
          top: position - 100,
        });
      }
      // Membuat pengkondisian untuk menentukan ke mana auto scroll akan diarahkan
      // pada saat user mengakses menggunakan mobile device screen
    } else {
      if (id === 'home') {
        window.scrollTo({
          left: 0,
          top: position - 400,
        });
      } else {
        window.scrollTo({
          left: 0,
          top: position - 200,
        });
      }
    }
    // Menutup dropdown setelah link diklik
    navList.style.height = 0;
  });
});
