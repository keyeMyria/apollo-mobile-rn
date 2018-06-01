import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Page } from '../components/common';
import { fetchDailySummary } from 'apollo-rn-redux-helper/src/actions';
import { Button } from 'react-native-paper';

class CockpitPage extends Component {
	componentDidMount() {
		// return ReportDailySummary array with 4 elements
		// 0 => today or selected date
		// 1 => yesterday
		// 2 => last week
		// 3 => last month
		this.props.fetchDailySummary('portus', new Date(2018, 5, 27, 22, 0, 0), 15, 30, true, true);
	}
	render() {
		console.log(this.props.dailySummary);
		return (
			<Page navigation={this.props.navigation}>
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

export default connect(mapStateToProps, { fetchDailySummary })(CockpitPage);
