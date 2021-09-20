//parametros obrigatórios: promotion_id e promotion_name.
//os parâmetros precisam estar exatamente do jeito que está especificado
//alterar os valores para valores dinâmicos.

function view_promotion(event){
  event.preventDefault();
  console.log("Iniciando View Promotion");
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'view_promotion',
    ecommerce: {
      items: [{
        promotion_id: 'bat021',
        promotion_name: 'campanha_rothmans_agosto_21',
        location_id: 'banner_homepage_top'
      },{
        promotion_id: 'bat2022',
        promotion_name: 'campanha_dunhill_agosto_21',
        location_id: 'banner_homepage_top'
      }]
    }
  });
  console.log("Finalizando View Promotion");
}