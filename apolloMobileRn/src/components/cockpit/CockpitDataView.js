import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../helpers/Colors';
import { widthPercentageToDP, heightPercentageToDP } from '../../helpers';
class CockpitDataView extends Component {
	position = { x: 0, y: 0 };

	componentDidMount() {
		setTimeout(() => this.measureProgressBar(), 100);
	}

	measureProgressBar() {
		this.refs.containerView.measure((a, b, width, height, px, py) => {
			this.position = { x: px, y: py };
		});
	}

	render() {
		const { data, value, size, backgroundColor, title, onPress } = this.props;
		return (
			<TouchableOpacity
				ref="containerView"
				onPress={() => {
					onPress(this.position);
				}}
			>
				<View
					style={{
						backgroundColor: backgroundColor,
						width: size,
						height: size,
						marginBottom: heightPercentageToDP('2%'),
						justifyContent: 'space-between'
					}}
				>
					<View>
						<Text
							style={{
								fontSize: widthPercentageToDP('3.8%'),
								color: Colors.BasicTitleColor,
								marginTop: widthPercentageToDP('3%'),
								marginLeft: widthPercentageToDP('3%'),
								textAlign: 'left'
							}}
						>
							{title}
						</Text>
						<Text
							style={{
								position: 'absolute',
								top: heightPercentageToDP('6%'),
								fontSize: widthPercentageToDP('8%'),
								color: Colors.SecondaryTitleColor,
								paddingLeft: widthPercentageToDP('2%')
							}}
						>
							{data[0][value]}
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'flex-end',
							alignItems: 'center',
							paddingRight: widthPercentageToDP('2%'),
							paddingBottom: widthPercentageToDP('2%')
						}}
					>
						<Icons
							name="trending-flat"
							size={widthPercentageToDP('6%')}
							color={Colors.SecondaryTitleColor}
						/>
						<Text
							style={{
								fontSize: widthPercentageToDP('6%'),
								color: Colors.SecondaryTitleColor,
								paddingLeft: widthPercentageToDP('2%')
							}}
						>
							100 %
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
export { CockpitDataView };
