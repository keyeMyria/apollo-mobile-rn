import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Page } from '../components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Colors, widthPercentageToDP } from '../helpers';

class ManagerSummaryPage extends Component {
	render() {
		return (
			<Page navigation={this.props.navigation}>
				<ScrollView>
					<View style={{ backgroundColor: '#2F7D32' }}>
						<Text
							style={{
								color: Colors.BasicTitleColor,
								paddingLeft: widthPercentageToDP('3%'),
								paddingTop: widthPercentageToDP('3%')
							}}
						>
							Üye Sayıları
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
										style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('3%') }}
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
										style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('3%') }}
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
								<View style={{ flexDirection: 'column', marginLeft: widthPercentageToDP('3%') }}>
									<Text
										style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('3%') }}
									>
										Toplam Kadın Sayısı
									</Text>
									<Text style={{ color: Colors.BasicTitleColor }}>398</Text>
								</View>
							</View>
						</View>
					</View>
					<View />
				</ScrollView>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(ManagerSummaryPage);
