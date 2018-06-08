import React, { Component } from 'react';
import { View, Animated, Easing, Button, ART, Text } from 'react-native';
import { _ } from 'lodash';
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
var barBackgroundColors = [
	'#534040',
	'#513D45',
	'#493E4E',
	'#443F4E',
	'#40424D',
	'#3D4853',
	'#3A4A53',
	'#3A4C4E',
	'#3A4947',
	'#414B41'
];

var barHeight = 0;
var lineSpace = 0;

var newChartWidth = 0;
var newChartHeight = 0;

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
		const { data, chartWidth, chartHeight } = this.props;

		barHeight = Math.floor((chartHeight - data.length) / data.length);
		lineSpace = Math.floor((chartWidth - 5) / data.length);

		newChartWidth = lineSpace * data.length;
		newChartHeight = barHeight * data.length + data.length;

		var values = [];

		var maxValue = _.maxBy(data, x => x.value);

		for (let index = 0; index < data.length; index++) {
			// var width = (Math.random() * chartWidth).toString();
			var width = (lineSpace * (data.length - 1) * data[index].value / maxValue.value).toString();
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
					points={`${lineSpace * index + 5},0 ${lineSpace * index + 5},${chartHeight}`}
					fill="none"
					stroke={index === 0 ? '#bbbb' : '#bbb8'}
					strokeWidth={index === 0 ? '2' : '1'}
				/>
			);
		});
	}

	renderBars(data, chartWidth, chartHeight, barHeight) {
		// var barHeight = Math.floor((chartHeight - data.length) / data.length);

		return data.map((item, index) => {
			return (
				<G key={index}>
					<Line
						x1="0"
						y1={barHeight * index + index}
						x2="5"
						y2={barHeight * index + index}
						stroke="#797979"
						strokeWidth={index === 0 ? '0' : '1'}
					/>
					<Rect
						x="5"
						y={barHeight * index + index}
						height={barHeight}
						width={chartWidth}
						fill={barBackgroundColors[index % barBackgroundColors.length]}
					/>
					<AnimatedRect
						x="5"
						y={barHeight * index + index}
						height={barHeight}
						width={this.state.interpolateValues[index]}
						fill="#797979"
					/>
				</G>
			);
		});
	}

	render() {
		const { data, chartWidth, chartHeight } = this.props;

		return (
			<View style={{ paddingTop: 10 }}>
				<AnimatedSvg style={{ backgroundColor: 'transparent' }} height={newChartHeight} width={newChartWidth}>
					{this.renderBars(data, newChartWidth, newChartHeight, barHeight)}
					{this.renderLines(data, newChartWidth, chartHeight, lineSpace)}
				</AnimatedSvg>

				<View style={{ marginTop: 30 }}>
					{/* <Button
						title="Start anim"
						onPress={() => {
							this.animate();
						}}
					/> */}
				</View>
			</View>
		);
	}
}
export default BarChart;
