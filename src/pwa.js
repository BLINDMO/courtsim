// Builds and installs a web app manifest as an inline blob URL so the app can be
// installed on mobile devices. The gavel icon is an inline SVG, data-URI encoded.

const GAVEL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#0d0f18"/>
  <g transform="translate(256 256) rotate(45)" stroke="#c9a84c" stroke-width="20" stroke-linecap="round" fill="none">
    <rect x="-150" y="-44" width="120" height="88" rx="10" fill="#c9a84c" stroke="none"/>
    <line x1="-30" y1="0" x2="150" y2="0"/>
  </g>
  <line x1="120" y1="392" x2="392" y2="392" stroke="#8b6914" stroke-width="22" stroke-linecap="round"/>
</svg>`;

function svgDataUri(svg) {
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

export function installPWA() {
  try {
    const iconUri = svgDataUri(GAVEL_SVG);
    const manifest = {
      name: 'Trial By Argument',
      short_name: 'Trial',
      description: 'High-Fidelity Criminal Trial Simulator',
      start_url: '.',
      display: 'standalone',
      background_color: '#07080d',
      theme_color: '#07080d',
      orientation: 'any',
      icons: [
        { src: iconUri, sizes: '192x192', type: 'image/svg+xml', purpose: 'any maskable' },
        { src: iconUri, sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' },
      ],
    };
    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = url;
    document.head.appendChild(link);

    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = iconUri;
    document.head.appendChild(favicon);

    const apple = document.createElement('link');
    apple.rel = 'apple-touch-icon';
    apple.href = iconUri;
    document.head.appendChild(apple);
  } catch (e) {
    /* non-fatal */
  }
}
