import React from "react";

const footerMenus = [
  {
    label: 'Department of Tourism',
    href: '#'
  },
  {
    label: 'Trade Hub',
    href: "#"
  },
  {
    label: 'Media Centre',
    href: "#"
  },
  {
    label: 'Contact',
    href: '#'
  },
  {
    label: 'Mobile Apps',
    href: '#'
  },
  {
    label: 'Partners',
    href: '#'
  },
  {
    label: 'Recruitments',
    href: '#'
  },
  {
    label: 'Maps',
    href: '#'
  }
];

const MenuList = () => {
  return (
    <ul className="list-inline-item list-unstyled pb-3 footer-menu">
      {footerMenus.map((footerMenu, key) => (
        <li key={key}>
          <a href={footerMenu.href} className="text-decoration-none">
            {footerMenu.label}
          </a>
        </li>
      ))}
    </ul>
  )
};

export default MenuList;
