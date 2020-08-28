const Bike = {
  displayAvailable: function (item) {
    if (item.available == true) {
      return `   
          <div class="available">
              <p class="font-color-available">Available: </p>
              <span class="checkmark">
                  <div class="checkmark_circle"></div>
                  <div class="checkmark_stem"></div>
                  <div class="checkmark_kick"></div>
              </span>
          </div>`;
    } else {
      return ` 
          <div class="not-available">
              <p class="font-color-not-available">Not available: </p>
              <span class="not-checkmark">
                  <div class="not-checkmark_circle"></div>
                  <div class="not-checkmark_stem"></div>
                  <div class="not-checkmark_kick"></div>
              </span>
          </div>`;
    }
  },
  render: function (item, i) {
    let classes = "bike-wrapper";
    if (!item.available) {
      classes += " bike-unavailable";
    }

    return ` 
      <div class="col-sm-4" id="all-bikes">
          <section id="bike-${i}" class="${classes}">
              <img class="img-thumbnail" src="https://localhost:44322/${item.img}" alt="${item.name}" />
              <div class="bike-name">
                  <h2>${item.name}</h2>
              </div>
              <div class="bike-description">
                  <p class="responsive-text">${item.descriptionBike}</p>
              </div>
              <div class="bike-price">
                  <p>Price: <p class="bike-price-color">$${
                    item.priceBike
                  }</p></p>
              </div>  
              <div class="bike-category">
                  <p>
                      Bike category:
                      <p class="mBike">${item.category.categoryName}</p>
                  </p>
              </div>
              <div class=bike-available>
                  <p class="responsive-text">${this.displayAvailable(item)}</p>
              </div>
              <div class="bike-btn-details">    
              <a type="submit" href="#bike-${i}" rel="modal" class="btn btn-info" id="btn-details">Details</a> 
              </div>
          </section>
      </div> `;
  },
  favoriteBike: function(item,i){
    let classes = "bike-wrapper";
    if(!item.available)
    classes += " bike-unavailable";
  if(item.favorite == true)
  {
    return ` 
    <div id="bike-${i}" class="col-lg-3 col-md-4 col-sm-6 favourite-bike pb-4">
            <img class="img-thumbnail" src="https://localhost:44322/${
              item.img
            }" alt="${item.name}" />
            <div class="bike-name">
                <h2>${item.name}</h2>
            </div>
            <div class="bike-description">
                <p class="responsive-text">${item.descriptionBike}</p>
            </div>
            <div class="bike-category">
            <p>
                Bike category:
                <p class="mBike">${item.category.categoryName}</p>
            </p>
        </div>
            <div class="bike-price">
            <h4>Price: <p class="bike-price-color">$${
              item.priceBike
            }</p></h4>

            </div>  
            <div class=bike-available>
                <p class="responsive-text">${this.displayAvailable(item)}</p>
            </div>
            <div class="bike-btn-details">    
            <a type="submit" href="#bike-${i}" rel="modal" class="btn btn-info" id="btn-details">Details</a> 
            </div>
          </div> `;
  }
  }
};
