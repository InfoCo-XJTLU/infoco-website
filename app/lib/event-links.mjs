const detailPages = new Set([
  'new-member-open-house',
  'apex-arena',
  'game-development-starter',
]);

export function getEventHref(slug) {
  return detailPages.has(slug) ? `/events/${slug}` : `/events#${slug}`;
}
