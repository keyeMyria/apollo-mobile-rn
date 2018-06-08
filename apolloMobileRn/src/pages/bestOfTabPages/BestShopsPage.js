import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getPing, fetchReportTop } from 'apollo-rn-redux-helper/src/actions';
import LinearGradient from 'react-native-linear-gradient';
import { localizedText } from './../../helpers/Localization/Localization';
import BarChart from './../../components/charts/BarChart';
import { widthPercentageToDP, heightPercentageToDP, Colors } from '../../helpers';
import OrderCriteria from './bestOfTabPagesComponents/OrderCriteria';
import { Divider } from 'react-native-paper';

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
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				{/* Store tab'ı için ilk bölüm */}
				<View
					style={{
						backgroundColor: Colors.CardBackgroundColor,
						width: widthPercentageToDP('90%'),
						height: heightPercentageToDP('35%')
					}}
				>
					<OrderCriteria />
					<View
						style={{
							flexDirection: 'row',
							paddingHorizontal: widthPercentageToDP('4%')
						}}
					>
						<View style={{ marginRight: widthPercentageToDP('8%') }}>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								Teknosa
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								big
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								{' '}
								English Home
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								Macrocenter
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								MADO
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								Atasun Optik
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								başkent doğangaz
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								PEPERONCINO
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('2%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								a1066
							</Text>
						</View>

						<BarChart
							data={shops}
							chartWidth={widthPercentageToDP('50%')}
							chartHeight={widthPercentageToDP('40%')}
						/>
					</View>
				</View>
				{/* Store tab'ı için ikinci bölüm */}
				<View
					style={{
						backgroundColor: Colors.CardBackgroundColor,
						width: widthPercentageToDP('90%'),
						height: heightPercentageToDP('35%'),
						marginTop: widthPercentageToDP('3%')
					}}
				>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={{ color: Colors.BasicTitleColor }}>{localizedText.StoreName}</Text>
						<OrderCriteria />
					</View>
					<Divider />
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<View style={{ marginRight: widthPercentageToDP('8%') }}>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								Teknosa
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								big
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								{' '}
								English Home
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								Macrocenter
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								MADO
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								Atasun Optik
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								başkent doğangaz
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								PEPERONCINO
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('2%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								a1066
							</Text>
						</View>
						<View style={{ marginRight: widthPercentageToDP('8%') }}>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								22.700
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								2.555
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								{' '}
								1.000
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								400
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								250
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								222
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								150
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('1%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								120
							</Text>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingTop: widthPercentageToDP('2%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								22
							</Text>
						</View>
					</View>
				</View>
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
