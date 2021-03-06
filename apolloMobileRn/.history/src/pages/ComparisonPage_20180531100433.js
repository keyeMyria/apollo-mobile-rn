import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton, RadioButtonGroup, Button } from 'react-native-paper';
import { Colors, Margins, widthPercentageToDP } from '../helpers';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Divider } from './../components/common';
import { Selection } from '../components/comparison/dateComparison/Selection';
class ComparisonPage extends Component {
	state = {
		value: 'first'
	};

	render() {
		return (
			<View style={{ backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
				<View style={{ backgroundColor: '#333333' }}>
					<Text style={{ color: '#BCBCBC' }}>Kıyaslama Methodu</Text>
					<RadioButtonGroup onValueChange={value => this.setState({ value })} value={this.state.value}>
						<TouchableOpacity style={{ flexDirection: 'row' }}>
							<RadioButton value="first" uncheckedColor="#BCBCBC" />
							<Text style={{ textAlignVertical: 'center', color: '#BCBCBC' }}>Kampanya Kıyaslama</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: 'row' }}>
							<RadioButton value="second" />
							<Text style={{ textAlignVertical: 'center', color: '#BCBCBC' }}>Tarih Kiyaslama</Text>
						</TouchableOpacity>
					</RadioButtonGroup>
				</View>
				<Selection
					sectionNumber="1"
					dateTitle1="İlk Dönem Başlangıç Tarihi"
					date1="31 Mayıs 2018"
					dateTitle2="İlk Dönem Bitiş Tarihi"
					date2="31 Mayıs 2018"
				/>
				<Selection
					sectionNumber="2"
					dateTitle1="İkinci Dönem Başlangıç Tarihi"
					date1="31 Mayıs 2018"
					dateTitle2="İkinci Dönem Bitiş Tarihi"
					date2="31 Mayıs 2018"
				/>

				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity>
						<Text>Excel Raporu Al</Text>
					</TouchableOpacity>
					<Button
						raised
						onPress={() => {}}
						dark={true}
						style={{ backgroundColor: Colors.DrawerItemRippleColor }}
					>
						Rapor Al
					</Button>
				</View>
			</View>
		);
	}
}
export default ComparisonPage;
