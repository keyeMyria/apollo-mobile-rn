import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { widthPercentageToDP } from '../.././helpers';
var imageWidth = widthPercentageToDP('5%');
var imageHeight = widthPercentageToDP('5%');

class CampaignTabPage extends Component {
	render() {
		const { campaignDetails, style } = this.props;
		return (
			<View>
				<Text>{campaignDetails.Name}</Text>
			</View>
		);
	}
}

export default CampaignTabPage;
