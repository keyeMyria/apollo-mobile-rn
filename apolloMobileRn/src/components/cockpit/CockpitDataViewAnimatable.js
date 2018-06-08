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
				<View>
					<View style={{ alignItems: this.state.isOpened ? 'center' : 'flex-start' }}>
						<Text
							style={{
								fontSize: widthPercentageToDP('3.8%'),
								color: Colors.BasicTitleColor,
								marginTop: widthPercentageToDP('3%'),
								marginLeft: widthPercentageToDP('3%'),
								marginRight: widthPercentageToDP('3%')
								// textAlign: 'left'
							}}
						>
							{title}
						</Text>
					</View>

					<Text
						style={{
							position: 'absolute',
							top: heightPercentageToDP('6%'),
							fontSize: widthPercentageToDP('10%'),
							color: Colors.SecondaryTitleColor,
							paddingLeft: widthPercentageToDP('2%')
						}}
					>
						0
					</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignItems: 'center',
						paddingRight: widthPercentageToDP('2%'),
						paddingBottom: widthPercentageToDP('2%')
					}}
				>
					<Icons name="trending-flat" size={widthPercentageToDP('6%')} color={Colors.SecondaryTitleColor} />
					<Text
						style={{
							fontSize: widthPercentageToDP('6%'),
							color: Colors.SecondaryTitleColor,
							paddingLeft: widthPercentageToDP('2%')
						}}
					>
						100 %
					</Text>
				</View>
			</Animated.View>
		);
	}
}
export { CockpitDataViewAnimatable };
