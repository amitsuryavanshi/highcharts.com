$(function () {
	$('#container').highcharts({

		chart: {
			events: {
				load: function () {
					this.renderer.label('Foo: <b>bar</b>', 100, 100)
						.attr({
							'stroke-width': 1,
							stroke: 'blue'
						})
						.css({
							width: '260px'
						})
						.add();

				}
			}
		},

		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
				'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
			]
		},

		series: [{
			data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
		}]

	});

});