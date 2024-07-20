const pages = new Map();

pages.set("home", { name: "home", path: "/", nav: true });
pages.set("about", { name: "about", path: "/About", nav: true });
pages.set("menu", { name: "menu", path: "/Menu", nav: true });
pages.set("reservations", {
  name: "reservations",
  path: "/Reservations",
  nav: true,
});
pages.set("order-online", {
  name: "order-online",
  path: "/Order-online",
  nav: true,
});
pages.set("login", { name: "login", path: "/Login", nav: true });

export default pages;
