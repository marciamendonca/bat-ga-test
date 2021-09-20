//parametros obrigatórios: item_id e item_name
//os parâmetros precisam estar exatamente do jeito que está especificado
//alterar os valores para valores dinâmicos.
//popular os valores de item_list_name para saber qual lista de produtos está sendo vista 

function select_item(event){
  event.preventDefault();
  console.log("Iniciando Select Items");
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	  event: 'select_item',
	  ecommerce: {
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
	      item_list_name: 'Todos os Produtos',
	      item_list_id: 'FI1',
	      index: 1,
	      promotion_name: "campanha_dunhill_rio_ago_21",
	      quantity: '1'
	    }]
	  }
	});
	console.log("Finalizando Select Items");
}
