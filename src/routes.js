import SystemInfo from 'views/SystemInfo.js';
import Team from 'views/Team.js';
import StorageEquipments from 'views/StorageEquipments.js';
import Ticket from 'views/Ticket.js';
import KnowledgeBase from 'views/KnowledgeBase.js';
import HomePage from 'views/HomePage.js';
import TimeSeries from 'views/TimeSeries.js';
var routes = [
  {
    path: '/home',
    name: 'Home',
    icon: 'tim-icons icon-tablet-2',
    component: HomePage,
    layout: '/admin'
  },
  {
    path: '/team',
    name: 'Team',
    icon: 'tim-icons icon-single-02',
    component: Team,
    layout: '/admin'
  },
  {
    path: '/system-info',
    name: 'System Info',
    icon: 'tim-icons icon-alert-circle-exc',
    component: SystemInfo,
    layout: '/admin'
  },
  {
    path: '/storage-equipments',
    name: 'Storage Equipments',
    icon: 'tim-icons icon-chart-pie-36',
    component: StorageEquipments,
    layout: '/admin'
  },
  {
    path: '/iticket',
    name: 'i-Ticket',
    icon: 'tim-icons icon-settings',
    component: Ticket,
    layout: '/admin'
  },
  {
    path: '/knowledge-base',
    name: 'Knowledge Base',
    icon: 'tim-icons icon-app',
    component: KnowledgeBase,
    layout: '/admin'
  },
  {
    path: '/time-series',
    name: 'Time Series',
    icon: 'tim-icons icon-atom',
    component: TimeSeries,
    layout: '/admin'
  },
  {
    path: '/https://st11p00im-storagedbm.storage.me.com/installation/index.php',
    name: 'Automation',
    icon: 'tim-icons icon-coins'
  }
  // {
  //   path: '/cloudvault',
  //   name: 'CloudVault',
  //   icon: 'tim-icons icon-app',
  //   component: CloudVault,
  //   layout: '/admin'
  // }
];
export default routes;
