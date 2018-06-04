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
class Selection extends Component {
	state = {
		visible: false,
		mallCode: 'Portus Bey'
	};

	render() {
		const { sectionNumber, date1, date2, dateTitle1, dateTitle2 } = this.props;
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.sectionText}>{sectionNumber}</Text>

					<View>
						<Dialog visible={this.state.visible} onDismiss={() => this.setState({ visible: false })}>
							<DialogScrollArea>
								<ScrollView>
									<View
										style={{
											flexDirection: 'row',
											flex: 1,
											height: widthPercentageToDP('10%')
										}}
									>
										<Icons
											name="store"
											size={widthPercentageToDP('5%')}
											style={{ alignSelf: 'center' }}
										/>
										<Text
											style={{
												fontSize: widthPercentageToDP('4%'),
												color: '#000000',
												paddingLeft: widthPercentageToDP('3%'),
												textAlignVertical: 'center'
											}}
										>
											Avm Seç
										</Text>
									</View>
									<Divider style={{ backgroundColor: Colors.BasicTitleColor }} />
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
						<TouchableOpacity
							onPress={() => this.setState({ visible: true })}
							style={{
								flexDirection: 'row',
								paddingLeft: widthPercentageToDP('5%'),
								paddingVertical: widthPercentageToDP('2%')
							}}
						>
							<Icons name="store" size={widthPercentageToDP('7%')} color={Colors.BasicTitleColor} />
							<Text
								style={{
									color: Colors.BasicTitleColor,
									paddingHorizontal: widthPercentageToDP('2%'),
									textAlignVertical: 'center'
								}}
							>
								{this.state.mallCode}
							</Text>
							<Icons
								name="arrow-drop-down"
								size={widthPercentageToDP('7%')}
								color={Colors.BasicTitleColor}
							/>
						</TouchableOpacity>

						<View style={styles.sectionDate}>
							<Text style={styles.sectionDateText}>{dateTitle1}</Text>

							<TouchableOpacity style={{ flexDirection: 'row' }}>
								<Icons
									name="date-range"
									size={widthPercentageToDP('7%')}
									color={Colors.BasicTitleColor}
								/>
								<Text style={styles.dateTitleText}>{date1}</Text>
							</TouchableOpacity>
							<Divider style={{ marginLeft: widthPercentageToDP('9%') }} />
						</View>
						<View style={styles.sectionDate}>
							<Text style={styles.sectionDateText}>{dateTitle2}</Text>

							<TouchableOpacity style={{ flexDirection: 'row' }}>
								<Icons
									name="date-range"
									size={widthPercentageToDP('7%')}
									color={Colors.BasicTitleColor}
								/>
								<Text style={styles.dateTitleText}>{date2}</Text>
							</TouchableOpacity>
							<Divider style={{ marginLeft: widthPercentageToDP('9%') }} />
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
		backgroundColor: Colors.AppBackgroundColor,
		marginBottom: widthPercentageToDP('2%'),
		height: widthPercentageToDP('38%')
	},
	sectionText: {
		fontSize: widthPercentageToDP('18%'),
		color: '#363636',
		marginTop: widthPercentageToDP('5%'),
		marginBottom: widthPercentageToDP('5%'),
		marginLeft: widthPercentageToDP('5%')
	},
	sectionDate: {
		flexDirection: 'column',
		marginHorizontal: widthPercentageToDP('5%'),
		marginBottom: widthPercentageToDP('2%')
	},
	sectionDateText: {
		marginLeft: widthPercentageToDP('9%'),
		color: Colors.BasicTitleColor,
		fontSize: widthPercentageToDP('3%')
	},
	dateTitleText: {
		color: Colors.SecondaryTitleColor,
		marginLeft: widthPercentageToDP('2%')
	}
});
export { Selection };
