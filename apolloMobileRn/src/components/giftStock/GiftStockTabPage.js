import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { widthPercentageToDP } from '../.././helpers';
var imageWidth = widthPercentageToDP('5%');
var imageHeight = widthPercentageToDP('5%');

class GiftStockTabPage extends Component {
	render() {
		const { campaign, style } = this.props;
		return (
			<View>
				<Text style={{ color: 'white' }}>{campaign.Name}</Text>
			</View>
		);
	}
}

export default GiftStockTabPage;
