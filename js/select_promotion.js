//parametros obrigatórios: promotion_id e promotion_name.
//os parâmetros precisam estar exatamente do jeito que está especificado
//alterar os valores para valores dinâmicos.

function select_promotion(event){
  event.preventDefault();
  console.log("Iniciando Select Promotion");
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'select_promotion',
    ecommerce: {
      items: [{
        promotion_id: 'bat2021',
        promotion_name: 'campanha_rothmans_agosto_21',
        location_id: 'banner_homepage'
      }]
    }
  });
  console.log("Finalizando Select Promotion");
}
