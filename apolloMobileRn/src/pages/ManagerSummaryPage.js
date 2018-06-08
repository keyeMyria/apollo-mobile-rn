import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Page } from '../components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Colors, widthPercentageToDP } from '../helpers';
import { localizedText } from './../helpers/Localization/Localization';
import { ColoredCard } from './../components/managerSummary/ColoredCard';
import { ColoredTabCard } from './../components/managerSummary/ColoredTabCard';

const TopShops = [
	{
		name: 'LastThreeMonths',
		values: [
			{
				firstShops: 'LCW',
				value: 1000
			},
			{
				firstShops: 'Boyner',
				value: 1000
			},
			{
				firstShops: 'Migros',
				value: 1000
			}
		]
	},
	{
		name: 'LastSixMonths',
		values: [
			{
				firstShops: 'LCW 2',
				value: 1000
			},
			{
				firstShops: 'Boyner 2',
				value: 1000
			},
			{
				firstShops: 'Migros 2',
				value: 1000
			}
		]
	},
	{
		name: 'LastTwelveMonths',
		values: [
			{
				firstShops: 'LCW3 ',
				value: 1000
			},
			{
				firstShops: 'Boyner3',
				value: 1000
			},
			{
				firstShops: 'Migros3',
				value: 1000
			}
		]
	},
	{
		name: 'AllTimes',
		values: [
			{
				firstShops: 'LCW4',
				value: 1000
			},
			{
				firstShops: 'Boyner4',
				value: 1000
			},
			{
				firstShops: 'Migros4',
				value: 1000
			}
		]
	}
];

class ManagerSummaryPage extends Component {
	render() {
		return (
			<Page navigation={this.props.navigation}>
				<ScrollView>
					<ColoredCard title={localizedText.TotalNumberOfCustomers} backgroundColor="#2F7D32">
						<View
							style={{
								flexDirection: 'row',
								paddingTop: widthPercentageToDP('4%')
							}}
						>
							<MaterialIcons
								name="supervisor-account"
								color={Colors.BasicTitleColor}
								size={widthPercentageToDP('7%')}
							/>
							<View
								style={{
									flexDirection: 'column',
									marginLeft: widthPercentageToDP('3%'),
									marginBottom: widthPercentageToDP('2%')
								}}
							>
								<Text style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('2.5%') }}>
									{localizedText.TotalNumberOfMember}
								</Text>
								<Text style={{ color: Colors.BasicTitleColor }}>544</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<MaterialCommunityIcons
								name="human-male"
								color={Colors.BasicTitleColor}
								size={widthPercentageToDP('7%')}
							/>

							<View
								style={{
									flexDirection: 'column',
									marginLeft: widthPercentageToDP('3%'),
									marginBottom: widthPercentageToDP('2%')
								}}
							>
								<Text style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('2.5%') }}>
									{localizedText.TotalNumberOfMaleMember}
								</Text>
								<Text style={{ color: Colors.BasicTitleColor }}>128</Text>
							</View>
						</View>

						<View style={{ flexDirection: 'row' }}>
							<MaterialCommunityIcons
								name="human-female"
								color={Colors.BasicTitleColor}
								size={widthPercentageToDP('7%')}
							/>
							<View
								style={{
									flexDirection: 'column',
									marginLeft: widthPercentageToDP('3%'),
									paddingBottom: widthPercentageToDP('3%')
								}}
							>
								<Text style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('2.5%') }}>
									{localizedText.TotalNumberOfFemaleMember}
								</Text>
								<Text style={{ color: Colors.BasicTitleColor }}>398</Text>
							</View>
						</View>
					</ColoredCard>

					<View>
						<View
							style={{
								backgroundColor: '#45289F',
								marginHorizontal: widthPercentageToDP('4%'),
								marginTop: widthPercentageToDP('2%')
							}}
						>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingLeft: widthPercentageToDP('3%'),
									paddingTop: widthPercentageToDP('3%')
								}}
							>
								{localizedText.MemberActivityInfo}
							</Text>
							<View style={{ paddingLeft: widthPercentageToDP('5%') }}>
								<View
									style={{
										flexDirection: 'column',
										paddingTop: widthPercentageToDP('4%')
									}}
								>
									<Text
										style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('2.5%') }}
									>
										{localizedText.ProcessedMemberInLast3Months}
									</Text>
									<View style={{ flexDirection: 'row', paddingLeft: widthPercentageToDP('4%') }}>
										<Text style={{ color: Colors.BasicTitleColor }}>69</Text>
										<Text
											style={{
												color: Colors.BasicTitleColor,
												fontSize: widthPercentageToDP('1.5%'),
												paddingHorizontal: widthPercentageToDP('1%'),
												textAlignVertical: 'bottom'
											}}
										>
											kişi
										</Text>
										<Text style={{ color: Colors.BasicTitleColor }}>(12%)</Text>
									</View>
								</View>
								<View style={{ flexDirection: 'row' }}>
									<View
										style={{
											flexDirection: 'column',
											paddingTop: widthPercentageToDP('2%')
										}}
									>
										<Text
											style={{
												color: Colors.BasicTitleColor,
												fontSize: widthPercentageToDP('2.5%')
											}}
										>
											{localizedText.ProcessedMemberInLast6Months}
										</Text>
										<View style={{ flexDirection: 'row', paddingLeft: widthPercentageToDP('4%') }}>
											<Text style={{ color: Colors.BasicTitleColor }}>100</Text>
											<Text
												style={{
													color: Colors.BasicTitleColor,
													fontSize: widthPercentageToDP('1.5%'),
													paddingHorizontal: widthPercentageToDP('1%'),
													textAlignVertical: 'bottom'
												}}
											>
												kişi
											</Text>
											<Text style={{ color: Colors.BasicTitleColor }}>(18%)</Text>
										</View>
									</View>
								</View>
								<View style={{ flexDirection: 'row' }}>
									<View
										style={{
											flexDirection: 'column',
											paddingTop: widthPercentageToDP('2%'),
											paddingBottom: widthPercentageToDP('3%')
										}}
									>
										<Text
											style={{
												color: Colors.BasicTitleColor,
												fontSize: widthPercentageToDP('2.5%')
											}}
										>
											{localizedText.ProcessedMemberInLast12Months}
										</Text>
										<View style={{ flexDirection: 'row', paddingLeft: widthPercentageToDP('4%') }}>
											<Text style={{ color: Colors.BasicTitleColor }}>134</Text>
											<Text
												style={{
													color: Colors.BasicTitleColor,
													fontSize: widthPercentageToDP('1.5%'),
													paddingHorizontal: widthPercentageToDP('1%'),
													textAlignVertical: 'bottom'
												}}
											>
												kişi
											</Text>
											<Text style={{ color: Colors.BasicTitleColor }}>(24%)</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<ColoredTabCard
						backgroundColor="#C62829"
						title={localizedText.Top3StoresByTheTotalReceiptCount}
						data={TopShops}
					/>
					<ColoredTabCard
						backgroundColor="#1565BE"
						title={localizedText.Top3StoresByTheTotalReceiptAmount}
						data={TopShops}
					/>

					<View
						style={{
							backgroundColor: '#AD1457',
							marginHorizontal: widthPercentageToDP('4%'),
							marginTop: widthPercentageToDP('2%')
						}}
					>
						<Text
							style={{
								color: Colors.BasicTitleColor,
								paddingLeft: widthPercentageToDP('3%'),
								paddingTop: widthPercentageToDP('3%')
							}}
						>
							{localizedText.Top3CountiesByTheTotalSpendingAmount}
						</Text>
						<View>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('3%'),
									paddingTop: widthPercentageToDP('4%'),
									paddingLeft: widthPercentageToDP('4%')
								}}
							>
								1. SANDIKLI / AFYONKARAHİSAR
							</Text>
							<View
								style={{
									flexDirection: 'row',
									paddingLeft: widthPercentageToDP('8%')
								}}
							>
								<Text style={{ color: Colors.BasicTitleColor }}>663.392</Text>
								<Text
									style={{
										color: Colors.BasicTitleColor,
										fontSize: widthPercentageToDP('2%'),
										textAlignVertical: 'bottom',
										marginLeft: widthPercentageToDP('1%')
									}}
								>
									TL
								</Text>
							</View>
						</View>
						<View>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('3%'),
									paddingTop: widthPercentageToDP('1%'),
									paddingLeft: widthPercentageToDP('4%')
								}}
							>
								2. ÇANKAYA / ANKARA
							</Text>
							<View
								style={{
									flexDirection: 'row',
									paddingLeft: widthPercentageToDP('8%')
								}}
							>
								<Text style={{ color: Colors.BasicTitleColor }}>579.322</Text>
								<Text
									style={{
										color: Colors.BasicTitleColor,
										fontSize: widthPercentageToDP('2%'),
										textAlignVertical: 'bottom',
										marginLeft: widthPercentageToDP('1%')
									}}
								>
									TL
								</Text>
							</View>
						</View>
						<View>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('3%'),
									paddingTop: widthPercentageToDP('1%'),
									paddingLeft: widthPercentageToDP('4%')
								}}
							>
								3. YENİMAHALLE / ANKARA
							</Text>
							<View
								style={{
									flexDirection: 'row',
									paddingLeft: widthPercentageToDP('8%')
								}}
							>
								<Text style={{ color: Colors.BasicTitleColor }}>120.099</Text>
								<Text
									style={{
										color: Colors.BasicTitleColor,
										fontSize: widthPercentageToDP('2%'),
										textAlignVertical: 'bottom',
										marginLeft: widthPercentageToDP('1%')
									}}
								>
									TL
								</Text>
							</View>
						</View>
						<View>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('3%'),
									paddingTop: widthPercentageToDP('1%'),
									paddingLeft: widthPercentageToDP('4%')
								}}
							>
								4. EDREMİT / BALIKESİR
							</Text>
							<View
								style={{
									flexDirection: 'row',
									paddingLeft: widthPercentageToDP('8%')
								}}
							>
								<Text style={{ color: Colors.BasicTitleColor }}>95.557</Text>
								<Text
									style={{
										color: Colors.BasicTitleColor,
										fontSize: widthPercentageToDP('2%'),
										textAlignVertical: 'bottom',
										marginLeft: widthPercentageToDP('1%')
									}}
								>
									TL
								</Text>
							</View>
						</View>
						<View>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									fontSize: widthPercentageToDP('3%'),
									paddingTop: widthPercentageToDP('1%'),
									paddingLeft: widthPercentageToDP('4%')
								}}
							>
								5. ALADAĞ / ADANA
							</Text>
							<View
								style={{
									flexDirection: 'row',
									paddingLeft: widthPercentageToDP('8%'),
									paddingBottom: widthPercentageToDP('3%')
								}}
							>
								<Text style={{ color: Colors.BasicTitleColor }}>84.677</Text>
								<Text
									style={{
										color: Colors.BasicTitleColor,
										fontSize: widthPercentageToDP('2%'),
										textAlignVertical: 'bottom',
										marginLeft: widthPercentageToDP('1%')
									}}
								>
									TL
								</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(ManagerSummaryPage);
