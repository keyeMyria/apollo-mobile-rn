import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Page } from './../components/common/Page';
// import { Icons } from '../helpers/Icons';
import { Divider } from './../components/common/Divider';
import { FontSizes, Paddings, Margins } from './../helpers/Constants';
import { widthPercentageToDP } from '../helpers/Responsive';
import { Button, TextInput } from 'react-native-paper';
import { Colors } from './../helpers/Colors';
import Icons from 'react-native-vector-icons/MaterialIcons';

var imageWidth = widthPercentageToDP('3%');
var imageHeight = widthPercentageToDP('5%');

class EMailReport extends Component {
	state = {
		text: ''
	};
	render() {
		return (
			<Page style={styles.container}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<View style={{ alignSelf: 'stretch' }}>
						<View style={styles.date}>
							<Text style={styles.dateTitle}>Başlangıç Tarihi</Text>

							<TouchableOpacity style={styles.selection}>
								<Icons name="calendar" size={30} color="#4F8EF7" />
								<Text style={styles.day}>22 Mayıs 2018</Text>
							</TouchableOpacity>
							<Divider style={{ marginHorizontal: 20 }} />
						</View>
						<View style={styles.date}>
							<Text style={styles.dateTitle}>Bitiş Tarihi</Text>

							<TouchableOpacity style={styles.selection}>
								<Icons name="calendar" size={30} color="#4F8EF7" />
								<Text style={styles.day}>22 Mayıs 2018</Text>
							</TouchableOpacity>
							<Divider style={{ marginHorizontal: 20 }} />
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Icons name="mail" size={30} color="#4F8EF7" />
							<TextInput
								label="E-Posta Adresleri"
								onChangeText={text => this.setState({ text })}
								underlineColor="#0000"
								style={{ flex: 1 }}
								// style={styles.dateTitle}
								theme={{ colors: { primary: '#FFFFFF', disabled: '#FBFBFB' } }}
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
		backgroundColor: '#303030',
		justifyContent: 'center'
	},
	date: {
		flexDirection: 'column',
		marginHorizontal: Margins.DateItemHorizontalMargin,
		marginBottom: Margins.DateItemBottomMargin
	},
	dateTitle: {
		marginLeft: imageWidth + 20
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
		marginTop: Margins.ButtonTopMargin,
		backgroundColor: '#BF360C'
	}
});

export default EMailReport;
