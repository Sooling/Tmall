var nav = document.getElementsByClassName("nav")[0];
var items = nav.getElementsByClassName("item");
var navRight = document.getElementsByClassName("nav-right")[0];
var pers = navRight.getElementsByClassName("per");
var wc = document.getElementById("wc");
var search = document.getElementById("search-text");
var placeholder = document.getElementsByClassName("combobox-placeholder")[0];
var top_nav = document.getElementsByClassName("top-nav")[0];
var $sidenavWrap = $("#side-nav-wrap");
var showClassname = top_nav.getAttribute("class");

/* 写给徐小二的话 */
console.log("徐小二，你好呀！");
console.log("（不知道真名，先这么叫吧）");
console.log("很高兴认识你！也很高兴能和你有一段愉快的聊天！");

/* addClass */
function addClass(elem,className){
	var oldClass = elem.getAttribute("class");
	if(oldClass.indexOf(className) != -1){
		return false;
	};	
		var newClass = "";
		if(!oldClass){
			elem.setAttribute("class",className)
		}else{
			newClass += oldClass;
			newClass += " ";
			newClass += className;
			elem.setAttribute("class",newClass);
		};
	};
/* removeClass */
function removeClass(elem,className){
		className = " "+className;
		var newClass = "";
		var oldClass = elem.getAttribute("class");
			if(oldClass.indexOf(className) != -1){
				newClass = oldClass.replace(className,"");
				elem.setAttribute("class",newClass);
			};				
		};
	
	/* setOverFontColor */
	function setOutFontColor(elem){
		var links = elem.getElementsByTagName("a");
		var spans = elem.getElementsByTagName("span");
		/* console.log(oldClass);
		console.log(oldClass.indexOf("colorRed")); */		
	    for(var i = 0;i < links.length;i ++){
			links[i].style.color = "#FFFFFF";
		};
		for(var j = 0;j < spans.length;j ++){
			spans[j].style.color = "#FFFFFF";
		};
	};
	/* setOverFontColor */
	
	/* 搜索框 */
	var searchValue;
	search.onfocus = function(){
		placeholder.style.color = "rgb(204,204,204)";
		document.onkeydown = function(ev){			
			ev = ev ? ev : window.event;
			if(ev.keyCode){
				if(ev.keyCode != null && ev.keyCode !=8){					
					placeholder.style.display = "none";
				};				
			};
		};		
	};
	search.onblur = function(){
		searchValue = search.value;
		/* 在失去焦点时取得输入框的值 */
		if(!searchValue){
			placeholder.style.display = "block";
		}
		placeholder.style.color = "rgb(102,102,102)";
	};
	/* 搜索框 */
	
	function setOverFontColor(elem){
		var links = elem.getElementsByTagName("a");
		var spans = elem.getElementsByTagName("span");
		var oldClass = elem.getAttribute("class");
		/* console.log(oldClass);
		console.log(oldClass.indexOf("colorRed")); */
		if(oldClass.indexOf("colorRed") !=-1){
			for(var i = 0;i < links.length;i ++){
				links[i].style.color = "#e54077";
			};
			for(var j = 0;j < spans.length;j ++){
				spans[j].style.color = "#e54077";
			};
		};
		if(oldClass.indexOf("colorBlue") !=-1){
			for(var i = 0;i < links.length; i ++){
				links[i].style.color = "#427def";
			};
			for(var j = 0;j < spans.length;j ++){
				spans[j].style.color = "#427def";
			};
		};
		if(oldClass.indexOf("colorYellow") !=-1){
			for(var i = 0;i < links.length; i ++){
				links[i].style.color = "#f7a831";
			};
			for(var j = 0;j < spans.length;j ++){
				spans[j].style.color = "#f7a831";
			};
		};
	};
	
	for(var i = 0; i < items.length; i ++){
		items[i].index = i;
		items[i].onmouseover = function(){
			addClass(this,"selected");
			addClass(wc,"scale");
			setOverFontColor(this);
			for(var j = 0; j < pers.length; j ++){
				pers[j].style.display = "none";
			};
			/* console.log(this.index); */
			if(!pers[this.index]){
				return false;
			};
			pers[this.index].style.display = "block";
			return false;
		};
		/* 注意：在移出一个容器后，可以在此基础上触发另一个容器（元素节点）的某个事件 */
		items[i].onmouseout = function(){
			removeClass(this,"selected");
			removeClass(wc,"scale");
			setOutFontColor(this);
			for(var j = 0; j < pers.length; j ++){
				pers[j].index = j;
				pers[j].onmouseover = function(){					
					this.style.display = "block";
					addClass(items[this.index],"selected");
					addClass(wc,"scale");
					setOverFontColor(items[this.index]);
				};
				pers[j].onmouseout = function(){
					this.style.display = "none";
					removeClass(items[this.index],"selected");
					removeClass(wc,"scale");
					setOutFontColor(items[this.index]);
				};
				pers[j].style.display = "none";
			};
			return false;
		};
	};
	
	var scrollTop = 0;		
				
	window.onscroll = function(){
	/* 获取滚动条滚动的距离 */
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(showClassname.indexOf("show") == -1){
			/* 判断两次，目的在于使要执行的代码只执行一次，完美！ */
			if(scrollTop > 800){
				addClass(top_nav,"show");
				showClassname = top_nav.getAttribute("class");
				$sidenavWrap.animate({
					width: "35px",
					height: "370px"
				},"fast");
			};
		}else{
			if(scrollTop < 800){
				removeClass(top_nav,"show");
				showClassname = top_nav.getAttribute("class");
				$sidenavWrap.animate({
					width: "0px",
					height: "0px"
				},"fast");				
			};
		};			
			return false;
		};
