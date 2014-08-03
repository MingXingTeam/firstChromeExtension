/* global chrome*/
(function(){
	var onPortMessage = function(){
		console.info("消息回来了");
	}

	var  port = chrome.runtime.connect({
            name:   'my.js'
        });
	port.postMessage({ id: id, msg: '哈哈 第一条消息' });

    port.onMessage.addListener(onPortMessage);


})();