//parametros obrigatórios: payment_type
//os parâmetros precisam estar exatamente do jeito que está especificado
//alterar os valores para valores dinâmicos.


function add_payment_info(event){
	event.preventDefault();
	console.log("Iniciando Add Payment Info");
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	  event: 'add_payment_info',
	  ecommerce: {
	    payment_type: 'BOLETO',
	    items: [{
	      item_name: 'Dunhill Evoque Essence',
	      item_id: 'mp1122',
	      price: '31.10',
	      item_brand: 'DUNHILL',
	      item_category: 'Cigarro',
	      item_category2: 'Com Cápsula',
	      item_category3: 'etc', // preencher se tiver mais categorias
	      item_category4: 'etc', // preencher se tiver mais categorias
	      item_variant: 'Essence',
	      quantity: '3'
	    },
	    {
	      item_name: 'Rothmans Internacional',
	      item_id: 'psr1332',
	      price: '5.99',
	      item_brand: 'ROTHMANS',
	      item_category: 'Cigarro',
	      item_category2: 'Sem Cápsula', 
	      item_category3: 'etc', // preencher se tiver mais categorias
	      item_category4: 'etc', // preencher se tiver mais categorias
	      item_variant: 'Box',
	      quantity: '1'
	    }]
	  }
	});
	console.log("Finalizando Add Payment Info");
}