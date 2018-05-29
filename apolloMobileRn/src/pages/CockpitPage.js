import React from 'react';
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	ImageBackground,
	Dimensions,
	Modal,
	Animated,
	Easing
} from 'react-native';
import { connect } from 'react-redux';
import CockpitDataRow from '../components/cockpit/CockpitDataRow';
import DijitalClock from '../components/cockpit/DijitalClock';
import Constant, { Margins } from '../helpers/Constants';
import CockpitDataRowAnimatable from './../components/cockpit/CockpitDataRowAnimatable';
import { Colors } from './../helpers/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CockpitHeader from './../components/cockpit/CockpitHeader';
import { CockpitData } from './../helpers/DummyData';
import { fetchDailySummary } from 'apollo-rn-redux-helper/src/actions';
const { width, height } = Dimensions.get('window');

class CockpitPage extends React.Component {
	state = {
		modalIsVisible: false,
		yPos: 0,
		selectedItemIndex: -1,
		modalColor: new Animated.Value(0),
		scrollPositionChangedCounter: 0
	};

	componentDidMount() {
		this.props.fetchDailySummary('portus', new Date(2018, 5, 27, 22, 0, 0), 15, 30, true, true);
	}

	animateModal() {
		this.state.modalColor.setValue(0);
		Animated.timing(this.state.modalColor, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear
		}).start();
	}

	handleOnPress(yPos, index) {
		this.setState({ yPos: yPos, selectedItemIndex: index });
		setTimeout(() => {
			this.setState({ modalIsVisible: true });
			this.animateModal();
		}, 100);
	}

	onScrollEndDrag() {
		var counter = this.state.scrollPositionChangedCounter + 1;
		this.setState({ scrollPositionChangedCounter: counter });
	}

	render() {
		var bgColor = this.state.modalColor.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: ['#0000', '#0003', '#000c']
		});

		const data = CockpitData;
		if (this.props.dailySummary === null) {
			return <View style={{ flex: 1, backgroundColor: 'red' }} />;
		}
		if (this.props.dailySummary) {
			console.log(this.props.dailySummary);
			var cockpitNowData = this.props.dailySummary[0];
			data[0].value = cockpitNowData.NumberOfNewMembers;
			data[1].value = cockpitNowData.NumberOfReceipts;
			data[2].value = cockpitNowData.TotalRecordedReceiptAmount;
			data[3].value = cockpitNowData.NumberOfCoupons;
			data[4].value = cockpitNowData.NumberOfMembers;
			data[5].value = cockpitNowData.NumberOfShoppers;
		}

		return (
			<View
				style={{
					flex: 1,
					backgroundColor: Colors.CockpitPageBackgroundColor
				}}
			>
				<Modal
					animationType="none"
					transparent={true}
					visible={this.state.modalIsVisible}
					onRequestClose={() => {
						alert('Modal has been closed.');
					}}
				>
					<Animated.View style={{ backgroundColor: bgColor, flex: 1 }}>
						<CockpitDataRowAnimatable
							data={data[this.state.selectedItemIndex]}
							yPos={this.state.yPos}
							onPress={() => this.setState({ modalIsVisible: false })}
						/>
					</Animated.View>
				</Modal>
				<CockpitHeader />

				<View style={{ flex: 3, backgroundColor: Colors.CockpitPageBackgroundColor }}>
					<ScrollView onScrollEndDrag={() => this.onScrollEndDrag()}>
						<View
							style={{
								flexDirection: 'column',
								justifyContent: 'space-around',
								marginTop: Margins.ButtonTopMargin
							}}
						>
							<CockpitDataRow
								data={data[0]}
								onPress={yPos => {
									this.handleOnPress(yPos, 0);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>

							<CockpitDataRow
								data={data[1]}
								onPress={yPos => {
									this.handleOnPress(yPos, 1);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>

							<CockpitDataRow
								data={data[2]}
								onPress={yPos => {
									this.handleOnPress(yPos, 2);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>

							<CockpitDataRow
								data={data[3]}
								onPress={yPos => {
									this.handleOnPress(yPos, 3);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>
							<CockpitDataRow
								data={data[4]}
								onPress={yPos => {
									this.handleOnPress(yPos, 4);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>

							<CockpitDataRow
								data={data[5]}
								onPress={yPos => {
									this.handleOnPress(yPos, 5);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>
							<View style={{ height: 100 }} />
						</View>
					</ScrollView>
					<LinearGradient
						colors={[
							'#0000',
							// '#0001',
							// '#0002',
							'#0003',
							// '#0004',
							'#0005',
							// '#0006',
							'#0007',
							// '#0008',
							'#0009',
							'#000a',
							'#000b',
							'#000c',
							'#000d',
							'#000e',
							'#000'
						]}
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							right: 0
						}}
					>
						<TouchableOpacity onPress={() => {}}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
									height: 100
								}}
							>
								<DijitalClock />
							</View>
						</TouchableOpacity>
					</LinearGradient>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { isDailySummaryLoading, dailySummary, dailySummaryError } = state.report;
	return { isDailySummaryLoading, dailySummary, dailySummaryError };
};

export default connect(mapStateToProps, { fetchDailySummary })(CockpitPage);
