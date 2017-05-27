$(document).ready(function(){

	$('.tinh').click(function(){
		var so_a = $('.so_a').val(); // lấy (get) giá trị
		var so_b = $('#so_b').val();
		var pheptinh = $('.pheptinh').val();
		var kq = 0
		
		//console.log(so_b)
		//return false;
		
		if(isNaN(so_a) || isNaN(so_b)){
			alert('Vui lòng nhập số!')
			return false
		}
		if(pheptinh=="+"){
			kq = parseFloat(so_a) + parseFloat(so_b)
		}
		else if(pheptinh=="-"){
			kq = parseFloat(so_a) - parseFloat(so_b)
		}
		else if(pheptinh=="*"){
			kq = parseFloat(so_a) * parseFloat(so_b)
		}
		else{
			if(so_b == 0){
				alert('Số b khác 0!');
				$('#so_b').focus();
				return false
			}
			kq = parseFloat(so_a)/parseFloat(so_b)
		}
			

		$('#kq').val(kq); //set giá trị


		//console.log(so_a);
	})


	//$('.clickme').click(function(){
		//$('p').show(); //hiện
		//$('p').hide();  //ẩn
		//$('p').toggle(); //ẩn - hiện

		// $('.hinhvuong').animate({
		// 	position: "fixed",
		// 	left: '250px',
		// 	opacity: '0.5',
		// 	height: '150px',
  //       	width: '150px'

		// })


		$('.hinhvuong').css({"width":"200px","height":"200px","background-color":"blue"}) //
		
	//})

})