function getCategory(data) {
    const categorySet = new Set(data.map(el=>el.category))
    const category = Array.from(categorySet)
  const  selectElement = document.querySelector("#select")
    selectElement.innerHTML = `<option value=""> select category</option> `
  category.forEach(el=>{
    selectElement.innerHTML +=
    `<option value="${el}">${el}</option>`
  }) 
}

function handleChange(e) {
    console.log(e.target.value);
    const filterData=products.filter(el=>el.category==e.target.value)
    document.querySelector(".row1").innerHTML =""
    getData(filterData) 
}

function getData(data) {
    let data1=""
    data.forEach(value=>{
        data1 +=
        `
           <div class="col-md-4">
                    <div id="cards">
                        <div class="card">
                            <h1 class="title">${value.title}</h1>
                            <img src="${value.thumbnail}" alt="" class="images">
                            <p>${value.description}</p>
                            <p class="category">${value.category}</p>
                            <p class="price">${value.price}</p>
                        </div>
                    </div>  
                </div>` 
    })
    document.querySelector(".row1").innerHTML=data1 
}

fetch("https://dummyjson.com/products")
.then((res) =>  res.json())
.then((data)=>{
    products=data.products
    getCategory(products)
    getData(products)
})
    


