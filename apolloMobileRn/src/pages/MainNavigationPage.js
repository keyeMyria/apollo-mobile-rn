import React, { Component } from 'react';
import { createSwitchNavigator, createDrawerNavigator, StackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import BestOfPage from './BestOfPage';
import LoginPage from './LoginPage';

const SwitchNavigation = createSwitchNavigator({
	app: {
		screen: createDrawerNavigator({
			home: {
				screen: StackNavigator({
					innerHome: {
						screen: HomePage
					}
				})
			},
			bestOf: {
				screen: StackNavigator({
					innerBestOf: {
						screen: BestOfPage
					}
				})
			}
		})
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
