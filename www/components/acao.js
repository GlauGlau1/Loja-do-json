
   
window.onload = function(){
    var url = 'https://profrodolfo.com.br/projeto/';
    var d = document.querySelector('.dados');

    function ExibirProdutos(){
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(x = 0; x < json.length; x++){
            		d.innerHTML+= `
                    <div class="card mb-3" style="width: 100%;">
                    <div class="row g-0">
                        <div class="col-4">
                            <img class="img-fluid rounded-start" src="https://profrodolfo.com.br/projeto/${json[x].foto}">
                        </div>
                        <div class="col-md-8" style="color: black;">
                        <div class="card-body">
                            <h1 class="card-title">${json[x].nome}</h1>
                            <h3 class="card-text">${json[x].valor}</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                	`;
            }
        }).catch();
    }

    ExibirProdutos();

    function ExibirPorNome(nome){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{
        	nome = nome.toUpperCase();      
            for(x = 0; x < json.length; x++){
            	if(json[x].nome.toUpperCase().includes(nome)){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[x].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[x].nome}</h1>
                            <h3>${json[x].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }

    function ExibirPorPreco(preco){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(x = 0; x < json.length; x++){
            	if(json[x].valor<=preco){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[x].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[x].nome}</h1>
                            <h3>${json[x].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }

    function ExibirPorPrecoENome(nome, preco){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
        	nome = nome.toUpperCase();
            for(x = 0; x < json.length; x++){
            	if(json[x].valor<=preco && json[x].nome.toUpperCase().includes(nome)){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[x].foto}">
                        </div>
                        <div class="col-7">
                            <h1>${json[x].nome}</h1>
                            <h3>${json[x].valor}</h3>
                        </div>
                    </div>
                	`;
            	}
            }
        }).catch();
    }
    
    document.querySelector('#btn').addEventListener('click', ()=>{
    	d.innerHTML = '';
    	let nome = document.querySelector('#armin').value;
    	let preco = Number(document.querySelector('#mikasa').value);
    	if(!nome){
    		ExibirPorPreco(preco);
    	}else if(!preco){
    		ExibirPorNome(nome);
    	}else if(nome && preco){
    		ExibirPorPrecoENome(nome, preco);
    	}
    })
}