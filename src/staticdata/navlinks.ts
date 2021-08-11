interface NavItem {
  href: string;
  label: string;
  collapsedOnly?: boolean;
}

const getTranslatedNavItems = (): NavItem[] => {
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
  ];
};

export default getTranslatedNavItems;
