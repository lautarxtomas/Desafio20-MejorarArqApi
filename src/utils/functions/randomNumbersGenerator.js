// Función que devuelve un objeto que contendrá como claves los números random generados junto a la cantidad de veces que salió cada uno.
process.on("message", (msg) => {
	const result = randomNum(msg);
	process.send(result);
  });
  
  const randomNum = (cantidad) => {
	let obj = {};
  
	for (let i = 0; i < cantidad; i++) {
	  const random = Math.floor(Math.random() * 10);
  
	  if (obj[random]) {
		obj[random]++;
		continue;
	  }
  
	  obj[random] = 1;
	}
  
	return obj;
  };



