// scripts/dataStructGeneral.js

/* Utilities */
const el = (tag, props = {}, children = []) => {
  const node = document.createElement(tag);
  Object.assign(node, props);
  (Array.isArray(children) ? children : [children]).forEach(c => c != null && node.append(c));
  return node;
};

const chip = (text, extra = "") => el("span", { className: `chip ${extra}`, textContent: text });
const arrow = (text = "→") => el("span", { className: "arrow", textContent: text });

/* ---------- Arrays (dynamic) ---------- */
function mountArraysDemo() {
  const root = document.getElementById("demo-arrays");
  if (!root) return;

  const state = { items: [], capacity: 4 };

  const input = el("input", { className: "ds-input", placeholder: "value" });
  const btnPush = el("button", { className: "ds-btn", textContent: "push" });
  const btnPop  = el("button", { className: "ds-btn", textContent: "pop" });

  const controls = el("div", { className: "ds-controls" }, [input, btnPush, btnPop]);
  const demo = el("div", { className: "demo-area" });
  const line = el("div", { className: "inline-grid" });

  const render = () => {
    line.replaceChildren(
      ...Array.from({ length: state.capacity }).map((_, i) =>
        chip(state.items[i] ?? "•", i < state.items.length ? "" : "muted")
      )
    );
  };

  const grow = () => { state.capacity = Math.max(1, state.capacity * 2); };

  btnPush.onclick = () => {
    const val = (input.value || "").trim() || String(state.items.length);
    if (state.items.length >= state.capacity) grow(); // simulate resize-doubling
    state.items.push(val);
    render();
  };
  btnPop.onclick = () => { state.items.pop(); render(); };

  demo.append(line);
  root.replaceChildren(controls, demo);
  render();
}

/* ---------- Linked List (singly) ---------- */
function mountLinkedListDemo() {
  const root = document.getElementById("demo-linked-list");
  if (!root) return;

  class Node { constructor(v) { this.v = v; this.next = null; } }
  class List {
    constructor() { this.head = null; this.tail = null; this.len = 0; }
    pushBack(v) {
      const n = new Node(v);
      if (!this.head) this.head = this.tail = n;
      else this.tail = this.tail.next = n;
      this.len++;
    }
    popFront() {
      if (!this.head) return null;
      const n = this.head;
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.len--;
      return n.v;
    }
    toArray() { const out = []; for (let p = this.head; p; p = p.next) out.push(p.v); return out; }
  }

  const list = new List();
  const input = el("input", { className: "ds-input", placeholder: "value" });
  const btnPushBack = el("button", { className: "ds-btn", textContent: "pushBack" });
  const btnPopFront = el("button", { className: "ds-btn", textContent: "popFront" });
  const controls = el("div", { className: "ds-controls" }, [input, btnPushBack, btnPopFront]);

  const labels = el("div", { className: "demo-label-row" }, [
    el("span", { innerHTML: `<span class="kbd">head</span>` }),
    el("span", { innerHTML: `<span class="kbd">tail</span>` }),
  ]);

  const demo = el("div", { className: "demo-area" });
  const line = el("div", { className: "ll-wrap" });

  const render = () => {
    const vals = list.toArray();
    if (vals.length === 0) {
      line.replaceChildren(chip("∅", "muted"));
      return;
    }
    const cells = [];
    vals.forEach((v, i) => {
      // annotate head/tail
      const isHead = i === 0;
      const isTail = i === vals.length - 1;
      const label = isHead ? " (H)" : isTail ? " (T)" : "";
      cells.push(chip(String(v) + label));
      cells.push(arrow("→"));
    });
    cells.push(chip("∅", "muted")); // null terminator
    line.replaceChildren(...cells);
  };

  btnPushBack.onclick = () => {
    const val = (input.value || "").trim() || String(list.len);
    list.pushBack(val);
    render();
  };
  btnPopFront.onclick = () => { list.popFront(); render(); };

  demo.append(line);
  root.replaceChildren(controls, labels, demo);
  render();
}


/* ---------- Stack (LIFO) ---------- */
function mountStackDemo() {
  const root = document.getElementById("demo-stack");
  if (!root) return;

  const stack = [];
  const input = el("input", { className: "ds-input", placeholder: "value" });
  const btnPush = el("button", { className: "ds-btn", textContent: "push" });
  const btnPop  = el("button", { className: "ds-btn", textContent: "pop" });
  const controls = el("div", { className: "ds-controls" }, [input, btnPush, btnPop]);

  const labels = el("div", { className: "demo-label-row" }, [
    el("span", { innerHTML: `<span class="kbd">Top</span>` }),
    el("span", { innerHTML: `<span class="kbd">Bottom</span>` }),
  ]);

  const demo = el("div", { className: "demo-area" });
  const column = el("div", { className: "vertical-stack" });

  const render = () => {
    if (stack.length === 0) column.replaceChildren(chip("empty", "muted"));
    else {
      // top at the top visually
      column.replaceChildren(...[...stack].reverse().map(v => chip(v)));
    }
  };

  btnPush.onclick = () => { stack.push((input.value || "").trim() || String(stack.length)); render(); };
  btnPop.onclick  = () => { stack.pop(); render(); };

  demo.append(column);
  root.replaceChildren(controls, labels, demo);
  render();
}


/* ---------- Queue (FIFO) ---------- */
function mountQueueDemo() {
  const root = document.getElementById("demo-queue");
  if (!root) return;

  const q = [];
  const input = el("input", { className: "ds-input", placeholder: "value" });
  const btnEnq = el("button", { className: "ds-btn", textContent: "enqueue" });
  const btnDeq = el("button", { className: "ds-btn", textContent: "dequeue" });
  const controls = el("div", { className: "ds-controls" }, [input, btnEnq, btnDeq]);

  const labels = el("div", { className: "demo-label-row" }, [
    el("span", { innerHTML: `<span class="kbd">Front</span>` }),
    el("span", { innerHTML: `<span class="kbd">Back</span>` }),
  ]);

  const demo = el("div", { className: "demo-area" });
  const line = el("div", { className: "inline-grid" });

  const render = () => {
    if (q.length === 0) return line.replaceChildren(chip("empty", "muted"));
    const cells = [];
    q.forEach((v, i) => {
      cells.push(chip(v));
      if (i !== q.length - 1) cells.push(arrow("→"));
    });
    line.replaceChildren(...cells);
  };

  btnEnq.onclick = () => { q.push((input.value || "").trim() || String(q.length)); render(); };
  btnDeq.onclick = () => { q.shift(); render(); };

  demo.append(line);
  root.replaceChildren(controls, labels, demo);
  render();
}

/* ---------- Tree (preview: static tiny BST) ---------- */
function mountTreePreview() {
  const root = document.getElementById("demo-tree");
  if (!root) return;

  // Simple inline SVG to hint hierarchy (no layout libs needed)
  const svg = `
    <svg width="260" height="140" viewBox="0 0 260 140">
      <g stroke="#2dd4bf" stroke-width="1.5" fill="none">
        <line x1="130" y1="30" x2="70" y2="70"/><line x1="130" y1="30" x2="190" y2="70"/>
        <line x1="70" y1="70" x2="40" y2="110"/><line x1="70" y1="70" x2="100" y2="110"/>
        <line x1="190" y1="70" x2="160" y2="110"/><line x1="190" y1="70" x2="220" y2="110"/>
      </g>
      <g fill="#0f1620" stroke="#263241">
        <circle cx="130" cy="30" r="14"/><circle cx="70" cy="70" r="14"/><circle cx="190" cy="70" r="14"/>
        <circle cx="40" cy="110" r="14"/><circle cx="100" cy="110" r="14"/>
        <circle cx="160" cy="110" r="14"/><circle cx="220" cy="110" r="14"/>
      </g>
      <g fill="#e6eef8" font-size="10" text-anchor="middle" dominant-baseline="middle">
        <text x="130" y="30">8</text>
        <text x="70" y="70">3</text><text x="190" y="70">10</text>
        <text x="40" y="110">1</text><text x="100" y="110">6</text>
        <text x="160" y="110">9</text><text x="220" y="110">14</text>
      </g>
    </svg>`;
  root.innerHTML = svg;
}

/* ---------- Graph (preview: 5 nodes) ---------- */
function mountGraphPreview() {
  const root = document.getElementById("demo-graph");
  if (!root) return;

  const svg = `
    <svg width="260" height="140" viewBox="0 0 260 140">
      <g stroke="#7aa2f7" stroke-width="1.4" fill="none">
        <line x1="40" y1="30" x2="130" y2="30"/>
        <line x1="130" y1="30" x2="220" y2="30"/>
        <line x1="130" y1="30" x2="80" y2="100"/>
        <line x1="80" y1="100" x2="200" y2="100"/>
        <line x1="200" y1="100" x2="220" y2="30"/>
      </g>
      <g fill="#0f1620" stroke="#263241">
        <circle cx="40" cy="30" r="12"/><circle cx="130" cy="30" r="12"/><circle cx="220" cy="30" r="12"/>
        <circle cx="80" cy="100" r="12"/><circle cx="200" cy="100" r="12"/>
      </g>
      <g fill="#e6eef8" font-size="10" text-anchor="middle" dominant-baseline="middle">
        <text x="40" y="30">A</text><text x="130" y="30">B</text><text x="220" y="30">C</text>
        <text x="80" y="100">D</text><text x="200" y="100">E</text>
      </g>
    </svg>`;
  root.innerHTML = svg;
}

/* ---------- Boot ---------- */
function boot() {
  mountArraysDemo();
  mountLinkedListDemo();
  mountStackDemo();
  mountQueueDemo();
  mountTreePreview();
  mountGraphPreview();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
