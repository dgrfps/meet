try{
    var presensas = ['presente'];
    
    var presentesMinimos = prompt('Apartir de quantos presentes no chat eu devo mandar? (exemplo: 5)', '');
    var presentesTotais = 0;

	if(presentesMinimos > 0){
		var sendButton;

		var loop = setInterval(function(){
			if(presentesTotais >= presentesMinimos){
				clearInterval(loop);
				presente();
			}else{
				var chat = document.getElementsByClassName('vvTMTb');
				
				if(chat[0] == null || chat[0] == undefined)
					abrirChat();
				pegarPresentes();
			}
		}, 1000);
							
		abrirChat = () => { 
			var slot = document.getElementsByClassName('lvE3se');
			//console.log('Slot');
			//console.log(slot);
			for(var i = 0; i < slot.length; i++){
				var actualSlot = slot[i];
				var slotButtons = actualSlot.getElementsByClassName('NzPR9b');
				//console.log('Slot buttons');
				//console.log(slotButtons);
				for(var a = 0; a < slotButtons.length; a++){
					var actualSlotButton = slotButtons[a];
					//console.log('actualSlotButton');
					//console.log(actualSlotButton);
					
					var chatButton = actualSlotButton.getElementsByClassName('uArJ5e UQuaGc kCyAyd QU4Gid foXzLb');
					//console.log('chatButton');
					//console.log(chatButton);
					
					for(var b = 0; b < chatButton.length; b ++){
						if(chatButton[b].getAttribute('data-tab-id') == '2'){
							
							chatButton[b].click();
							
							pegarPresentes();
						}
					}
				}
			}
		}

		pegarPresentes = () => {
			presentesTotais = 0;
		 
			var chat = document.getElementsByClassName('GDhqjd');
		 
			for(var i = 0; i < chat.length; i ++){
			   var messageEbd = chat[i];
		 
			   var msgE = messageEbd.getElementsByClassName('oIy2qc');
		 
			   var mensagem = [];
		 
			   for(var e = 0; e < msgE.length; e++){
				  var realMsg = msgE[e].getAttribute('data-message-text');
		 
				  mensagem.push(realMsg);
			   }
		 
			   if(mensagem.includes('presente')){
				   presentesTotais++;
			   }

			}
		   
		 }

		enviarPresente = () => {
			console.log('presente')
			abrirChat();
			var chatArea = document.getElementsByClassName('BC4V9b');
			console.log('chatArea')
			console.log(chatArea)
			for(var i = 0; i < chatArea.length; i ++){
				var chatTextArea = chatArea[i];
		
				var textInputArea = chatTextArea.getElementsByClassName('XnKlKd');
				console.log('textInputArea')
				console.log(textInputArea)
				for(var ta = 0; ta < textInputArea.length; ta ++){
					var tryReal = textInputArea[ta].getElementsByClassName('RpC4Ne oJeWuf');
					console.log('tryReal')
					console.log(tryReal)
					for(var t = 0; t < tryReal.length; t++){
						var inputReal = tryReal[t].getElementsByClassName('Pc9Gce Wic03c');
						console.log('inputReal')
						console.log(inputReal);
						for(var ir = 0; ir < inputReal.length; ir++){
							var foundInput = inputReal[ir].getElementsByClassName('KHxj8b tL9Q4c');
							console.log('foundInput')
							console.log(foundInput);
							for(var f = 0; f < foundInput.length; f++){
								presenteInput = foundInput[f];

									sendButton = document.getElementsByClassName('Cs0vCd RDPZE');
									console.log('sendButton')
									console.log(sendButton);

									if(!sendButton || !sendButton[0]){
										sendButton = document.getElementsByClassName('Cs0vCd M9Bg4d');
									}
									else{
										sendButton[0].setAttribute('tabindex', '0');
										sendButton[0].setAttribute('aria-disabled', 'false');
										sendButton[0].id = 'HackingGoogleKAKA';
										
										document.getElementById('HackingGoogleKAKA').classList.remove('RDPZE');
										document.getElementById('HackingGoogleKAKA').classList.add('M9Bg4d');
									}
									
									presenteInput.value = '' + presensas[Math.floor(Math.random() * presensas.length)];
									sendButton[0].click();
							}
						}
					}
				}
			}
		}

		presente = () => {
			console.log('presente')
			abrirChat();
			var chatArea = document.getElementsByClassName('BC4V9b');
			console.log('chatArea')
			console.log(chatArea)
			for(var i = 0; i < chatArea.length; i ++){
				var chatTextArea = chatArea[i];
		
				var textInputArea = chatTextArea.getElementsByClassName('XnKlKd');
				console.log('textInputArea')
				console.log(textInputArea)
				for(var ta = 0; ta < textInputArea.length; ta ++){
					var tryReal = textInputArea[ta].getElementsByClassName('RpC4Ne oJeWuf');
					console.log('tryReal')
					console.log(tryReal)
					for(var t = 0; t < tryReal.length; t++){
						var inputReal = tryReal[t].getElementsByClassName('Pc9Gce Wic03c');
						console.log('inputReal')
						console.log(inputReal);
						for(var ir = 0; ir < inputReal.length; ir++){
							var foundInput = inputReal[ir].getElementsByClassName('KHxj8b tL9Q4c');
							console.log('foundInput')
							console.log(foundInput);
							for(var f = 0; f < foundInput.length; f++){
								presenteInput = foundInput[f];

									sendButton = document.getElementsByClassName('Cs0vCd RDPZE');
									console.log('sendButton')
									console.log(sendButton);

									if(!sendButton || !sendButton[0]){
										sendButton = document.getElementsByClassName('Cs0vCd M9Bg4d');
									}
									else{
										sendButton[0].setAttribute('tabindex', '0');
										sendButton[0].setAttribute('aria-disabled', 'false');
										sendButton[0].id = 'HackingGoogleKAKA';
										
										document.getElementById('HackingGoogleKAKA').classList.remove('RDPZE');
										document.getElementById('HackingGoogleKAKA').classList.add('M9Bg4d');
									}
									
									presenteInput.value = '' + presensas[Math.floor(Math.random() * presensas.length)];
									enviarPresente();
							}
						}
					}
				}
			}
		}

		abrirChat();
	}else{
		alert('Não foi dado nenhum valor, cancelando...');
	}
}
catch{
alert('Ocorreu um erro');
}