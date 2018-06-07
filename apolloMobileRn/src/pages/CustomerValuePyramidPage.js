import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Page } from '../components/common';
import BarChart from './../components/charts/BarChart';
import NewChart from './../components/charts/NewChart';
import { widthPercentageToDP } from '../helpers';
import PieChart from './../components/charts/PieChart';

const data = [
	{
		text: 'sıfır',
		value: 190
	},
	{
		text: 'bir',
		value: 50
	},
	{
		text: 'iki',
		value: 100
	},
	{
		text: 'uc',
		value: 70
	},
	{
		text: 'dort',
		value: 180
	},
	{
		text: 'bes',
		value: 250
	},
	{
		text: 'alti',
		value: 320
	},
	{
		text: 'yedi',
		value: 350
	},
	{
		text: 'sekiz',
		value: 280
	},
	{
		text: 'dokuz',
		value: 100
	}
];

class CustomerValuePyramidPage extends Component {
	render() {
		return (
			<Page navigation={this.props.navigation} style={{ padding: widthPercentageToDP('5%') }}>
				{/* <BarChart
					data={data}
					chartWidth={widthPercentageToDP('80%')}
					chartHeight={widthPercentageToDP('80%')}
				/> */}
				<PieChart />
				<Text>CustomerValuePyramidPage</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(CustomerValuePyramidPage);
