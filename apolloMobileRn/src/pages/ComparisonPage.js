import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { RadioButton, RadioButtonGroup, Button } from 'react-native-paper';
import { Colors, Margins, widthPercentageToDP } from '../helpers';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Divider, Page } from './../components/common';
import { Selection } from '../components/comparison/dateComparison/Selection';
import { SelectionForOneAvm } from '../components/comparison/dateComparison/SelectionForOneAvm';
import { CampaignSelection } from '../components/comparison/campaignComparison/CampaignSelection';
import { CampaignSelectionForOneAvm } from '../components/comparison/campaignComparison/CampaignSelectionForOneAvm';
import { localizedText } from './../helpers/Localization/Localization';
const { width, height } = Dimensions.get('window');
class ComparisonPage extends Component {
	navigateToScreen(route) {
		this.props.navigation.navigate(route);
	}
	state = {
		value: 'Kampanya Kıyasla',
		viewComparison: 'campaign'
	};

	render() {
		return (
			<Page navigation={this.props.navigation} style={{ backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
				<View
					style={{
						backgroundColor: Colors.AppBackgroundColor,
						height: widthPercentageToDP('32%')
					}}
				>
					<Text
						style={{
							color: Colors.BasicTitleColor,
							paddingLeft: widthPercentageToDP('7%'),
							paddingTop: widthPercentageToDP('3%'),
							paddingBottom: widthPercentageToDP('3%')
						}}
					>
						{localizedText.CompareMethod}
					</Text>
					<RadioButtonGroup onValueChange={value => this.setState({ value })} value={this.state.value}>
						<TouchableOpacity
							style={{ flexDirection: 'row', paddingLeft: widthPercentageToDP('9%') }}
							onPress={() => {
								this.setState({ value: 'Kampanya Kıyasla', viewComparison: 'campaign' });

								this.refs.myScrollView.scrollTo({ x: 0, y: 0, animated: true });
							}}
						>
							<RadioButton
								value="Kampanya Kıyasla"
								uncheckedColor={Colors.BasicTitleColor}
								color={Colors.TouchableColor}
								onPress={() => {
									this.setState({ value: 'Kampanya Kıyasla', viewComparison: 'campaign' });
									this.refs.myScrollView.scrollTo({ x: 0, y: 0, animated: true });
								}}
							/>
							<Text
								style={{
									textAlignVertical: 'center',
									color: Colors.BasicTitleColor,
									paddingLeft: widthPercentageToDP('3%'),
									fontSize: widthPercentageToDP('3%')
								}}
							>
								{localizedText.CompareCampaign}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								paddingLeft: widthPercentageToDP('9%')
							}}
							onPress={() => {
								this.setState({ value: 'Tarih Kıyasla', viewComparison: 'date' });
								this.refs.myScrollView.scrollTo({ x: width, y: 0, animated: true });
							}}
						>
							<RadioButton
								value="Tarih Kıyasla"
								uncheckedColor={Colors.BasicTitleColor}
								color={Colors.TouchableColor}
								onPress={() => {
									this.setState({ value: 'Tarih Kıyasla', viewComparison: 'date' });
									this.refs.myScrollView.scrollTo({ x: width, y: 0, animated: true });
								}}
							/>
							<Text
								style={{
									textAlignVertical: 'center',
									color: Colors.BasicTitleColor,
									paddingLeft: widthPercentageToDP('3%'),

									fontSize: widthPercentageToDP('3%')
								}}
							>
								{localizedText.CompareDate}
							</Text>
						</TouchableOpacity>
					</RadioButtonGroup>
				</View>
				{/* {this.showComparison()} */}
				<ScrollView
					horizontal={true}
					ref="myScrollView"
					showsHorizontalScrollIndicator={false}
					scrollEnabled={false}
					pagingEnabled={true}
				>
					<View style={{ width: width, justifyContent: 'center' }}>
						<CampaignSelectionForOneAvm />
						{/* <CampaignSelectio sectionNumber="2" /> */}
					</View>
					<View style={{ width: width, height: height }}>
						<SelectionForOneAvm
							sectionNumber="1"
							dateTitle1="İlk Dönem Başlangıç Tarihi"
							date1="31 Mayıs 2018"
							dateTitle2="İlk Dönem Bitiş Tarihi"
							date2="31 Mayıs 2018"
						/>
						<SelectionForOneAvm
							sectionNumber="2"
							dateTitle1="İkinci Dönem Başlangıç Tarihi"
							date1="31 Mayıs 2018"
							dateTitle2="İkinci Dönem Bitiş Tarihi"
							date2="31 Mayıs 2018"
						/>
					</View>
				</ScrollView>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						paddingBottom: widthPercentageToDP('5%')
					}}
				>
					<TouchableOpacity>
						<Text style={{ color: Colors.SecondaryTitleColor }}>{localizedText.GetExcelReport}</Text>
					</TouchableOpacity>
					<Button
						raised
						onPress={() => {
							this.navigateToScreen('compareResult');
						}}
						dark={true}
						style={{ backgroundColor: Colors.TouchableColor }}
					>
						{localizedText.Compare}
					</Button>
				</View>
			</Page>
		);
	}
}
export default ComparisonPage;
