/** Original site's header, drawer, command palette and footer share this IA. */
export interface NavLink { label: string; href: string; }
export interface NavSection extends NavLink { match: string[]; children?: NavLink[]; }
export const PRIMARY_NAV: NavSection[] = [
  { label: 'Photography', href: '/gallery', match: ['/gallery'] },
  { label: 'Projects', href: '/projects', match: ['/projects'] },
  { label: 'Writing', href: '/writing', match: ['/writing'] },
  { label: 'About', href: '/about', match: ['/about'] },
  { label: 'Contact', href: '/contact', match: ['/contact'] },
];
export const INVITE_CTA: NavLink = { label: 'Get in touch', href: '/contact' };
export const FOOTER_PRIMARY: NavLink[] = [
  { label: 'Photography', href: '/gallery' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
export const FOOTER_SECONDARY: NavLink[] = [
  { label: 'Flickr', href: 'https://www.flickr.com/people/lumierecrafter/' },
  { label: 'GitHub', href: 'https://github.com/greateden' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eden-li-616a01255/' },
];
const matches = (pathname: string, path: string) => {
  const p = pathname.replace(/\/$/, '') || '/';
  return p === path || p.startsWith(path + '/');
};
export function sectionFor(pathname: string): NavSection | undefined {
  return PRIMARY_NAV.find((s) => s.match.some((m) => matches(pathname, m)));
}
export function activeChild(section: NavSection | undefined, pathname: string): string | undefined {
  return section?.children?.filter((c) => matches(pathname, c.href)).sort((a, b) => b.href.length - a.href.length)[0]?.href;
}
