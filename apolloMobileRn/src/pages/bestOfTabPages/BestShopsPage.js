import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getPing, fetchReportTop } from 'apollo-rn-redux-helper/src/actions';
import LinearGradient from 'react-native-linear-gradient';
import { localizedText } from './../../helpers/Localization/Localization';
import BarChart from './../../components/charts/BarChart';
import { widthPercentageToDP } from '../../helpers';
import OrderCriteria from './bestOfTabPagesComponents/OrderCriteria';
const shops = [
	{
		text: 'Teknosa',
		value: 100
	},
	{
		text: 'big',
		value: 75
	},
	{
		text: 'English Home',
		value: 60
	},
	{
		text: 'Macrocenter',
		value: 40
	},
	{
		text: 'MADO',
		value: 29
	},
	{
		text: 'Atasun Optik',
		value: 10
	},
	{
		text: 'başkent doğangaz ',
		value: 7
	},
	{
		text: 'PEPERONCINO',
		value: 2
	},
	{
		text: 'a1066',
		value: 1
	}
];

class BestShopsPage extends Component {
	render() {
		console.log('best shops: ', localizedText.STORE);
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<OrderCriteria />

				<BarChart
					data={shops}
					chartWidth={widthPercentageToDP('80%')}
					chartHeight={widthPercentageToDP('80%')}
				/>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	linearGradient: {
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	}
	// buttonText: {
	// 	fontSize: 18,
	// 	fontFamily: 'Gill Sans',
	// 	textAlign: 'center',
	// 	margin: 10,
	// 	color: '#ffffff',
	// 	backgroundColor: 'transparent'
	// }
});

const mapStateToProps = state => {
	const { isLoading, ping, error } = state.ping;
	return { isLoading, ping, error };
};

export default connect(mapStateToProps, { fetchReportTop })(BestShopsPage);
