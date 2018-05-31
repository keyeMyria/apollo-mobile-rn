import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import {
	RadioButton,
	RadioButtonGroup,
	Button,
	ListAccordion,
	ListItem,
	Dialog,
	DialogScrollArea
} from 'react-native-paper';
import { Colors, Margins, widthPercentageToDP } from '../../../helpers';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Divider } from '../../common';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
class CampaignSelection extends Component {
	state = {
		mallCode: 'Portus Bey',
		campaign: 'xxKota Kampanya',
		isMallCodeModalVisible: false,
		isCampaignModalVisible: false
	};

	render() {
		const { sectionNumber } = this.props;
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.sectionText}>{sectionNumber}</Text>

					<View>
						<View>
							<Dialog
								visible={this.state.isMallCodeModalVisible}
								onDismiss={() => this.setState({ isMallCodeModalVisible: false })}
							>
								<DialogScrollArea>
									<ScrollView>
										<View
											style={{
												flexDirection: 'row',
												flex: 1,

												height: widthPercentageToDP('10%')
											}}
										>
											<Icons name="store" size={15} style={{ alignSelf: 'center' }} />
											<Text
												style={{
													fontSize: 14,
													color: '#000000',
													paddingLeft: widthPercentageToDP('3%'),
													textAlignVertical: 'center'
												}}
											>
												Avm Seç
											</Text>
										</View>
										<Divider style={{ backgroundColor: '#BCBCBC' }} />
										<TouchableOpacity
											onPress={() =>
												this.setState({ mallCode: '14Burda', isMallCodeModalVisible: false })}
										>
											<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>14Burda</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() =>
												this.setState({ mallCode: 'Acity', isMallCodeModalVisible: false })}
										>
											<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>Acity</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() =>
												this.setState({
													mallCode: 'Park Bornova',
													isMallCodeModalVisible: false
												})}
										>
											<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>
												Park Bornova
											</Text>
										</TouchableOpacity>
									</ScrollView>
								</DialogScrollArea>
							</Dialog>
						</View>
						<View>
							<Dialog
								visible={this.state.isCampaignModalVisible}
								onDismiss={() => this.setState({ isCampaignModalVisible: false })}
							>
								<DialogScrollArea>
									<ScrollView>
										<TouchableOpacity
											campaign={this.state.campaign}
											onPress={() =>
												this.setState({ campaign: 'Hediye', isCampaignModalVisible: false })}
										>
											<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>Hediye</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() =>
												this.setState({
													campaign: 'Tek Seferde Ve Üzeri',
													isCampaignModalVisible: false
												})}
										>
											<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>
												Tek Seferde Ve Üzeri
											</Text>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() =>
												this.setState({ campaign: 'Aynı Gün', isCampaignModalVisible: false })}
										>
											<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>Aynı Gün</Text>
										</TouchableOpacity>
									</ScrollView>
								</DialogScrollArea>
							</Dialog>
						</View>

						<View style={{ flex: 1, justifyContent: 'center' }}>
							<TouchableOpacity
								onPress={() => this.setState({ isMallCodeModalVisible: true })}
								style={{
									flexDirection: 'row',
									// paddingLeft: widthPercentageToDP('5%'),
									// paddingVertical: widthPercentageToDP('2%'),
									// paddingTop: widthPercentageToDP('3%'),
									justifyContent: 'space-between'
								}}
							>
								<View style={{ flexDirection: 'row' }}>
									<Icons name="store" size={widthPercentageToDP('8%')} color="#BCBCBC" />
									<Text
										style={{
											color: '#BCBCBC',
											paddingHorizontal: widthPercentageToDP('2%'),
											textAlignVertical: 'center'
										}}
									>
										{this.state.mallCode}
									</Text>
								</View>
								<Icons name="arrow-drop-down" size={widthPercentageToDP('8%')} color="#BCBCBC" />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => this.setState({ isCampaignModalVisible: true })}
								style={{
									flexDirection: 'row'
									// paddingLeft: widthPercentageToDP('5%'),
									// paddingVertical: widthPercentageToDP('2%'),
									// paddingTop: widthPercentageToDP('3%')
								}}
							>
								<Icons name="local-play" size={widthPercentageToDP('8%')} color="#BCBCBC" />
								<Text
									style={{
										color: '#BCBCBC',
										paddingHorizontal: widthPercentageToDP('2%'),
										textAlignVertical: 'center'
									}}
								>
									{this.state.campaign}
								</Text>
								<Icons name="arrow-drop-down" size={widthPercentageToDP('8%')} color="#BCBCBC" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: '#252525',
		marginBottom: widthPercentageToDP('2%'),
		height: widthPercentageToDP('38%')
	},
	sectionText: {
		fontSize: widthPercentageToDP('23%'),
		color: '#363636',
		marginTop: widthPercentageToDP('5%'),
		marginBottom: widthPercentageToDP('5%'),
		marginLeft: widthPercentageToDP('5%')
	}
});
export { CampaignSelection };
