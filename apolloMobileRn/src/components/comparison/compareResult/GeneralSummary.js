import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CompareResultDataRow from './CompareResultDataRow';
import { localizedText } from '../../../helpers/Localization/Localization';
import { widthPercentageToDP, Colors, heightPercentageToDP } from '../../../helpers';

class GeneralSummary extends Component {
	render() {
		return (
			<View
				style={{
					backgroundColor: '#6A1B9A',
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
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						paddingRight: widthPercentageToDP('3%')
					}}
				>
					<Text style={{ fontSize: widthPercentageToDP('2%'), color: Colors.BasicTitleColor }}>
						xx Kota Kampanya
					</Text>
					<Text
						style={{
							fontSize: widthPercentageToDP('2%'),
							color: Colors.BasicTitleColor,
							paddingLeft: widthPercentageToDP('5%'),
							paddingBottom: widthPercentageToDP('4%')
						}}
					>
						xx Kota Kampanya
					</Text>
				</View>
				<CompareResultDataRow
					title={localizedText.NumberOfMembersWhoTakeAction}
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