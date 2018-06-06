import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Page } from '../components/common';
import { fetchDailySummary } from 'apollo-rn-redux-helper/src/actions';
import { Button } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../helpers/Colors';
import { widthPercentageToDP } from '../helpers';
import { CockpitDataView } from '../components/cockpit/CockpitDataView';

class CockpitPage extends Component {
	componentDidMount() {
		// return ReportDailySummary array with 4 elements
		// 0 => today or selected date
		// 1 => yesterday
		// 2 => last week
		// 3 => last month
		// this.props.fetchDailySummary('portus', new Date(2018, 5, 27, 22, 0, 0), 15, 30, true, true);
	}
	render() {
		// console.log(this.props.dailySummary);
		return (
			<Page navigation={this.props.navigation}>
				<View>
					<View
						style={{
							backgroundColor: '#212121',
							height: widthPercentageToDP('9%'),
							paddingVertical: widthPercentageToDP('2%')
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								backgroundColor: Colors.CardBackgroundColor,
								marginHorizontal: widthPercentageToDP('32%'),
								height: widthPercentageToDP('6%')
							}}
						>
							<Image
								source={require('../../assets/earthgif.gif')}
								style={{
									width: widthPercentageToDP('5%'),
									height: widthPercentageToDP('5%'),
									marginLeft: widthPercentageToDP('2%')
								}}
							/>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingLeft: widthPercentageToDP('10%'),
									fontWeight: 'bold'
								}}
							>
								CANLI
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<CockpitDataView />
						<CockpitDataView />
					</View>
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
