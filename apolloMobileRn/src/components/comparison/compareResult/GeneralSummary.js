import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CompareResultDataRow from './CompareResultDataRow';
import CompareResultDataRowForCampaign from './CompareResultDataRowForCampaign';
import { localizedText } from '../../../helpers/Localization/Localization';
import { widthPercentageToDP, Colors, heightPercentageToDP } from '../../../helpers';

class GeneralSummary extends Component {
	render() {
		return (
			<View
				style={{
					backgroundColor: Colors.GeneralSummaryBackgroundColor,
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
					{localizedText.GeneralSummary}
				</Text>
				<CompareResultDataRowForCampaign
					firstCampaignTitle="xxKota Kampanya"
					secondCampaignTitle="xxKota Kampanya"
				/>

				<CompareResultDataRow
					title={localizedText.NumberOfShoppers}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
				<CompareResultDataRow
					title={localizedText.TotalNumberOfMembers}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
				<CompareResultDataRow
					title={localizedText.PercentOfMale}
					firstCampaign="2"
					percentage="0"
					secondCampaign="2"
				/>
				<CompareResultDataRow
					title={localizedText.PercentOfFemale}
					firstCampaign="3"
					percentage="0"
					secondCampaign="3"
				/>
				<CompareResultDataRow
					title={localizedText.NumberOfNewMember}
					firstCampaign="1"
					percentage="0"
					secondCampaign="1"
				/>
				<CompareResultDataRow
					title={localizedText.RecordedTotalSpending}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
				<CompareResultDataRow
					title={localizedText.AverageSpendingPerMember}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
				<CompareResultDataRow
					title={localizedText.AverageAmountOfReceipt}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
			</View>
		);
	}
}
export default GeneralSummary;
