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
			textPositionValues: [
				new Animated.Value(-200),
				new Animated.Value(-200),
				new Animated.Value(-200),
				new Animated.Value(-200)
			],
			valuePositionValues: [
				new Animated.Value(-200),
				new Animated.Value(-200),
				new Animated.Value(-200),
				new Animated.Value(-200)
			],

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

		Animated.stagger(50, [
			Animated.timing(this.state.textPositionValues[0], {
				toValue: 0,
				duration: animationDuration,
				easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
			}),
			Animated.timing(this.state.textPositionValues[1], {
				toValue: 0,
				duration: animationDuration,
				easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
			}),
			Animated.timing(this.state.textPositionValues[2], {
				toValue: 0,
				duration: animationDuration,
				easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
			}),
			Animated.timing(this.state.textPositionValues[3], {
				toValue: 0,
				duration: animationDuration,
				easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
			}),
			Animated.timing(this.state.valuePositionValues[0], {
				toValue: widthPercentageToDP('4%'),
				duration: animationDuration,
				easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
			}),
			Animated.timing(this.state.valuePositionValues[1], {
				toValue: widthPercentageToDP('4%'),
				duration: animationDuration,
				easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
			}),
			Animated.timing(this.state.valuePositionValues[2], {
				toValue: widthPercentageToDP('4%'),
				duration: animationDuration,
				easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
			}),
			Animated.timing(this.state.valuePositionValues[3], {
				toValue: widthPercentageToDP('4%'),
				duration: animationDuration,
				easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
			})
		]).start();
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
		const titleFontSize = this.state.animVal.interpolate({
			inputRange: [0, 1],
			outputRange: [widthPercentageToDP('3.8%'), widthPercentageToDP('5%')]
		});

		return (
			<Animated.View
				style={{
					position: 'absolute',
					backgroundColor: backgroundColor,
					width: animSize,
					height: animSize,
					marginBottom: heightPercentageToDP('2%'),
					transform: [{ translateX: translatePositionX }, { translateY: translatePositionY }]
				}}
			>
				<View style={{ flex: 1, justifyContent: 'flex-start' }}>
					<View
						style={{
							alignItems: this.state.isOpened ? 'center' : 'flex-start'
						}}
					>
						<Animated.Text
							style={{
								fontSize: titleFontSize,
								color: Colors.BasicTitleColor,
								margin: widthPercentageToDP('3%')
							}}
						>
							{title}
						</Animated.Text>
					</View>

					<View
						style={{
							paddingHorizontal: widthPercentageToDP('4%'),
							flex: 1,
							justifyContent: 'center'
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: heightPercentageToDP('3%')
							}}
						>
							<Animated.Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('4%'),
									textAlignVertical: 'center',
									transform: [{ translateX: this.state.textPositionValues[0] }]
								}}
							>
								Seçili Gün
							</Animated.Text>
							<Animated.Text
								style={{
									fontSize: widthPercentageToDP('8%'),
									color: Colors.SecondaryTitleColor,
									paddingLeft: widthPercentageToDP('2%'),
									textAlignVertical: 'center',
									right: this.state.valuePositionValues[0]
								}}
							>
								0
							</Animated.Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: heightPercentageToDP('3%')
							}}
						>
							<Animated.Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('4%'),
									textAlignVertical: 'center',
									transform: [{ translateX: this.state.textPositionValues[1] }]
								}}
							>
								Bir Önceki Gün
							</Animated.Text>
							<Animated.Text
								style={{
									fontSize: widthPercentageToDP('8%'),
									color: Colors.SecondaryTitleColor,
									paddingLeft: widthPercentageToDP('2%'),
									textAlignVertical: 'center',
									right: this.state.valuePositionValues[1]
								}}
							>
								0
							</Animated.Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: heightPercentageToDP('3%')
							}}
						>
							<Animated.Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('4%'),
									textAlignVertical: 'center',
									transform: [{ translateX: this.state.textPositionValues[2] }]
								}}
							>
								Bir Önceki Hafta
							</Animated.Text>
							<Animated.Text
								style={{
									fontSize: widthPercentageToDP('8%'),
									color: Colors.SecondaryTitleColor,
									paddingLeft: widthPercentageToDP('2%'),
									textAlignVertical: 'center',
									right: this.state.valuePositionValues[2]
								}}
							>
								0
							</Animated.Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginBottom: heightPercentageToDP('3%')
							}}
						>
							<Animated.Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('4%'),
									textAlignVertical: 'center',
									transform: [{ translateX: this.state.textPositionValues[3] }]
								}}
							>
								Bir Önceki Ay
							</Animated.Text>
							<Animated.Text
								style={{
									fontSize: widthPercentageToDP('8%'),
									color: Colors.SecondaryTitleColor,
									paddingLeft: widthPercentageToDP('2%'),
									textAlignVertical: 'center',
									right: this.state.valuePositionValues[3]
								}}
							>
								0
							</Animated.Text>
						</View>
					</View>
				</View>
			</Animated.View>
		);
	}
}
export { CockpitDataViewAnimatable };
