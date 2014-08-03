(function(){
	/******************************************************************************/

    $.get('http://www.plant.csdb.cn/api.php?ntype=chname&name=银杏',function(data){
		var photos = data.getElementsByTagName("thumbURL");
		for (var i = 0, photo; photo = photos[i]; i++) {
		    var img = document.createElement("img");
		    // console.info(photos[i].innerHTML);
		    img.src = photos[i].innerHTML;
		    console.info(img);
		    document.body.appendChild(img);
		} 
	});

	/******************************************************************************/
})();