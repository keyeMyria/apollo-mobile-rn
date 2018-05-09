import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getPing } from 'apollo-rn-redux-helper/src/actions';

class HomePage extends Component {
	componentDidMount() {
		this.props.getPing();
	}
	render() {
		console.log(this.props);
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to Rea asdasd ct Native redux!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				{/* <Text style={styles.instructions}>{this.props.ping === null ? this.props.ping.Message : 'bos'}</Text> */}
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

export default connect(mapStateToProps, { getPing })(HomePage);
