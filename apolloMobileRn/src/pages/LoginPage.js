import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { getPing } from 'apollo-rn-redux-helper/src/actions';

class LoginPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Login Page</Text>
				<Button title="Giriş Yap" onPress={() => this.props.navigation.navigate('home')} />
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
	const { isLoading, ping, error } = state.ping;
	return { isLoading, ping, error };
};

export default LoginPage;
