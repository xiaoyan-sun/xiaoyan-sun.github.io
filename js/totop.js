// 增加一部分用于固定右半部分  aside div

window.onscroll = function(){
	var scrollTopVal = document.body.scrollTop!=0? document.body.scrollTop : document.documentElement.scrollTop;
	var asidebar = document.getElementById("sidebar");
	//alert(scrollTopVal)
	if (scrollTopVal >= 200){
		asidebar.style.position = "fixed";
		//asidebar.style.top = "100px";
		asidebar.style.left = "76.5%";
		asidebar.style.width = "20%";
		//asidebar.style.right = 3%;
	}
	else{
		asidebar.style.position = "relative";
		asidebar.style.top=0;
		asidebar.style.left = 0;
		asidebar.style.width = "22%"
	}
		
};

(function($) { 
	// When to show the scroll link
	// higher number = scroll link appears further down the page：显示返回顶部的位置
	var upperLimit = 1000;
	
	// Our scroll link element
	var scrollElem = $('#totop');
   
	// Scroll to top speed：回滚速度
	var scrollSpeed = 500;
   
	// Show and hide the scroll to top link based on scroll position   
	scrollElem.hide();
	$(window).scroll(function () {            
		var scrollTop = $(document).scrollTop();       
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in           
		}else{       
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});

	// Scroll to top animation on click
	$(scrollElem).click(function(){
		$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
	});
})(jQuery);


