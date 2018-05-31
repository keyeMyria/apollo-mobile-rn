import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton, RadioButtonGroup, Button } from 'react-native-paper';
import { Colors, Margins, widthPercentageToDP } from '../helpers';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Divider } from './../components/common';
import { Selection } from '../components/comparison/dateComparison/Selection';
class ComparisonPage extends Component {
	state = {
		checked: 'first'
	};

	render() {
		return (
			<View style={{ backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
				<View style={{ backgroundColor: '#333333' }}>
					<Text>Kıyaslama Methodu</Text>
					<RadioButtonGroup onValueChange={value => this.setState({ value })} value={this.state.value}>
						<TouchableOpacity style={{ flexDirection: 'row' }}>
							<RadioButton value="first" />
							<Text style={{ textAlignVertical: 'center' }}>Kampanya Kıyaslama</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: 'row' }}>
							<RadioButton value="second" />
							<Text style={{ textAlignVertical: 'center' }}>Tarih Kiyaslama</Text>
						</TouchableOpacity>
					</RadioButtonGroup>
				</View>
				<Selection
					dateTitle1="İlk Dönem Başlangıç Tarihi"
					date1="31 Mayıs 2018"
					dateTitle2="İlk Dönem Bitiş Tarihi"
					date2="31 Mayıs 2018"
				/>
				{/* <View style={{ flexDirection: 'row', backgroundColor: '#252525' }}>
					<Text style={{ fontSize: 100, color: '#363636', alignItems: 'center' }}>1</Text>
					<View>
						<View
							style={{
								flexDirection: 'column',
								marginHorizontal: widthPercentageToDP('5%'),
								marginBottom: widthPercentageToDP('5%')
							}}
						>
							<Text
								style={{
									marginLeft: 35,
									color: '#BCBCBC'
								}}
							>
								İlk Dönem Başlangıç Tarihi
							</Text>

							<TouchableOpacity style={{ flexDirection: 'row' }}>
								<Icons name="date-range" size={25} color="#BCBCBC" />
								<Text
									style={{
										color: '#FBFBFB',
										marginLeft: 10
									}}
								>
									29 Mayıs 2018
								</Text>
							</TouchableOpacity>
							<Divider style={{ marginLeft: 35 }} />
						</View>
						<View
							style={{
								flexDirection: 'column',
								marginHorizontal: widthPercentageToDP('5%'),
								marginBottom: widthPercentageToDP('5%')
							}}
						>
							<Text
								style={{
									marginLeft: 35,
									color: '#BCBCBC'
								}}
							>
								İlk Dönem Bitiş Tarihi
							</Text>

							<TouchableOpacity style={{ flexDirection: 'row' }}>
								<Icons name="date-range" size={25} color="#BCBCBC" />
								<Text
									style={{
										color: '#FBFBFB',
										marginLeft: 10
									}}
								>
									29 Mayıs 2018
								</Text>
							</TouchableOpacity>
							<Divider style={{ marginLeft: 35 }} />
						</View>
					</View>
				</View> */}
				<View style={{ flexDirection: 'row', backgroundColor: '#252525', marginTop: 10 }}>
					<Text style={{ fontSize: 100, color: '#363636', alignItems: 'center' }}>2</Text>
					<View>
						<View
							style={{
								flexDirection: 'column',
								marginHorizontal: widthPercentageToDP('5%'),
								marginBottom: widthPercentageToDP('5%')
							}}
						>
							<Text
								style={{
									marginLeft: 35,
									color: '#BCBCBC'
								}}
							>
								İlk Dönem Başlangıç Tarihi
							</Text>

							<TouchableOpacity style={{ flexDirection: 'row' }}>
								<Icons name="date-range" size={25} color="#BCBCBC" />
								<Text
									style={{
										color: '#FBFBFB',
										marginLeft: 10
									}}
								>
									29 Mayıs 2018
								</Text>
							</TouchableOpacity>
							<Divider style={{ marginLeft: 35 }} />
						</View>
						<View
							style={{
								flexDirection: 'column',
								marginHorizontal: widthPercentageToDP('5%'),
								marginBottom: widthPercentageToDP('5%')
							}}
						>
							<Text
								style={{
									marginLeft: 35,
									color: '#BCBCBC'
								}}
							>
								İlk Dönem Bitiş Tarihi
							</Text>

							<TouchableOpacity style={{ flexDirection: 'row' }}>
								<Icons name="date-range" size={25} color="#BCBCBC" />
								<Text
									style={{
										color: '#FBFBFB',
										marginLeft: 10
									}}
								>
									29 Mayıs 2018
								</Text>
							</TouchableOpacity>
							<Divider style={{ marginLeft: 35 }} />
						</View>
					</View>
				</View>
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
