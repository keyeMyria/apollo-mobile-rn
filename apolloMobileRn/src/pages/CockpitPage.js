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
import { EditView } from '../components/cockpit/EditView';
// import { LinearGradient } from 'expo';
import CockpitDataRow from '../components/cockpit/CockpitDataRow';
import DijitalClock from '../components/cockpit/DijitalClock';
import Constant, { Margins } from '../helpers/Constants';
import CockpitDataRowAnimatable from './../components/cockpit/CockpitDataRowAnimatable';
import CockpitDataView from './../components/cockpit/CockpitDataView';
import { Colors } from './../helpers/Colors';
import { LinearGradient } from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const data = [
	{
		icon: require('../../assets/yenimüşteri.png'),
		title: `Yeni Müşteri Sayısı`,
		value: '123123',
		graphImage: require('../../assets/1.jpg')
	},
	{
		icon: require('../../assets/işletilenfaturasayısı.png'),
		title: `İşletilen Fatura Sayısı`,
		value: '234234',
		graphImage: require('../../assets/2.jpg')
	},
	{
		icon: require('../../assets/işletilenfaturalarıntplamı.png'),
		title: `İşletilen Faturaların ${'\n'} Toplam Tutarı`,
		value: '12332',
		graphImage: require('../../assets/1.jpg')
	},
	{
		icon: require('../../assets/kuponadedi.png'),
		title: `Kupon Adedi`,
		value: '2423',
		graphImage: require('../../assets/2.jpg')
	},
	{
		icon: require('../../assets/kuponalanmüşteri.png'),
		title: `Kupon Alan ${'\n'} Müşteri Sayısı`,
		value: '20695',
		graphImage: require('../../assets/1.jpg')
	},
	{
		icon: require('../../assets/işlemyaptıranmüşteri.png'),
		title: `İşlem Yaptıran ${'\n'} Müşteri Sayısı`,
		value: '20695',
		graphImage: require('../../assets/2.jpg')
	}
];

export default class CockpitPage extends React.Component {
	state = {
		modalIsVisible: false,
		yPos: 0,
		selectedItemIndex: -1,
		modalColor: new Animated.Value(0),
		scrollPositionChangedCounter: 0
	};

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
				<CockpitDataView />

				<View
					style={{
						height: 12,
						backgroundColor: '#b66da8',
						opacity: 0.5,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10
					}}
				/>
				<View
					style={{
						height: 9,
						backgroundColor: '#875a7e',
						opacity: 0.3,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10,
						marginLeft: 15,
						marginRight: 15
					}}
				/>
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

					<View
						style={{
							position: 'absolute',
							flexDirection: 'row',
							justifyContent: 'center',
							backgroundColor: 'transparent',
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
					</View>
				</View>
			</View>
		);
	}
}
