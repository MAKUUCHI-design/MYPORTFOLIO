document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slides img");
    const totalSlides = slides.length;
    const description = document.getElementById("description");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const containerPro = document.querySelector("#containerPro");  // 制作概要のコンテナ

    // 各スライドに対応する説明文と制作概要をページごとに用意
    const descriptionsByPage = {
        "work1.html":[
            "1つ目はトレースになります。美容系のクリニックバナーを制作しました。1つ目以降はInstagramに広告を載せる前提でリサイズしたものになります。",
            "4：5のリサイズになります。内容の可読性を上げるために繋がっている情報の配置を考えました。",
            "9：16のリサイズになります。リサイズの中でも一番縦長のバナーです。",
            "1.91:1のリサイズになります。「15％OFF」の強調のさせ方や配置をこだわりました。",
            "16：9のリサイズになります。こちらは1.91:1のリサイズを調節した形にしました。"
        ],
        "work2.html": [
            "自社の人材バナーになります。堅い雰囲気を持たせないようなバナーを心がけた作品です。",
            "自社の人材バナー２枚目になります。1枚目とは違いスタイリッシュなバナーをイメージして仕上げた作品です。"
        ],
        "work3.html": [
            "フィットネスのバナーになります。女性らしさをイメージした作品になります。",
            "フィットネスのバナー２枚目になります。可読性をよくすることとスマートさを意識した作品になります。",
            "フィットネスのバナー３枚目になります。他のバナーとは違いポップなイメージの作品です。"
        ],
        "work4.html": [
            "架空のポイントプレゼントキャンペーンのバナーになります。ポイントに目が行くように作成した作品です。",
            "架空のポイントプレゼントキャンペーンのバナーの２枚目になります。見たときのインパクトと楽しさをイメージした作品になります。"
        ],
        "work5.html": [
            "健康食品のバナーになります。ターゲット層から注目を集めることを意識した作品です。",
            "健康食品のバナー２枚目になります。価格に目が行くようにした作品です。"
        ],
        "work6.html": [
            "１つ目はトレースの作品になります。キャンペーンバナーをトレースしました。",
            "トレース作品２枚目になります。ターゲットを絞った配色にしました。",
            "トレース作品３枚目になります。期間に着目して配色しました。",
            "トレース作品４枚目になります。アクセントを意識して配色しました。",
            "トレース作品５枚目になります。シンプルさと可読性を意識して配色しました。"
        ],
        "work7.html": [
            "１つ目はトレースになります。家具、インテリアショップの再デザインバナーを制作しました。",
            "１枚目の再デザイン案になります。さわやかさをイメージした作品になります。",
            "１枚目の再デザイン案２枚目になります。お客様が商品をイメージしやすいような作品にしました。",
            "１枚目の再デザイン案３枚目になります。重要な情報に目が行くような作品にしました。"
        ],
        "work8.html": [
            "岩盤浴のポスターの再デザインになります。自然とおしゃれの２つの雰囲気を感じられるような作品にしました。"
        ],
        "work9.html": [
            "転職サイトの広告バナーになります。インパクトを与えられるように意識した作品です。"
        ],
        "work10.html": [
            "IT企業のロゴになります。"
        ],
        "work11.html": [
            "化粧品会社のロゴになります。"
        ],
        "work12.html": [
            "海外向けバーのロゴになります。"
        ],
        "work13.html": [
            "チャリティバッグのロゴになります。"
        ],
        "work14.html": [
            "ビデオクリエイター向けのロゴになります。",
            "SNS用のヘッダー画像になります。"
        ],
        "work15.html": [
            "受付などで使用される録音の注意喚起バナーになります。海外の方でもわかりやすいバナーを意識した作品になります。"
        ],
        "work16.html": [
            "現在ご覧になられているポートフォリオです。"
        ]
    };

    const productionDetailsByPage = {
        "work1.html": [
            {
                type: "バナー・広告",
                duration: "人物切り抜き30分、制作1時間",
                points: "トレース作品の為出来るだけ元の作品に近づけるように素材やフォントをこだわって作成しました。内容は数字等少々変更しております。",
                tools: ["images/NOAI.png", "images/PS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "リサイズ1時間",
                points: "1：1に比べて縦長のバナーになるので下側をきれいにまとめるために15％OFFを丸で囲い、皮膚科以外～の部分も丸のふちに合わせてかたどりました。",
                tools: ["images/NOAI.png", "images/PS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "リサイズ1時間",
                points: "縦長のバナーになるため、人物を左に寄せ全体的に部品を右寄せにしました。ここではキャンペーンの日程と店舗を大きく強調しました。",
                tools: ["images/NOAI.png", "images/PS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "リサイズ1時間",
                points: "横長のバナーになるため、15％OFFも丸ではなく横長の長方形で囲うようなデザインにしました。皮膚科以外～の部分も長方形に合うようにふちに合わせてかたどりました。",
                tools: ["images/NOAI.png", "images/PS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "リサイズ30分",
                points: "1.91:1のバナーの内容を可読性を落とさないように16:9に合わせてリサイズしました。",
                tools: ["images/NOAI.png", "images/PS.png","images/FG.png"]
            }
        ],
        "work2.html": [
            {
                type: "人材バナー・広告",
                duration: "30分",
                points: "人物の目線を使い自然とテキストの方向に目が行くようにデザインをしました。また、「輝き方」のフレーズを強調するために下に二重線を入れました。他にも詳細ボタンをつけることで、自社のページに遷移するよう想定して作成しました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            },
            {
                type: "人材バナー・広告",
                duration: "30分",
                points: "１枚目のバナーとは雰囲気を変え、色を統一して動きを出すことでクールなバナーに仕上げました。また、詳細ボタンを反対色を使うことで目立たせるとともに、分かりやすくしました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            }
        ],
        "work3.html": [
            {
                type: "フィットネスバナー・広告",
                duration: "1時間、修正2時間",
                points: "曲線を取り入れ女性らしさをイメージして制作しました。暖色のニュアンスカラーを使用し、落ち着いた雰囲気に仕上げました。",
                tools: ["images/AI.png", "images/PS.png","images/NOFG.png"]
            },
            {
                type: "フィットネスバナー・広告",
                duration: "30分",
                points: "全体的にシンプルかつ見やすく必要な情報を取り入れられるようなデザインにしました。フォントはキリッとしたフォントを使用することで可読性を上げ、スマートなイメージにしました。",
                tools: ["images/AI.png", "images/PS.png","images/NOFG.png"]
            },
            {
                type: "フィットネスバナー・広告",
                duration: "30分",
                points: "１、２枚目とは違いポップなデザインにしました。緑を使いながら、暖色を多めに使用したりフォントを太めのものを使用することで「元気」なイメージを与える作品にしました。",
                tools: ["images/AI.png", "images/PS.png","images/NOFG.png"]
            }
        ],
        "work4.html": [
            {
                type: "ポイントバナー・広告",
                duration: "1時間",
                points: "全体的に暖色を使い、明るい雰囲気を演出しました。また、5000ポイントに目が行くように大き目に配置し、背景を放射状にして目線を集める工夫をしました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            },
            {
                type: "ポイントバナー・広告",
                duration: "1時間",
                points: "中心から飛び出してきているようなイメージで作成しました。視覚的に楽しいように周りのあしらい、背景もこだわりました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work5.html": [
            {
                type: "健康食品バナー・広告",
                duration: "素材切り抜き30分、制作1時間",
                points: "ターゲットを明確に表記することによって目に留まりやすいように工夫しました。",
                tools: ["images/AI.png", "images/PS.png","images/NOFG.png"]
            },
            {
                type: "健康食品バナー・広告",
                duration: "30分",
                points: "１枚目よりも価格面を大きく見せお得感を前面に押したデザインにしました。また、「特別価格」を大きく強調して目に留まりやすくしました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work6.html": [
            {
                type: "バナー・広告",
                duration: "1時間",
                points: "トレースした作品の色や背景まで再現しました。内容は数字等少々変更しております。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "30分",
                points: "女性をターゲットにして作成し、大切な部分は強調しつつ全体をパステルカラーでまとめました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "30分",
                points: "バナーの期間が1月と冬なので青を基調とし、雪を連想させるような白も使った配色をしました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "30分",
                points: "全体でパステルカラーを使用して、全体をまとめる配色にしました。アクセントをつけるため影をつけたリボンをつけ、メリハリをつけました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "30分",
                points: "背景や文字はシンプルに白黒をメインに使い、赤で重要な部分が目立つように配色しました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            }
        ],
        "work7.html": [
            {
                type: "バナー・広告",
                duration: "30分",
                points: "色やフォントを元作品に限りなく寄せました。内容は数字等少々変更しております。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "30分",
                points: "パステルカラーに統一してシンプルなデザインにしました。詳細ボタンを追加して広告バナーを意識して制作しました。また、緑を基調として使用してさわやかな雰囲気にしました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "30分",
                points: "実際の家具の写真を使用してイメージしやすいようなデザインにしました。こちらも詳細のボタンを追加して広告に使用することをイメージしました。元のデザインの色を基調として赤で全体にアクセントをつけました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            },
            {
                type: "バナー・広告",
                duration: "30分",
                points: "家具の写真に合わせて青を基調として使用しました。10％OFFや配送料無料を反対色や白を使用して目立つように配色しました。こちらも詳細のボタンを追加して広告に使用することをイメージしました。",
                tools: ["images/NOAI.png", "images/NOPS.png","images/FG.png"]
            }
        ],
        "work8.html": [
            {
                type: "A4ポスター",
                duration: "4時間",
                points: "石をイメージした背景と「自然とおしゃれ」な雰囲気をイメージして制作しました。また、元のポスターにマップがなく場所がわかりずらかったため、マップとスマホからアクセスしやすいようにQRコードの表記を追加しました。",
                tools: ["images/AI.png", "images/PS.png","images/NOFG.png"]
            }
        ],
        "work9.html": [
            {
                type: "バナー・広告",
                duration: "4時間",
                points: "インパクトを大切にして制作したバナーです。文字、グラフ、イラストを使用して目に留まる且つ見やすく情報も分かりやすくまとめたデザインにしました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work10.html": [
            {
                type: "ロゴ",
                duration: "4時間",
                points: "IT企業になるため誠実さが伝わるように青を基調として、個性を数色使い表しました。また、FUSEのFを用いて人を組み合わせたロゴに仕上げました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work11.html": [
            {
                type: "ロゴ",
                duration: "4時間",
                points: "頭文字のRとFを使用して葉をイメージしたロゴにしました。また、緑を基調として使用することによって自然や安心感を表現しました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work12.html": [
            {
                type: "ロゴ",
                duration: "3時間",
                points: "シェルターの中にある海外向けバーなのでシェルターをイメージして長方形の中にまとめました。また、緑の波線を入れることで店内の落ち着いた雰囲気を表現しました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work13.html": [
            {
                type: "ロゴ",
                duration: "2時間、修正2時間",
                points: "チャリティをイメージしたハートとペットボトルを再利用したバッグのため、ペットボトルを組み合わせたロゴにしました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work14.html": [
            {
                type: "アイコン",
                duration: "1時間",
                points: "ビデオフィルムと再生ボタンをイメージし、組み合わせたロゴにしました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            },
            {
                type: "SNS用ヘッダー",
                duration: "1時間",
                points: "アクセントとして再生ボタンを縁取った形をずらして置き、再生しているようなイメージで制作しました。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work15.html": [
            {
                type: "バナー",
                duration: "3時間、修正1時間",
                points: "一目で録音と分かるようにマイクのロゴとRECをつけました。また、海外向けの店舗のため、日本語とは別に3言語を書いています。背景は緑にすることで安心感を与えることをイメージしています。",
                tools: ["images/AI.png", "images/NOPS.png","images/NOFG.png"]
            }
        ],
        "work16.html": [
            {
                type: "Webサイト",
                duration: "2週間",
                points: "企業様が一目で分かりやすいようにシンプルなポートフォリオにしました。文字ではなく全体的にアイコン等を使用し、視覚的に情報が分かりやすいように意識して制作しました。",
                tools: ["images/AI.png", "images/PS.png","images/FG.png","images/VS.png"]
            }
        ]
    };

    // 現在のページのファイル名を取得
    const currentPage = window.location.pathname.split("/").pop();
    const descriptions = descriptionsByPage[currentPage] || ["説明がありません。"];
    const productionDetails = productionDetailsByPage[currentPage] || [];

    function updateProductionDetails(index) {
        if (!productionDetails[index]) {
            containerPro.innerHTML = "<p>詳細情報がありません。</p>";
            return;
        }

        const { type, duration, points, tools } = productionDetails[index];

        containerPro.innerHTML = `
            <h3>種類</h3>
            <p>${type}</p>
            <h3>制作期間</h3>
            <p>${duration}</p>
            <h3>工夫点</h3>
            <p>${points}</p>
            <h3>制作ツール</h3>
            <div class="toul">
                ${tools.map(tool => `<img src="${tool}" alt="ツール">`).join('')}
            </div>
        `;
    }

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        slides.forEach((slide, i) => {
            slide.style.display = i === currentIndex ? "block" : "none";
        });

        description.textContent = descriptions[currentIndex] || "説明がありません。";
        updateProductionDetails(currentIndex);
    }

    if (totalSlides <= 1) {
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }

    prevButton.addEventListener("click", function () {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);
});
