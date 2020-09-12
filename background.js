/*chrome.webNavigation.onCompleted.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	
});*/

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.greeting == "start"){
			chrome.tabs.executeScript(null, {
				code: 'var teste = 1;'
			}, function() {
				chrome.tabs.executeScript({file: 'inject.js'});
			});
			
		}
	}
);