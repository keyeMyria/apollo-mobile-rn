import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP } from '../.././helpers';
var imageWidth = widthPercentageToDP('5%');
var imageHeight = widthPercentageToDP('5%');

const DrawerIcon = ({ onPress, imageSource, myStyle }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				{
					flexDirection: 'row'
				},
				myStyle
			]}
		>
			<Image source={imageSource} style={{ width: imageWidth, height: imageHeight }} />
		</TouchableOpacity>
	);
};

export { DrawerIcon };
