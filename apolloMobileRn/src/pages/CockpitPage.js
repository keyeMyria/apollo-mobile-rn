import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Page } from '../components/common';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Button } from 'react-native-paper';

class CockpitPage extends Component {
	render() {
		return (
			<Page navigation={this.props.navigation}>
				<View>
					<Text>asdasdasd</Text>
					<Button onPress={() => this.deleteCredential()}>Çıkış Yap</Button>
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
