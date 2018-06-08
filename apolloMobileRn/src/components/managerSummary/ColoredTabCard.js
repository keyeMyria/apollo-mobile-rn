import React from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP, Colors, heightPercentageToDP } from '../../helpers';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { localizedText } from './../../helpers/Localization/Localization';
import { TabCardData } from './TabCardData';

export const ColoredTabCard = ({ data, backgroundColor, title, children }) => {
	console.log('colortab , ', data);
	var Tabs = PeriodTabs(localizedText, backgroundColor, data);
	return (
		<View
			style={{
				backgroundColor: backgroundColor,
				marginHorizontal: widthPercentageToDP('4%'),
				marginTop: widthPercentageToDP('2%')
			}}
		>
			<Text
				style={{
					color: Colors.BasicTitleColor,
					paddingLeft: widthPercentageToDP('3%'),
					paddingTop: widthPercentageToDP('3%'),
					marginBottom: widthPercentageToDP('1%')
				}}
			>
				{title}
			</Text>
			<View style={{ height: heightPercentageToDP('30%'), backgroundColor: 'yellow' }}>
				{/*yukseklik sabıt deger verildi, verilmezse scroll icinde tab calismiyor*/}
				<Tabs />
			</View>
		</View>
	);
};

const PeriodTabs = (localizedText, backgroundColor, data) => {
	console.log('PeriodTabs : ', data);
	return createMaterialTopTabNavigator(
		{
			last3Months: {
				screen: props => <TabCardData data={data[0].values} {...props} />,
				navigationOptions: {
					title: localizedText.LAST3MONTH
				}
			},
			last6Months: {
				screen: props => <TabCardData data={data[1].values} {...props} />,
				navigationOptions: {
					title: localizedText.LAST6MONTH
				}
			},
			last12Months: {
				screen: props => <TabCardData data={data[2].values} {...props} />,
				navigationOptions: {
					title: localizedText.LAST12MONTH
				}
			},
			allTimes: {
				screen: props => <TabCardData data={data[3].values} {...props} />,
				navigationOptions: {
					title: localizedText.ALLTIME
				}
			}
		},
		{
			tabBarOptions: {
				scrollEnabled: true,
				tabStyle: { height: heightPercentageToDP('6%') },
				style: { backgroundColor: backgroundColor },
				upperCaseLabel: false,
				activeTintColor: 'white',
				indicatorStyle: { backgroundColor: 'white' },
				labelStyle: { fontSize: widthPercentageToDP('3%') }
			}
		}
	);
};
