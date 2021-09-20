//parametros obrigatórios: item_id e item_name
//os parâmetros precisam estar exatamente do jeito que está especificado
//alterar os valores para valores dinâmicos.
//popular os valores de item_list_name para saber qual lista de produtos está sendo vista 

function view_item_list(event){
	event.preventDefault();
	console.log("Iniciando View Item List");
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	  event: 'view_item_list',
	  ecommerce: {
	    items: [{
	      item_name: 'Dunhill Blue Box 200s',
	      item_id: 'PM-00002909',
	      price: '93.84',
		  item_brand: 'DUNHILL',
	      item_category: 'Cigarro',
	      item_category2: 'Com Cápsula',
	      item_category3: 'etc', // preencher se tiver mais categorias
	      item_category4: 'etc', // preencher se tiver mais categorias
	      item_variant: 'Essence',
	      item_list_name: 'Todos os Produtos',
	      item_list_id: 'FI1',
	      index: 1,
	      quantity: '1'
	    },{
	      item_name: 'Rothmans Blue Maço',
	      item_id: 'PM-00002968',
	      price: '92.00',
	      item_brand: 'ROTHMANS',
	      item_category: 'Cigarro',
	      item_category2: 'Sem Cápsula',
	      item_category3: 'etc', // preencher se tiver mais categorias
	      item_category4: 'etc', // preencher se tiver mais categorias
	      item_variant: 'Blue Maço',
	      item_list_name: 'Todos os Produtos',
	      item_list_id: 'FI1',
	      index: 2,
	      quantity: '1'
	    }]
	  }
	});
	console.log("Finalizando View Item List");
}