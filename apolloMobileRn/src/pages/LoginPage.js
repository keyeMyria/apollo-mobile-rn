import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Page } from './../components/common';
import { Colors, Icons } from '../helpers';

class LoginPage extends Component {
	renderLoading() {
		if (this.props.isTokenLoading) {
			return <ActivityIndicator size={30} color="black" />;
		}
		return null;
	}

	componentWillReceiveProps(newProps) {
		if (newProps.token !== this.props.token) {
			this.props.navigation.navigate('app');
		}
	}

	render() {
		if (this.props.tokenError) {
			Alert.alert('Bir hata oluştu');
		}
		return (
			<Page style={styles.container}>
				<Image source={Icons.LıstItemRightIcon} style={{ width: 30, height: 30 }} />
				<Text style={styles.welcome}>Title</Text>
				<Text style={styles.welcome}>Login Page</Text>
				<Button title="Giriş Yap" onPress={() => this.props.fetchToken('omg.erkan', 'erkan123', 'portus')} />
				{this.renderLoading()}
			</Page>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: Colors.PageTitleColor
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});

const mapStateToProps = state => {
	const { isTokenLoading, token, tokenError } = state.token;
	return { isTokenLoading, token, tokenError };
};

export default connect(mapStateToProps, { fetchToken })(LoginPage);
