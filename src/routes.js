import Dashboard from "views/Dashboard.js";
import Magazalar from "views/Magazalar";
import TableList from "views/Tables.js";
import Kargolar from "views/Kargolar";
// import Icons from "views/Icons.js";
var routes = [
  {
    path: "/dashboard",
    name: "Gösterge Paneli",
    icon: "nc-icon nc-tv-2",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Personel Listesi",
    icon: "nc-icon nc-single-02",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/magazalar",
    name: "Mağazalar",
    icon: "nc-icon nc-bank",
    component: Magazalar,
    layout: "/admin",
  },
  {
    path: "/kargolar",
    name: "Kargolar",
    icon: "nc-icon nc-box-2",
    component: Kargolar,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin",
  // },
];
export default routes;
