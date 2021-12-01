// För att kunna vänta ('await') på saker som sker i bakgrunden, så som Promise, så måste funktionen
// markeras som asynkron. Det gör vi med 'async'
async function newGetCatURL(){
  // Genom 'await' väntar vi på att "löftet" ska leverera, så vi kan få resultatet
  // istället för att 'result' bara får referens till ett löfte, som det annars 
  // skulle få. Resultatet är det som sista 'then()' returnerar, i det här fallet
  // den sträng som 'showImage()' returnerar.
  let result = await fetch("https://api.thecatapi.com/v1/images/search?category_ids=4")
    // 'fetch' returnerar ett Promise, som vi kör '.then' på. Metoden '.then' tar
    // resultatet från det färdiga löftet och applicerar en funktion, i det här fallet
    // en anonym pil-funktion som läser datan från svaret och returnerar det som json
    .then( response => response.json() )
    // Metoden '.json()' läser datan från svaret, vilket kan ta tid, och returnerar
    // därför ett Promise, som vi i sin tur kör '.then' på. I den anonyma funktionen
    // plockar vi ut första elementets url ur datat och skickar in i 'showImage'
    .then( data => showImage(data[0].url));

  // Skriv ut eventuellt resultat vi fick genom att vänta på Promise kedjan ovan
  console.log(result);
}

