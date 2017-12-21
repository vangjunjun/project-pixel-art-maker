//提交表单，执行makeGrid创建表格
$('#sizePicker').on('submit', function makeGrid(e) {
	//阻止表单提交默认动作
	e.preventDefault();
	//定义表格的宽和高
	let width = $('#input_width').val(); 
	let height = $('#input_height').val();
	// 根据高的值创建表格的行
	for(let h = 1; h <= height; h++) {
		$('#pixel_canvas').append('<tr></tr>');
	};	
	// 根据宽的值创建表格的单元格
	$('tr').html(function() {
		let htmlContent = '';
		for(let w = 1; w <= width; w++) {
			htmlContent += '<td id="some"></td>';
		};
		return htmlContent;
	});
});

//定义所选颜色
let color = '#000';
$('#colorPicker').on('change', function() {
	color = $('#colorPicker').val(); 
});

// 使用事件代理，单元格设置颜色
$('table').on('click', 'td', function changeColor() {
	$(this).css('background-color', color);
});





