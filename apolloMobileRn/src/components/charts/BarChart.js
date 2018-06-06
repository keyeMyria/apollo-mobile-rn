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

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

var colors = [Colors.amber800, Colors.cyan800, Colors.deepOrange800];
var colorsSoft = ['#534040', '#3D4853', '#414B41'];

class BarChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			interpolateValues: [],
			animValue: new Animated.Value(0)
		};
	}

	animate() {
		this.state.animValue.setValue(0);
		Animated.spring(this.state.animValue, {
			toValue: 1,
			duration: 1000
			// easing: Easing.bezier(0.4, 0.56, 0.26, 1)
		}).start();
	}

	componentDidMount() {
		var values = [];
		const { data, chartWidth, chartHeight } = this.props;

		for (let index = 0; index < data.length; index++) {
			var width = (Math.random() * chartWidth).toString();
			values.push(this.state.animValue.interpolate({ inputRange: [0, 1], outputRange: ['0', width] }));
		}
		this.setState({ interpolateValues: values });
		this.animate();
	}

	renderLines(data, chartWidth, chartHeight, lineSpace) {
		return data.map((item, index) => {
			return (
				<Polyline
					key={index}
					points={`${lineSpace * index},0 ${lineSpace * index},${chartHeight}`}
					fill="none"
					stroke="#ddd"
					strokeWidth="1"
				/>
			);
		});
	}

	renderBars(data, chartWidth, chartHeight, barHeight) {
		// var barHeight = Math.floor((chartHeight - data.length) / data.length);

		return data.map((item, index) => {
			return (
				<G key={index}>
					<Rect
						x="0"
						y={barHeight * index + index}
						height={barHeight}
						width={chartWidth}
						fill={colorsSoft[index % colorsSoft.length]}
					/>
					<AnimatedRect
						x="0"
						y={barHeight * index + index}
						height={barHeight}
						width={this.state.interpolateValues[index]}
						fill="#aaa"
					/>
				</G>
			);
		});
	}

	render() {
		const { data, chartWidth, chartHeight } = this.props;
		var barHeight = Math.floor((chartHeight - data.length) / data.length);
		var lineSpace = Math.floor(chartWidth / data.length);

		var newChartWidth = lineSpace * data.length;
		var newChartHeight = barHeight * data.length + data.length;

		return (
			<View style={{ paddingTop: 10 }}>
				<AnimatedSvg style={{ backgroundColor: '#424242' }} height={newChartHeight} width={newChartWidth}>
					{this.renderBars(data, newChartWidth, newChartHeight, barHeight)}
					{this.renderLines(data, newChartWidth, chartHeight, lineSpace)}
				</AnimatedSvg>

				<View style={{ marginTop: 30 }}>
					<Button
						title="Start anim"
						onPress={() => {
							this.animate();
						}}
					/>
				</View>
			</View>
		);
	}
}
export default BarChart;
