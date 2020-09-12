let btn = document.getElementById('start');

let espera = false;

btn.addEventListener('click', function(){
	
	if(espera == false){
		chrome.runtime.sendMessage({greeting: "start"});
		espera = true;
		btn.textContent = 'AGUARDE';
		setTimeout(function(){ espera = false; btn.textContent = 'START';}, 1000);
	}else{
		btn.textContent = 'START';
	}
	
})

document.getElementsByTagName('body')[0].onload = function(){startEmojis('area');};
