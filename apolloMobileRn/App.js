import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from 'apollo-rn-redux-helper/src/reducers';
import thunk from 'redux-thunk';
import HomePage from './src/pages/HomePage';
import MainNavigationPage from './src/pages/MainNavigationPage';

export default class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducer, {}, applyMiddleware(thunk))}>
				<MainNavigationPage />
			</Provider>
		);
	}
}
