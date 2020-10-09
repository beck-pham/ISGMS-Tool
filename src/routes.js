import SystemInfo from 'views/SystemInfo.js';
import Team from 'views/Team.js';
import StorageEquipments from 'views/StorageEquipments.js';
import Ticket from 'views/Ticket.js';
import KnowledgeBase from 'views/KnowledgeBase.js';
import HomePage from 'views/HomePage.js';
import TimeSeries from 'views/TimeSeries.js';
import Inventory from 'views/Inventory.js';
import WarrantyTrackerNetapp from 'views/WarrantyTracker/WarrantyTrackerNetapp.js';
import WarrantyTrackerIsilon from 'views/WarrantyTracker/WarrantyTrackerIsilon.js';
import WarrantyTrackerAvere from 'views/WarrantyTracker/WarrantyTrackerAvere.js';
import WarrantyTrackerMapr from 'views/WarrantyTracker/WarrantyTrackerMapr.js';
import WarrantyTrackerSilverPeak from 'views/WarrantyTracker/WarrantyTrackerSilverPeak.js';
var routes = [
  {
    path: '/home',
    name: 'Home',
    icon: 'fas fa-home',
    component: HomePage,
    layout: '/admin'
  },
  {
    path: '/team',
    name: 'Team',
    icon: 'fas fa-users',
    component: Team,
    layout: '/admin'
  },
  {
    path: '/iticket',
    name: 'i-Ticket',
    icon: 'fas fa-ticket-alt',
    component: Ticket,
    layout: '/admin'
  },
  {
    path: '/storage-equipments',
    name: 'Storage Equipments',
    icon: 'fas fa-server',
    component: StorageEquipments,
    layout: '/admin'
  },
  {
    path: '/system-info',
    name: 'System Info',
    icon: 'fas fa-exclamation-circle',
    component: SystemInfo,
    layout: '/admin'
  },
  {
    path: '/warranty-tracker',
    name: 'Warranty Tracker',
    icon: 'fas fa-calendar-alt',
    layout: '/admin',
    collapse: true,
    state: 'pageCollapse',
    views: [
      {
        path: '/warranty-tracker/netapp',
        name: 'Netapp',
        icon: 'fas fa-calendar-alt',
        component: WarrantyTrackerNetapp,
        layout: '/admin',
        state: 'pageCollapse2'
      },
      {
        path: '/warranty-tracker/isilon',
        name: 'Isilon',
        icon: 'fas fa-calendar-alt',
        component: WarrantyTrackerIsilon,
        layout: '/admin',
        state: 'pageCollapse2'
      },
      {
        path: '/warranty-tracker/avere',
        name: 'Avere',
        icon: 'fas fa-calendar-alt',
        component: WarrantyTrackerAvere,
        layout: '/admin',
        state: 'pageCollapse2'
      },
      {
        path: '/warranty-tracker/mapr',
        name: 'Mapr',
        icon: 'fas fa-calendar-alt',
        component: WarrantyTrackerMapr,
        layout: '/admin',
        state: 'pageCollapse2'
      },
      {
        path: '/warranty-tracker/silverpeak',
        name: 'Silver Peak',
        icon: 'fas fa-calendar-alt',
        component: WarrantyTrackerSilverPeak,
        layout: '/admin',
        state: 'pageCollapse2'
      }
    ]
  },
  {
    path: '/knowledge-base',
    name: 'Knowledge Base',
    icon: 'fas fa-database',
    component: KnowledgeBase,
    layout: '/admin'
  },
  {
    path: '/time-series',
    name: 'Time Series',
    icon: 'fas fa-stopwatch',
    component: TimeSeries,
    layout: '/admin'
  },
  {
    path: '/inventory',
    name: 'Inventory',
    icon: 'fas fa-hdd',
    component: Inventory,
    layout: '/admin'
  },
  {
    path: '/automation',
    name: 'Automation',
    component: () => {
      window.open(
        'https://st11p00im-storagedbm.storage.me.com/installation/index.php'
      );
      return null;
    },
    icon: 'fas fa-cog',
    layout: '/admin'
  }
];
export default routes;
