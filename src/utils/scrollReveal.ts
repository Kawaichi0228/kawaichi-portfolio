// スクロールに連動するフェードアニメーション関数をここに全て定義
// (ts使用時(class指定で呼び出せるようにする) onMounted(() => { setFadeinTop ...etc })
// (HTML使用時 <div class="sr__fadein-top">)

import ScrollReveal from "scrollreveal";
const sr = ScrollReveal();

export const setFadeinTop = () => {
  const className = ".sr__fadein-top";
  const fadeinTop = {
    duration: 1400, // アニメーションの完了にかかる時間
    origin: "top", // 出現方向
    distance: "100px", // 出現が開始する距離
    viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
    reset: false, // スクロールする度にアニメーションをループ(再表示)するか
    easing: "ease-out", // モーションのなめらかさ
  };
  sr.reveal(className, fadeinTop);
};

export const setFadeinBottomDelay = () => {
  const className = ".sr__fadein-bottom-delay";
  const fadeinLeft = {
    duration: 1200, // アニメーションの完了にかかる時間
    origin: "bottom", // 出現方向
    distance: "80px", // 出現が開始する距離
    viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
    reset: false, // スクロールする度にアニメーションをループ(再表示)するか
    easing: "ease-out", // モーションのなめらかさ
    delay: 400,
  };
  sr.reveal(className, fadeinLeft);
};

export const setFadeinLeft = () => {
  const className = ".sr__fadein-left";
  const fadeinLeft = {
    duration: 1400, // アニメーションの完了にかかる時間
    origin: "left", // 出現方向
    distance: "100px", // 出現が開始する距離
    viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
    reset: false, // スクロールする度にアニメーションをループ(再表示)するか
    easing: "ease-out", // モーションのなめらかさ
  };
  sr.reveal(className, fadeinLeft);
};

export const setFadeinRight = () => {
  const className = ".sr__fadein-right";
  const fadeinRight = {
    duration: 1400, // アニメーションの完了にかかる時間
    origin: "right", // 出現方向
    distance: "100px", // 出現が開始する距離
    viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
    reset: false, // スクロールする度にアニメーションをループ(再表示)するか
    easing: "ease-out", // モーションのなめらかさ
    //afterReveal: sr.reveal(".card-title, .card-text", {
    //  duration: 1400, // アニメーションの完了にかかる時間
    //  origin: "left", // 出現方向
    //}),
  };
  sr.reveal(className, fadeinRight);
};
