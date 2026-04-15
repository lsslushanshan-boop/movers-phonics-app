const words = [
  {
    word: "cake",
    cn: "蛋糕",
    emoji: "🎂",
    scene: "食物与饮品",
    category: "a-e",
    phonics: ["c", "a-e", "k"],
    phonicsSpeak: ["c", "ake"],
    rule: "a-e 让 a 读字母音 /eɪ/，可以慢慢拼成 c-a-ke。"
  },
  {
    word: "train",
    cn: "火车",
    emoji: "🚆",
    scene: "出行与城市",
    category: "ai",
    phonics: ["tr", "ai", "n"],
    phonicsSpeak: ["tr", "ain"],
    rule: "ai 在中间常常一起发 /eɪ/，train 可以分成 tr-ai-n。"
  },
  {
    word: "boat",
    cn: "小船",
    emoji: "⛵",
    scene: "出行与城市",
    category: "oa",
    phonics: ["b", "oa", "t"],
    phonicsSpeak: ["b", "oat"],
    rule: "oa 常发长音 /oʊ/，boat 可以读成 b-oa-t。"
  },
  {
    word: "sheep",
    cn: "绵羊",
    emoji: "🐑",
    scene: "动物世界",
    category: "sh + ee",
    phonics: ["sh", "ee", "p"],
    phonicsSpeak: ["sh", "eep"],
    rule: "sh 先发 /ʃ/，ee 再发长音 /iː/，合起来就是 sh-ee-p。"
  },
  {
    word: "chair",
    cn: "椅子",
    emoji: "🪑",
    scene: "家庭与学校",
    category: "ch + air",
    phonics: ["ch", "air"],
    phonicsSpeak: ["ch", "air"],
    rule: "ch 常发 /tʃ/，air 在这里读 /eə(r)/，chair 可以拆成 ch-air。"
  },
  {
    word: "green",
    cn: "绿色",
    emoji: "🟢",
    scene: "颜色与自然",
    category: "gr + ee",
    phonics: ["gr", "ee", "n"],
    phonicsSpeak: ["gr", "een"],
    rule: "辅音连在一起先读 gr，再读 ee 的长音 /iː/。"
  },
  {
    word: "book",
    cn: "书",
    emoji: "📘",
    scene: "家庭与学校",
    category: "oo",
    phonics: ["b", "oo", "k"],
    phonicsSpeak: ["b", "ook"],
    rule: "这里的 oo 发短音 /ʊ/，book 可以拼成 b-oo-k。"
  },
  {
    word: "bird",
    cn: "鸟",
    emoji: "🐦",
    scene: "动物世界",
    category: "ir",
    phonics: ["b", "ir", "d"],
    phonicsSpeak: ["b", "ird"],
    rule: "ir 常发 /ɜː(r)/，bird 可以读成 b-ir-d。"
  },
  {
    word: "duck",
    cn: "鸭子",
    emoji: "🦆",
    scene: "动物世界",
    category: "u + ck",
    phonics: ["d", "u", "ck"],
    phonicsSpeak: ["d", "u", "ck"],
    rule: "短元音 u 后面接 ck，duck 可以拆成 d-u-ck。"
  },
  {
    word: "fish",
    cn: "鱼",
    emoji: "🐟",
    scene: "动物世界",
    category: "sh",
    phonics: ["f", "i", "sh"],
    phonicsSpeak: ["f", "i", "sh"],
    rule: "先读 f，再读短音 i，最后 sh 发 /ʃ/。"
  },
  {
    word: "goat",
    cn: "山羊",
    emoji: "🐐",
    scene: "动物世界",
    category: "oa",
    phonics: ["g", "oa", "t"],
    phonicsSpeak: ["g", "oat"],
    rule: "oa 还是长音 /oʊ/，goat 可以读成 g-oa-t。"
  },
  {
    word: "house",
    cn: "房子",
    emoji: "🏠",
    scene: "家庭与学校",
    category: "ou",
    phonics: ["h", "ou", "s"],
    phonicsSpeak: ["h", "ouse"],
    rule: "ou 在这里发 /aʊ/，house 可以拆成 h-ou-s。"
  },
  {
    word: "juice",
    cn: "果汁",
    emoji: "🧃",
    scene: "食物与饮品",
    category: "j + ui",
    phonics: ["j", "ui", "ce"],
    phonicsSpeak: ["j", "uice"],
    rule: "ui 在这里发长音 /uː/，juice 可以慢慢拼成 j-ui-ce。"
  },
  {
    word: "mouse",
    cn: "老鼠",
    emoji: "🐭",
    scene: "动物世界",
    category: "ou",
    phonics: ["m", "ou", "s"],
    phonicsSpeak: ["m", "ouse"],
    rule: "ou 发 /aʊ/，mouse 和 house 用的是同一类拼读规律。"
  },
  {
    word: "night",
    cn: "夜晚",
    emoji: "🌙",
    scene: "天气与时间",
    category: "igh",
    phonics: ["n", "igh", "t"],
    phonicsSpeak: ["n", "igh", "t"],
    rule: "igh 常发 /aɪ/，night 可以拆成 n-igh-t。"
  },
  {
    word: "phone",
    cn: "电话",
    emoji: "☎️",
    scene: "家庭与学校",
    category: "ph + o-e",
    phonics: ["ph", "o-e", "n"],
    phonicsSpeak: ["f", "one"],
    rule: "ph 发 /f/，o-e 让 o 读字母音 /oʊ/。"
  },
  {
    word: "rain",
    cn: "雨",
    emoji: "🌧️",
    scene: "天气与时间",
    category: "ai",
    phonics: ["r", "ai", "n"],
    phonicsSpeak: ["r", "ain"],
    rule: "ai 发 /eɪ/，rain 可以拼成 r-ai-n。"
  },
  {
    word: "sea",
    cn: "大海",
    emoji: "🌊",
    scene: "颜色与自然",
    category: "ea",
    phonics: ["s", "ea"],
    phonicsSpeak: ["s", "ea"],
    rule: "ea 在这里发长音 /iː/，sea 可以拆成 s-ea。"
  },
  {
    word: "shoe",
    cn: "鞋子",
    emoji: "👟",
    scene: "衣物与日常",
    category: "sh + oe",
    phonics: ["sh", "oe"],
    phonicsSpeak: ["sh", "oe"],
    rule: "sh 先发 /ʃ/，oe 在这里帮助读出 /uː/。"
  },
  {
    word: "tree",
    cn: "树",
    emoji: "🌳",
    scene: "颜色与自然",
    category: "tr + ee",
    phonics: ["tr", "ee"],
    phonicsSpeak: ["tr", "ee"],
    rule: "tr 连在一起先读，再读 ee 的长音 /iː/。"
  }
];

const sceneOrder = [
  "食物与饮品",
  "家庭与学校",
  "动物世界",
  "颜色与自然",
  "天气与时间",
  "出行与城市",
  "衣物与日常"
];

const wordsByScene = sceneOrder.flatMap((scene) =>
  words.filter((item) => item.scene === scene)
);

const progressText = document.getElementById("progressText");
const sceneTag = document.getElementById("sceneTag");
const categoryTag = document.getElementById("categoryTag");
const wordEmoji = document.getElementById("wordEmoji");
const wordCn = document.getElementById("wordCn");
const wordText = document.getElementById("wordText");
const phonicsBreakdown = document.getElementById("phonicsBreakdown");
const phonicsRule = document.getElementById("phonicsRule");
const playHint = document.getElementById("playHint");
const replayBtn = document.getElementById("replayBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let speechToken = 0;

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function speakOnce(text) {
  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) {
      resolve(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.78;
    utterance.pitch = 1.03;
    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);
    window.speechSynthesis.speak(utterance);
  });
}

async function speakPhonicsPieces(pieces, currentToken) {
  for (let i = 0; i < pieces.length; i += 1) {
    if (currentToken !== speechToken) {
      return false;
    }

    const ok = await speakOnce(pieces[i]);
    if (!ok) {
      return false;
    }

    if (i < pieces.length - 1) {
      await wait(650);
    }
  }

  return true;
}

async function playWordSequence(item) {
  speechToken += 1;
  const currentToken = speechToken;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  playHint.textContent = "正在播放：整词 1 遍 -> 拆分读 1 遍 -> 整词 1 遍。";

  const fullOnceOk = await speakOnce(item.word);
  if (!fullOnceOk || currentToken !== speechToken) {
    playHint.textContent = "当前浏览器不支持自动朗读。";
    return;
  }

  await wait(700);

  const phonicsOk = await speakPhonicsPieces(item.phonicsSpeak, currentToken);
  if (!phonicsOk || currentToken !== speechToken) {
    playHint.textContent = "当前浏览器不支持自动朗读。";
    return;
  }

  await wait(700);

  const fullAgainOk = await speakOnce(item.word);
  if (!fullAgainOk || currentToken !== speechToken) {
    playHint.textContent = "当前浏览器不支持自动朗读。";
    return;
  }

  if (currentToken === speechToken) {
    playHint.textContent = "这一轮已读完：整词、拆分、整词。可以点击“下一个”。";
  }
}

function renderCurrentWord() {
  const item = wordsByScene[currentIndex];

  progressText.textContent = `${currentIndex + 1} / ${wordsByScene.length}`;
  sceneTag.textContent = item.scene;
  categoryTag.textContent = item.category;
  wordEmoji.textContent = item.emoji;
  wordCn.textContent = item.cn;
  wordText.textContent = item.word;
  phonicsRule.textContent = item.rule;
  phonicsBreakdown.innerHTML = item.phonics
    .map((piece) => `<span class="phonics-chip">${piece}</span>`)
    .join("");

  playWordSequence(item);
}

replayBtn.addEventListener("click", () => {
  playWordSequence(wordsByScene[currentIndex]);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % wordsByScene.length;
  renderCurrentWord();
});

renderCurrentWord();
