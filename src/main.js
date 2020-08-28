$(document).ready(async function () {
  BikesPage.init();

  await BikesPage.fillDropdownCategory();

  const bikes = await BikesPage.getAllBikes();
 const favoriteBikes = await BikesPage.getAllFavoriteBikes();
  BikesPage.appendBikes(bikes);
  BikesPage.favoriteBike(favoriteBikes);
  $(".parallax-window").parallax({ imageSrc: "/img/template.jpg" });
});
   

// switch (window.location.pathname) {
//   case "/":
//     $(body).load("index.html");
//   case "/contacts":
//     $(body).load("pages/contacts/index.html");
// }
