import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Platform, Easing, Button, Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../helpers/Colors';
import { widthPercentageToDP, heightPercentageToDP } from '../../helpers';

const animationDuration = 600;
const { width, height } = Dimensions.get('window');

class CockpitDataViewAnimatable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animVal: new Animated.Value(0),
			isOpened: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.startAnimation();
			this.setState({ isOpened: true });
		}, 500);
	}

	startAnimation() {
		Animated.timing(this.state.animVal, {
			toValue: 1,
			duration: animationDuration,
			easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
		}).start(() => {});
	}

	render() {
		const { size, backgroundColor, icon, title, position, onPress } = this.props;
		const translatePositionX = this.state.animVal.interpolate({
			inputRange: [0, 1],
			outputRange: [position.x, width / 2 - (width - 20) / 2]
		});
		const translatePositionY = this.state.animVal.interpolate({
			inputRange: [0, 1],
			outputRange: [position.y, height / 2 - (width - 20) / 2]
		});
		const animSize = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [size, width - 20] });

		return (
			<Animated.View
				style={{
					position: 'absolute',
					backgroundColor: backgroundColor,
					width: animSize,
					height: animSize,
					marginBottom: heightPercentageToDP('2%'),
					justifyContent: 'space-between',
					transform: [{ translateX: translatePositionX }, { translateY: translatePositionY }]
				}}
			>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<View
						style={{
							alignItems: this.state.isOpened ? 'center' : 'flex-start'
						}}
					>
						<Text
							style={{
								fontSize: widthPercentageToDP('3.8%'),
								color: Colors.BasicTitleColor,
								marginTop: widthPercentageToDP('3%'),
								marginLeft: widthPercentageToDP('3%'),
								marginRight: widthPercentageToDP('3%')
							}}
						>
							{title}
						</Text>
					</View>

					<View
						style={{ paddingHorizontal: widthPercentageToDP('4%'), marginTop: heightPercentageToDP('5%') }}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: heightPercentageToDP('3%')
							}}
						>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('4%'),
									textAlignVertical: 'center'
								}}
							>
								Seçili Gün
							</Text>
							<Text
								style={{
									fontSize: widthPercentageToDP('8%'),
									color: Colors.SecondaryTitleColor,
									paddingLeft: widthPercentageToDP('2%'),
									textAlignVertical: 'center'
								}}
							>
								0
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: heightPercentageToDP('3%')
							}}
						>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('4%'),
									textAlignVertical: 'center'
								}}
							>
								Bir Önceki Gün
							</Text>
							<Text
								style={{
									fontSize: widthPercentageToDP('8%'),
									color: Colors.SecondaryTitleColor,
									paddingLeft: widthPercentageToDP('2%'),
									textAlignVertical: 'center'
								}}
							>
								0
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: heightPercentageToDP('3%')
							}}
						>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('4%'),
									textAlignVertical: 'center'
								}}
							>
								Bir Önceki Hafta
							</Text>
							<Text
								style={{
									fontSize: widthPercentageToDP('8%'),
									color: Colors.SecondaryTitleColor,
									paddingLeft: widthPercentageToDP('2%'),
									textAlignVertical: 'center'
								}}
							>
								0
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: heightPercentageToDP('3%')
							}}
						>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('4%'),
									textAlignVertical: 'center'
								}}
							>
								Bir Önceki Ay
							</Text>
							<Text
								style={{
									fontSize: widthPercentageToDP('8%'),
									color: Colors.SecondaryTitleColor,
									paddingLeft: widthPercentageToDP('2%'),
									textAlignVertical: 'center'
								}}
							>
								0
							</Text>
						</View>
					</View>
				</View>
			</Animated.View>
		);
	}
}
export { CockpitDataViewAnimatable };
