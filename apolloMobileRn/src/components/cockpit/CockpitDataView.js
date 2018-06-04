import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../helpers/Colors';
import { widthPercentageToDP, heightPercentageToDP } from '../../helpers';
class CockpitDataView extends Component {
	render() {
		return (
			<View>
				<View
					style={{
						backgroundColor: '#2F7D32',
						width: heightPercentageToDP('23.5%'),
						height: heightPercentageToDP('23.5%'),
						marginLeft: widthPercentageToDP('4%'),
						marginTop: widthPercentageToDP('4%')
					}}
				>
					<Text
						style={{
							fontSize: widthPercentageToDP('3%'),
							color: Colors.BasicTitleColor,
							alignSelf: 'center',
							paddingTop: widthPercentageToDP('3%')
						}}
					>
						Yeni Müşteri Sayısı
					</Text>
					<Text
						style={{
							fontSize: widthPercentageToDP('9%'),
							color: Colors.SecondaryTitleColor,
							paddingLeft: widthPercentageToDP('2%'),
							paddingTop: widthPercentageToDP('2%')
						}}
					>
						0
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'flex-end',
							paddingRight: widthPercentageToDP('2%')
						}}
					>
						<Icons
							name="trending-flat"
							size={widthPercentageToDP('6%')}
							color={Colors.SecondaryTitleColor}
						/>
						<Text
							style={{
								fontSize: widthPercentageToDP('5%'),
								color: Colors.SecondaryTitleColor,
								paddingLeft: widthPercentageToDP('2%')
							}}
						>
							--%
						</Text>
					</View>
				</View>

				<View
					style={{
						backgroundColor: '#44289F',
						width: heightPercentageToDP('23.5%'),
						height: heightPercentageToDP('23.5%'),
						marginLeft: widthPercentageToDP('4%'),
						marginTop: widthPercentageToDP('4%')
					}}
				>
					<Text
						style={{
							fontSize: widthPercentageToDP('3%'),
							color: Colors.BasicTitleColor,
							alignSelf: 'center',
							paddingTop: widthPercentageToDP('3%')
						}}
					>
						İşletilen Fatura Sayısı
					</Text>
					<Text
						style={{
							fontSize: widthPercentageToDP('9%'),
							color: Colors.SecondaryTitleColor,
							paddingLeft: widthPercentageToDP('2%'),
							paddingTop: widthPercentageToDP('2%')
						}}
					>
						0
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'flex-end',
							paddingRight: widthPercentageToDP('2%')
						}}
					>
						<Icons name="trending-down" size={widthPercentageToDP('6%')} color="#C78AB4" />
						<Text
							style={{
								fontSize: widthPercentageToDP('5%'),
								color: '#C78AB4',
								paddingLeft: widthPercentageToDP('2%')
							}}
						>
							100%
						</Text>
					</View>
				</View>

				<View
					style={{
						backgroundColor: '#C62829',
						width: heightPercentageToDP('23.5%'),
						height: heightPercentageToDP('23.5%'),
						marginLeft: widthPercentageToDP('4%'),
						marginTop: widthPercentageToDP('4%')
					}}
				>
					<Text
						style={{
							fontSize: widthPercentageToDP('3%'),
							color: Colors.BasicTitleColor,
							alignSelf: 'center',
							paddingTop: widthPercentageToDP('3%')
						}}
					>
						Kupon Adedi
					</Text>
					<Text
						style={{
							fontSize: widthPercentageToDP('9%'),
							color: Colors.SecondaryTitleColor,
							paddingLeft: widthPercentageToDP('2%'),
							paddingTop: widthPercentageToDP('2%')
						}}
					>
						0
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'flex-end',
							paddingRight: widthPercentageToDP('2%')
						}}
					>
						<Icons
							name="trending-flat"
							size={widthPercentageToDP('6%')}
							color={Colors.SecondaryTitleColor}
						/>
						<Text
							style={{
								fontSize: widthPercentageToDP('5%'),
								color: Colors.SecondaryTitleColor,
								paddingLeft: widthPercentageToDP('2%')
							}}
						>
							--%
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
export { CockpitDataView };
