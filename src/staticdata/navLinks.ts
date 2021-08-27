export interface INavLink {
  href: string;
  label: string;
  collapsedOnly?: boolean;
}

const getNavLinks = (): INavLink[] => {
  return [
    {
      href: '/',
      label: 'Home',
      collapsedOnly: true,
    },
    {
      href: '/services',
      label: 'Services',
    },
    {
      href: '/portfolio',
      label: 'Portfolio',
    },
    {
      href: '/blog',
      label: 'Blog',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ];
};

export default getNavLinks;
