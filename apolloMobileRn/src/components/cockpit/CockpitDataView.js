import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import Constant, { Margins } from '../../helpers/Constants';
import { EditView } from './EditView';
import { Colors } from './../../helpers/Colors';
import LinearGradient from 'react-native-linear-gradient';

class CockpitDataView extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<LinearGradient colors={['#4c669f', '#98553d', '#586329']} style={{ flex: 1 }}>
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
							<EditView imageSource={require('../../../assets/menuicon.png')} />
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
			</View>
		);
	}
}
export default CockpitDataView;
