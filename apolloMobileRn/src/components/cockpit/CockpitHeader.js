import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import Constant, { Margins } from '../../helpers/Constants';

import { Colors } from './../../helpers/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { DrawerIcon } from './DrawerIcon';

class CockpitHeader extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<LinearGradient
					start={{ x: 0.0, y: 0.0 }}
					end={{ x: 1.0, y: 1.0 }}
					colors={[
						'#957FEE',
						'#A67DE3',
						'#BC7BD9',
						'#C07BD4',
						'#CD7ACC',
						'#D578C9',
						'#E278C2',
						'#EB76BC',
						'#EF5FA7',
						'#F25FA6'
					]}
					style={{ flex: 1 }}
				>
					<View
						style={{
							flexDirection: 'column',
							flex: 3,
							justifyContent: 'space-around'
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginHorizontal: Margins.CockpitScreenItemsHorizontalMargin
							}}
						>
							<DrawerIcon imageSource={require('../../../assets/menuicon.png')} />
							<Text
								style={{
									flex: 1,
									fontWeight: 'bold',
									fontSize: 12,
									color: 'white',
									textAlign: 'center'
								}}
							>
								APOLLO
							</Text>
							<TouchableOpacity>
								<Text
									style={{
										color: 'white'
									}}
								>
									AVM Seç
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								alignSelf: 'center'
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'flex-end'
								}}
							>
								<Text
									style={{
										color: 'white',
										fontSize: 30,
										textAlignVertical: 'bottom'
									}}
								>
									48693
								</Text>
								<Text
									style={{
										color: 'white',
										marginBottom: 7
									}}
								>
									.21 TL
								</Text>
							</View>
							<Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>5326 TL (+20.3%)</Text>
						</View>
					</View>
				</LinearGradient>
				<View
					style={{
						height: 12,
						backgroundColor: '#b66da8',
						opacity: 0.5,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10
					}}
				/>

				<View
					style={{
						height: 9,
						backgroundColor: '#875a7e',
						opacity: 0.3,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10,
						marginLeft: 15,
						marginRight: 15
					}}
				/>
			</View>
		);
	}
}
export default CockpitHeader;
