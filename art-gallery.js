(function () {
  const artworks = window.SH_ARTWORKS;
  const grid = document.getElementById('art-grid');
  const empty = document.getElementById('art-empty');
  if (!grid || !empty || !Array.isArray(artworks)) return;

  function text(tag, value, className) {
    const element = document.createElement(tag);
    element.textContent = value;
    if (className) element.className = className;
    return element;
  }

  for (const work of artworks) {
    if (!work || !work.title || !work.image || !work.alt) continue;
    const sold = work.status === 'sold';
    const card = document.createElement('article');
    card.className = 'art-card';
    const image = document.createElement('img');
    image.src = work.image;
    image.alt = work.alt;
    image.loading = 'lazy';
    card.append(image);
    const details = document.createElement('div');
    details.append(text('h3', work.title));
    const metadata = [work.medium, work.size].filter(Boolean).join(' · ');
    if (metadata) details.append(text('p', metadata));
    const price = Number.isFinite(work.price) ? new Intl.NumberFormat('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0}).format(work.price) : 'Price on request';
    details.append(text('p', sold ? 'Sold · ' + price : price, sold ? 'art-card__sold' : 'art-card__price'));
    if (!sold) {
      const link = document.createElement('a');
      if (work.purchaseUrl && /^https:\/\//i.test(work.purchaseUrl)) {
        link.href = work.purchaseUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Buy this original';
      } else {
        link.href = 'mailto:shstudios@sherrinahansen.com?subject=' + encodeURIComponent('Original art inquiry: ' + work.title);
        link.textContent = 'Ask about this piece';
      }
      details.append(link);
    }
    card.append(details);
    grid.append(card);
  }
  empty.hidden = grid.childElementCount > 0;
})();
