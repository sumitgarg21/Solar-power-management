import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdHome,
  MdEnergySavingsLeaf,
} from 'react-icons/md';

import { FaSolarPanel } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: "Solar Energy Output",
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={FaSolarPanel}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Energy Management',
    layout: '/admin',
    icon: <Icon as={MdEnergySavingsLeaf } width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Forecasting',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={SlGraph} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Sign Out',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={IoIosLogOut} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;
