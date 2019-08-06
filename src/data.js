/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};
fetch('.//data//potter.json')
  .then((response)=> {
    console.log(response);
    return response.json();
  })
  .then((myJson) =>{
    console.log(myJson);
  });



