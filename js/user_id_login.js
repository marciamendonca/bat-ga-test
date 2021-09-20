//coloque esse código acima do container do GTM 

function user_id_login(event){
    event.preventDefault();
    console.log("Iniciando User ID Login");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
     'event': 'login', // o nome do evento. O valor deve ser esse em todo login.
     'userId': 'abc123', // código alfanumerico de identificação do usuário, substitua pelo userid do usuário
     'RV': 'BSB', // substitua pela regional de venda do varejo 
     'TV': 'TV ATACADOS BSB CO', // substitua pelo território de venda do varejo 
     'frequenciaGeo': 'men', // substitua pela frequencia de visita do varejo 
     'diaVisita': 'seg', // substitua pelo dia de visita do varejo 
     'semanasGeo': 'S4 S8', // substitua pelas semanas de visita varejo 
     'sessionNumber': 7 // o numero de sessões do usuário (incluindo a atual)
     });
    console.log("Finalizando User ID Login");
}






