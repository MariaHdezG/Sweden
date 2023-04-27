//LIST OF PLACES WITH COORDINATIONS ETC
const places = [
    //-------Stockholm Attractions
    {
      name: "City Hall, Stockholm",
      imageLink: "assets/images/radhuset.jpg",
      coordinates: {
          lat: 59.192940,
          lng: 18.021860
      }, //City Hall, Stockholm, Stockholm
      description: "Beautiful building make this a must see in Stockholm",
      link: `<a href="#cityHall">Click here for more info</a>`,
    },
    {
        name: "Drottningholm Palace, Stockholm",
        imageLink: "assets/images/drottningholm.jpg",
        coordinates: {
            lat: 59.321743,
            lng: 17.886305
        }, //Drottningholm Palace,
        description: "Drottningholms Palace is called The Versaille of Sweden and it is a beautiful with a park that sorrounds it.",
        link: `<a href="#drottningholmPalace">Click here for more info</a>`,
    },
    {
        name: "Vasa Museum, Stockholm",
        imageLink: "assets/images/skepp-vasa.jpg",
        coordinates: {
            lat: 59.194058,
            lng: 18.052900
        }, //Vasa Museum, Stockholm
        description: "One of the best kept ships from the 1700 century that is still available to visit in Stockholm, Sweden",
        link: `<a href="#vasaMuseum">Click here for more info</a>`
    },
    //-------Stockholms Hotels
    {
        name: "Grand Hotel, Stockholm",
        imageLink: "assets/images/grandhotel.webp.jpg",
        coordinates: {
            lat: 59.3297027,
            lng: 18.0755897
        }, //GRAND HOTEL STOCKHOLM
        description: "High quality hotel located in central Stockholm",
        link: `<a href="#grandHotel">Click here for more info</a>`
    },
    {
        name: "Nobis Hotel, Stockholm",
        imageLink: "assets/images/nobis07.webp",
        coordinates: {
            lat: 59.333189,
            lng: 18.073797
        }, //Nobis Hotel, Stockholm
        description: "A wonderful experience in the center of Stockholm awaits you here.",
        link: `<a href="#nobisHotel">Click here for more info</a>`
    },
    {
        name: "Villa Dagmar, Stockholm",
        imageLink: "assets/images/villa-dagmar-innegård.jpg",
        coordinates: {
            lat: 58.343108,
            lng: 16.115388
        }, //Villa Dagmar, Stockholm
        description: "”.",
        link: `<a href="#villaDagmar">Click here for more info</a>`
    },
    //-------High Coast Attractions
    {
        name: "The Woods of Skule",
        imageLink: "assets/images/wall.webp",
        coordinates: {
            lat: 63.0833,
            lng: 18.3324
        }, //National Park, The Woods of Skule
        description: "Mountains with amazing cliffs, forests and views.",
        link: `<a href="#skuleberget">Click here for more info</a>`
    },
    {
        name: "The Archipelag of Kvarken",
        imageLink: "assets/images/kayaks.jpg",
        coordinates: {
            lat: 63.3348,
            lng: 20.9520
        }, //The Archipelag of Kvarken
        description: "Special Archipelag with a lots of islets and special formations due to the former glacials.",
        link: `<a href="#archipelagKvarken">Click here for more info</a>`
    },
    {
        name: "Hike along The High Coast",
        imageLink: "assets/images/hike.jpg",
        coordinates: {
            lat: 63.0833,
            lng: 18.3324
        }, //Hike along The High Coast
        description: "Hike along the beautiful nature of The High Cost",
        link: `<a href="#hikealongthehighcoast">Click here for more info</a>`
    },
    //-------THE HIGH COAST HOTEL´s
    {
        name: "Hotell Hoga Kusten",
        imageLink: "assets/images/hotell-hoga-kusten.webp",
        coordinates: {
            lat: 62.8030,
            lng: 17.9515
        }, //Hotell Hoga Kusten, The High Coast
        description: "A modern hotell in the middle of the nature, with fantastic views and facilities to have a nice meal/dinner or hundreds of miles of nature to enjoy.",
        link: `<a href="#hotellhogakusten">Click here for more info</a>`
    },
    {
        name: "Elite Plaza Hotel",
        imageLink: "assets/images/elite-plaza-hotel.jpeg",
        coordinates: {
            lat: 63.2880,
            lng: 18.1988
        }, //Elite Plaza 
        description: "Elite Plaza Hotel is a modern hotel with a lot of facilities at the beach and close to all adventures.",
        link: `<a href="#eliteplazahotel">Click here for more info</a>`
    },
    {
        name: "Villa Sedin Bed and Breakfast",
        imageLink: "assets/images/Villa-Sedin.jpg",
        coordinates: {
            lat: 62.6308,
            lng: 17.9378
        }, //Villa Sedin Bed and Breakfast
        description: "Villa Sedin is a nice Bed and Breakfast Hostal in Härnösand Village. Here you just need to walk some few meters to see this beautiful village and from here you can take you around to different adventures nearby.",
        link: `<a href="#villaSedin">Click here for more info</a>`
    },
    //------- Attractions in Gotland
    {
        name: "Visby, Gotland",
        imageLink: "assets/images/visby.jpg",
        coordinates: {
            lat: 57.6271,
            lng: 18.2385
        }, //Visby, Gotland
        description: "This beautiful medieval village is built inside a wall that sourrands it.",
        link: `<a href="#visby">Click here for more info</a>`
    },
    {
        name: "Folhammar, Ljugarn, Gotland",
        imageLink: "assets/images/raukar.jpg",
        coordinates: {
            lat: 57.3466,
            lng: 18.7356
        }, //
        description: "Folhammar is a place at the coast of Ljugarn, Gotland where there is a concentration of incredible raukars.",
        link: `<a href="#folhammar">Click here for more info</a>`
    },
    {
        name: "Sudersand Beach, Fårö, Gotland",
        imageLink: "assets/images/sudersand.jpg",
        coordinates: {
            lat: 57.9554,
            lng: 19.2429
        }, //Sudersand Beach, Fårö, Gotland
        description: "Sudersand Beach is a long sandbeach at the coast of Fårö, a small islet that belongs to Gotland.",
        link: `<a href="#fåröSudersand">Click here for more info</a>`
    },
    //-------Gotlands Hotels
    {
        name: "Clarion Hotel, Visby, Gotland",
        imageLink: "assets/images/clario-hotel-visby.jpg",
        coordinates: {
            lat: 57.6384,
            lng: 18.2908 
        }, //Clarion Hotel, Visby
        description: "Situated in the village of Visby, at the Donner Square, with one of the best bars and restaurangs in Visby.",
        link: `<a href="#mazzaro">Click here for more info</a>`
    },
    {
        name: "Hotel Novi Resort Visby, Visby, Gotland",
        imageLink: "assets/images/novi-resort.jpg",
        coordinates: {
            lat: 57.6532,
            lng: 18.3042
        }, //Hotel Novi Resort Visby, Visby, Gotland
        description: "An excellent hotel with a pool and restaurang with a view of the beach, located by the beach of Visby.",
        link: `<a href="#noviResort">Click here for more info</a>`
    },
    {
        name: "Hotel St.Clemens, Visby, Gotland",
        imageLink: "assets/images/hotel-clemens.jpg",
        coordinates: {
            lat: 57.6430,
            lng: 18.2932
        }, //Hotel St.Clemens, Visby, Gotland
        description: "In the heart of Visby, with two courtyards where you can relax, next to the Botanical Garden. This hotel is classified as eco-friendly",
        link: `<a href="#st.clemens">Click here for more info</a>`
    },
  ];
  
  let map;
  
  const attractions = document.getElementById("attractions");
  //INSWEDEN MAP
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 62.0000,
            lng: 15.0000
        },
        zoom: 6
    });
    //TO CREATE MARKERS AND INFOWINDOWS
    for (let i = 0; i < places.length; i++) {
        let place = places[i];
        const marker = new google.maps.Marker({
            position: place.coordinates,
            animation: google.maps.Animation.DROP,
            map: map,
            title: place.name,
        });
         //infoWindow content
        let infoWindowContentString=` <div class="info-window">
        <img src = "${place.imageLink}"
        height = "200" width = "100%">
            <h3 style = "font-family: Dancing Script, cursive">${place.name}><h3><h5>${place.description}</p><p>${place.link}</h5><a href="#attraction-${i}">Attractions</a></div>`;
  
        const infowindow = new google.maps.InfoWindow({
            content: infoWindowContentString
            });
              //event listener to open infoWindow
                      marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,// shouldFocus: false
            });
        });
      }
    }
  //Codes from Irene Neville and amended
    $(".choices-btn").click(function () {
      map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
      map.setZoom(14);
    });
  
    const locations = [
        //StockholmAttractions
      ["City Hall", 59.1929,18.0218],
      ["Drottningholm Palace", 59.3217, 17.8863],
      ["Vasa Museum", 59.1940, 18.0529],
      //StockholmHotels
      ["Grand Hotel, Stockholm", 59.3297,18.0755],
      ["Nobis Hotel, Stockholm", 59.3331,18.0737 ],
      ["Villa Dagmar, Stockholm", 58.3431, 12.4753],
      //TheHighCoastAttractions
      ["The Woods of Skule", 63.0833, 18.3324],
      ["The Archipelag of Kvarken", 63.3348,20.9520 ],
      ["Hike along The High Coast", 63.0833, 18.3324],
      //TheHighCoastHotels
      ["Hotell Hoga Kusten",  62.8030, 17.9515 ],
      ["Elite Plaza Hotel", 63.2880,18.1988],
      ["Villa Sedin", 62.6308, 17.9378],
      //GotlandAttractions
      ["Visby, Gotland", 57.6348, 18.2948],
      ["Folhammar, Gotland", 57.3466, 18.7356],
      ["Fårö, Sudersand Beach, Gotland", 57.9554, 19.2429],
      //GotlandHotels
      ["Clarion Hotel, Gotland", 57.6384, 18.2908,
      ["Novi Resort Visby, Gotland", 57.6532, 18.3042 ],
      ["St.Clemens Hotel", 57.6430, 18.2932],
    ];
  
  //NAV BAR
    function myFunction() {
      let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
          } 
        else {
          x.className = "topnav";
        }
      }
  
    //BACKTOTOPBTN
  
    let mybutton = document.getElementById("myBtn");
  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
      { 
        mybutton.style.display = "block";
      } 
      else {
    mybutton.style.display = "none";
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }