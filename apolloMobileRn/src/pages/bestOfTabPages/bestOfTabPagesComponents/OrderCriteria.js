import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { widthPercentageToDP, Colors } from '../../../helpers';
import { Dialog, DialogScrollArea } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { localizedText } from './../../../helpers/Localization/Localization';
class OrderCriteria extends Component {
	state = {
		criteria: localizedText.TotalSpending,
		isCriteriaModalVisible: false
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Dialog
					visible={this.state.isCriteriaModalVisible}
					onDismiss={() => this.setState({ isCriteriaModalVisible: false })}
				>
					<DialogScrollArea>
						<ScrollView style={{ paddingTop: widthPercentageToDP('4%') }}>
							<View style={{ flexDirection: 'row' }}>
								<Icons
									name="format-line-spacing"
									size={widthPercentageToDP('6%')}
									style={{ alignSelf: 'center' }}
								/>
								<Text
									style={{
										fontWeight: 'bold',
										color: '#3A3A3A',
										fontSize: widthPercentageToDP('4%'),
										paddingLeft: widthPercentageToDP('4%')
									}}
								>
									{localizedText.SortCriteria}
								</Text>
							</View>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() =>
									this.setState({ criteria: 'Toplam Harcama', isCriteriaModalVisible: false })}
							>
								<Icons
									name="monetization-on"
									size={widthPercentageToDP('6%')}
									style={styles.criteriaIcon}
								/>
								<Text style={styles.criteriaText}>{localizedText.TotalSpending}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() =>
									this.setState({ criteria: 'Toplam Kişi Sayısı', isCriteriaModalVisible: false })}
							>
								<Icons name="people" size={widthPercentageToDP('6%')} style={styles.criteriaIcon} />
								<Text style={styles.criteriaText}>{localizedText.TotalNumberOfPeople}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() =>
									this.setState({ criteria: 'Ortalama Harcama', isCriteriaModalVisible: false })}
							>
								<Icons
									name="monetization-on"
									size={widthPercentageToDP('6%')}
									style={styles.criteriaIcon}
								/>
								<Text style={styles.criteriaText}>{localizedText.AverageSpending}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() =>
									this.setState({ criteria: 'Kişi Yüzdesi', isCriteriaModalVisible: false })}
							>
								<Icons
									name="monetization-on"
									size={widthPercentageToDP('6%')}
									style={styles.criteriaIcon}
								/>
								<Text style={styles.criteriaText}>{localizedText.PercentOfMember}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() =>
									this.setState({ criteria: 'Harcama Yüzdesi', isCriteriaModalVisible: false })}
							>
								<Icons
									name="monetization-on"
									size={widthPercentageToDP('6%')}
									style={styles.criteriaIcon}
								/>
								<Text style={styles.criteriaText}> {localizedText.PercentOfSpending}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() =>
									this.setState({ criteria: 'Fatura Sayısı', isCriteriaModalVisible: false })}
							>
								<Icons
									name="monetization-on"
									size={widthPercentageToDP('6%')}
									style={styles.criteriaIcon}
								/>
								<Text style={styles.criteriaText}>{localizedText.TotalNumberOfReceipts}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flexDirection: 'row', paddingBottom: widthPercentageToDP('3%') }}
								onPress={() =>
									this.setState({
										criteria: 'Fatura Ortalama Tutar ',
										isCriteriaModalVisible: false
									})}
							>
								<Icons
									name="monetization-on"
									size={widthPercentageToDP('6%')}
									style={styles.criteriaIcon}
								/>
								<Text style={styles.criteriaText}>{localizedText.AverageAmountOfReceipt}</Text>
							</TouchableOpacity>
						</ScrollView>
					</DialogScrollArea>
				</Dialog>

				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						marginHorizontal: widthPercentageToDP('10%')
					}}
				>
					<TouchableOpacity
						onPress={() => this.setState({ isCriteriaModalVisible: true })}
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginBottom: widthPercentageToDP('4%')
						}}
					>
						<View style={{ flexDirection: 'row' }}>
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingHorizontal: widthPercentageToDP('2%'),
									textAlignVertical: 'center',
									color: Colors.AccentColor
								}}
							>
								{this.state.criteria}
							</Text>
						</View>
						<Icons name="arrow-drop-down" size={widthPercentageToDP('8%')} color={Colors.AccentColor} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	criteriaText: {
		paddingVertical: widthPercentageToDP('3%'),
		paddingLeft: widthPercentageToDP('4%'),
		color: '#2A2A2A',
		fontSize: widthPercentageToDP('3%'),
		marginTop: widthPercentageToDP('4%')
	},
	criteriaIcon: {
		alignSelf: 'flex-end',
		paddingBottom: widthPercentageToDP('2%')
	}
});
export default OrderCriteria;
