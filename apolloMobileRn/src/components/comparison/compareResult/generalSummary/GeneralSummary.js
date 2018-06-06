import React, { Component } from 'react';
import { View, Text } from 'react-native';
import GeneralSummaryItems from './GeneralSummaryItems';
import { localizedText } from './../../../../helpers/Localization/Localization';
import { widthPercentageToDP, Colors } from '../../../../helpers';
class GeneralSummary extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#6A1B9A', flex: 1 }}>
				<Text
					style={{
						paddingTop: widthPercentageToDP('2%'),
						paddingLeft: widthPercentageToDP('2%'),
						color: Colors.BasicTitleColor
					}}
				>
					{' '}
					{localizedText.GeneralSummary}{' '}
				</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
					<Text style={{ fontSize: widthPercentageToDP('2%'), color: Colors.BasicTitleColor }}>
						xx Kota Kampanya
					</Text>
					<Text
						style={{
							fontSize: widthPercentageToDP('2%'),
							color: Colors.BasicTitleColor,
							paddingLeft: widthPercentageToDP('4%'),
							paddingBottom: widthPercentageToDP('4%')
						}}
					>
						xx Kota Kampanya{' '}
					</Text>
				</View>
				<GeneralSummaryItems
					title={localizedText.NumberOfMembersWhoTakeAction}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
				<GeneralSummaryItems
					title={localizedText.TotalNumberOfMembers}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
				<GeneralSummaryItems
					title={localizedText.PercentOfMale}
					firstCampaign="2"
					percentage="0"
					secondCampaign="2"
				/>
				<GeneralSummaryItems
					title={localizedText.PercentOfFemale}
					firstCampaign="3"
					percentage="0"
					secondCampaign="3"
				/>
				<GeneralSummaryItems
					title={localizedText.NumberOfNewMember}
					firstCampaign="1"
					percentage="0"
					secondCampaign="1"
				/>
				<GeneralSummaryItems
					title={localizedText.RecordedTotalSpending}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
				<GeneralSummaryItems
					title={localizedText.AverageSpendingPerMember}
					firstCampaign="3"
					percentage="0"
					secondCampaign="4"
				/>
				<GeneralSummaryItems
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
