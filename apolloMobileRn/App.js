import React, { Component } from 'react';
import { NativeModules, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import myReducer from 'apollo-rn-redux-helper/src/reducers';
import thunk from 'redux-thunk';
import HomePage from './src/pages/HomePage';
import MainNavigationPage from './src/pages/MainNavigationPage';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Colors } from './src/helpers';
import { setLocalization } from './src/helpers/Localization';

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.PrimaryColor,
		accent: Colors.AccentColor
	}
};

export default class App extends Component {
	getLanguageCode() {
		let systemLanguage = 'tr';
		if (Platform.OS === 'android') {
			systemLanguage = NativeModules.I18nManager.localeIdentifier;
		} else {
			systemLanguage = NativeModules.SettingsManager.settings.AppleLocale;
		}
		const languageCode = systemLanguage.substring(0, 2);
		return languageCode;
	}

	render() {
		setLocalization(this.getLanguageCode());
		return (
			<PaperProvider theme={theme}>
				<Provider store={createStore(myReducer, {}, applyMiddleware(thunk))}>
					<MainNavigationPage />
				</Provider>
			</PaperProvider>
		);
	}
}
