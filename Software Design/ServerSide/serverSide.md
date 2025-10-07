# Server-Side Rendering (SSR)

Server-Side Rendering (SSR) is the process of generating HTML on the server before sending it to the client.  
When a user visits a page, the server builds the HTML response in real-time, sends it to the browser, and then hydrates it with JavaScript.

---

## Why SSR?

SSR exists to solve the problem of slow initial loads and poor SEO that come from purely client-rendered applications.  
By rendering content on the server first, users see meaningful content faster.

---

## How It Works

1. **Request:** A user hits a route (e.g., `/products/123`).  
2. **Server Render:** The server runs your app logic, fetches data, and produces full HTML for that page.  
3. **Response:** The HTML is sent to the browser.  
4. **Hydration:** Once loaded, JavaScript takes over for interactivity (clicks, animations, updates, etc.).

> Think of SSR as “pre-rendering” for dynamic pages.

---

## Benefits

- **Faster First Paint:** Users see content immediately instead of a loading spinner.  
- **Better SEO:** Search engines index full HTML pages.  
- **Dynamic Data:** Works well for frequently changing data or user-specific content.  
- **Improved Performance Perception:** The app *feels* faster because the first render happens server-side.

---

## Drawbacks

- **Increased Server Load:** Rendering on each request consumes resources.  
- **More Complexity:** Requires careful data-fetching coordination between client and server.  
- **Longer TTFB (Time To First Byte):** Rendering delays can occur under heavy traffic.

---

## Common Use Cases

- E-commerce product pages  
- Personalized dashboards  
- Blog posts with dynamic comments  
- SEO-critical landing pages  

---

## In Practice

**Examples:**
- **Next.js** with `getServerSideProps()`  
- **Express.js + EJS/Pug/Handlebars** for template-based rendering  
- **ASP.NET MVC**, **Django**, or **Ruby on Rails** for traditional SSR models  

---

## Design Principle

> SSR balances *performance* and *freshness*.  
> It’s about rendering what matters first, where it makes the biggest impact.

---

**Author:** Matt Sullivan  
**Project:** CodeForge — *Software Design Series*  
**File:** `server-side-rendering.md`
