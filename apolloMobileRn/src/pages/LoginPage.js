import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';

class LoginPage extends Component {
	renderLoading() {
		if (this.props.isTokenLoading) {
			return <ActivityIndicator size={30} color="black" />;
		}
		return null;
	}

	componentWillReceiveProps(newProps) {
		if (newProps.token !== this.props.token) {
			this.props.navigation.navigate('home');
		}
	}

	render() {
		if (this.props.tokenError) {
			Alert.alert('Bir hata oluştu');
		}
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Login Page</Text>
				<Button title="Giriş Yap" onPress={() => this.props.fetchToken('omg.erkan', 'erkan123', 'portus')} />
				{this.renderLoading()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
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