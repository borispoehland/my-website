interface INavItem {
  href: string;
  label: string;
  collapsedOnly?: boolean;
}

const getTranslatedNavItems = (): INavItem[] => {
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
      href: '/contact',
      label: 'Contact',
    },
  ];
};

export default getTranslatedNavItems;
