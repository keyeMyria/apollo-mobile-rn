import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Page } from '../components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Colors, widthPercentageToDP } from '../helpers';
import { localizedText } from './../helpers/Localization/Localization';

class ManagerSummaryPage extends Component {
	render() {
		return (
			<Page navigation={this.props.navigation}>
				<ScrollView>
					<View
						style={{
							backgroundColor: '#2F7D32',
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
							{localizedText.TotalNumberOfCustomers}
						</Text>
						<View style={{ paddingLeft: widthPercentageToDP('5%') }}>
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
									<Text
										style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('2.5%') }}
									>
										Toplam Üye Sayısı
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
									<Text
										style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('2.5%') }}
									>
										Toplam Erkek Sayısı
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
									<Text
										style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('2.5%') }}
									>
										Toplam Kadın Sayısı
									</Text>
									<Text style={{ color: Colors.BasicTitleColor }}>398</Text>
								</View>
							</View>
						</View>
					</View>
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
										Son 3 Ayda İşlem Yaptıran Üye Sayısı
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
											Son 6 Ayda İşlem Yaptıran Üye Sayısı
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
											Son 12 Ayda İşlem Yaptıran Üye Sayısı
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
				</ScrollView>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(ManagerSummaryPage);
