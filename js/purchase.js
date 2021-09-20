
function purchase(event){
  event.preventDefault();
  console.log("Iniciando Purchase");
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'purchase',
    ecommerce: {
      currency: 'BRL',
      value: 109.29,
      tax: 7.18,
      shipping: 10.00,
      affiliation: 'My Parka Store',
      transaction_id: 'p115-20202000',
      items: [{
        item_name: 'Dunhill Evoque',
        item_id: 'dh111',
        price: '77.80',
        item_brand: 'DUNHILL',
        item_category: 'Cigarro',
        item_category2: 'Com Cápsula',
        item_category3: 'etc', // preencher se tiver mais categorias
        item_category4: 'etc', // preencher se tiver mais categorias
        item_variant: 'Essence',
        quantity: '3'
      },{
        item_name: 'Rothmans Blue',
        item_id: 'roth1332',
        price: '51.99',
        item_brand: 'ROTHMANS',
        item_category: 'Cigarro',
        item_category2: 'Sem Cápsula',
        item_category3: 'etc', // preencher se tiver mais categorias
        item_category4: 'etc', // preencher se tiver mais categorias
        quantity: '1',
      }]
    }
  });
  console.log("Finalizando Purchase");
}