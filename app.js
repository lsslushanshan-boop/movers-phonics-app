const scenes = [
  {
    id: "toy-shop",
    title: "A favourite toy shop",
    words: [
      { word: "comic", cn: "漫画书", emoji: "📘", category: "co", phonics: ["c", "o", "mic"], tip: "`co` 在这里读短音 /ko/，先读开头，再顺着结尾滑出去。" },
      { word: "pirate", cn: "海盗", emoji: "🏴‍☠️", category: "i-e", phonics: ["p", "i-e", "rate"], tip: "`i-e` 是字母名音，先听到 /pai/，再接上后半段。" },
      { word: "parrot", cn: "鹦鹉", emoji: "🦜", category: "rr", phonics: ["p", "a", "rrot"], tip: "双写 `rr` 让中间的 /r/ 更明显，注意卷舌感。" },
      { word: "kitten", cn: "小猫", emoji: "🐱", category: "tt", phonics: ["k", "i", "tten"], tip: "双写 `tt` 常见在短元音后面，先读短促的 /i/ 再收尾。" },
      { word: "puppy", cn: "小狗", emoji: "🐶", category: "u", phonics: ["p", "u", "ppy"], tip: "`u` 在这里读短音 /ʌ/，嘴巴放松，读得轻快一点。" },
      { word: "whale", cn: "鲸鱼", emoji: "🐋", category: "a-e", phonics: ["wh", "a-e", "l"], tip: "`a-e` 让 `a` 读字母名音，像先读 /wei/ 再补结尾。" }
    ]
  },
  {
    id: "party",
    title: "The party",
    words: [
      { word: "cheese", cn: "奶酪", emoji: "🧀", category: "ch + ee", phonics: ["ch", "ee", "se"], tip: "`ch` 先出 /tʃ/，`ee` 拉长读 /i:/，这是很常见的组合。" },
      { word: "bottle", cn: "瓶子", emoji: "🍾", category: "tt", phonics: ["b", "o", "ttle"], tip: "双写 `tt` 前面的 `o` 保持短音，整词节奏是 bot-tle。" },
      { word: "glass", cn: "玻璃杯", emoji: "🥛", category: "a", phonics: ["g", "la", "ss"], tip: "`a` 在这里是短音，嘴巴张开但不要拉长。" },
      { word: "plate", cn: "盘子", emoji: "🍽️", category: "a-e", phonics: ["p", "l", "a-e", "t"], tip: "`a-e` 读 /ei/，前面的辅音连起来，像 /pleit/。" },
      { word: "bowl", cn: "碗", emoji: "🥣", category: "ow", phonics: ["b", "ow", "l"], tip: "`ow` 在这里读长音 /ou/，注意嘴型有滑动。" },
      { word: "cup", cn: "杯子", emoji: "☕", category: "u", phonics: ["c", "u", "p"], tip: "三个音快速拼起来：/k/ + /ʌ/ + /p/。" }
    ]
  },
  {
    id: "doctor",
    title: "At the doctor's",
    words: [
      { word: "doctor", cn: "医生", emoji: "🩺", category: "ct", phonics: ["d", "o", "ctor"], tip: "`ct` 连在一起时，中间停顿很短，整词重音在前面。" },
      { word: "nurse", cn: "护士", emoji: "👩‍⚕️", category: "ur", phonics: ["n", "ur", "se"], tip: "`ur` 常读 /ɜːr/，这个音要稳一点，不要拆太开。" },
      { word: "cold", cn: "感冒", emoji: "🤧", category: "ol", phonics: ["c", "o", "ld"], tip: "`o` 在这里接近长音 /ou/，结尾 `ld` 一起收住。" },
      { word: "cough", cn: "咳嗽", emoji: "😷", category: "ough", phonics: ["c", "ough"], tip: "`ough` 这个组合变化很多，这里要记成 /of/。" },
      { word: "tooth", cn: "牙齿", emoji: "🦷", category: "oo", phonics: ["t", "oo", "th"], tip: "`oo` 拉长读 /u:/，最后 `th` 用舌尖轻触牙齿。" },
      { word: "back", cn: "背", emoji: "🧍", category: "a + ck", phonics: ["b", "a", "ck"], tip: "`ck` 常在短元音后出现，尾音要干净利落。" }
    ]
  },
  {
    id: "hotel",
    title: "Uncle Charlie's hotel",
    words: [
      { word: "room", cn: "房间", emoji: "🛏️", category: "oo", phonics: ["r", "oo", "m"], tip: "`oo` 在这里是长音 /u:/，嘴唇稍微收圆。" },
      { word: "phone", cn: "电话", emoji: "☎️", category: "ph + o-e", phonics: ["ph", "o-e", "n"], tip: "`ph` 读 /f/，`o-e` 读字母名音 /ou/。" },
      { word: "chair", cn: "椅子", emoji: "🪑", category: "ch + air", phonics: ["ch", "air"], tip: "`air` 一口气滑出来，别拆成太多段。" },
      { word: "book", cn: "书", emoji: "📕", category: "oo", phonics: ["b", "oo", "k"], tip: "这里的 `oo` 不是长音，而是较短的 /ʊ/，和 `room` 不一样。" },
      { word: "door", cn: "门", emoji: "🚪", category: "oo", phonics: ["d", "oo", "r"], tip: "`oo` 在这个词里更接近 /ɔ:/，可以顺便比较不同单词中的变化。" },
      { word: "bed", cn: "床", emoji: "🛌", category: "e", phonics: ["b", "e", "d"], tip: "短元音 `e` 要短促清楚，三步很快拼合成整词。" }
    ]
  },
  {
    id: "countryside-jungle",
    title: "From the countryside to the jungle",
    words: [
      { word: "jungle", cn: "丛林", emoji: "🌴", category: "u", phonics: ["j", "u", "ngle"], tip: "`u` 还是短音 /ʌ/，结尾 `-gle` 轻一点带过去。" },
      { word: "mountain", cn: "山", emoji: "⛰️", category: "ou", phonics: ["m", "ou", "ntain"], tip: "`ou` 读 /au/，先张开再收口。" },
      { word: "forest", cn: "森林", emoji: "🌲", category: "or", phonics: ["f", "or", "est"], tip: "`or` 常读 /ɔːr/，注意第一个音节更重。" },
      { word: "lake", cn: "湖", emoji: "🏞️", category: "a-e", phonics: ["l", "a-e", "k"], tip: "`a-e` 让整词像 /leik/，先把开头辅音带起来。" },
      { word: "city", cn: "城市", emoji: "🏙️", category: "ci", phonics: ["ci", "ty"], tip: "`ci` 在这里读 /si/，看到 `c` 也要学会判断是否变成 /s/。" },
      { word: "ticket", cn: "票", emoji: "🎫", category: "ck", phonics: ["t", "i", "cket"], tip: "`ck` 保持 /k/ 音，前面的 `i` 是短音。" }
    ]
  },
  {
    id: "weather",
    title: "The weather",
    words: [
      { word: "rain", cn: "雨", emoji: "🌧️", category: "ai", phonics: ["r", "ai", "n"], tip: "`ai` 常读 /ei/，是很典型的自然拼读组合。" },
      { word: "snow", cn: "雪", emoji: "❄️", category: "ow", phonics: ["sn", "ow"], tip: "这里的 `ow` 是 /ou/，和 `cow` 那种 /au/ 不同。" },
      { word: "wind", cn: "风", emoji: "💨", category: "i", phonics: ["w", "i", "nd"], tip: "`i` 是短音 /i/，结尾 `nd` 一起收住。" },
      { word: "cloud", cn: "云", emoji: "☁️", category: "ou", phonics: ["c", "l", "ou", "d"], tip: "`ou` 读 /au/，可以慢一点把四块拼起来。" },
      { word: "sunny", cn: "晴朗的", emoji: "☀️", category: "u", phonics: ["s", "u", "nny"], tip: "`nn` 让前面的短元音更稳定，整词读得轻快些。" },
      { word: "cloudy", cn: "多云的", emoji: "⛅", category: "ou", phonics: ["c", "l", "ou", "dy"], tip: "先稳稳读出 `cloud`，再加结尾的 /i/。" }
    ]
  },
  {
    id: "town",
    title: "Our town",
    words: [
      { word: "market", cn: "市场", emoji: "🏪", category: "ar", phonics: ["m", "ar", "ket"], tip: "`ar` 常读 /ɑːr/，声音更饱满一点。" },
      { word: "cafe", cn: "咖啡馆", emoji: "☕", category: "a", phonics: ["c", "a", "fe"], tip: "这是借词，前面可以先按 /ka/ 去拼，再连上后面。" },
      { word: "library", cn: "图书馆", emoji: "📚", category: "br", phonics: ["l", "i", "brary"], tip: "`br` 是辅音连缀，读的时候不要在中间加元音。" },
      { word: "square", cn: "广场", emoji: "⬜", category: "qu", phonics: ["s", "qu", "are"], tip: "`qu` 常一起读 /kw/，是很好认的一组。" },
      { word: "supermarket", cn: "超市", emoji: "🛒", category: "er", phonics: ["s", "u", "per", "market"], tip: "长词先分块，再拼整词，会轻松很多。" },
      { word: "centre", cn: "中心", emoji: "🏬", category: "ce", phonics: ["ce", "ntre"], tip: "`ce` 这里读 /se/，注意英式拼写和发音搭配。" }
    ]
  },
  {
    id: "holidays",
    title: "Dreaming of holidays",
    words: [
      { word: "sail", cn: "航行", emoji: "⛵", category: "ai", phonics: ["s", "ai", "l"], tip: "`ai` 读 /ei/，三个音连起来就是 /seil/。" },
      { word: "fishing", cn: "钓鱼", emoji: "🎣", category: "sh", phonics: ["f", "i", "shing"], tip: "`sh` 是固定组合 /ʃ/，结尾可以轻轻带过。" },
      { word: "email", cn: "电子邮件", emoji: "📧", category: "ai", phonics: ["e", "mail"], tip: "`mail` 里的 `ai` 还是 /ei/，可以借熟词帮助记忆。" },
      { word: "video", cn: "视频", emoji: "🎥", category: "eo", phonics: ["v", "i", "deo"], tip: "这个词更适合分音节感受节奏，不用每一块都机械等长。" },
      { word: "website", cn: "网站", emoji: "💻", category: "i-e", phonics: ["w", "e", "b", "site"], tip: "`site` 里 `i-e` 读 /ai/，先认出熟悉的结尾。" },
      { word: "dress", cn: "连衣裙", emoji: "👗", category: "e", phonics: ["dr", "e", "ss"], tip: "`dr` 连读，`e` 短而清楚，结尾双写 `ss` 收尾。" }
    ]
  }
];

const STORAGE_KEY = "movers-phonics-progress";

const progressText = document.getElementById("progressText");
const sceneTag = document.getElementById("sceneTag");
const categoryTag = document.getElementById("categoryTag");
const scenePicker = document.getElementById("scenePicker");
const sceneMeta = document.getElementById("sceneMeta");
const wordEmoji = document.getElementById("wordEmoji");
const wordCn = document.getElementById("wordCn");
const wordText = document.getElementById("wordText");
const practiceHint = document.getElementById("practiceHint");
const phonicsBreakdown = document.getElementById("phonicsBreakdown");
const phonicsTip = document.getElementById("phonicsTip");
const replayBtn = document.getElementById("replayBtn");
const nextBtn = document.getElementById("nextBtn");
const revealBtn = document.getElementById("revealBtn");
const readAnswerBtn = document.getElementById("readAnswerBtn");
const practiceActions = document.getElementById("practiceActions");
const learnModeBtn = document.getElementById("learnModeBtn");
const practiceModeBtn = document.getElementById("practiceModeBtn");

let currentSceneIndex = 0;
let currentWordIndex = 0;
let mode = "learn";
let answerVisible = true;
let speechToken = 0;
let activeAudio = null;
let scenePickerVisible = false;

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function sanitizeWord(word) {
  return word.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function getCurrentScene() {
  return scenes[currentSceneIndex];
}

function getCurrentWord() {
  return getCurrentScene().words[currentWordIndex];
}

function loadProgress() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    if (Number.isInteger(saved.sceneIndex) && saved.sceneIndex >= 0 && saved.sceneIndex < scenes.length) {
      currentSceneIndex = saved.sceneIndex;
    }
    if (Number.isInteger(saved.wordIndex) && saved.wordIndex >= 0 && saved.wordIndex < scenes[currentSceneIndex].words.length) {
      currentWordIndex = saved.wordIndex;
    }
    if (saved.mode === "practice") {
      mode = "practice";
      answerVisible = false;
    }
  } catch (error) {
    console.warn("Failed to load progress:", error);
  }
}

function saveProgress() {
  const payload = {
    sceneIndex: currentSceneIndex,
    wordIndex: currentWordIndex,
    mode
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function stopPlayback() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function getAudioSources(item) {
  const slug = sanitizeWord(item.word);
  return {
    whole: `audio/words/${slug}.mp3`,
    phonics: item.phonics.map((_, index) => `audio/phonics/${slug}/${index + 1}.mp3`)
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
      await wait(700);
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
    utterance.rate = 0.8;
    utterance.pitch = 1.02;
    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);
    window.speechSynthesis.speak(utterance);
  });
}

async function playWordSequence(item) {
  speechToken += 1;
  const currentToken = speechToken;
  const audioSources = getAudioSources(item);

  stopPlayback();

  const wholeAudioOk = await playAudioFile(audioSources.whole);
  if (wholeAudioOk && currentToken === speechToken) {
    await wait(700);
    const phonicsAudioOk = await playAudioSequence(audioSources.phonics, currentToken);
    if (phonicsAudioOk && currentToken === speechToken) {
      await wait(700);
      await playAudioFile(audioSources.whole);
      return;
    }
  }

  if (currentToken !== speechToken) {
    return;
  }

  const firstReadOk = await speakOnce(item.word);
  if (!firstReadOk || currentToken !== speechToken) {
    return;
  }

  await wait(1600);

  if (currentToken !== speechToken) {
    return;
  }

  await speakOnce(item.word);
}

function updateModeButtons() {
  const learnActive = mode === "learn";
  learnModeBtn.classList.toggle("active", learnActive);
  practiceModeBtn.classList.toggle("active", !learnActive);
  learnModeBtn.setAttribute("aria-selected", String(learnActive));
  practiceModeBtn.setAttribute("aria-selected", String(!learnActive));
}

function renderScenePicker() {
  scenePicker.innerHTML = scenes
    .map(
      (scene, index) => `
        <button class="scene-option ${index === currentSceneIndex ? "active" : ""}" data-scene-index="${index}" type="button">
          ${scene.title}
        </button>
      `
    )
    .join("");

  scenePicker.hidden = !scenePickerVisible;

  scenePicker.querySelectorAll(".scene-option").forEach((button) => {
    button.addEventListener("click", () => {
      currentSceneIndex = Number(button.dataset.sceneIndex);
      currentWordIndex = 0;
      scenePickerVisible = false;
      answerVisible = mode === "learn";
      saveProgress();
      renderAll();
    });
  });
}

function renderCurrentWord() {
  const scene = getCurrentScene();
  const item = getCurrentWord();
  const sceneLabel = `场景 ${currentSceneIndex + 1} / ${scenes.length}`;
  const shouldHideWord = mode === "practice" && !answerVisible;

  progressText.textContent = `${currentWordIndex + 1} / ${scene.words.length}`;
  sceneTag.textContent = scene.title;
  categoryTag.textContent = item.category;
  sceneMeta.textContent = `${sceneLabel} · ${mode === "learn" ? "先听再看" : "先猜再验证"}`;
  wordEmoji.textContent = item.emoji;
  wordCn.textContent = item.cn;
  wordText.textContent = shouldHideWord ? "•••••" : item.word;
  wordText.classList.toggle("is-hidden", shouldHideWord);
  practiceHint.hidden = mode !== "practice";
  phonicsTip.textContent = item.tip;
  phonicsBreakdown.innerHTML = item.phonics
    .map((piece) => `<span class="phonics-chip">${piece}</span>`)
    .join("");

  practiceActions.hidden = mode !== "practice";
  revealBtn.textContent = answerVisible ? "隐藏答案" : "显示答案";
  readAnswerBtn.disabled = shouldHideWord;
  replayBtn.textContent = mode === "learn" ? "再读一轮" : "再听答案";

  if (mode === "learn") {
    playWordSequence(item);
  } else if (answerVisible) {
    playWordSequence(item);
  } else {
    stopPlayback();
  }
}

function renderAll() {
  updateModeButtons();
  renderScenePicker();
  renderCurrentWord();
}

function setMode(nextMode) {
  if (mode === nextMode) {
    return;
  }

  mode = nextMode;
  answerVisible = mode === "learn";
  saveProgress();
  renderAll();
}

sceneTag.addEventListener("click", () => {
  scenePickerVisible = !scenePickerVisible;
  renderScenePicker();
});

learnModeBtn.addEventListener("click", () => {
  setMode("learn");
});

practiceModeBtn.addEventListener("click", () => {
  setMode("practice");
});

replayBtn.addEventListener("click", () => {
  if (mode === "practice" && !answerVisible) {
    return;
  }
  playWordSequence(getCurrentWord());
});

revealBtn.addEventListener("click", () => {
  answerVisible = !answerVisible;
  renderCurrentWord();
});

readAnswerBtn.addEventListener("click", () => {
  if (!answerVisible) {
    answerVisible = true;
    renderCurrentWord();
    return;
  }
  playWordSequence(getCurrentWord());
});

nextBtn.addEventListener("click", () => {
  const scene = getCurrentScene();
  currentWordIndex = (currentWordIndex + 1) % scene.words.length;
  answerVisible = mode === "learn";
  saveProgress();
  renderCurrentWord();
});

loadProgress();
renderAll();
