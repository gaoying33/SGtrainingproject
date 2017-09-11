/**
 * 地图JS
 */
//定义一个全局的自动填充控件
var ac;
//全局标志，用来判断地图移动是搜索引发还是地图拖动引发，造成这种结果是 经纬度定位与搜索定位显示地址名称不一致
var acflg=0;
//全局地图变量
var map;

var searchadr="";

//异步加载百度地图
function loadMap() {
	/*
	var script2 = document.createElement("script");
	script2.type = "text/javascript";
	script2.src = "http://api.map.baidu.com/library/TrafficControl/1.4/src/TrafficControl_min.js";
	document.body.appendChild(script2);
	var link = document.createElement("link");
	link.href = "http://api.map.baidu.com/library/TrafficControl/1.4/src/TrafficControl_min.css";
	link.rel = "stylesheet";
	link.type="text/css";
	document.body.appendChild(link);
	*/
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=7d40NNMKRoW80AnKNcSIh3TK723VH0VG&callback=_init";
	document.body.appendChild(script);

//方法2 获取窗口高度
	//alert($(document).height());
	$("#allmap").css({"overflow": "hidden","margin":0,"font-family":"微软雅黑"});
	$("#allmap").css("height",$(document).height()*0.85+"px");
}



function _init(){

	// 百度地图API功能
	map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	//map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	map.setDefaultCursor("pointer");
	var myCity = new BMap.LocalCity();
	myCity.get(myFun);
	//根据IP地址去查找所在城市
	function myFun(result){
		var cityName = result.name;
		//定位到当前城市
		//map.setCenter(cityName);
	}
	//加载覆盖物
	loadStationLocation();
	//加载监听事件
	loadListenerEvent();
	//移动控件
	addGeolocationControl();
	//中心图标
	addCenterIcon();
	//搜索
	loadMapSearchBox();
	//
	//loadTraffic();

}
function searchBtnLlickEvent(){
	//搜索框地址
	alert(searchadr);
	//地图中心经纬度
	map.getCenter();//返回 Point(lng:Number, lat:Number)lng	Number	地理经度。lat	Number	地理纬度。
}

function loadTraffic(){

}

//加载搜索
function loadMapSearchBox () {
	//添加辅助搜索定位辅助div,存信息,不可见
	addSearchResultPanel(map);
	//添加搜索框
	addSearchBox(map);
	
	//添加搜索地区提示
	//建立一个自动完成的对象
	ac = new BMap.Autocomplete(    
			{"input" : "suggestId"
			,"location" : map
		});
	
	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
		var str = "";
			var _value = e.fromitem.value;
			var value = "";
			if (e.fromitem.index > -1) {
				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			}    
			str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
			
			value = "";
			if (e.toitem.index > -1) {
				_value = e.toitem.value;
				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			}    
			str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
			G("searchResultPanel").innerHTML = str;
		});

		var myValue;
		ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
		var _value = e.item.value;
			myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
			searchadr = myValue;
			setPlace();
		});

		function setPlace(){
		//	map.clearOverlays();    //清除地图上所有覆盖物
			function myFun(){
				var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
				acflg = 2;//搜索移动
				map.centerAndZoom(pp, 18);
				//map.addOverlay(new BMap.Marker(pp));    //添加标注
			}
			var local = new BMap.LocalSearch(map, { //智能搜索
			  onSearchComplete: myFun
			});
			local.search(myValue);
		}
}

//加载监听事件
function loadListenerEvent	(){
	map.addEventListener("moving",function(){//  鼠标移动中 moveend移动后

	});
	map.addEventListener("moveend",function(){//  鼠标移动中 moveend移动后
			//更新下单地址栏
			// 创建地理编码服务实例 
			var myGeo = new BMap.Geocoder(); 
			// 根据坐标得到地址描述 
			myGeo.getLocation(map.getCenter(), function(result){ 
				//只有非搜索移动地图的时候才更新
				
					if(acflg==0){
						if (result){ 
						$("#orderadress").attr("value",result.address);		
						ac.setInputValue(result.address);//更新搜索框的值
						searchadr = result.address;
						}
					}else{
						if(acflg ==2 )
						{
							$("#orderadress").attr("value",searchadr);		
						}
						acflg--;
					}
			});
	});
	map.addEventListener("zoomend",function(){//地图缩放后
		var aaa;
		
	});
	//鼠标右击定位
	map.addEventListener("rightclick", function(e){
		//rightclickPoint = {lng:e.point.lng,lat:e.point.lat};
		map.centerAndZoom(new BMap.Point(e.point.lng, e.point.lat),map.getZoom());  // 初始化地图,设置中心点坐标和地图级别
	});
	//鼠标左键
	map.addEventListener("click", function(e){
		//搜索框失去焦点
		$("#suggestId").blur();
	});
	//移动设备触摸 长按时间
	map.addEventListener("longpress", function(e){
		//rightclickPoint = {lng:e.point.lng,lat:e.point.lat};
		map.centerAndZoom(new BMap.Point(e.point.lng, e.point.lat),map.getZoom());  // 初始化地图,设置中心点坐标和地图级别
	});
}

//加载站点位置
function loadStationLocation (){
	
	var pointlist = [[116.404, 39.915 , "站点1","我是地址" ,1000 , "138xxxxxxxx","站点ID1"],
	[116.319391,39.997818,"站点2","我是地址" ,500 , "138xxxxxxxx","站点ID2"]];
	for(var i=0; i<pointlist.length;i++){
		var sContent =
			"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+pointlist[i][2]+"</h4>" + 
			"<img style='float:right;margin:4px' id="+"image"+i+" src='resources/images/timg.jpg' width='139' height='104' title="+pointlist[i][2]+"/>" + 
			"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>包含充电桩:"+pointlist[i][4]+"</p>" + 
			"</div>";

		  
		var point = new BMap.Point(pointlist[i][0], pointlist[i][1]);
		  
//偏移量  this.defaultOffset = new BMap.Size(map.pointToPixel(map.getCenter()).x-10,map.pointToPixel(map.getCenter()).y-34);		
		var myIcon = new BMap.Icon("resources/images/st3.png", new BMap.Size(30,38),{
		    anchor: new BMap.Size(15, 38)
			
		});
		
		var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中 
		//var marker = new BMap.Marker(point);	
		var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
		//map.addOverlay(marker);
		addClickHandler(sContent,marker,i);
		
	}
}

function addClickHandler(content,marker,i){
	marker.addEventListener("click",function(e){
		openInfo(content,e,i)}
	);
}

function openInfo(content,e,i){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var infoWindow = new BMap.InfoWindow(content);  // 创建信息窗口对象 
	map.openInfoWindow(infoWindow,point); //开启信息窗口
	   //图片加载完毕重绘infowindow
	document.getElementById("image"+i).onload = function (){
		infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	}
}

//添加中心点定位图层 ！
function addCenterIcon(){
	
	// 定义一个控件类,即function
	function ZoomControl(){
	  // 默认停靠位置和偏移量
	  this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
		this.defaultOffset = new BMap.Size(map.pointToPixel(map.getCenter()).x-12,map.pointToPixel(map.getCenter()).y-38);
	}
	// 通过JavaScript的prototype属性继承于BMap.Control
	ZoomControl.prototype = new BMap.Control();

	// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
	// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
	ZoomControl.prototype.initialize = function(map){
	  // 创建一个DOM元素
	  var div = document.createElement("div");
	  //创建搜索框  
	  var Icon = document.createElement("img");
	  Icon.id = "IconId";
	  //searchbox.value = "MoPowerMapSearch";
	  Icon.style.width = "24px";
	  Icon.style.height = "38px";
	  Icon.src = "resources/images/ct-24px.png";
	  div.appendChild(Icon);
  
	  // 添加DOM元素到地图中
	  map.getContainer().appendChild(div);
	 // 将DOM元素返回
	  return div;
	}
	// 创建控件
	var myZoomCtrl = new ZoomControl();
	// 添加到地图当中
	map.addControl(myZoomCtrl);
}

//添加定位控件
function addGeolocationControl(){
	var navigationControl = new BMap.NavigationControl({
	    // 靠左上角位置
		//BMAP_ANCHOR_TOP_LEFT	 BMAP_ANCHOR_TOP_RIGHT   BMAP_ANCHOR_BOTTOM_LEFT
	    anchor: BMAP_ANCHOR_BOTTOM_RIGHT ,
	    //BMAP_NAVIGATION_CONTROL_LARGE 表示显示完整的平移缩放控件。
	    //BMAP_NAVIGATION_CONTROL_SMALL 表示显示小型的平移缩放控件。
	    //BMAP_NAVIGATION_CONTROL_PAN 表示只显示控件的平移部分功能。
	    //BMAP_NAVIGATION_CONTROL_ZOOM 表示只显示控件的缩放部分功能。
	    type: BMAP_NAVIGATION_CONTROL_ZOOM,
	    // 启用显示定位
	    enableGeolocation: false,
	    offset: new BMap.Size(10,50)
	  });
	  map.addControl(navigationControl);
	  // 添加定位控件
	  /*
	  var geolocationControl = new BMap.GeolocationControl({
		  anchor: BMAP_ANCHOR_BOTTOM_RIGHT ,
		  offset: new BMap.Size(8,20),
		  showAddressBar: false 
	  });
	  geolocationControl.addEventListener("locationSuccess", function(e){
	    // 定位成功事件
	    var address = '';
	    address += e.addressComponent.province;
	    address += e.addressComponent.city;
	    address += e.addressComponent.district;
	    address += e.addressComponent.street;
	    address += e.addressComponent.streetNumber;
	    //alert("当前定位地址为：" + address);
	  });
	  geolocationControl.addEventListener("locationError",function(e){
	    // 定位失败事件
	    alert(e.message);
	  });
	  map.addControl(geolocationControl);
	  */
}

//添加搜索控件
function addSearchBox(){
	// 定义一个控件类,即function
	function ZoomControl(){
	  // 默认停靠位置和偏移量
	  this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
	  this.defaultOffset = new BMap.Size(10, 10);
	}
	// 通过JavaScript的prototype属性继承于BMap.Control
	ZoomControl.prototype = new BMap.Control();

	// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
	// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
	ZoomControl.prototype.initialize = function(map){
	  // 创建一个DOM元素
	  var div = document.createElement("div");
	  div.className  = "toolbar";
	  
	  // 添加文字说明
	  div.appendChild(document.createTextNode("搜索定位:"));
	  // 设置样式
	  //div.style.cursor = "pointer";
	  //div.style.border = "1px solid gray";
	  //div.style.backgroundColor = "white";
	  //div.class="search d1"

	  //创建搜索框  
	  var searchbox = document.createElement("input");
	  searchbox.type = "text";
	  searchbox.id = "suggestId";
	  searchbox.style.marginBottom="0px";
	  searchbox.style.width = "300px";
	  div.appendChild(searchbox);
	  
	  var searchbtn = document.createElement("button");
	  searchbtn.type = "button";
	  searchbtn.id = "searchbtn";
	  searchbtn.appendChild(document.createTextNode("下单"));
	  searchbtn.className = "btn";
	  searchbtn.style.marginBottom="0px";
	  searchbtn.onclick = function (){ 
		  searchBtnLlickEvent();
	  } 
	  
	  div.appendChild(searchbtn);
	  
	  // 添加DOM元素到地图中
	  map.getContainer().appendChild(div);
	 // 将DOM元素返回
	  return div;
	}
	// 创建控件
	var myZoomCtrl = new ZoomControl();
	// 添加到地图当中
	map.addControl(myZoomCtrl);
}
//添加搜索框选中后自动跳转选中位置

function addSearchResultPanel(){
	// 定义一个控件类,即function
	function ZoomControl(){
	  // 默认停靠位置和偏移量
	  this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
	  this.defaultOffset = new BMap.Size(10, 10);
	}
	// 通过JavaScript的prototype属性继承于BMap.Control
	ZoomControl.prototype = new BMap.Control();

	// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
	// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
	ZoomControl.prototype.initialize = function(map){
	  // 创建一个DOM元素
	  //自动切换搜索位置div  style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"
	  var div = document.createElement("div");
	  div.id = "searchResultPanel";
	  div.style.border = "1px solid #C0C0C0";
	  div.style.width = "150px";
	  div.style.height = "auto";
	  div.style.display = "none";
	     
	  // 添加DOM元素到地图中
	  map.getContainer().appendChild(div);
	 // map.getContainer().appendChild(div2);
	 // 将DOM元素返回
	  return div;
	}
	// 创建控件
	var myZoomCtrl = new ZoomControl();
	// 添加到地图当中
	map.addControl(myZoomCtrl);
}

//百度地图API功能
function G(id) {
	return document.getElementById(id);
}


/*
 * 纯JS绑定事件
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		oldonload();
		func();
	}
}
addLoadEvent(initMap);
*/

/*

function initMapGain () {
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	
	addGain(map);
	
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

}
//添加放大控件
function addGain(map){
	// 定义一个控件类,即function
	function ZoomControl(){
	  // 默认停靠位置和偏移量
	  this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
	  this.defaultOffset = new BMap.Size(10, 10);
	}

	// 通过JavaScript的prototype属性继承于BMap.Control
	ZoomControl.prototype = new BMap.Control();

	// 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
	// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
	ZoomControl.prototype.initialize = function(map){
	  // 创建一个DOM元素
	  var div = document.createElement("div");
	  // 添加文字说明
	  div.appendChild(document.createTextNode("放大2级"));
	  // 设置样式
	  div.style.cursor = "pointer";
	  div.style.border = "1px solid gray";
	  div.style.backgroundColor = "white";
	  // 绑定事件,点击一次放大两级
	  div.onclick = function(e){
		map.setZoom(map.getZoom() + 2);
	  }
	  // 添加DOM元素到地图中
	  map.getContainer().appendChild(div);
	  // 将DOM元素返回
	  return div;
	}
	// 创建控件
	var myZoomCtrl = new ZoomControl();
	// 添加到地图当中
	map.addControl(myZoomCtrl);
}
*/


