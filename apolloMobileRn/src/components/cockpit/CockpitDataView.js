import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../helpers/Colors';
import { widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import LinearGradient from 'react-native-linear-gradient';
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
		const { data, value, size, gradient1color, gradient2color, title, onPress } = this.props;
		return (
			<TouchableOpacity
				ref="containerView"
				onPress={() => {
					onPress(this.position);
				}}
			>
				<LinearGradient
					start={{ x: 0.0, y: 0.0 }}
					end={{ x: 1.0, y: 1.0 }}
					style={{
						width: size,
						height: size,
						marginBottom: heightPercentageToDP('2%'),
						justifyContent: 'space-between'
					}}
					colors={[gradient2color, gradient1color]}
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
				</LinearGradient>
			</TouchableOpacity>
		);
	}
}
export { CockpitDataView };
