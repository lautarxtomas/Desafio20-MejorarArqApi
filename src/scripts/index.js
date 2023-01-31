async function getData() {
  let data
  try {
      // se puede usar axios o http request
      let response = await fetch(`http://localhost:8080/api/productos`)
      if (response.ok) {
          data = await response.json()
      } else {
          alert ("Error-HTTP: " + response.status)
      }
  }   
  catch (error) {
      console.log(error)
  }

  let datosHtml = ''
  data.forEach(element => {
      let data = ` <tr>
          <td>${element.title}</td>
          <td>${element.price}</td>
          <td><img src="${element.image}" alt="${element.title}" class="img-product"></td>
      </tr>`
      datosHtml += data
  })

  document.querySelector('p').innerHTML = `<table class="table">
      <tr>
          <th>TITLE</th>
          <th>PRICE</th>
          <th>IMAGE</th>
      </tr>
      ${datosHtml}
  </table>`

  return data
}

getData()
