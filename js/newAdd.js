$(function(){
// 设置新增地址点击弹出
$('#newaddr').hide(); //设置隐藏
$('#dialog').hide(); //设置隐藏
$('#editAddr,#addImg').click(function(){
			$('#newaddr').show();
			$('#dialog').show();
			newDialog();
			newAddrselect();
			newSelectColor();
			newaddr();
			window.event.returnValue = false;
		})
// 设置覆盖页面newaddr宽高为body宽高
function newaddr(){
	$('#newaddr').width($('body').width());
	$('#newaddr').height($('body').height());
}


//设置地址默认样式
function newAddrselect(){
	$('#province').children().first().attr('selected','selected').siblings().removeAttr('selected');
	$('#city').children().first().attr('selected','selected').siblings().removeAttr('selected');
	$('#district').children().first().attr('selected','selected').siblings().removeAttr('selected');
}


//设置地址文字大小
$('.address').css({'fontSize':'14px','fontFamily':'黑体'});

//设置地址颜色，默认#babec9
function newSelectColor(){
	$('#province,#city,#district').css('color','#babec9');
}

$('#province,#city,#district').click(function(){
	$('#province,#city,#district').css('color','#000');
})

//地址是否全部选择判定函数
function ReAddress(){
	var addr1 = $('#province').val();
	var addr2 = $('#city').val();
	//只判定到市级，因为有些地区只到市级 eg:"天津市-天津市郊县"
	if(addr1 == '' || addr2 == ''){
		$('#add').text("请填写完整的所在地区!");
		return false;
	}else{
		$('#add').text("");
		return true;
	}	
}
	
	//$('.address').change(function(){
		//ReAddress();		
	//});

	// 设置默认地址checked动作
	$('#checklabel').click(function(){
		$('#checklabel').toggleClass('checked');
	})
	


//初始化form
function newDialog () {
	$('#shouhuoname,#phone,#deat').val('');
	$('#shouhuo,#dianhua,.box1 p,#add').text('');

}
//点击X关闭对话框
$('#closeAddr').click(function(){
	$('#newaddr').hide();
	$('#dialog').hide();
})

//判定收货人是否填写

 
 $('#shouhuoname').blur(function(){
 	
 	var shouhuo = $('#shouhuoname').val();
 	if(shouhuo == ""){
 		$('#shouhuo').text('请填写收货人!')
 	}else{
 		$('#shouhuo').text("")
 	}
 })

 //判定手机号码格式

 
 $('#phone').blur(function(){
 	var dian = /^1\d{10}$/;
 	var dianhua = $('#phone').val();
 	if(dian.test(dianhua)==true){
 		$('#dianhua').text("");
 	}else{
 		$('#dianhua').text('填写的手机格式错误!')
 	}
 })

//判定地址是否填写
$('#deat').blur(function(){

	var addr = $(this).val();
	if(addr==""){
		$('.box1 p').text('请填写详细地址!')
	}else{
		$('.box1 p').text("")
	}
})
//点击地址别名填入输入框
$('.box3 span').click(function(){
	var alias = $(this).text();
	$('.box2 input').val(alias);
})

//点击保存地址事件
$('#saveAddr').click(function(){
	var recName=$('#shouhuoname').val();
	var reRec=/^1\d{10}$/;
 	var cellPhone=$('#phone').val();
 	var addr = $('#deat').val();
 	if(recName != "" && reRec.test(cellPhone) && ReAddress() && addr != "" ){
 		
 		$('#newaddr').hide();
 		$('#dialog').hide();
 		
 	}
 	 if(recName == ""){
 		$('#shouhuo').text('请填写收货人!');
 		window.event.returnValue = false;
 	}
 	 if(!reRec.test(cellPhone)){
 		$('#dianhua').text('填写的手机格式错误!');
 		window.event.returnValue = false;
 	}
 	 if(addr == ""){
 		$('.box1 p').text('请填写详细地址!');
 		window.event.returnValue = false;
 	}
 	 if(!ReAddress()){
 		$('#add').text("请填写完整的所在地区!");
 		window.event.returnValue = false;
 	}
});
})
