import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Page } from '../components/common';

class GiftStockPage extends Component {
	render() {
		return (
			<Page navigation={this.props.navigation}>
				<Text>GiftStockPage</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(GiftStockPage);
