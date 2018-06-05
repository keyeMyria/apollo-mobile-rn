import React, { Component } from 'react';
import { NativeModules, Platform } from 'react-native';
import { createSwitchNavigator, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomePage from './HomePage';
import { BestOfPage } from './BestOfPage';
import LoginPage from './LoginPage';
import EMailReportPage from './EMailReportPage';
import SideMenu from './SideMenu';
import CockpitPage from './CockpitPage';
import { Sizes } from '../helpers';
import ComparisonPage from './ComparisonPage';
import SplashPage from './SplashPage';
import ManagerSummaryPage from './ManagerSummaryPage';
import CampaignDetailsPage from './CampaignDetailsPage';
import GiftStockPage from './GiftStockPage';
import CustomerValuePyramidPage from './CustomerValuePyramidPage';
import BestShopsPage from './bestOfTabPages/BestShopsPage';
import BestCountiesPage from './bestOfTabPages/BestCountiesPage';
import BestCitiesPage from './bestOfTabPages/BestCitiesPage';

const SwitchNavigation = createSwitchNavigator(
	{
		app: {
			screen: createDrawerNavigator(
				{
					cockpit: {
						screen: CockpitPage
					},
					managerSummary: {
						screen: ManagerSummaryPage
					},
					campaignDetails: {
						screen: CampaignDetailsPage
					},
					bestOf: {
						screen: props => <BestOfPage {...props} />
					},
					giftStock: {
						screen: GiftStockPage
					},
					comparison: {
						screen: ComparisonPage
					},
					customerValuePyramid: {
						screen: CustomerValuePyramidPage
					},
					eMailReport: {
						screen: EMailReportPage
					}
				},
				{
					initialRouteName: 'campaignDetails',
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
