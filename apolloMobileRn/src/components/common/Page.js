import React from 'react';
import { View } from 'react-native';
import { Colors } from './../../helpers/Colors';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

export const Page = ({ navigation, children, style }) => {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.AppBackgroundColor }}>
			<Toolbar>
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
