function _getNavItems(url, method, body, headers, searchParams) {
  let navItems = [
    {
      path: "/basicUser",
      name: "Basic User"
    },
    {
      path: "/admin",
      name: "Admin"
    },
    {
      path: "/users",
      name: "All Users"
    },
    {
      path: "/practice",
      name: "Practice"
    },
    {
      path: "/lifeCycleMethods",
      name: "lifeCycleMethods"
    }
  ];

  let promise = new Promise((resolve, reject) => {
    resolve(navItems);
  });

  return promise;
}

const NavItemsService = (url, method, body, headers, searchParams) => {
  return new _getNavItems(url, method, body, headers, searchParams);
};

export default NavItemsService;
