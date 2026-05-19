# papairomeo.github.io

Personal site of PapaiRomeo — letters from a father to his son. Bilingual (EN + PT-BR), built with semantic HTML, CSS, and vanilla JavaScript. Hosted on GitHub Pages.

## Live

<https://papairomeo.github.io/>

## Structure

- `index.html` — EN home page
- `pt/index.html` — PT-BR home page
- `letters/index.html` — EN listing of letters
- `cartas/index.html` — PT-BR listing of letters
- `cartas/carta-XX.html` — individual letters (written in Portuguese)
- `contato.html` — EN contact page
- `pt/contato.html` — PT-BR contact page
- `404.html` — custom error page
- `style.css` — shared stylesheet (light / dark themes)
- `config.js` — centralized config (update here for domain or links)
- `script.js` — minimal vanilla JS (theme toggle, mobile menu, reveal)

## How to add a new letter

1. Copy `cartas/carta-01.html` to `cartas/carta-02.html` (or the next number).
2. Update the title, date, eyebrow (category), and the body paragraphs.
3. Add a new `<a class="letter-card">` block at the top of `cartas/index.html`.
4. (Optional) Add the same entry to `letters/index.html` with an English title and excerpt.
5. Commit and push — GitHub Pages will rebuild automatically.

## Stack

- HTML5, CSS3, vanilla JavaScript
- No frameworks, no build step
- GitHub Pages

## License

Personal project. Letters are © Rodrigo. Code is free to study or adapt.
