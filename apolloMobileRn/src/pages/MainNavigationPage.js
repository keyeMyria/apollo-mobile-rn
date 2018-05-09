import React, { Component } from 'react';
import { createSwitchNavigator, createDrawerNavigator, StackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import BestOfPage from './BestOfPage';
import LoginPage from './LoginPage';

const SwitchNavigation = createSwitchNavigator({
	login: {
		screen: LoginPage
	},
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
	}
});

class MainNavigationPage extends Component {
	render() {
		return <SwitchNavigation />;
	}
}

export default MainNavigationPage;
