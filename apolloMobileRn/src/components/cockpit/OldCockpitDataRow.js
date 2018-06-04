import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Margins, Colors, widthPercentageToDP } from '../../helpers';

var imageHeight = widthPercentageToDP('10%');
var imageWidth = widthPercentageToDP('10%');
var graphImageWidth = widthPercentageToDP('15%');
var graphImageHeight = widthPercentageToDP('15%');

class CockpitDataRow extends React.Component {
	state = {
		yPos: 0
	};

	y = 0;

	handleLayout(event) {
		this.setState({ yPos: event.nativeEvent.layout.y });
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.scrollPositionChangedCounter !== this.props.scrollPositionChangedCounter) {
			this.measureProgressBar();
		}
	}

	componentDidMount() {
		setTimeout(() => this.measureProgressBar(), 100);
	}

	measureProgressBar() {
		this.refs.progressBar.measure((a, b, width, height, px, py) => {
			this.y = py;
		});
	}

	render() {
		const { icon, graphImage, title, value } = this.props.data;
		const { onPress } = this.props;

		return (
			<TouchableOpacity
				ref="progressBar"
				onPress={() => {
					onPress(this.y);
				}}
				style={{
					marginHorizontal: Margins.CockpitScreenItemsHorizontalMargin,
					marginBottom: Margins.CockpitScreenItemsBottomMargin
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						backgroundColor: Colors.CockpitDataRowBackgroundColor,
						alignItems: 'center',
						borderRadius: 20
					}}
				>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image source={icon} style={{ width: imageWidth, height: imageHeight }} />
						<Text style={{ color: 'white', textAlign: 'left' }}> {title}</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ color: 'white', marginRight: 10 }}> {value}</Text>

						<Image
							source={graphImage}
							style={{
								width: graphImageWidth,
								height: graphImageHeight,
								// right: 0,
								borderTopRightRadius: 20,
								borderBottomRightRadius: 20
							}}
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
export { CockpitDataRow };
