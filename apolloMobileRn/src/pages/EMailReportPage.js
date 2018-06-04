import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider, Page } from './../components/common';
import { FontSizes, Paddings, Margins, Colors, widthPercentageToDP } from '../helpers';
import { Button, TextInput } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialIcons';

var imageWidth = widthPercentageToDP('3%');
var imageHeight = widthPercentageToDP('5%');

class EMailReportPage extends Component {
	state = {
		text: ''
	};
	render() {
		return (
			<Page style={styles.container} navigation={this.props.navigation}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<View style={{ alignSelf: 'stretch' }}>
						<View style={styles.date}>
							<Text style={styles.dateTitle}>Başlangıç Tarihi</Text>

							<TouchableOpacity style={styles.selection}>
								<Icons
									name="date-range"
									size={widthPercentageToDP('7%')}
									color={Colors.BasicTitleColor}
								/>
								<Text style={styles.day}>22 Mayıs 2018</Text>
							</TouchableOpacity>
							<Divider style={{ marginHorizontal: widthPercentageToDP('10%') }} />
						</View>
						<View style={styles.date}>
							<Text style={styles.dateTitle}>Bitiş Tarihi</Text>

							<TouchableOpacity style={styles.selection}>
								<Icons
									name="date-range"
									size={widthPercentageToDP('7%')}
									color={Colors.BasicTitleColor}
								/>
								<Text style={styles.day}>22 Mayıs 2018</Text>
							</TouchableOpacity>
							<Divider style={{ marginHorizontal: widthPercentageToDP('10%') }} />
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Icons
								name="mail"
								size={widthPercentageToDP('7%')}
								color={Colors.BasicTitleColor}
								style={{ marginLeft: widthPercentageToDP('6%') }}
							/>
							<TextInput
								label="E-Posta Adresleri"
								onChangeText={text => this.setState({ text })}
								underlineColor={Colors.SecondaryTitleColor}
								style={{
									flex: 1,
									marginRight: widthPercentageToDP('7%'),
									marginLeft: widthPercentageToDP('3%'),
									alignSelf: 'center'
								}}
								// style={styles.dateTitle}
								theme={{
									colors: {
										primary: Colors.SecondaryTitleColor,
										disabled: Colors.SecondaryTitleColor
									}
								}}
							/>
						</View>
					</View>
					<Button raised onPress={() => {}} dark={true} style={styles.button}>
						Rapor Al
					</Button>
				</View>
			</Page>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: Colors.AppBackgroundColor,
		justifyContent: 'center'
	},
	date: {
		flexDirection: 'column',
		marginHorizontal: Margins.DateItemHorizontalMargin,
		marginBottom: Margins.DateItemBottomMargin
	},
	dateTitle: {
		marginLeft: widthPercentageToDP('10%'),
		color: Colors.BasicTitleColor
	},
	selection: {
		flexDirection: 'row'
	},
	day: {
		color: Colors.SecondaryTitleColor,
		marginLeft: widthPercentageToDP('3%')
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: Margins.ButtonTopMargin,
		backgroundColor: Colors.TouchableColor
	}
});

export default EMailReportPage;
