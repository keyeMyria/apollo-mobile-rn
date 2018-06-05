import React, { Component } from 'react';
import { View, Animated, Easing, Button } from 'react-native';
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
	Text,
	Use,
	Defs,
	Stop
} from 'react-native-svg';
import { Colors } from 'react-native-paper';

class BarChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animatedValues: []
		};
	}

	animate() {
		this.state.animatedValues.forEach(value => {
			value.setValue(0);
		});
		var a = [];
		this.state.animatedValues.forEach(value => {
			var toValue = Math.random() * 300;
			a.push(
				Animated.timing(value, {
					toValue: toValue,
					duration: 2000,
					easing: Easing.linear
				})
			);
		});

		Animated.parallel(a).start();
	}

	componentDidMount() {
		var values = [];
		for (let index = 0; index < 10; index++) {
			values.push(new Animated.Value(0));

			values[index].addListener(newPos => {
				var pathName = 'myPath' + index;
				console.log(index, ' : ', newPos.value);
				this.refs[pathName].setNativeProps({
					width: newPos.value.toString()
				});
			});
		}
		this.setState({ animatedValues: values });
	}

	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
				<Svg height="310" width="300">
					<Rect ref="myPath0" x="0" y="0" width="0" height="30" fill={Colors.amber300} />

					<Rect ref="myPath1" x="0" y="31" width="0" height="30" fill={Colors.blue300} />
					<Rect ref="myPath2" x="0" y="62" width="0" height="30" fill={Colors.brown300} />

					<Rect ref="myPath3" x="0" y="93" width="0" height="30" fill={Colors.cyan300} />
					<Rect ref="myPath4" x="0" y="124" width="0" height="30" fill={Colors.deepOrange300} />

					<Rect ref="myPath5" x="0" y="155" width="0" height="30" fill={Colors.amber300} />
					<Rect ref="myPath6" x="0" y="186" width="0" height="30" fill={Colors.amber300} />

					<Rect ref="myPath7" x="0" y="217" width="0" height="30" fill={Colors.amber300} />
					<Rect ref="myPath8" x="0" y="248" width="0" height="30" fill={Colors.amber300} />

					<Rect ref="myPath9" x="0" y="279" width="0" height="30" fill={Colors.amber300} />
					<Polyline points="0,0 0,310 300,310" fill="none" stroke="red" strokeWidth="3" />
				</Svg>
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
