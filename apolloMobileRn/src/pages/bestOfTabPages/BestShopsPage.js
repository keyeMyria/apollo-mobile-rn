import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getPing, fetchReportTop } from 'apollo-rn-redux-helper/src/actions';
import { localizedText } from './../../helpers/Localization/Localization';
import BarChart from './../../components/charts/BarChart';
import { widthPercentageToDP, heightPercentageToDP, Colors } from '../../helpers';
import OrderCriteria from './bestOfTabPagesComponents/OrderCriteria';
import { Divider } from '../../components/common/Divider';
import { DefinationRow } from './bestOfTabPagesComponents/DefinationRow';
import { Stores } from './bestOfTabPagesComponents/Stores';

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
						height: heightPercentageToDP('35%'),
						justifyContent: 'space-around'
					}}
				>
					<OrderCriteria />
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around'
						}}
					>
						<View>
							<Stores store="Teknosa" />
							<Stores store="big" />
							<Stores store="English Home" />
							<Stores store="Macrocenter" />
							<Stores store="Mado" />
							<Stores store="Atasun Optik" />
							<Stores store="başkent doğangaz" />
							<Stores store="PEPERONCINO" />
							<Stores store="a1066" />
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
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingHorizontal: widthPercentageToDP('3%')
						}}
					>
						<Text style={{ color: Colors.BasicTitleColor }}>{localizedText.StoreName}</Text>
						<OrderCriteria />
					</View>
					<Divider
						style={{
							backgroundColor: '#585858',
							marginHorizontal: widthPercentageToDP('3%'),
							marginTop: widthPercentageToDP('1%')
						}}
					/>

					<DefinationRow title="Teknosa" number="22.700" />
					<DefinationRow title="big" number="2.555" />
					<DefinationRow title="English Home" number="1.00" />
					<DefinationRow title="Macrocenter" number="400" />
					<DefinationRow title="Mado" number="250" />
					<DefinationRow title="Atasun Optik" number="222" />
					<DefinationRow title="başkent doğangaz" number="150" />
					<DefinationRow title="PEPERONCINO" number="120" />
					<DefinationRow title="a1066" number="22" />
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { isLoading, ping, error } = state.ping;
	return { isLoading, ping, error };
};

export default connect(mapStateToProps, { fetchReportTop })(BestShopsPage);
