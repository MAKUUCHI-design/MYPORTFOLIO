// お問い合わせフォームの送信を処理
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // ページのリロードを防止

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`名前: ${name}\nメール: ${email}\nメッセージ: ${message}`);
    this.reset(); // フォームの内容をリセット
  } else {
    alert('すべての項目を入力してください。');
  }
});

// スキルバーの表示（data-level から幅を制御）
document.querySelectorAll('.skill-item').forEach(item => {
  const level = Number(item.dataset.level);
  const fill = item.querySelector('.skill-bar-fill');
  if (fill && level >= 0 && level <= 10) {
    requestAnimationFrame(() => {
      fill.style.width = `${level * 10}%`;
    });
  }
});

// スムーズスクロールの実装
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
