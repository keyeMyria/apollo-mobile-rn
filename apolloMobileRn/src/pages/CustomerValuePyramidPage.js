import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Page } from '../components/common';
import BarChart from './../components/charts/BarChart';
import NewChart from './../components/charts/NewChart';
import { widthPercentageToDP } from '../helpers';

const data = [
	{
		text: 'sıfır',
		value: 100
	},
	{
		text: 'bir',
		value: 150
	},
	{
		text: 'iki',
		value: 50
	},
	{
		text: 'uc',
		value: 100
	},
	{
		text: 'dort',
		value: 150
	},
	{
		text: 'bes',
		value: 50
	},
	{
		text: 'alti',
		value: 150
	},
	{
		text: 'yedi',
		value: 50
	},
	{
		text: 'sekiz',
		value: 50
	},
	{
		text: 'dokuz',
		value: 50
	}
];

class CustomerValuePyramidPage extends Component {
	render() {
		return (
			<Page navigation={this.props.navigation} style={{ padding: widthPercentageToDP('5%') }}>
				<BarChart
					data={data}
					chartWidth={widthPercentageToDP('80%')}
					chartHeight={widthPercentageToDP('80%')}
				/>
				<Text>CustomerValuePyramidPage</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(CustomerValuePyramidPage);
