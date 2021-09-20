function add_shipping_info(event){
	event.preventDefault();
	console.log("Iniciando Add Shipping Info");
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	  event: 'add_shipping_info',
	  ecommerce: {
	    shipping_tier: 'FedEx',
	    items: [{
	      item_name: 'Finnish magical parka',
	      item_id: 'mp1122',
	      price: '31.10',
	      item_brand: 'PARKA4LIFE',
	      item_category: 'Apparel',
	      item_category2: 'Coats',
	      item_category3: 'Parkas',
	      item_category4: 'Unisex',
	      item_variant: 'Navy blue',
	      quantity: '3'
	    },{
	      item_name: 'Parka stain removal',
	      item_id: 'psr1332',
	      price: '5.99',
	      item_brand: 'PARKA4LIFE',
	      item_category: 'Apparel',
	      item_category2: 'Utility',
	      item_category3: 'Care product',
	      quantity: '1'
	    }]
	  }
	});
	console.log("Finalizando Add Shipping Info");
}