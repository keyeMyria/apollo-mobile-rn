import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CompareResultDataRow from './CompareResultDataRow';
import CompareResultDataRowForCampaign from './CompareResultDataRowForCampaign';
import { localizedText } from '../../../helpers/Localization/Localization';
import { widthPercentageToDP, Colors, heightPercentageToDP } from '../../../helpers';
class ShopNumberOfMember extends Component {
	render() {
		return (
			<View
				style={{
					backgroundColor: Colors.ShopNumberOfMemberBackgroundColor,
					height: heightPercentageToDP('40%'),
					width: widthPercentageToDP('90%'),
					paddingBottom: widthPercentageToDP('2%'),
					marginTop: widthPercentageToDP('3%')
				}}
			>
				<Text
					style={{
						paddingTop: widthPercentageToDP('2%'),
						paddingLeft: widthPercentageToDP('2%'),

						color: Colors.BasicTitleColor
					}}
				>
					{localizedText['ShopNumberOfMember(First5)']}
				</Text>
				<CompareResultDataRowForCampaign
					firstCampaignTitle="xxKota Kampanya"
					secondCampaignTitle="xxKota Kampanya"
				/>
				<CompareResultDataRow title="--" firstCampaign="3" percentage="0" secondCampaign="4" />
				<CompareResultDataRow title="--" firstCampaign="3" percentage="0" secondCampaign="4" />
				<CompareResultDataRow title="--" firstCampaign="3" percentage="0" secondCampaign="4" />
				<CompareResultDataRow title="--" firstCampaign="3" percentage="0" secondCampaign="4" />
				<CompareResultDataRow title="--" firstCampaign="3" percentage="0" secondCampaign="4" />
			</View>
		);
	}
}
export default ShopNumberOfMember;
