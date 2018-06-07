import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { localizedText } from '../../../helpers/Localization/Localization';
import { widthPercentageToDP, Colors, heightPercentageToDP } from '../../../helpers';
class CompareResultDataRowForCampaign extends Component {
	render() {
		const { firstCampaignTitle, secondCampaignTitle } = this.props;
		return (
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'flex-end',
					paddingRight: widthPercentageToDP('3%')
				}}
			>
				<Text style={{ fontSize: widthPercentageToDP('2%'), color: Colors.BasicTitleColor }}>
					{firstCampaignTitle}
				</Text>
				<Text
					style={{
						fontSize: widthPercentageToDP('2%'),
						color: Colors.BasicTitleColor,
						paddingLeft: widthPercentageToDP('5%'),
						paddingBottom: widthPercentageToDP('4%')
					}}
				>
					{secondCampaignTitle}
				</Text>
			</View>
		);
	}
}
export default CompareResultDataRowForCampaign;
