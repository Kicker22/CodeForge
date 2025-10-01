// scripts/dataStructGeneral.js
import { renderComplexityTable } from "./common.js";

/* -------------------------
 * Complexity table (Arrays)
 * ------------------------- */
const COMPLEXITY_ROWS = [
  { op: "Index access", avg: "O(1)", worst: "O(1)" },
  { op: "Search (unsorted)", avg: "O(n)", worst: "O(n)" },
  { op: "Insert at end (dynamic array)", avg: "O(1)*", worst: "O(n)" },
  { op: "Insert at index", avg: "O(n)", worst: "O(n)" },
  { op: "Delete at index", avg: "O(n)", worst: "O(n)" },
];

function mountComplexity() {
  const section = document.getElementById("complexity-section");
  if (!section) return;
  // Clear existing and rebuild caption with amortized footnote
  while (section.lastChild && section.querySelector("table"))
    section.removeChild(section.lastChild);
  renderComplexityTable(section, COMPLEXITY_ROWS);

  const foot = document.createElement("p");
  foot.className = "ds-footnote";
  foot.innerHTML = `<strong>* Amortized:</strong> occasional resizes are expensive, but the average cost per push across many operations stays ~O(1).`;
  section.appendChild(foot);
}

/* -------------------------
 * Dynamic Array Playground
 * ------------------------- */
class DynamicArray {
  constructor(initialCapacity = 4) {
    this._data = new Array(initialCapacity).fill(undefined);
    this.length = 0;
  }
  get capacity() {
    return this._data.length;
  }

  push(value) {
    if (this.length >= this.capacity) this._grow();
    this._data[this.length++] = value;
  }

  pop() {
    if (this.length === 0) return undefined;
    const v = this._data[this.length - 1];
    this._data[this.length - 1] = undefined;
    this.length--;
    return v;
  }

  /** Overwrite an existing index (0..length-1). No shifting. */
  setAt(index, value) {
    const i = Number.parseInt(index, 10);
    if (!Number.isInteger(i) || i < 0 || i >= this.length) {
      throw new Error("Index out of range for setAt (must be < length)");
    }
    this._data[i] = value;
  }

  getAt(index) {
    const i = Number.parseInt(index, 10);
    if (!Number.isInteger(i) || i < 0 || i >= this.length) {
      throw new Error("Index out of range for getAt (must be < length)");
    }
    return this._data[i];
  }

  /** Insert at position (0..length), shifting right. */
  insertAt(index, value) {
    const i = Number.parseInt(index, 10);
    if (!Number.isInteger(i) || i < 0 || i > this.length) {
      throw new Error("Index out of range for insertAt (0..length)");
    }
    if (this.length >= this.capacity) this._grow();
    for (let j = this.length; j > i; j--) this._data[j] = this._data[j - 1];
    this._data[i] = value;
    this.length++;
  }

  deleteAt(index) {
    const i = Number.parseInt(index, 10);
    if (!Number.isInteger(i) || i < 0 || i >= this.length) {
      throw new Error("Index out of range for deleteAt (0..length-1)");
    }
    for (let j = i; j < this.length - 1; j++) this._data[j] = this._data[j + 1];
    this._data[this.length - 1] = undefined;
    this.length--;
  }

  reset(cap = 4) {
    this._data = new Array(cap).fill(undefined);
    this.length = 0;
  }

  _grow() {
    const newCap = Math.max(1, this.capacity * 2);
    const next = new Array(newCap).fill(undefined);
    for (let i = 0; i < this.length; i++) next[i] = this._data[i];
    this._data = next;
  }

  snapshot() {
    return this._data.slice();
  }
}

function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  for (const c of children) node.append(c);
  return node;
}

function mountArrayDemo() {
  const mount = document.getElementById("array-demo");
  if (!mount) return;

  const state = new DynamicArray(4);

  // Controls
  const valueInput = el("input", { type: "text", placeholder: "value" });
  const indexInput = el("input", {
    type: "number",
    placeholder: "index",
    min: 0,
  });
  const btnPush = el("button", { className: "ds-btn", textContent: "Push" });
  const btnPop = el("button", { className: "ds-btn", textContent: "Pop" });
  const btnInsert = el("button", {
    className: "ds-btn",
    textContent: "Insert @ index",
  });
  const btnDelete = el("button", {
    className: "ds-btn",
    textContent: "Delete @ index",
  });
  const btnReset = el("button", { className: "ds-btn", textContent: "Reset" });

  const lenBadge = el("span", { className: "badge badge-ok" });
  const capBadge = el("span", { className: "badge" });

  const controls = el("div", { className: "ds-controls" }, [
    valueInput,
    indexInput,
    btnPush,
    btnPop,
    btnInsert,
    btnDelete,
    btnReset,
    el("span", { textContent: "Length:" }),
    lenBadge,
    el("span", { style: "margin-left:.5rem", textContent: "Capacity:" }),
    capBadge,
  ]);

  const legend = el("div", {
    className: "demo-legend",
    innerHTML: `<strong>Legend:</strong> <span class="badge badge-ok">filled</span> cells hold values; 
     <span class="badge">capacity</span> cells are allocated but empty.`,
  });

  const grid = el("div", { className: "array-grid" });

  const card = el("div", { className: "ds-card" }, [controls, legend, grid]);
  mount.replaceChildren(card);

  function render() {
    lenBadge.textContent = String(state.length);
    capBadge.textContent = String(state.capacity);
    grid.replaceChildren(
      ...state.snapshot().map((v, i) => {
        const isFilled = i < state.length;
        const cell = el("div", {
          className: `cell ${isFilled ? "filled" : "capacity"}`,
          textContent: isFilled ? String(v) : "•",
        });
        cell.title = isFilled
          ? `index ${i} (value)`
          : `index ${i} (unused capacity)`;
        return cell;
      })
    );
  }

  // Wire actions with guardrails + UI feedback
  const safe = (fn) => {
    try {
      fn();
      grid.animate([{ opacity: 0.8 }, { opacity: 1 }], { duration: 120 });
    } catch (e) {
      console.warn(e);
      grid.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(6px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 120 }
      );
    } finally {
      render();
    }
  };

  btnPush.onclick = () =>
    safe(() => state.push(valueInput.value || state.length));
  btnPop.onclick = () => safe(() => state.pop());
  btnInsert.onclick = () =>
    safe(() => state.insertAt(indexInput.value, valueInput.value || "X"));
  btnDelete.onclick = () => safe(() => state.deleteAt(indexInput.value));
  btnReset.onclick = () => safe(() => state.reset(4));

  render();
}

/* -------------------------
 * Micro-quiz
 * ------------------------- */
const QUIZ = [
  {
    q: "Why is append (push) on a dynamic array amortized O(1) instead of O(n)?",
    a: "Because resizes happen only occasionally; the one expensive copy is spread over many cheap pushes.",
  },
  {
    q: "When is a linked list preferable to an array?",
    a: "When you frequently insert/delete in the middle using a cursor (and random access isn’t required).",
  },
];

function mountQuiz() {
  const list = document.getElementById("quiz-list");
  if (!list) return;
  list.replaceChildren(
    ...QUIZ.map(({ q, a }) => {
      const li = el("li", { className: "quiz-item" });
      const p = el("p", { textContent: q });
      const details = el("details");
      const sum = el("summary", { textContent: "Show answer" });
      const ans = el("div", { className: "quiz-answer", textContent: a });
      details.append(sum, ans);
      li.append(p, details);
      return li;
    })
  );
}

/* -------------------------
 * Boot
 * ------------------------- */
function boot() {
  mountComplexity();
  mountArrayDemo();
  mountQuiz();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
