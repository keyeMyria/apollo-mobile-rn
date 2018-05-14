import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';

class HomePage extends Component {
	componentDidMount() {
		this.props.fetchCampaignSummary('portus', new Date(2018, 5, 1), new Date(2018, 5, 10));
	}

	renderCampaigns() {
		if (this.props.isCampaignSummaryLoading) {
			return <ActivityIndicator size={40} color="black" />;
		}
		if (this.props.campaignSummary) {
			return this.props.campaignSummary.map((item, index) => {
				return <Text key={index}>{item.Name}</Text>;
			});
		}
	}

	render() {
		if (this.props.campaignSummaryError) {
			Alert.alert(null, 'kampanyalar çekilemedi');
		}
		return <View style={styles.container}>{this.renderCampaigns()}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	const { isCampaignSummaryLoading, campaignSummary, campaignSummaryError } = state.report;
	return { isCampaignSummaryLoading, campaignSummary, campaignSummaryError };
};

export default connect(mapStateToProps, { fetchCampaignSummary })(HomePage);
