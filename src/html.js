const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' };

export const escapeHTML = (str) => String(str).replace(/[&<>'"]/g, (c) => ESCAPES[c]);

export const span = (html, cls) => `<span class="${cls}">${html}</span>`;
export const text = (str, cls) => span(escapeHTML(str), cls);

export const link = (href, label = href) => {
  const external = href.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener noreferrer"';
  return `<a href="${escapeHTML(href)}"${external}>${escapeHTML(label)}</a>`;
};

export const displayUrl = (url) => url.replace(/^[a-z]+:(\/\/)?/, '');
