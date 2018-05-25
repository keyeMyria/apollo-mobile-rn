import React, { Component } from 'react';
import { createSwitchNavigator, createDrawerNavigator, StackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import BestOfPage from './BestOfPage';
import LoginPage from './LoginPage';
import EMailReport from './EMailReport';
import SideMenu from './SideMenu';
import CockpitPage from './CockpitPage';

const SwitchNavigation = createSwitchNavigator({
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
				}
			},
			{
				initialRouteName: 'cockpit',
				contentComponent: SideMenu
			}
		)
	},
	login: {
		screen: LoginPage
	}
});

class MainNavigationPage extends Component {
	render() {
		return <SwitchNavigation />;
	}
}

export default MainNavigationPage;
