//提交表单，执行makeGrid创建表格
$('#sizePicker').on('submit', function makeGrid(e) {
	//阻止表单提交默认动作
	e.preventDefault();
	//重置表格
	$('table').html('');
	//定义表格的宽和高
	let width = $('#input_width').val(); 
	let height = $('#input_height').val();
	//防止宽和高超过最大值30
	if(width > 30) {
		width = 30;
	};
	if (height > 30) {
		height = 30;
	};
	//创建表格
	for(let h = 1; h <= height; h++) {
		// 每次循环，在table元素上添加一行tr
		// 循环次数=表格高度
		$('#pixel_canvas').append('<tr></tr>');
		for (let w = 1; w <= width; w++) {
			// 内嵌循环，每次循环，在tr元素上添加一个td
			// 循环次数=表格宽度
			$('tr:nth-child(' + h + ')').append('<td></td>');
			// 'tr:nth-child(' + h + ')' 为拼接字符串，tr:nth-child(h)，代表第h个tr元素
		}
	};	
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





