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
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Divider } from '../../common';
class CampaignSelectionForOneAvm extends Component {
	state = {
		campaign: 'xxKota Kampanya',
		isCampaignModalVisible: false
	};

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Dialog
						visible={this.state.isCampaignModalVisible}
						onDismiss={() => this.setState({ isCampaignModalVisible: false })}
					>
						<DialogScrollArea>
							<ScrollView>
								<TouchableOpacity
									campaign={this.state.campaign}
									onPress={() => this.setState({ campaign: 'Hediye', isCampaignModalVisible: false })}
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

				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						paddingHorizontal: widthPercentageToDP('20%'),
						alignSelf: 'stretch',
						paddingVertical: widthPercentageToDP('5%'),
						backgroundColor: '#292929'
					}}
				>
					<TouchableOpacity onPress={() => this.setState({ isCampaignModalVisible: true })}>
						<View
							style={{
								flexDirection: 'row'
							}}
						>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<Icons
									name="local-play"
									size={widthPercentageToDP('8%')}
									color={Colors.BasicTitleColor}
								/>
								<Text
									style={{
										color: Colors.BasicTitleColor,
										paddingHorizontal: widthPercentageToDP('2%'),
										textAlignVertical: 'center'
									}}
								>
									{this.state.campaign}
								</Text>
							</View>
							<Icons
								name="arrow-drop-down"
								size={widthPercentageToDP('8%')}
								color={Colors.BasicTitleColor}
							/>
						</View>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => this.setState({ isCampaignModalVisible: true })}>
						<View
							style={{
								flexDirection: 'row',
								paddingTop: widthPercentageToDP('3%')
							}}
						>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<Icons
									name="local-play"
									size={widthPercentageToDP('8%')}
									color={Colors.BasicTitleColor}
								/>
								<Text
									style={{
										color: Colors.BasicTitleColor,
										paddingHorizontal: widthPercentageToDP('2%'),
										textAlignVertical: 'center'
									}}
								>
									{this.state.campaign}
								</Text>
							</View>
							<Icons
								name="arrow-drop-down"
								size={widthPercentageToDP('8%')}
								color={Colors.BasicTitleColor}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		height: widthPercentageToDP('38%'),
		flexDirection: 'column',
		backgroundColor: Colors.AppBackgroundColor,
		marginBottom: widthPercentageToDP('2%')
		// justifyContent: 'center'
	}
});
export { CampaignSelectionForOneAvm };
