//parametros obrigatórios: item_id e item_name
//os parâmetros precisam estar exatamente do jeito que está especificado
//alterar os valores para valores dinâmicos.

function add_to_wishlist(event){
  event.preventDefault();
  console.log("Iniciando Add to Wishlist");
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'add_to_wishlist',
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
        promotion_name: "campanha_dunhill_rio_ago_21",
        quantity: '1'
      }]
    }
  });
  console.log("Finalizando Add to Wishlist");
}