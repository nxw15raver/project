/*=====购物车====*/
$('#shopcar').on('mouseover',function(){
	$('.shopcar_list').css('display','block')
});
$('#shopcar').on('mouseout',function(){
	$('.shopcar_list').css('display','none')
});

var miniShopCar = document.createElement('div');
miniShopCar.className = 'miniShopCar';
var miniShopCar_a = document.createElement('a');
miniShopCar_a.className = 'miniShopCar_a';
var miniShopCar_span = document.createElement('span');
miniShopCar_span.className = 'miniShopCar_span';
miniShopCar_span.innerHTML = '0';
miniShopCar_a.innerHTML = '购物车';
document.body.appendChild(miniShopCar);
miniShopCar.appendChild(miniShopCar_a);
miniShopCar.appendChild(miniShopCar_span);
miniShopCar.innerHTML += '<div class="shopcar_list">\
							<ul></ul>\
							<p class="shopcar_list_p1 l">共<span>0</span>件商品<br>\
							总计：￥<span>0.0</span></p>\
							<a href="" class="seecar">查看购物车</a>\
						</div>'

window.onscroll = function(){
	var elemH = document.getElementById('shopcar').offsetTop;
	if(document.documentElement.scrollTop > elemH){
		miniShopCar.style.display = 'block'
	}
	else{
		$('.miniShopCar').css('display','none');
	}
}
var shopcar_list = document.getElementsByClassName('shopcar_list')[1];
$('.miniShopCar').on('mouseover',function(){
	shopcar_list.style.display = 'block';
	shopcar_list.style.top = '-57px';
	//$('.shop_list').eq(1).css({'top':'-57px','display':'block'});
});
$('.miniShopCar').on('mouseout',function(){
	shopcar_list.style.display = 'none';
})
/*=========搜索框===========*/
var searchBox = document.getElementById('search');
var srhBoxValue = searchBox.value;

searchBox.onfocus = function(){
	this.style.background = '#fff';
    this.style.color = '#c53f4c';
    this.value = '';
}
searchBox.onblur = function(){
	this.style.color = 'rgb(204, 204, 204)';
	this.style.background = '#f4f1f0';
	this.value = srhBoxValue;
}
/*=====轮播图========*/
var banner_list = document.getElementById('banner_list');
var lis = banner_list.getElementsByTagName('li');
var banner_btn = document.getElementById('banner_btn');
var btns = banner_btn.getElementsByTagName('li');
var banner_listH = banner_list.offsetHeight;
var numA = 0;
var numB = 0;
var timer;
for(var i=0;i<btns.length;i++){
	btns[i].index = i; 
	btns[i].onmouseover = function(){
		for(var i=0;i<btns.length;i++){
			btns[i].className = '';
		}
		this.className = 'active';
		banner_list.style.top = - this.index * banner_listH +'px';
		numA = this.index;
	}
}

banner_list.onmouseover = function(){
	clearInterval(timer);
}

banner_list.onmouseout = function(){
	timer = setInterval(run,2000);
}

timer = setInterval(run,2000);

function run(){
	for(var i=0;i<btns.length;i++){
		btns[i].className = '';
	}
	if(numA == btns.length-1){
		numA = 0;
	}
	else{
		numA++;
	}
	btns[numA].className = 'active';
	banner_list.style.top = - numA * banner_listH + 'px';
}
/*======倒计时===========*/

var recomRightDown = document.getElementById('recom_right_down');
var mainCarouselCount = recomRightDown.getElementsByClassName('main_carousel_count');

var newDate1 = new Date('March 2,2018 00:00:00');

timerun1();
setInterval(timerun1,1000);

function timerun1(){
	var nowDate1 = new Date();

	numB = Math.floor((newDate1.getTime() - nowDate1.getTime())/1000);

	var iD = Math.floor(numB / 86400);
	var iH = Math.floor(numB % 86400 / 3600);
	var iM = Math.floor(numB % 86400 % 3600 / 60);
	var iS = Math.floor(numB % 60);

	for(var i=0;i<mainCarouselCount.length;i++){
		mainCarouselCount[i].innerHTML = '还剩<strong>'+ iD +'</strong>天<strong>'+ iH +'</strong>时<strong>'+ iM +'</strong>分'
	}
}


var timeShop = document.getElementById('timeshop');
var timeShopCount = document.getElementById('time_count_down');
var newDate2 = new Date('March 6,2018 00:00:00');

timerun2();
setInterval(timerun2,1000);

function timerun2(){

    var nowDate2 = new Date();
	var numC = Math.floor((newDate2.getTime() - nowDate2.getTime())/1000);

	var iD2 = Math.floor(numC / 86400);
	var iH2 = Math.floor(numC % 86400 / 3600);
	var iM2 = Math.floor(numC % 86400 % 3600 / 60);
	var iS2 = Math.floor(numC % 60);

	timeShopCount.innerHTML = '当前场次\
    					<strong>'+ iH2 +'</strong>：\
    					<strong>'+ iM2 +'</strong>：\
    					<strong>'+ iS2 +'</strong>\
    					后抢购结束';
}

/*=========选项卡=========*/
var recomDiv = document.getElementById('recom_btns');
var recomBtns = recomDiv.getElementsByTagName('button');
var contentDiv = document.getElementById('recom_content');
var contentUl = contentDiv.getElementsByTagName('ul');

for(var i=0;i<recomBtns.length;i++){
	recomBtns[i].index = i;

	recomBtns[i].onmouseover = function(){
		for(var i=0;i<recomBtns.length;i++){
			recomBtns[i].className = '';
			contentUl[i].className = '';
		}
		this.className = 'active';
		contentUl[this.index].className = 'active';  //内容的操作
	};
}

var recomRightMain = document.getElementById('recom_right');
var hottabs = recomRightMain.getElementsByClassName('hottabs')[0];
var mainLis = hottabs.getElementsByTagName('li');
var mainCarouselBox = recomRightDown.getElementsByClassName('main_carousel')[0];
var CarouseElemts = mainCarouselBox.getElementsByTagName('ul');
var CarouseElemtsH = CarouseElemts[0].offsetHeight;

for(var i=0;i<mainLis.length;i++){
	mainLis[i].index = i;

	mainLis[i].onmouseover = function(){
		for(var i=0;i<mainLis.length;i++){
			mainLis[i].className = 'l';
		}
		this.className = 'l active';
		mainCarouselBox.style.marginTop = - this.index * CarouseElemtsH + 'px';
		//numB = this.index;
	};
}
/*======侧边列表=========*/

var classListRight = document.getElementsByClassName('class_list_right')[0];
var classListRightLis = classListRight.getElementsByTagName('li');
var classListRightUl = classListRight.getElementsByTagName('ul')[0];

var leaveCount = 0;

classListRightUl.onmouseenter = function(){
	for(var i=2;i<classListRightLis.length;i++){
		classListRightLis[i].className = 'item';
		//console.log(1)
	}
}

for(var i=2;i<classListRightLis.length;i++){
	classListRightLis[i].index = i;
	classListRightLis[i].onmouseenter = function(){
		for(var i=2;i<classListRightLis.length;i++){
			classListRightLis[i].className = 'item';
			//console.log(classListRightLis[i])
		}
		this.className = 'on';

	}
	classListRightLis[i].onmouseleave = function(){
		// for(var i=2;i<classListRightLis.length;i++){
		// 	classListRightLis[i].className = 'item';
		// }
		this.className = 'item';
		//classListRightLis[2].className = 'on';
		leaveCount = this.index ;
		//console.log(leaveCount);
			
		classListRightUl.onmouseleave = function(){
				
 			classListRightLis[leaveCount].className = 'on';
		}
	}
}

/*=========滑动==========*/

var pinpaiAnimation = document.getElementsByClassName('pinpai_animation')[0];
var pinpaiBottom = document.getElementsByClassName('pinpai_bottom')[0];
var pinpaiAnimationLis = pinpaiAnimation.getElementsByTagName('li');
var pinpaiBottomLis = pinpaiBottom.getElementsByTagName('li');

var oneW = pinpaiAnimation.offsetWidth / pinpaiAnimationLis.length;
var numD = 0;
	for(var i=0;i<pinpaiAnimationLis.length;i++){
		pinpaiAnimationLis[i].index = i;
		pinpaiAnimationLis[i].onmouseover = function(){
			for(var i=0;i<pinpaiAnimationLis.length;i++){
				if( i <= this.index ){    //←
					move( pinpaiAnimationLis[i] , { left : i * 150  } , 300 , 'linear' );
				}
				else{    //→
					move( pinpaiAnimationLis[i] , { left : i * 150 + 300 } , 300 , 'linear' );
				}
			}
			 numD = this.index;
		};
	}

var timer3 = setInterval(timerun3,2000);

pinpaiAnimation.onmouseover = function(){
	clearInterval(timer3);
};
pinpaiAnimation.onmouseout = function(){
	timer3 = setInterval(timerun3,2000);
};
function timerun3(){

	if(numD == pinpaiAnimationLis.length-1){
		numD = 0;
	}
	else{
		numD++;
	}

	for(var i=0;i<pinpaiAnimationLis.length;i++){
		if( i <= numD ){    //←
			move( pinpaiAnimationLis[i] , { left : i * 150  } , 300 , 'linear' );
		}
		else{    //→
			move( pinpaiAnimationLis[i] , { left : i * 150 + 300 } , 300 , 'linear' );
		}
	}
};


/*=======留言板=========*/

var minipageBox = document.getElementsByClassName('minipage')[0];
var btnPrev = document.getElementsByClassName('btn-prev')[0];
var txtPage = document.getElementsByClassName('txt-page')[0];
var btnNext = document.getElementsByClassName('btn-next')[0];

var bottomMainBox = document.getElementsByClassName('bottom_main_bd')[0];
var bottomMainCon = bottomMainBox.getElementsByTagName('ul')[0];
var count = 0;
var pageCount = 11;

txtPage.innerHTML = count + 1 + '/' + pageCount;

btnPrev.onclick = function(){
	count--;
	if(count <= 0){
		count = 0;
		//this.onclick = null;
		this.style.opacity = '.3';
	}
	btnNext.style.opacity = '1';
	bottomMainCon.style.left = - count * 950 + 'px';
	//$('.bottom_main_bd ul').css('left',- count * 950 + 'px')
	txtPage.innerHTML = count + 1 + '/' + pageCount;
	console.log(count)
	console.log(bottomMainCon.style.left)
}

btnNext.onclick = function(){
	count++;
	if(count >= 10){
		//this.onclick = null;
		count = 10;
		this.style.opacity = '.3';
	}
	btnPrev.style.opacity = '1';
	bottomMainCon.style.left = - 950 * count + 'px';
	txtPage.innerHTML = count + 1 + '/' + pageCount;
	console.log(count)
	console.log(bottomMainCon.style.left)
}
/*========三级菜单=========*/
var json={
	"status":0,
	"data":{
		"listOne":{
	
			"name":"葡萄酒",
			"lis_1":[
				{
					"title":"红葡萄酒",
					"content":["干红","半干红","甜红","半甜红"]
				},
				{
					"title":"白葡萄酒",
					"content":["干白","半干白","半甜白","甜白","贵腐酒"]
				},

				{
					"title":"桃红葡萄酒",
					"content":["干性桃红","半干性桃红","半甜桃红","甜性桃红"]
				},

				{
					"title":"起泡酒",
					"content":["干起泡酒","半干起泡酒","甜起泡酒","绝干型起泡酒","半甜型起泡酒"]
				},
				{
					"title":"香槟",
					"content":["干香槟","半干香槟","绝干香槟"]
				},
				{
					"title":"加强葡萄酒",
					"content":["半干性雪莉酒","干型雪莉酒","甜型雪莉酒","波特酒","加强甜白"]
				}
			],

			"lis_2":[
				{
					"title":"热门产地",
					"content":["法国","意大利","澳大利亚","德国","美国","西班牙","新西兰","阿根廷","匈牙利","智利","葡萄牙","加拿大","希腊","南非","中国"]
				},
				{
					"title":"独家品牌",
					"content":["季风酒庄","斯皮尔酒庄","圣勒庄园","贝马格雷","黄金天使","教堂山酒庄","维纳酒庄","贝尔莱酒庄","帕索斯蒂芬","贝托纳酒庄","夏迪酒庄","维斯塔酒庄"]
				},

				{
					"title":"列级名庄",
					"content":["名庄特卖","香港免税","勃艮第名庄","中级庄","拉菲酒庄","宝嘉龙酒庄","宝得根酒庄","爱士图尔庄园","木桐酒庄","美国优质酒庄"]
				}
			]
		
		},

		"listTwo":{
		
			"name":"一键选酒",
			"lis_1":[
				{
					"title":"热门活动",
					"content":["2016薄若莱","名庄特卖","起泡甜白","赵薇名酒","整箱巨惠"]
				}
			],

			"lis_2":[
				
			]
		
		},

		"listThr":{
		
			"name":"洋酒烈酒",
			"lis_1":[
				{
					"title":"种类",
					"content":["威士忌","伏特加","白兰地","力娇酒","干邑","雅文邑","纯燕麦威士金酒","朗姆酒","墨西哥烈酒","开胃酒","清酒","烧酒"]
				},
				{
					"title":"产地",
					"content":["法国","意大利","西班牙","德国","美国","南非","阿根廷","葡萄牙","英国","印度","瑞典","乌克兰","墨西哥","俄罗斯","爱尔兰","牙买加"]
				}
			],

			"lis_2":[
				{
					"title":"品牌",
					"content":["人头马","轩尼诗","摩根船长","芝华士","百龄坛","百利","金巴利","百加得","占边","斯米诺","万事好","杰克丹尼","奥美加","必富达","百富","帝萨诺","尊美醇","甘露","杰彼斯","柑曼怡","蜂巢","爱德华","皇家","奥特西诺","哥顿","富豪","灰雁","红牌","格朗","君度","苏本","马爹利","尊尼获加","绝对","博泰勒斯","格兰威特","帝王","高原骑士","伯爵斯云利","托马斯","马天尼","拿破仑"]
				}
			]
		
		},

		"listFour":{
		
			"name":"中国白酒",
			"lis_1":[
				{
					"title":"白酒",
					"content":["白酒特卖馆","陈年老酒馆"]
				},
				{
					"title":"香型",
					"content":["浓香型","酱香型","清香型","凤香型","绵柔型","米香型","兼香型","其他香型"]
				},

				{
					"title":"产地",
					"content":["贵州","四川","山西","北京","江苏","安徽","新疆","其他产地"]
				},

				{
					"title":"价格",
					"content":["1-49","50-99","100-199","200-299","300-499","500-599","1000以上"]
				}
			],

			"lis_2":[
				{
					"title":"陈年老酒",
					"content":["80年代","90年代","2000年","2001年","2002年","2003年","2004年","2005年","2006年","2007年","2008年"]
				},
				{
					"title":"品牌",
					"content":["茅台","五粮液","泸州老窖","剑南春","洋河","口子窖","汾酒","国窖","水井坊","西凤","牛栏山","金六福","宋河","杜康","红星二锅头","古井贡","迎驾贡酒","红楼梦","丰谷","国粹","沱牌","河套","董酒","小糊涂仙","舍得","习酒","今世缘","酒鬼","燃点","兄弟"]
				}
			]
		
		},

		"listFive":{
		
			"name":"酒具周边",
			"lis_1":[
				{
					"title":"种类",
					"content":["酒杯","醒酒器","酒刀","酒架","酒鼻子","酒柜","礼盒","壶"]
				}
			],

			"lis_2":[
				{
					"title":"品牌",
					"content":["醴铎","弓箭","诗杯客乐","石岛","梵酷","卢卡瑞斯"]
				}
			]

		},

		"listSix":{

			"name":"啤酒 黄酒 日韩酒",
			"lis_1":[
				{
					"title":"啤酒产地",
					"content":["经典热销","德国大牌","比利时","荷兰","中国","其他"]
				},
				{
					"title":"啤酒种类",
					"content":["黑啤","黄啤","白啤","红啤"]
				},

				{
					"title":"啤酒价格",
					"content":["1-99","100-199","200-299","300-399","400-499","500-599"]
				},

				{
					"title":"日韩酒类型",
					"content":["清酒","梅酒","烧酒","水果酒","浊酒","其他酒"]
				},
				{
					"title":"日韩酒品牌",
					"content":["三得利","日本盛","月桂冠","名国の屋","俏雅","千岛美人","乐天","男山","梅乃宿","中野"]
				},
				{
					"title":"日韩酒价格",
					"content":["1-49","50-99","100-199","200-299","300-499","500-599","1000以上"]
				}
			],

			"lis_2":[
				{
					"title":"啤酒活动",
					"content":["特价秒杀","世界杯热销","买赠不停","满百包邮","1折起特惠"]
				},
				{
					"title":"啤酒品牌",
					"content":["卡力特","宝龙","凯撒","莱宝鲜啤","威斯路","粉象","林德曼","万德力","马奥","喜力","百威","青岛","弗伦辛格","极乐","更多大牌"]
				},
				{
					"title":"黄酒热销品牌",
					"content":["石库门","古越龙山","会稽山","塔牌","女儿红"]
				},
				{
					"title":"养生黄酒",
					"content":["1-49","50-99","100-199","200-299","300-499","500-599","1000以上"]
				},
				{
					"title":"生鲜食品",
					"content":["大闸蟹礼盒"]
				}
			]
		}
	}
}

var indexListBox = document.getElementsByClassName('index_list');
var $divBox = $('.index_list>div');



for(var i=0;i<$divBox.length;i++){
	$divBox[i].index = i; 
}
console.log($divBox);
function Menu(parent,json){
	this.parent = document.getElementById(parent);
	this.parent.id = parent;
	this.json = json;
};

Menu.prototype.createElemt = function(){
	var div = document.createElement('div');
	div.className = this.parent.id + '_menu';
	this.parent.appendChild(div);
	var ulLeft = document.createElement('ul');
	var ulRight = document.createElement('ul');
	div.appendChild(ulLeft);
	div.appendChild(ulRight);
	for(var i=0;i<this.json.lis_1.length;i++){
		var li = document.createElement('li');
		var h5 = document.createElement('h5');
		var p = document.createElement('p');
		ulLeft.appendChild(li);
		h5.innerHTML = this.json.lis_1[i].title;
		li.appendChild(h5);
		li.appendChild(p);
		for(var j=0;j<this.json.lis_1[i].content.length;j++){
			var a = document.createElement('a');
			a.innerHTML = this.json.lis_1[i].content[j];
			p.appendChild(a);
		}
	}
	for(var i=0;i<this.json.lis_2.length;i++){
		var li = document.createElement('li');
		var h5 = document.createElement('h5');
		var p = document.createElement('p');
		ulRight.appendChild(li);
		h5.innerHTML = this.json.lis_2[i].title;
		li.appendChild(h5);
		li.appendChild(p);
		for(var j=0;j<this.json.lis_2[i].content.length;j++){
			var a = document.createElement('a');
			a.innerHTML = this.json.lis_2[i].content[j];
			p.appendChild(a);
		}
	}
}


var menu1 = new Menu('list_one',json.data.listOne);
menu1.createElemt();
var menu2 = new Menu('list_two',json.data.listTwo);
menu2.createElemt();
var menu3 = new Menu('list_thr',json.data.listThr);
menu3.createElemt();
var menu4 = new Menu('list_four',json.data.listFour);
menu4.createElemt();
var menu5 = new Menu('list_five',json.data.listFive);
menu5.createElemt();
var menu6 = new Menu('list_six',json.data.listSix);
menu6.createElemt();

















