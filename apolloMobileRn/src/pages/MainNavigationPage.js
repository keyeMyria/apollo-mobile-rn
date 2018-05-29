import React, { Component } from 'react';
import { createSwitchNavigator, createDrawerNavigator, StackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import BestOfPage from './BestOfPage';
import LoginPage from './LoginPage';
import EMailReport from './EMailReport';
import SideMenu from './SideMenu';
import CockpitPage from './CockpitPage';
import { widthPercentageToDP } from '../helpers/Responsive';
import { Sizes } from '../helpers/Constants';

const SwitchNavigation = createSwitchNavigator({
	login: {
		screen: LoginPage
	},
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
				contentComponent: SideMenu,
				drawerWidth: Sizes.DrawerWidth
			}
		)
	}
});

class MainNavigationPage extends Component {
	render() {
		return <SwitchNavigation />;
	}
}

export default MainNavigationPage;
