let tablex;
let title="";



function fetchdata() {
    return fetch("data.json")
    .then((res) => res.json())
    .then((data) => {

        // Access the data here
         title += `<div class="col-sm">
      <div class="card border-0" style="width: 18rem;">
        <img class="card-img-top p-3" src="img/b2.jpg" alt="Card image cap" height="250px">
        <div class="card-body">
          <h5 class="card-title">${data.burgers[0].title}</h5>
          <p class="card-text">${data.burgers[0].item_code}</p>
          <p class="card-text">${data.burgers[0].price}</p>
          <p class="card-text">Discount - ${data.burgers[0].discount}%</p>
          <div class="container">
            <table>
              <tr>
                <td>
                  <div> 
                    <div data-mdb-input-init class="form-outline" style="width: 6rem;">
                      <input value="1" type="number" id="typeNumber" class="form-control" />
                    </div>
                  </div>
                </td>
                <td>
                  <button type="button" class="btn btn-primary">Add to cart</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>`

    return title
         // This will work
    })
    .catch((error) => console.error('Error fetching JSON:', error));
}


document.getElementById("table").innerHTML = addcart()

function addcart() {
     fetchdata().then((data) => {
        document.getElementById("table").innerHTML = data
     })
}

function scriptnew() {
    const title = `<div class="col-sm">
    <div class="card border-0" style="width: 18rem;">
      <img class="card-img-top p-3" src="img/b2.jpg" alt="Card image cap" height="250px">
      <div class="card-body">
        <h5 class="card-title">${data.burgers[0].title}</h5>
        <p class="card-text">B1001</p>
        <p class="card-text">750.00</p>
        <p class="card-text">0% Discount</p>
        <div class="container">
          <table>
            <tr>
              <td>
                <div> 
                  <div data-mdb-input-init class="form-outline" style="width: 6rem;">
                    <input value="1" type="number" id="typeNumber" class="form-control" />
                  </div>
                </div>
              </td>
              <td>
                <button type="button" class="btn btn-primary">Add to cart</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>`

  return title
    
}   
