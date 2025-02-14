document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slides img");
    const totalSlides = slides.length;
    const description = document.getElementById("description");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // 各スライドに対応する説明文を配列で用意
    const descriptionsByPage = {
        "work1.html":[
            "1つ目はトレースの作品になります。キャンペーンバナーをトレースしました。",
            "大切な部分は強調しつつ全体をパステルカラーでまとめました。女性をターゲットにして制作しました。",
            "期間が1月と冬なので青を基調とし、雪を連想させるような白も使った配色をしました。",
            "全体でパステルカラーを使用して、全体をまとめる配色にしました。アクセントをつけるため影をつけたリボンをつけ、メリハリをつけました。",
            "背景や文字はシンプルに白黒をメインに使い、赤で重要な部分が目立つように配色しました。"
        ],
        "work2.html": [
            "1つ目はトレースになります。家具、インテリアショップの再デザインバナーを制作しました。",
            "パステルカラーに統一してシンプルなデザインにしました。詳細ボタンを追加して広告バナーを意識して制作しました。また、緑を基調として使用してさわやかな雰囲気にしました。",
            "実際の家具の写真を使用してイメージしやすいようなデザインにしました。こちらも詳細のボタンを追加して広告に使用することをイメージしました。元のデザインの色を基調として赤で全体にアクセントをつけました。",
            "家具の写真に合わせて青を基調として使用しました。10％OFFや配送料無料を反対色や白を使用して目立つように配色しました。こちらも詳細のボタンを追加して広告に使用することをイメージしました。"
        ],
        "work3.html": [
            "1つ目はトレースになります。美容系のクリニックバナーを制作しました。1つ目以降はInstagramに広告を載せる前提でリサイズしたものになります。",
            "4：5のリサイズになります。1：1に比べて縦長のバナーになるので下側をきれいにまとめるために15％OFFを丸で囲い、皮膚科以外～の部分も丸のふちに合わせてかたどりました。",
            "9：16のリサイズになります。縦長のバナーになるため、人物を左に寄せ全体的に部品を右寄せにしました。ここではキャンペーンの日程と店舗を大きく強調しました。",
            "1.91:1のリサイズになります。横長のバナーになるため、15％OFFも丸ではなく横長の長方形で囲うようなデザインにしました。皮膚科以外～の部分も長方形に合うようにふちに合わせてかたどりました。",
            "16：9のリサイズになります。こちらは1.91:1のリサイズを調節した形にしました。"
        ],
        "work4.html": [
            "こちらの作品は岩盤浴のポスターの再デザインになります。石をイメージした背景と「自然とおしゃれ」な雰囲気をイメージして制作しました。また、元のポスターにマップがなく場所がわかりずらかったため、マップとスマホからアクセスしやすいようにQRコードの表記を追加しました。",
        ],
        "work5.html": [
            "こちらのバナーはインパクトを大切にして制作したバナーになります。文字、グラフ、イラストを使用して目に留まる且つ見やすく情報も分かりやすくまとめたデザインにしました。"
        ],
        "work6.html": [
            "こちらはIT系の企業になるため誠実さが伝わるように青を基調として、個性を数色使い表しました。また、FUSEのFを用いて人を組み合わせたロゴに仕上げました。"
        ],
        "work7.html": [
            "こちらのロゴは化粧品会社のロゴになります。頭文字のRとFを使用して葉をイメージしたロゴにしました。また、緑を基調として使用することによって自然や安心感を表現しました。"
        ],
        "work8.html": [
            "こちらのロゴは海外向けバーのロゴになります。シェルターの中にある海外向けバーなのでシェルターをイメージして長方形の中にまとめました。また、緑の波線を入れることで店内の落ち着いた雰囲気を表現しました。"
        ],
        "work9.html": [
            "こちらは石川での震災のチャリティバッグのロゴになります。チャリティをイメージしたハートとペットボトルを再利用したバッグのため、ペットボトルを組み合わせたロゴにしました。"
        ],
        "work10.html": [
            "こちらはビデオクリエイター向けのロゴになります。ビデオフィルムと再生ボタンをイメージし、組み合わせたロゴにしました。",
            "SNS用のヘッダー画像になります。アクセントとして再生ボタンを縁取った形をずらして置き、再生しているようなイメージで制作しました。"
        ],
        "work11.html": [
            "こちらは受付などで使用される録音の注意喚起バナーになります。一目で録音と分かるようにマイクのロゴとRECをつけました。また、海外向けの店舗のため、日本語とは別に3言語を書いています。背景は緑にすることで安心感を与えることをイメージしています。"
        ],
        "work12.html": [
            "企業様が一目で分かりやすいようにシンプルなポートフォリオです。文字ではなく全体的にアイコン等を使用し、視覚的に情報が分かりやすいように意識して制作しました。"
        ],
        "work13.html": [
            "架空のポイントプレゼントキャンペーンのバナーになります。全体的に暖色を使い、明るい雰囲気を演出しました。また、5000ポイントに目が行くように大き目に配置し、背景を放射状にして目線を集める工夫をしました。",
            "架空のポイントプレゼントキャンペーンのバナーの２枚目になります。こちらのバナーは中心から飛び出してきているようなイメージで作成しました。視覚的に楽しいように周りのあしらい、背景もこだわりました。"
        ],
        "work14.html": [
            "自社の人材バナーになります。人物の目線を使い自然とテキストの方向に目が行くようにデザインをしました。また、「輝き方」のフレーズを強調するために下に二重線を入れました。他にも詳細ボタンをつけることで、自社のページに遷移するよう想定して作成しました。",
            "自社の人材バナー２枚目になります。１枚目のバナーとは雰囲気を変え、色を統一して動きを出すことでクールなバナーに仕上げました。また、詳細ボタンを反対色を使うことで目立たせるとともに、分かりやすくしました。"
        ],
        "work15.html": [
            "フィットネスのバナーになります。こちらのバナーは全体的にシンプルかつ見やすく必要な情報を取り入れられるようなデザインにしました。フォントはキリッとしたフォントを使用することで可読性とスマートなイメージにしました。",
            "フィットネスのバナー２枚目になります。１枚目とは違いポップなデザインにしました。緑を使いながら、暖色を多めに使用したりフォントを太めのものを使用することで「元気」なイメージを与える作品にしました。"
        ],
        "work16.html": [
            "健康食品のバナーになります。こちらのバナーはターゲットを明確に表記することによって目に留まりやすいように工夫しました。",
            "健康食品のバナー２枚目になります。１枚目よりも価格面を大きく見せお得感を前面に押したデザインにしました。"
        ]
    };

    // 現在のページのファイル名を取得
    const currentPage = window.location.pathname.split("/").pop();
    const descriptions = descriptionsByPage[currentPage] || ["説明がありません。"];

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // すべてのスライドを非表示にし、現在のスライドのみ表示
        slides.forEach((slide, i) => {
            slide.style.display = i === currentIndex ? "block" : "none";
        });

        // 説明文を現在のスライドに対応するものに変更
        description.textContent = descriptions[currentIndex] || "説明がありません。";
    }

    // 画像が1枚しかない場合、矢印を非表示にする
    if (totalSlides <= 1) {
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }

    // 前のスライドへ
    prevButton.addEventListener("click", function () {
        showSlide(currentIndex - 1);
    });

    // 次のスライドへ
    nextButton.addEventListener("click", function () {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);  // ページロード時に最初のスライドを表示
});
