// TODO: Translation

interface NavItem {
  href: string;
  label: string;
  collapsedOnly?: boolean;
}

const getTranslatedNavItems = (): NavItem[] => {
  //const itemsT = prepend('items', t);
  return [
    {
      href: '/',
      //label: itemsT('home'),
      label: 'Home',
      collapsedOnly: true,
    },
    {
      href: '/portfolio',
      //label: itemsT('portfolio'),
      label: 'Portfolio',
    },
    {
      href: '/blog',
      //label: itemsT('blog'),
      label: 'Blog',
    },
  ];
};

export default getTranslatedNavItems;
