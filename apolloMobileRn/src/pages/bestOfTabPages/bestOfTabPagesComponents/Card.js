import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP, Colors, heightPercentageToDP } from '../../../helpers';
class Card extends Component {
	render() {
		return (
			<View
				style={{
					width: widthPercentageToDP('80%'),
					height: heightPercentageToDP('40%'),
					backgroundColor: Colors.CardBackgroundColor
				}}
			/>
		);
	}
}
export default Card;
