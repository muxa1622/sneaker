const cartIcon = document.querySelector('.cart__icon');
const cartBox = document.querySelector('.cart__box');

cartIcon.addEventListener('click', () => {
	cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
});

// MENU START

const menuBtn = document.querySelector('.menu__btn');
const closeBtn = document.querySelector('.close__btn');
const nav = document.querySelector('.header__list');

menuBtn.addEventListener('click', () => {
	nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
	nav.classList.remove('active');
});

// COUNTER START

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const zero = document.querySelector('.zero');

let counter = 0;

plus.addEventListener('click', () => {
	counter++;
	zero.textContent = counter;
});

minus.addEventListener('click', () => {
	if (counter > 0) {
		counter--;
		zero.textContent = counter;
	}
});

// IMAGE START

const mainImg = document.querySelector('.main_shoes__img');
const thumbnails = document.querySelectorAll('.hero__item img');

let selectedImage = mainImg.src;

thumbnails.forEach(img => {
	img.addEventListener('click', () => {
		mainImg.src = img.src;
		selectedImage = img.src;

		document.querySelectorAll('.hero__item').forEach(item => {
			item.classList.remove('active');
		});

		img.parentElement.classList.add('active');
	});
});

// CART START

const addToCartBtn = document.querySelector('.btn2');
const cartContent = document.querySelector('.content');
const badge = document.querySelector('.badge');

addToCartBtn.addEventListener('click', () => {
	if (counter === 0) return;

	const total = counter * 125;

	badge.textContent = counter;
	badge.style.display = 'block';

	cartContent.innerHTML = `
    <div class="cart__product">
      <img
        class="cart__product__img"
        src="${selectedImage}"
        alt="shoes"
      >

      <div class="cart__product__info">
        <p>Fall Limited Edition Sneakers</p>

        <span>
          $125.00 x ${counter}
          <b>$${total}.00</b>
        </span>
      </div>

      <img
        class="delete"
        src="image/hero/Mask 2.svg"
        alt="delete"
      >
    </div>

    <button class="check__btn">
      Checkout
    </button>
  `;

	const deleteBtn = document.querySelector('.delete');

	deleteBtn.addEventListener('click', () => {
		cartContent.innerHTML = `
      <div class="empty">
        Your cart is empty.
      </div>
    `;

		counter = 0;
		zero.textContent = 0;

		badge.style.display = 'none';
	});
});
