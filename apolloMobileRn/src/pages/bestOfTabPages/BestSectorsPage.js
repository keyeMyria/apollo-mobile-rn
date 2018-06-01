import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getPing, fetchReportTop } from 'apollo-rn-redux-helper/src/actions';
import LinearGradient from 'react-native-linear-gradient';

class BestSectorsPage extends Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Best shops page</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	linearGradient: {
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'Gill Sans',
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
		backgroundColor: 'transparent'
	}
});

const mapStateToProps = state => {
	const { isLoading, ping, error } = state.ping;
	return { isLoading, ping, error };
};

export default connect(mapStateToProps, { fetchReportTop })(BestSectorsPage);
