import React, { Component } from 'react';
import { createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import HomePage from './HomePage';
import BestOfPage from './BestOfPage';
import LoginPage from './LoginPage';
import EMailReport from './EMailReport';
import SideMenu from './SideMenu';
import CockpitPage from './CockpitPage';
import { Sizes } from '../helpers';
import ComparisonPage from './ComparisonPage';
import SplashPage from './SplashPage';

const SwitchNavigation = createSwitchNavigator(
	{
		app: {
			screen: createDrawerNavigator(
				{
					home: {
						screen: HomePage
					},
					bestOf: {
						screen: BestOfPage
					},
					eMailReport: {
						screen: EMailReport
					},
					cockpit: {
						screen: CockpitPage
					},
					comparison: {
						screen: ComparisonPage
					}
				},
				{
					initialRouteName: 'cockpit',
					contentComponent: SideMenu,
					drawerWidth: Sizes.DrawerWidth
				}
			)
		},
		login: {
			screen: LoginPage
		},
		splash: {
			screen: SplashPage
		}
	},
	{
		initialRouteName: 'splash'
	}
);

class MainNavigationPage extends Component {
	render() {
		return <SwitchNavigation />;
	}
}

export default MainNavigationPage;
