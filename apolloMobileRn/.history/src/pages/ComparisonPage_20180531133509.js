import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton, RadioButtonGroup, Button } from 'react-native-paper';
import { Colors, Margins, widthPercentageToDP } from '../helpers';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Divider, Page } from './../components/common';
import { Selection } from '../components/comparison/dateComparison/Selection';
import { CampaignSelection } from '../components/comparison/campaignComparison/CampaignSelection';
class ComparisonPage extends Component {
	state = {
		value: 'first',
		viewComparison: 'campaign'
	};

	render() {
		return (
			<Page style={{ backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
				<View style={{ backgroundColor: '#333333', height: widthPercentageToDP('32%') }}>
					<Text
						style={{
							color: '#BCBCBC',
							paddingLeft: widthPercentageToDP('7%'),
							paddingTop: widthPercentageToDP('3%'),
							paddingBottom: widthPercentageToDP('3%')
						}}
					>
						Kıyaslama Methodu
					</Text>
					<RadioButtonGroup onValueChange={value => this.setState({ value })} value={this.state.value}>
						<TouchableOpacity
							style={{ flexDirection: 'row', paddingLeft: widthPercentageToDP('9%') }}
							onPress={() => {
								{
									this.setCampaignComparison();
								}
								this.refs.myScrollView.scrollTo({ x: 0, y: 0, animated: true });
							}}
						>
							<RadioButton value="first" uncheckedColor="#BCBCBC" color="#BF360C" />
							<Text
								style={{
									textAlignVertical: 'center',
									color: '#BCBCBC',
									paddingLeft: widthPercentageToDP('3%'),
									fontSize: 12
								}}
							>
								Kampanya Kıyaslama
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: 'row',
								paddingLeft: widthPercentageToDP('9%')
							}}
							onPress={() => {
								{
									this.setDateComparison();
								}
								this.refs.myScrollView.scrollTo({ x: 768, y: 0, animated: true });
							}}
						>
							<RadioButton value="second" uncheckedColor="#BCBCBC" color="#BF360C" />
							<Text
								style={{
									textAlignVertical: 'center',
									color: '#BCBCBC',
									paddingLeft: widthPercentageToDP('3%'),

									fontSize: 12
								}}
							>
								Tarih Kiyaslama
							</Text>
						</TouchableOpacity>
					</RadioButtonGroup>
				</View>
				{this.showComparison()}

				<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
					<TouchableOpacity>
						<Text style={{ color: '#FBFBFB', paddingTop: widthPercentageToDP('4%') }}>Excel Raporu Al</Text>
					</TouchableOpacity>
					<Button
						raised
						onPress={() => {}}
						dark={true}
						style={{ backgroundColor: Colors.DrawerItemRippleColor, marginTop: widthPercentageToDP('2%') }}
					>
						Kıyasla
					</Button>
				</View>
			</Page>
		);
	}
	setDateComparison() {
		this.setState({ value: 'second', viewComparison: 'date' });
	}
	setCampaignComparison() {
		this.setState({ value: 'first', viewComparison: 'campaign' });
	}
	showComparison() {
		if (this.state.viewComparison === 'campaign') {
			return (
				<ScrollView horizontal={true} ref="myScrollView">
					<View style={{ flexDirection: 'column' }}>
						<CampaignSelection sectionNumber="1" />
						<CampaignSelection sectionNumber="2" />
					</View>
				</ScrollView>
			);
		} else {
			return (
				<ScrollView horizontal={true} ref="myScrollView">
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
				</ScrollView>
			);
		}
	}
}
export default ComparisonPage;
