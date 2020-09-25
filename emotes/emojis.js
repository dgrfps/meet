var emojiArea;
var search;

var atualEmojis = [];

startEmojis = (emojiAreaID) => {

    var area = document.getElementById(emojiAreaID);  
    
    area.innerHTML = `
        <div id="btsn">
            <button id="ButtonAreaFace">😀</button><br>
            <button id="ButtonAreaAnim">🐶</button><br>
            <button id="ButtonAreaFood">🍗</button><br>
            <button id="ButtonAreaActs">🎧</button><br>
            <button id="ButtonAreaPlac">🚔</button><br>
            <button id="ButtonAreaObjs">📺</button><br>
            <button id="ButtonAreaSymb">❤</button><br>
        </div>
        <div id="fxx">
            <div id="search">
                <input readonly id="searchInput"></input>
                <p>⚙</p>
            </div>
            <div id="emotr">
            </div>
        </div>
    `;

    emojiArea = document.getElementById('emotr');
    search = document.getElementById('searchInput');

    document.getElementById('ButtonAreaFace').addEventListener('click', function(){loadEmojis('rostos')});
    document.getElementById('ButtonAreaAnim').addEventListener('click', function(){loadEmojis('animais')});
    document.getElementById('ButtonAreaFood').addEventListener('click', function(){loadEmojis('comidas')});
    document.getElementById('ButtonAreaActs').addEventListener('click', function(){loadEmojis('atividades')});
    document.getElementById('ButtonAreaPlac').addEventListener('click', function(){loadEmojis('lugares')});
    document.getElementById('ButtonAreaObjs').addEventListener('click', function(){loadEmojis('objetos')});
    document.getElementById('ButtonAreaSymb').addEventListener('click', function(){loadEmojis('simbolos')});
    
    emojiArea.innerHTML = '';
    
    grabHook();

    loadEmojis('rostos');
    
    addEventToEmojis();
}

addEventToEmojis = () => {
    var emotes = document.getElementById('emotr').getElementsByTagName('p');

    for(var i = 0; i < emotes.length; i++){
        emote = emotes[i];

        emote.addEventListener('click', function(e){
            search.value = this.innerText;
            search.select();
            document.execCommand('copy');
            search.value += ' Copiado!';
        })
    }
}

loadEmojis = (type) => {

    if(emojiArea){
        
        emojiArea.innerHTML = '';
        
        switch(type){
            case "rostos":
                for(var em = 0; em < rostosEmojis.length; em ++){
                    emojiArea.innerHTML += `
                        <p>${rostosEmojis[em]}</p>
                    `;
                }
                addEventToEmojis();  
                break;
            case "animais":
                for(var em = 0; em < animaisEmojis.length; em ++){
                    emojiArea.innerHTML += `
                        <p>${animaisEmojis[em]}</p>
                    `;
                }
                addEventToEmojis();  
                break;
            case "comidas":
                for(var em = 0; em < comidasEmojis.length; em ++){
                    emojiArea.innerHTML += `
                        <p>${comidasEmojis[em]}</p>
                    `;
                }
                addEventToEmojis();  
                break;
            case "atividades":
                for(var em = 0; em < atividadesEmojis.length; em ++){
                    emojiArea.innerHTML += `
                        <p>${atividadesEmojis[em]}</p>
                    `;
                }
                addEventToEmojis();  
                break;
            case "lugares":
                for(var em = 0; em < lugaresEmojis.length; em ++){
                    emojiArea.innerHTML += `
                        <p>${lugaresEmojis[em]}</p>
                    `;
                }
                addEventToEmojis();  
                break;
            case "objetos":
                for(var em = 0; em < objetosEmojis.length; em ++){
                    emojiArea.innerHTML += `
                        <p>${objetosEmojis[em]}</p>
                    `;
                }
                addEventToEmojis();  
                break;
            case "simbolos":
                for(var em = 0; em < simbolosEmojis.length; em ++){
                    emojiArea.innerHTML += `
                        <p>${simbolosEmojis[em]}</p>
                    `;
                }
                addEventToEmojis();  
                break;
        }
        
        addEventToEmojis();
    }

}
