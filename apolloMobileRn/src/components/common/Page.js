import React from 'react';
import { View } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP } from './../../helpers';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

const Page = ({ navigation, children, style }) => {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.AppBackgroundColor }}>
			<Toolbar style={{ height: heightPercentageToDP('8%') }}>
				<ToolbarAction
					icon="menu"
					onPress={() => {
						navigation.openDrawer();
					}}
				/>
				<ToolbarContent title="Apollo" />
				<ToolbarAction icon="home" onPress={this._onMore} />
			</Toolbar>
			<View style={[{ flex: 1 }, style]}>{children}</View>
		</View>
	);
};
export { Page };
