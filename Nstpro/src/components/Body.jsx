
const RestaurantCard = ({ resdata }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resdata.info.cloudinaryImageId} alt="res-pic" />
      <h2>{resdata.info.name}</h2>
      <p>{resdata.info.cuisines.join(",")}</p>
      <p>4.4 stars</p>
      <p>38 minutes</p>

    </div>
  )
}

const list = [

  {
    "info": {
      "id": "111708",
      "name": "South Kitchen",
      "cloudinaryImageId": "h8r0hotm6yaniqszmqqq",
      "locality": "Paranjpe Colony",
      "areaName": "Maltekedi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "191456",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/south-kitchen-paranjpe-colony-maltekedi-amravati-111708",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "691784",
      "name": "Raghuvir Rajapeth",
      "cloudinaryImageId": "b5afbdbed076d75ba4554cba2aad5392",
      "locality": "Badnera Road",
      "areaName": "Maltekdi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Sweets",
        "Bakery",
        "Desserts",
        "Fast Food",
        "Snacks",
        "Maharashtrian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "457327",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 6,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "6.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/raghuvir-rajapeth-badnera-road-maltekdi-amravati-691784",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "692338",
      "name": "Raghuvir Shyam Chowk",
      "cloudinaryImageId": "56c639f72be2b1c9ab8d89dd0e23f770",
      "locality": "At. Shyam chowk",
      "areaName": "Maltekdi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Sweets",
        "Bakery",
        "Fast Food",
        "Beverages"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "457328",
      "avgRatingString": "4.5",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/raghuvir-shyam-chowk-at-shyam-chowk-maltekdi-amravati-692338",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "165030",
      "name": "Hotel Vandu International",
      "cloudinaryImageId": "mvitgh14sphhbyelpkvp",
      "locality": "opp rajapeth police station Badnera road Amravati",
      "areaName": "Maltekdi",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Maharashtrian",
        "Kebabs",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "103238",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 62,
        "lastMileTravel": 6,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "6.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-vandu-international-opp-rajapeth-police-station-badnera-road-maltekdi-amravati-165030",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "336039",
      "name": "Mr. Idli & Chats",
      "cloudinaryImageId": "x6uvi3pbjkec8p5lnzah",
      "locality": "Fejarpura",
      "areaName": "Camp",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian",
        "Fast Food",
        "Biryani",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "139929",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 58,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mr-idli-and-chats-fejarpura-camp-amravati-336039",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "453448",
      "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/13/31e70b33-68e9-4474-84a6-99874cd4f982_453448.jpg",
      "locality": "Jijau Chowk",
      "areaName": "Maltekedi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "5655",
      "avgRatingString": "3.8",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-13 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-jijau-chowk-maltekedi-amravati-453448",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "129969",
      "name": "Taste Of South",
      "cloudinaryImageId": "gpyityef6pihn8fhjob9",
      "locality": "Shivneri Colony",
      "areaName": "Maltekedi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Maharashtrian",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "19064",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/taste-of-south-shivneri-colony-maltekedi-amravati-129969",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "442423",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Tapadia City Centre",
      "areaName": "Gopal Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.9,
      "parentId": "721",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 61,
        "lastMileTravel": 8.7,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "8.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-13 01:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-tapadia-city-centre-gopal-nagar-amravati-442423",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "304298",
      "name": "Cafe Coffee Day",
      "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
      "locality": "Swagatam",
      "areaName": "Transport Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food"
      ],
      "avgRating": 4,
      "parentId": "1",
      "avgRatingString": "4.0",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 23:45:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-swagatam-transport-nagar-amravati-304298",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "112399",
      "name": "Food On Call",
      "cloudinaryImageId": "fto8afa1miaockbgyx8m",
      "locality": "Rajapeth Chowk",
      "areaName": "Maltekdi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Pizzas",
        "Street Food",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "81764",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 9.6,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "9.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/food-on-call-rajapeth-chowk-maltekdi-amravati-112399",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "130960",
      "name": "Desserts and More",
      "cloudinaryImageId": "lrdwzorqbg42bkbz4fbo",
      "locality": "Cotton Market Road",
      "areaName": "Maltekdi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Beverages",
        "Ice Cream",
        "Burgers",
        "Chinese"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "71462",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 23:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/desserts-and-more-cotton-market-road-maltekdi-amravati-130960",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "433545",
      "name": "Food On Call Restaurant",
      "cloudinaryImageId": "okproscyhevwiyfxxu4m",
      "areaName": "Maltekedi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Maharashtrian",
        "South Indian",
        "Chinese",
        "Pizzas",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "261324",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 48,
        "lastMileTravel": 9.6,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "9.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/food-on-call-restaurant-maltekedi-amravati-433545",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "189084",
      "name": "The Meal Box",
      "cloudinaryImageId": "pmt3urunolpbc54t1jqy",
      "locality": "Madhokar Peth",
      "areaName": "Maltekedi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "South Indian",
        "Fast Food",
        "Pizzas",
        "Desserts"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "382320",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 9.6,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "9.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:29:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-meal-box-madhokar-peth-maltekedi-amravati-189084",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "747250",
      "name": "Aumika",
      "cloudinaryImageId": "2557e0bfbcf7295cd80774547d64a4d1",
      "locality": "Daga Plazzo",
      "areaName": "Maltekdi",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Indian",
        "Oriental",
        "Continental"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "442984",
      "avgRatingString": "4.4",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/aumika-daga-plazzo-maltekdi-amravati-747250",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "159828",
      "name": "Deshmukh Paratha House",
      "cloudinaryImageId": "gd0x38sexkumb7nhapqf",
      "locality": "Shegaon Naka Square",
      "areaName": "Maltekdi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Fast Food",
        "Desserts",
        "Maharashtrian"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "70845",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/deshmukh-paratha-house-shegaon-naka-square-maltekdi-amravati-159828",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "130989",
      "name": "Friends Adda",
      "cloudinaryImageId": "lxde3hbkdq73frqspzbz",
      "areaName": "Maltekdi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Pizzas",
        "Burgers",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 3.5,
      "veg": true,
      "parentId": "84138",
      "avgRatingString": "3.5",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/friends-adda-maltekdi-amravati-130989",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "691773",
      "name": "R Fast Food by Raghuvir",
      "cloudinaryImageId": "bf26f9268f2d02a03ca27ca9b53eeae1",
      "locality": "Badnera road",
      "areaName": "Maltekdi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Sweets",
        "Fast Food",
        "Snacks",
        "Maharashtrian",
        "Beverages"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "457326",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 51,
        "lastMileTravel": 6,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "6.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/r-fast-food-by-raghuvir-badnera-road-maltekdi-amravati-691773",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "111322",
      "name": "Manmohan Family Restaurant",
      "cloudinaryImageId": "dktha67cdc60fdtnzat7",
      "locality": "Maltekdi Road",
      "areaName": "Maltekdi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Maharashtrian",
        "Biryani",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "132006",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 6,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "6.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-13 01:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/manmohan-family-restaurant-road-maltekdi-amravati-111322",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "130915",
      "name": "Cake Gallery",
      "cloudinaryImageId": "esrphfszphnl2ijsset9",
      "locality": "Amravati MH",
      "areaName": "Rukhmini Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "54890",
      "avgRatingString": "4.1",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 65,
        "lastMileTravel": 7.4,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "7.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-12 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cake-gallery-mh-rukhmini-nagar-amravati-130915",
      "type": "WEBLINK"
    }
  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
      </div>
      <div className="res-container">
        {
          list.map((restaurat)=><RestaurantCard key={restaurat.info.id} resdata={restaurat} />)
        }
      
        
    


      </div>

    </div>
  )
}
export default Body;
