const BikesPage = {
  state: {
    isAscending: true,
  },
  init: function () {
    this.bind();
  },
  search: async function () {
    const searchText = $("#search-input").val();
    const bikes = await this.getAllBikes();
    const filtered = bikes.filter((x) =>
      x.name.toLowerCase().includes(searchText.toLowerCase())
    );
    $("#bikes-container").fadeOut("slow", function () {
      BikesPage.appendBikes(filtered);
      $("#bikes-container").fadeIn("slow");
    });
  },
  fillDropdownCategory: async function () {
    const categories = await this.getAllCategory();
    for (i = 0; i < categories.length; i++) {
      let category = categories[i];
      $("#categories-dropdown").append(
        ` <option value="${category.id}" id="selected-item">${category.categoryName}</option>`
      );
    }
  },
  favoriteBike: function (data) {
    $(".favourite-bikes-container").empty();
    for (var i = 0; i < data.length; i++) {
      $(".favourite-bikes-container").append(Bike.favoriteBike(data[i], i));
    }
  },
  sortbyPrice: async function (isAscending) {
    const bikes = await this.getAllBikes();
    const sortedBikes = bikes.sort((a, b) =>
      isAscending ? a.priceBike - b.priceBike : b.priceBike - a.priceBike
    );
    $("#bikes-container").fadeOut("slow", function () {
      BikesPage.appendBikes(sortedBikes);
      $("#bikes-container").fadeIn("slow");
    });
  },
  appendBikes: function (data) {
    $("#bikes-container").empty();

    for (var i = 0; i < data.length; i++) {
      $("#bikes-container").append(Bike.render(data[i], i));
    }
  },
  getAllCategory: function () {
    return $.ajax({
      url: "https://localhost:44322/api/category",
      type: "GET",
    });
  },
  getAllBikes: function () {
    return $.ajax({
      url: "https://localhost:44322/api/car",
      type: "GET",
    });
  },
  getAllFavoriteBikes: function () {
    return $.ajax({
      url: "https://localhost:44322/api/car",
      type: "GET",
    });
  },
  bind: function () {
    $("#btn-sort").on("click", function () {
      BikesPage.sortbyPrice(BikesPage.state.isAscending);
      BikesPage.state.isAscending = !BikesPage.state.isAscending;
    });
    $("#search-button").on("click", async function () {
      BikesPage.search();
    });
    $(".custom-select").on("change", async function (e) {
      const selectedCategoryId = e.target.value;
      const bikes = await BikesPage.getAllBikes();
      let filtered = bikes.filter((x) => x.category.id == selectedCategoryId);
      if (selectedCategoryId == 0) {
        filtered = bikes;
      }
      $("#bikes-container").fadeOut("slow", function () {
        BikesPage.appendBikes(filtered);
        $("#bikes-container").fadeIn("slow");
      });
    });
  },
};
