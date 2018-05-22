import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Page } from './../components/common/Page';
import Icons from '../helpers/Icons';
import { Divider } from './../components/common/Divider';
import { FontSizes, Paddings, Margins } from './../helpers/Constants';
import { widthPercentageToDP } from '../helpers/Responsive';
import { Button } from 'react-native-paper';
var imageWidth = widthPercentageToDP('3%');
var imageHeight = widthPercentageToDP('5%');

class EMailReport extends Component {
	render() {
		return (
			<Page style={styles.container}>
				<View style={{ justifyContent: 'center' }}>
					<View style={styles.date}>
						<Text style={styles.dateTitle}>Başlangıç Tarihi</Text>

						<TouchableOpacity style={styles.selection}>
							<Image
								source={Icons.LıstItemRightIcon}
								style={{ width: imageWidth, height: imageHeight }}
							/>
							<Text style={styles.day}>22 Mayıs 2018</Text>
						</TouchableOpacity>
						<Divider style={{ marginHorizontal: 20 }} />
					</View>
					<View style={styles.date}>
						<Text style={styles.dateTitle}>Bitiş Tarihi</Text>

						<TouchableOpacity style={styles.selection}>
							<Image
								source={Icons.LıstItemRightIcon}
								style={{ width: imageWidth, height: imageHeight }}
							/>
							<Text style={styles.day}>22 Mayıs 2018</Text>
						</TouchableOpacity>
						<Divider style={{ marginHorizontal: 20 }} />
					</View>
					<View style={styles.date}>
						<Text style={styles.dateTitle}>E Posta Adresleri</Text>

						<TouchableOpacity style={styles.selection}>
							<Image
								source={Icons.LıstItemRightIcon}
								style={{ width: imageWidth, height: imageHeight }}
							/>
						</TouchableOpacity>
						<Divider style={{ marginHorizontal: 20 }} />
					</View>
					<Button raised onPress={() => {}}>
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
		backgroundColor: '#303030',
		justifyContent: 'center'
	},
	date: {
		flexDirection: 'column',
		marginHorizontal: Margins.DateItemHorizontalMargin,
		marginBottom: Margins.DateItemBottomMargin
	},
	dateTitle: {
		color: '#C1C1C1',
		marginLeft: imageWidth + 20,
		fontSize: FontSizes.SubTitleFontSize
	},
	selection: {
		flexDirection: 'row'
	},
	day: {
		color: '#FBFBFB',
		marginLeft: 20
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: Margins.ButtonTopMargin
	},
	reportText: {
		color: '#FBFBFB',
		backgroundColor: '#BF360C',
		paddingHorizontal: Paddings.ButtonHorizontalPadding,
		paddingVertical: Paddings.ButtonVerticalPadding,
		borderRadius: 2,
		fontSize: FontSizes.ButtonFontSize
	}
});

export default EMailReport;
