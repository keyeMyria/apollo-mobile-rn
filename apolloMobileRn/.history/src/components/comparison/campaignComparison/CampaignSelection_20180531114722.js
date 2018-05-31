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
class CampaignSelection extends Component {
	state = {
		visible: false,
		mallCode: 'Portus Bey',
		campaign: 'xxKota Kampanya'
	};

	render() {
		const { sectionNumber } = this.props;
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.sectionText}>{sectionNumber}</Text>

					<View>
						<Dialog
							style={{ padding: 0 }}
							visible={this.state.visible}
							onDismiss={() => this.setState({ visible: false })}
						>
							<DialogScrollArea style={{ padding: 0 }}>
								<ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
									<View
										style={{
											flexDirection: 'row',
											flex: 1,
											paddingHorizontal: 0,

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
									<Divider style={{ backgroundColor: '#BCBCBC', paddingHorizontal: 0 }} />
									<TouchableOpacity
										mallCode={this.state.mallCode}
										onPress={() => this.setState({ mallCode: '14Burda', visible: false })}
									>
										<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>14Burda</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => this.setState({ mallCode: 'Acity', visible: false })}
									>
										<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>Acity</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => this.setState({ mallCode: 'Park Bornova', visible: false })}
									>
										<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>Park Bornova</Text>
									</TouchableOpacity>
								</ScrollView>
							</DialogScrollArea>
						</Dialog>
						<Dialog
							style={{ padding: 0 }}
							visible={this.state.visible}
							onDismiss={() => this.setState({ visible: false })}
						>
							<DialogScrollArea style={{ padding: 0 }}>
								<ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
									<TouchableOpacity
										campaign={this.state.campaign}
										onPress={() => this.setState({ campaign: 'Hediye', visible: false })}
									>
										<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>Hediye</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() =>
											this.setState({ campaign: 'Tek Seferde Ve Üzeri', visible: false })}
									>
										<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>
											Tek Seferde Ve Üzeri
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => this.setState({ campaign: 'Aynı Gün', visible: false })}
									>
										<Text style={{ paddingVertical: widthPercentageToDP('3%') }}>Aynı Gün</Text>
									</TouchableOpacity>
								</ScrollView>
							</DialogScrollArea>
						</Dialog>
						<View style={{ flex: 1 }}>
							<TouchableOpacity
								onPress={() => this.setState({ visible: true })}
								style={{
									flexDirection: 'row',
									paddingLeft: widthPercentageToDP('5%'),
									paddingVertical: widthPercentageToDP('2%'),
									paddingTop: widthPercentageToDP('3%')
								}}
							>
								<Icons name="store" size={25} color="#BCBCBC" />
								<Text
									style={{
										color: '#BCBCBC',
										paddingHorizontal: widthPercentageToDP('2%'),
										textAlignVertical: 'center'
									}}
								>
									{this.state.mallCode}
								</Text>
								<Icons name="arrow-drop-down" size={25} color="#BCBCBC" />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => this.setState({ visible: true })}
								style={{
									flexDirection: 'row',
									paddingLeft: widthPercentageToDP('5%'),
									paddingVertical: widthPercentageToDP('2%')
								}}
							>
								<Icons name="local-play" size={25} color="#BCBCBC" />
								<Text
									style={{
										color: '#BCBCBC',
										paddingHorizontal: widthPercentageToDP('2%'),
										textAlignVertical: 'center'
									}}
								>
									{this.state.campaign}
								</Text>
								<Icons name="arrow-drop-down" size={25} color="#BCBCBC" />
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
		fontSize: widthPercentageToDP('18%'),
		color: '#363636',
		marginTop: widthPercentageToDP('5%'),
		marginBottom: widthPercentageToDP('5%'),
		marginLeft: widthPercentageToDP('5%')
	}
});
export { CampaignSelection };
