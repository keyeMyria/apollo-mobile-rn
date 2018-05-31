import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Page } from '../components/common';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';

class CockpitPage extends Component {
	render() {
		return (
			<Page>
				<View>
					<Text>asdasdasd</Text>
				</View>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	const { isDailySummaryLoading, dailySummary, dailySummaryError } = state.report;
	return { isDailySummaryLoading, dailySummary, dailySummaryError };
};

export default connect(mapStateToProps, { fetchCampaignSummary })(CockpitPage);
