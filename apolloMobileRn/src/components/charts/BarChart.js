import React, { Component } from 'react';
import { View, Animated, Easing, Button, ART, Text } from 'react-native';
import Svg, {
	Circle,
	Ellipse,
	G,
	LinearGradient,
	RadialGradient,
	Line,
	Path,
	Polygon,
	Polyline,
	Rect,
	Symbol,
	Use,
	Defs,
	Stop
} from 'react-native-svg';
import { Colors } from 'react-native-paper';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

var dizi = [];

class BarChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			interpolateValues: [],
			animValue: new Animated.Value(0)
		};
	}

	animate() {
		// var values = [];
		// for (let index = 0; index < 10; index++) {
		// 	var width = Math.random() * 300;
		// 	values.push(this.state.animValue.interpolate({ inputRange: [0, 1], outputRange: ['0', width.toString()] }));
		// }
		// this.setState({ interpolateValues: values });

		this.state.animValue.setValue(0);
		Animated.timing(this.state.animValue, {
			toValue: 1,
			duration: 1000,
			easing: Easing.bezier(0.4, 0.56, 0.26, 1)
		}).start();
	}

	componentDidMount() {
		var values = [];
		for (let index = 0; index < 10; index++) {
			var width = Math.random() * 300;
			values.push(this.state.animValue.interpolate({ inputRange: [0, 1], outputRange: ['0', width.toString()] }));
		}
		this.setState({ interpolateValues: values });
	}

	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
				<AnimatedSvg height="310" width="300">
					<AnimatedRect
						ref="myPath0"
						x="0"
						y="0"
						width={this.state.interpolateValues[0]}
						height="30"
						fill={Colors.brown300}
					/>
					<AnimatedRect
						ref="myPath1"
						x="0"
						y="31"
						width={this.state.interpolateValues[1]}
						height="30"
						fill={Colors.brown300}
					/>

					<AnimatedRect
						ref="myPath2"
						x="0"
						y="62"
						width={this.state.interpolateValues[2]}
						height="30"
						fill={Colors.cyan300}
					/>
					<AnimatedRect
						ref="myPath3"
						x="0"
						y="93"
						width={this.state.interpolateValues[3]}
						height="30"
						fill={Colors.cyan300}
					/>

					<AnimatedRect
						ref="myPath4"
						x="0"
						y="124"
						width={this.state.interpolateValues[4]}
						height="30"
						fill={Colors.deepOrange300}
					/>
					<AnimatedRect
						ref="myPath5"
						x="0"
						y="155"
						width={this.state.interpolateValues[5]}
						height="30"
						fill={Colors.amber300}
					/>

					<AnimatedRect
						ref="myPath6"
						x="0"
						y="186"
						width={this.state.interpolateValues[6]}
						height="30"
						fill={Colors.amber300}
					/>
					<AnimatedRect
						ref="myPath7"
						x="0"
						y="217"
						width={this.state.interpolateValues[7]}
						height="30"
						fill={Colors.amber300}
					/>

					<AnimatedRect
						ref="myPath8"
						x="0"
						y="248"
						width={this.state.interpolateValues[8]}
						height="30"
						fill={Colors.amber300}
					/>
					<AnimatedRect
						ref="myPath9"
						x="0"
						y="279"
						width={this.state.interpolateValues[9]}
						height="30"
						fill={Colors.amber300}
					/>
					<Polyline points="0,0 0,310 300,310" fill="none" stroke="red" strokeWidth="3" />
				</AnimatedSvg>
				<Button
					title="Start anim"
					onPress={() => {
						this.animate();
					}}
				/>
			</View>
		);
	}
}
export default BarChart;
