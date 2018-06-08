import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../helpers/Colors';
import { widthPercentageToDP, heightPercentageToDP } from '../../helpers';

class CockpitDataViewAnimatable extends Component {
	render() {
		const { size, backgroundColor, icon, title, position, onPress } = this.props;
		return (
			<Animated.View
				style={{
					position: 'absolute',
					backgroundColor: backgroundColor,
					width: size,
					height: size,
					marginBottom: heightPercentageToDP('2%'),
					justifyContent: 'space-between',
					transform: [{ translateX: position.x }, { translateY: position.y }]
				}}
			>
				<View>
					<Text
						style={{
							fontSize: widthPercentageToDP('3.8%'),
							color: Colors.BasicTitleColor,
							marginTop: widthPercentageToDP('3%'),
							marginLeft: widthPercentageToDP('3%'),
							textAlign: 'left'
						}}
					>
						{title}
					</Text>
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
