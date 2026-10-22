import * as content from './content.js';
import { commands } from './commands.js';
import { escapeHTML, link, displayUrl } from './html.js';

const e = escapeHTML;

export function renderJsonLd({ profile, socials, experience = [] }) {
  const email = socials.find((s) => s.url.startsWith('mailto:'));
  const currentJob = experience.find((job) => job.current);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    ...(currentJob && { worksFor: {
      '@type': 'Organization',
      name: currentJob.company,
      ...(currentJob.link && { url: currentJob.link }),
    } }),
    url: profile.url,
    ...(email && { email: displayUrl(email.url) }),
    sameAs: socials.filter((s) => s.url.startsWith('http')).map((s) => s.url),
    knowsAbout: profile.knowsAbout,
  };
  const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">\n${json}\n</script>`;
}

export function renderSrOnly({ profile, socials, projects, skills, experience, achievements }) {
  return `<div class="sr-only">
  <header>
    <h1>${e(profile.name)}</h1>
    <h2>${e(profile.tagline)}</h2>
    <p>${e(profile.location)} | ${e(profile.education)}</p>
  </header>
  <main>
    <section id="about">
      <h3>About Me</h3>
      <p>${e(profile.summary)}</p>
    </section>
    <section id="experience">
      <h3>Experience</h3>
${experience.map((x) => `      <article>
        <h4>${e(x.role)} ${x.link ? `@ ${link(x.link, x.company)}` : `at ${e(x.company)}`} (${e([x.period, x.location].filter(Boolean).join(', '))})</h4>
${x.bullets.length ? `        <ul>
${x.bullets.map((b) => `          <li>${e(b)}</li>`).join('\n')}
        </ul>\n` : ''}      </article>`).join('\n')}
    </section>
    <section id="projects">
      <h3>Projects</h3>
      <ul>
${projects.map((p) => `        <li><strong>${e(p.name)}:</strong> ${e(p.description)} (${e(p.tech)}) ${link(p.link)}</li>`).join('\n')}
      </ul>
    </section>
    <section id="skills">
      <h3>Skills</h3>
${skills.map((s) => `      <p><strong>${e(s.category)}:</strong> ${e(s.items)}</p>`).join('\n')}
    </section>
    <section id="achievements">
      <h3>Achievements</h3>
      <ul>
${achievements.map((a) => `        <li>${e(a)}</li>`).join('\n')}
      </ul>
    </section>
    <section id="contact">
      <h3>Contact</h3>
      <ul>
${socials.map((s) => `        <li>${e(s.name)}: ${link(s.url, displayUrl(s.url))}</li>`).join('\n')}
      </ul>
    </section>
  </main>
</div>`;
}

export function renderChips(commands) {
  return commands
    .filter((c) => c.chip !== false)
    .map((c) => `<button class="chip" data-cmd="${e(c.name)}"><span class="chip-bracket" aria-hidden="true">[</span>${e(c.name)}<span class="chip-bracket" aria-hidden="true">]</span></button>`)
    .join('\n');
}

const SLOTS = {
  'json-ld': () => renderJsonLd(content),
  'sr-only': () => renderSrOnly(content),
  chips: () => renderChips(commands),
};

export function fillIndexHtml(html) {
  return Object.entries(SLOTS).reduce((out, [name, render]) => {
    const marker = `<!-- portfolio:${name} -->`;
    if (!out.includes(marker)) throw new Error(`index.html is missing ${marker}`);
    return out.replace(marker, () => render());
  }, html);
}

export const portfolioHtml = () => ({
  name: 'portfolio-html',
  transformIndexHtml: { order: 'pre', handler: fillIndexHtml },
});
