# UNCP ACM Chapter Website

Official website for the **Association for Computing Machinery (ACM) Student Chapter** at the University of North Carolina at Pembroke.

🌐 **Live Site:** [https://your-username.github.io/uncp-acm](https://your-username.github.io/uncp-acm)

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero, features, event preview, and CTA |
| About | `about.html` | Mission, core values, and officer profiles |
| Events | `events.html` | Event listings with filter tabs and calendar widget |
| Resources | `resources.html` | Tabbed resource library: learning, career, tools, scholarships, community |
| Contact | `contact.html` | Membership form, contact info, and campus location |

---

## Tech Stack

- **HTML5** — semantic structure across all pages
- **CSS3** — custom design system with CSS variables, animations, and responsive layout (no frameworks)
- **Vanilla JavaScript** — navbar scroll, mobile menu, scroll reveal, calendar widget, event filter, tab switching, form validation
- **Google Fonts** — Syne (headings) + DM Sans (body)
- **Deployment** — GitHub Pages (static hosting)

---

## Project Structure

```
uncp-acm/
├── index.html          # Home page
├── about.html          # About & Officers
├── events.html         # Events & Calendar
├── resources.html      # Resources library
├── contact.html        # Contact & Membership form
├── css/
│   └── styles.css      # All styles — design system, components, responsive
├── js/
│   ├── main.js         # Shared: navbar, scroll reveal, mobile menu
│   ├── events.js       # Calendar widget + event filter tabs
│   ├── resources.js    # Resource tab switching
│   └── contact.js      # Form validation & success state
└── README.md
```

---

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `main` branch, `/ (root)` folder
4. Click **Save** — your site will be live at `https://your-username.github.io/repo-name`

---

## Customization

To update the site for your chapter:

- **Officers** — Edit the officer cards in `about.html`
- **Events** — Add/edit event items in `events.html` and update `eventDays` in `js/events.js`
- **Resources** — Add cards inside the relevant tab `<div>` in `resources.html`
- **Contact info** — Update email, location, and meeting time in `contact.html`
- **Colors/fonts** — All design tokens are CSS variables at the top of `css/styles.css`

---

## Development

No build step required. Open any `.html` file in a browser, or use a local server:

```bash
# Python
python -m http.server 3000

# Node.js (npx)
npx serve .
```

---

## License

Built for educational purposes by UNCP students. ACM logo and branding belong to the [Association for Computing Machinery](https://www.acm.org).
