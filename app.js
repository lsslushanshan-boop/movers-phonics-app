const words = [
  {
    word: "cake",
    cn: "蛋糕",
    emoji: "🎂",
    scene: "食物与饮品",
    category: "a-e",
    phonics: ["c", "a-e", "k"],
    phonicsSounds: ["kuh", "ay", "kuh"],
    rule: "a-e 让 a 读字母音 /eɪ/，可以慢慢拼成 c-a-ke。"
  },
  {
    word: "train",
    cn: "火车",
    emoji: "🚆",
    scene: "出行与城市",
    category: "ai",
    phonics: ["tr", "ai", "n"],
    phonicsSounds: ["t", "r", "ay", "n"],
    rule: "ai 在中间常常一起发 /eɪ/，train 可以分成 tr-ai-n。"
  },
  {
    word: "boat",
    cn: "小船",
    emoji: "⛵",
    scene: "出行与城市",
    category: "oa",
    phonics: ["b", "oa", "t"],
    phonicsSounds: ["buh", "oh", "t"],
    rule: "oa 常发长音 /oʊ/，boat 可以读成 b-oa-t。"
  },
  {
    word: "sheep",
    cn: "绵羊",
    emoji: "🐑",
    scene: "动物世界",
    category: "sh + ee",
    phonics: ["sh", "ee", "p"],
    phonicsSounds: ["sh", "ee", "p"],
    rule: "sh 先发 /ʃ/，ee 再发长音 /iː/，合起来就是 sh-ee-p。"
  },
  {
    word: "chair",
    cn: "椅子",
    emoji: "🪑",
    scene: "家庭与学校",
    category: "ch + air",
    phonics: ["ch", "air"],
    phonicsSounds: ["ch", "air"],
    rule: "ch 常发 /tʃ/，air 在这里读 /eə(r)/，chair 可以拆成 ch-air。"
  },
  {
    word: "green",
    cn: "绿色",
    emoji: "🟢",
    scene: "颜色与自然",
    category: "gr + ee",
    phonics: ["gr", "ee", "n"],
    phonicsSounds: ["g", "r", "ee", "n"],
    rule: "辅音连在一起先读 gr，再读 ee 的长音 /iː/。"
  },
  {
    word: "book",
    cn: "书",
    emoji: "📘",
    scene: "家庭与学校",
    category: "oo",
    phonics: ["b", "oo", "k"],
    phonicsSounds: ["buh", "uu", "kuh"],
    rule: "这里的 oo 发短音 /ʊ/，book 可以拼成 b-oo-k。"
  },
  {
    word: "bird",
    cn: "鸟",
    emoji: "🐦",
    scene: "动物世界",
    category: "ir",
    phonics: ["b", "ir", "d"],
    phonicsSounds: ["buh", "er", "duh"],
    rule: "ir 常发 /ɜː(r)/，bird 可以读成 b-ir-d。"
  },
  {
    word: "duck",
    cn: "鸭子",
    emoji: "🦆",
    scene: "动物世界",
    category: "u + ck",
    phonics: ["d", "u", "ck"],
    phonicsSounds: ["duh", "uh", "kuh"],
    rule: "短元音 u 后面接 ck，duck 可以拆成 d-u-ck。"
  },
  {
    word: "fish",
    cn: "鱼",
    emoji: "🐟",
    scene: "动物世界",
    category: "sh",
    phonics: ["f", "i", "sh"],
    phonicsSounds: ["f", "ih", "sh"],
    rule: "先读 f，再读短音 i，最后 sh 发 /ʃ/。"
  },
  {
    word: "goat",
    cn: "山羊",
    emoji: "🐐",
    scene: "动物世界",
    category: "oa",
    phonics: ["g", "oa", "t"],
    phonicsSounds: ["guh", "oh", "t"],
    rule: "oa 还是长音 /oʊ/，goat 可以读成 g-oa-t。"
  },
  {
    word: "house",
    cn: "房子",
    emoji: "🏠",
    scene: "家庭与学校",
    category: "ou",
    phonics: ["h", "ou", "s"],
    phonicsSounds: ["h", "ow", "s"],
    rule: "ou 在这里发 /aʊ/，house 可以拆成 h-ou-s。"
  },
  {
    word: "juice",
    cn: "果汁",
    emoji: "🧃",
    scene: "食物与饮品",
    category: "j + ui",
    phonics: ["j", "ui", "ce"],
    phonicsSounds: ["j", "oo", "s"],
    rule: "ui 在这里发长音 /uː/，juice 可以慢慢拼成 j-ui-ce。"
  },
  {
    word: "mouse",
    cn: "老鼠",
    emoji: "🐭",
    scene: "动物世界",
    category: "ou",
    phonics: ["m", "ou", "s"],
    phonicsSounds: ["m", "ow", "s"],
    rule: "ou 发 /aʊ/，mouse 和 house 用的是同一类拼读规律。"
  },
  {
    word: "night",
    cn: "夜晚",
    emoji: "🌙",
    scene: "天气与时间",
    category: "igh",
    phonics: ["n", "igh", "t"],
    phonicsSounds: ["n", "eye", "t"],
    rule: "igh 常发 /aɪ/，night 可以拆成 n-igh-t。"
  },
  {
    word: "phone",
    cn: "电话",
    emoji: "☎️",
    scene: "家庭与学校",
    category: "ph + o-e",
    phonics: ["ph", "o-e", "n"],
    phonicsSounds: ["f", "oh", "n"],
    rule: "ph 发 /f/，o-e 让 o 读字母音 /oʊ/。"
  },
  {
    word: "rain",
    cn: "雨",
    emoji: "🌧️",
    scene: "天气与时间",
    category: "ai",
    phonics: ["r", "ai", "n"],
    phonicsSounds: ["r", "ay", "n"],
    rule: "ai 发 /eɪ/，rain 可以拼成 r-ai-n。"
  },
  {
    word: "sea",
    cn: "大海",
    emoji: "🌊",
    scene: "颜色与自然",
    category: "ea",
    phonics: ["s", "ea"],
    phonicsSounds: ["s", "ee"],
    rule: "ea 在这里发长音 /iː/，sea 可以拆成 s-ea。"
  },
  {
    word: "shoe",
    cn: "鞋子",
    emoji: "👟",
    scene: "衣物与日常",
    category: "sh + oe",
    phonics: ["sh", "oe"],
    phonicsSounds: ["sh", "oo"],
    rule: "sh 先发 /ʃ/，oe 在这里帮助读出 /uː/。"
  },
  {
    word: "tree",
    cn: "树",
    emoji: "🌳",
    scene: "颜色与自然",
    category: "tr + ee",
    phonics: ["tr", "ee"],
    phonicsSounds: ["t", "r", "ee"],
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
let activeAudio = null;

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function sanitizeWord(word) {
  return word.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function stopActiveAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
}

function stopPlayback() {
  stopActiveAudio();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function getAudioSources(item) {
  const slug = sanitizeWord(item.word);
  const phonicsSources = item.phonics.map((_, index) => `audio/phonics/${slug}/${index + 1}.mp3`);

  return {
    whole: `audio/words/${slug}.mp3`,
    phonics: phonicsSources
  };
}

function playAudioFile(src) {
  return new Promise((resolve) => {
    const audio = new Audio(src);
    activeAudio = audio;

    audio.onended = () => {
      if (activeAudio === audio) {
        activeAudio = null;
      }
      resolve(true);
    };

    audio.onerror = () => {
      if (activeAudio === audio) {
        activeAudio = null;
      }
      resolve(false);
    };

    audio.play().catch(() => {
      if (activeAudio === audio) {
        activeAudio = null;
      }
      resolve(false);
    });
  });
}

async function playAudioSequence(sources, currentToken) {
  for (let i = 0; i < sources.length; i += 1) {
    if (currentToken !== speechToken) {
      return false;
    }

    const ok = await playAudioFile(sources[i]);
    if (!ok) {
      return false;
    }

    if (i < sources.length - 1) {
      await wait(800);
    }
  }

  return true;
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

function normalizePhonicsSound(sound) {
  const map = {
    ch: "chuh",
    sh: "shuh",
    ph: "fuh",
    th: "thuh",
    ng: "ng",
    ee: "eee",
    ea: "eee",
    oo: "ooo",
    oo_short: "uu",
    ai: "ay",
    ay: "ay",
    oa: "oh",
    ow: "ow",
    ou: "ow",
    igh: "eye",
    ir: "er",
    er: "er",
    ar: "ar",
    or: "or",
    uh: "uh",
    ih: "ih",
    eh: "eh",
    ah: "ah",
    oh: "oh",
    oo_long: "ooo",
    eye: "eye",
    air: "air",
    buh: "buh",
    kuh: "kuh",
    duh: "duh",
    guh: "guh",
    f: "fff",
    h: "hhh",
    j: "juh",
    k: "kuh",
    m: "mmm",
    n: "nnn",
    p: "puh",
    r: "rrr",
    s: "sss",
    t: "tuh",
    v: "vvv",
    w: "wuh",
    y: "yuh",
    z: "zzz"
  };

  return map[sound] || sound;
}

async function speakPhonicsPieces(sounds, currentToken) {
  for (let i = 0; i < sounds.length; i += 1) {
    if (currentToken !== speechToken) {
      return false;
    }

    const ok = await speakOnce(normalizePhonicsSound(sounds[i]));
    if (!ok) {
      return false;
    }

    if (i < sounds.length - 1) {
      await wait(800);
    }
  }

  return true;
}

async function playWordSequence(item) {
  speechToken += 1;
  const currentToken = speechToken;
  const audioSources = getAudioSources(item);

  stopPlayback();

  playHint.textContent = "正在播放：整词 1 遍 -> 拆分读 1 遍 -> 整词 1 遍。";

  const wholeAudioOk = await playAudioFile(audioSources.whole);
  if (wholeAudioOk && currentToken === speechToken) {
    await wait(700);

    const phonicsAudioOk = await playAudioSequence(audioSources.phonics, currentToken);
    if (phonicsAudioOk && currentToken === speechToken) {
      await wait(700);

      const wholeAgainAudioOk = await playAudioFile(audioSources.whole);
      if (wholeAgainAudioOk && currentToken === speechToken) {
        playHint.textContent = "正在使用固定音频播放，发音会更稳定。";
        return;
      }
    }
  }

  playHint.textContent = "未找到这个单词的固定音频，暂时改用浏览器朗读。";

  const fullOnceOk = await speakOnce(item.word);
  if (!fullOnceOk || currentToken !== speechToken) {
    playHint.textContent = "当前浏览器不支持自动朗读。";
    return;
  }

  await wait(700);

  const phonicsOk = await speakPhonicsPieces(item.phonicsSounds, currentToken);
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
