/* addClass */
/* function addClass(elem,className){
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
	}; */
/* removeClass */
/* function removeClass(elem,className){
	className = " "+className;
	var newClass = "";
	var oldClass = elem.getAttribute("class");
		if(oldClass.indexOf(className) != -1){
			newClass = oldClass.replace(className,"");
			elem.setAttribute("class",newClass);
		};				
	}; */
/* 控制下拉显示和隐藏 */
var dropLinks = document.getElementsByClassName("drop-link");
var dropMenus = document.getElementsByClassName("list");

function slideNav(dropLink,dropMenu){
	dropLink.onmouseover = function(){
		addClass(dropLink,"border");
		dropMenu.style.display = "block";
		this.style.backgroundColor = "#FFFFFF";
		dropLink.style.color = "#FF0036";
	};
	dropLink.onmouseout = function(){
		removeClass(dropLink,"border");
		this.style.backgroundColor = "transparent";
		dropMenu.style.display = "none";
		dropLink.style.color = "#999999";
		dropMenu.onmouseover = function(){
			addClass(dropLink,"border");
			this.style.display = "block";
			dropLink.style.backgroundColor = "#FFFFFF";
			dropLink.style.color = "#FF0036";
		};
		dropMenu.onmouseout = function(){
			removeClass(dropLink,"border");
			this.style.display = "none";
			dropLink.style.backgroundColor = "transparent";
			dropLink.style.color = "#999999";
		};
	};
};
for(var i = 0;i < dropLinks.length;i ++){
	dropLinks[i].index = i;
	slideNav(dropLinks[i],dropMenus[dropLinks[i].index]);
};