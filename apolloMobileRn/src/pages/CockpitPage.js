import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Page } from '../components/common';
import { fetchDailySummary } from 'apollo-rn-redux-helper/src/actions';
import { Button } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../helpers/Colors';
import { widthPercentageToDP, heightPercentageToDP } from '../helpers';
import { CockpitDataView } from '../components/cockpit/CockpitDataView';
import { localizedText } from './../helpers/Localization/Localization';

const { width, height } = Dimensions.get('window');
var cockpitSize = 0;
class CockpitPage extends Component {
	state = {
		cockpitSize: 0
	};

	componentDidMount() {
		var cockpitPanelHeigt = heightPercentageToDP('77%'); //%8 padding, %15 top comp
		var cockpitPanelWidth = widthPercentageToDP('100%') - heightPercentageToDP('6%');

		if (cockpitPanelHeigt / cockpitPanelWidth > 3 / 2) {
			var curSize = cockpitPanelWidth / 2;
			cockpitSize = curSize;
			this.setState({ cockpitSize: cockpitSize });
		} else {
			curSize = cockpitPanelHeigt / 3;
			cockpitSize = curSize;
			this.setState({ cockpitSize: cockpitSize });
		}

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

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							paddingTop: heightPercentageToDP('2%')
						}}
					>
						<View style={{ marginRight: heightPercentageToDP('2%') }}>
							<CockpitDataView
								size={cockpitSize}
								title={localizedText.NumberOfNewMembers}
								backgroundColor="#2F7D32"
							/>
							<CockpitDataView
								size={cockpitSize}
								title={localizedText.NumberOfReceipts}
								backgroundColor="#45289F"
							/>
							<CockpitDataView
								size={cockpitSize}
								backgroundColor="#C62829"
								title={localizedText.NumberOfCoupons}
							/>
						</View>
						<View>
							<CockpitDataView
								size={cockpitSize}
								backgroundColor="#0176BC"
								title={localizedText.NumberOfMembersWhoTakeAction}
							/>
							<CockpitDataView
								size={cockpitSize}
								backgroundColor="#548B2E"
								title={localizedText.TotalRecordedReceiptAmount}
							/>
							<CockpitDataView
								size={cockpitSize}
								backgroundColor="#2A3495"
								title={localizedText.NumberOfMembersWithCoupon}
							/>
						</View>
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
