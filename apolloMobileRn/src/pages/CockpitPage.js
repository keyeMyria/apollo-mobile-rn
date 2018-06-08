import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Modal, Button, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Page } from '../components/common';
import { fetchDailySummary } from 'apollo-rn-redux-helper/src/actions';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../helpers/Colors';
import { widthPercentageToDP, heightPercentageToDP } from '../helpers';
import { CockpitDataView } from '../components/cockpit/CockpitDataView';
import { localizedText } from './../helpers/Localization/Localization';
import { CockpitDataViewAnimatable } from '../components/cockpit/CockpitDataViewAnimatable';
import { CockpitData } from './../helpers/DummyData';

// const { width, height } = Dimensions.get('window');
var cockpitSize = 0;
class CockpitPage extends Component {
	state = {
		cockpitSize: 0,
		modalIsVisible: false,
		position: { x: 0, y: 0 }
	};

	componentDidMount() {
		// return ReportDailySummary array with 4 elements
		// 0 => today or selected date
		// 1 => yesterday
		// 2 => last week
		// 3 => last month
		// this.props.fetchDailySummary('portus', new Date(2018, 5, 27, 22, 0, 0), 15, 30, true, true);
	}

	handleOnPress(position, index) {
		this.setState({ position: position, selectedItemIndex: index });
		setTimeout(() => {
			this.setState({ modalIsVisible: true });
		}, 100);
	}

	handleLayout(event) {
		const { height, width } = event.nativeEvent.layout;
		var cockpitPanelHeigt = height - heightPercentageToDP('8%'); //%8 padding
		var cockpitPanelWidth = width - heightPercentageToDP('6%');

		if (cockpitPanelHeigt / cockpitPanelWidth > 3 / 2) {
			var curSize = cockpitPanelWidth / 2;
			cockpitSize = curSize;
			this.setState({ cockpitSize: cockpitSize });
		} else {
			curSize = cockpitPanelHeigt / 3;
			cockpitSize = curSize;
			this.setState({ cockpitSize: cockpitSize });
		}
	}

	render() {
		console.log(CockpitData);
		return (
			<Page navigation={this.props.navigation}>
				<Modal
					animationType="none"
					transparent={true}
					visible={this.state.modalIsVisible}
					onRequestClose={() => {
						alert('Modal has been closed.');
					}}
				>
					<Animated.View style={{ backgroundColor: '#000a', flex: 1 }}>
						<CockpitDataViewAnimatable
							size={cockpitSize}
							title={localizedText.NumberOfReceipts}
							backgroundColor="#45289F"
							position={this.state.position}
						/>
					</Animated.View>
					<Button
						title="kapat"
						onPress={() => {
							this.setState({ modalIsVisible: false });
						}}
					/>
				</Modal>
				<View style={{ flex: 1 }}>
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
						onLayout={event => this.handleLayout(event)}
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							paddingTop: heightPercentageToDP('2%'),
							flex: 1
						}}
					>
						<View style={{ marginRight: heightPercentageToDP('2%') }}>
							<CockpitDataView
								size={cockpitSize}
								title={localizedText.NumberOfNewMembers}
								data={CockpitData}
								value="NumberOfNewMembers"
								backgroundColor="#2F7D32"
								onPress={position => {
									this.handleOnPress(position, 0);
								}}
							/>
							<CockpitDataView
								size={cockpitSize}
								title={localizedText.NumberOfReceipts}
								data={CockpitData}
								value="NumberOfReceipts"
								backgroundColor="#45289F"
								onPress={position => {
									this.handleOnPress(position, 2);
								}}
							/>
							<CockpitDataView
								size={cockpitSize}
								backgroundColor="#C62829"
								title={localizedText.NumberOfCoupons}
								data={CockpitData}
								value="NumberOfCoupons"
								onPress={position => {
									this.handleOnPress(position, 4);
								}}
							/>
						</View>
						<View>
							<CockpitDataView
								size={cockpitSize}
								backgroundColor="#0176BC"
								title={localizedText.NumberOfShoppers}
								data={CockpitData}
								value="NumberOfShoppers"
								onPress={position => {
									this.handleOnPress(position, 1);
								}}
							/>
							<CockpitDataView
								size={cockpitSize}
								backgroundColor="#548B2E"
								title={localizedText.TotalRecordedReceiptAmount}
								data={CockpitData}
								value="TotalRecordedReceiptAmount"
								onPress={position => {
									this.handleOnPress(position, 3);
								}}
							/>
							<CockpitDataView
								size={cockpitSize}
								backgroundColor="#2A3495"
								title={localizedText.NumberOfMembersWithCoupon}
								data={CockpitData}
								value="NumberOfMembers"
								onPress={position => {
									this.handleOnPress(position, 5);
								}}
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
