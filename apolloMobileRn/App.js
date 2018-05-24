import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import myReducer from 'apollo-rn-redux-helper/src/reducers';
import thunk from 'redux-thunk';
import HomePage from './src/pages/HomePage';
import MainNavigationPage from './src/pages/MainNavigationPage';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#D74315',
		accent: '#f1c40f'
	}
};

export default class App extends Component {
	render() {
		console.log(myReducer);
		return (
			<PaperProvider theme={theme}>
				<Provider store={createStore(myReducer, {}, applyMiddleware(thunk))}>
					<MainNavigationPage />
				</Provider>
			</PaperProvider>
		);
	}
}
