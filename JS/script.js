document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // スキルバーのアニメーション開始
  const skillList = document.getElementById('skill-list');
  if (skillList) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        skillList.classList.add('skills-ready');
      });
    });
  }

  // お問い合わせフォームの送信を処理
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        alert(`名前: ${name}\nメール: ${email}\nメッセージ: ${message}`);
        this.reset();
      } else {
        alert('すべての項目を入力してください。');
      }
    });
  }

  // スムーズスクロールの実装
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
