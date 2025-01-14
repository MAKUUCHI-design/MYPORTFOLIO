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