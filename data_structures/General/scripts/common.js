// scripts/common.js
const NAV_ITEMS = [
  { href: "./index.html", label: "Home" },
  { href: "./dataStructArray.html", label: "Arrays" },
  { href: "./dataStructLinkedList.html", label: "Linked Lists" },
  { href: "./dataStructStack.html", label: "Stacks" },
  { href: "./dataStructQueue.html", label: "Queues" },
  { href: "./dataStructTree.html", label: "Trees" },
  { href: "./dataStructGraph.html", label: "Graphs" },
];

function buildHeader() {
  const current = location.pathname.split("/").pop() || "index.html";
  const navLinks = NAV_ITEMS.map(item => {
    const isActive = item.href.endsWith(current);
    return `<a href="${item.href}" ${isActive ? 'aria-current="page" class="active"' : ""}>${item.label}</a>`;
  }).join("");

  return `
    <header class="site-header">
      <h1 class="site-title">Data Structures</h1>
      <nav aria-label="Primary" class="site-nav">
        ${navLinks}
      </nav>
    </header>
  `;
}

function buildFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <p>&copy; ${year} Data Structures Guide</p>
    </footer>
  `;
}

export function injectChrome() {
  const header = document.createElement("div");
  header.innerHTML = buildHeader();
  document.body.prepend(header.firstElementChild);

  const footer = document.createElement("div");
  footer.innerHTML = buildFooter();
  document.body.append(footer.firstElementChild);
}

/** Reusable complexity table */
export function renderComplexityTable(rootEl, rows) {
  const table = document.createElement("table");
  table.className = "complexity-table";
  table.innerHTML = `
    <caption>Operation Complexities</caption>
    <thead>
      <tr><th>Operation</th><th>Average</th><th>Worst</th></tr>
    </thead>
    <tbody>
      ${rows.map(r => `
        <tr>
          <td>${r.op}</td><td>${r.avg}</td><td>${r.worst}</td>
        </tr>
      `).join("")}
    </tbody>
  `;
  rootEl.appendChild(table);
}

// Run chrome injection when the module is imported
document.addEventListener("DOMContentLoaded", injectChrome);
