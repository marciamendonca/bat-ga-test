//parametros obrigatórios: item_id e item_name
//os parâmetros precisam estar exatamente do jeito que está especificado
//alterar os valores para valores dinâmicos.


function view_cart(event){
  event.preventDefault();
  console.log("Iniciando View Cart");
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'view_cart',
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
        quantity: '3'
      },{
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
  console.log("Finalizando View Cart");
}