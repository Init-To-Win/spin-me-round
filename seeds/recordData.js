const { Record } = require("../models");

const recordData = [
  {
    cover_art: "Cody_Fry_Flying.jpg",
    name: "Flying",
    year: "2017",
    spotify_id: "2gM39a0pG4TMzkb1ExkqgT",
    artist_id: 1,
  },
  {
    cover_art: "Cody_Fry_The_End.jpg",
    name: "The End",
    year: "2023",
    spotify_id: "1gGuLJfZnXUoAs5nk7UXV6",
    artist_id: 1,
  },
  {
    cover_art: "d4vd_Petals_to_Thorns.jpg",
    name: "Petals To Thorns",
    year: "2023",
    spotify_id: "3rrrTOHiXGzuW4FP7t0O1A",
    artist_id: 2,
  },
  {
    cover_art: "d4vd_The_Lost_Petals.jpg",
    name: "The Lost Petals",
    year: "2023",
    spotify_id: "4YbgMvlvGC8FjzkSOLGgWC",
    artist_id: 2,
  },
  {
    cover_art: "Peach_Tree_Rascals_Mariposa.jpg",
    name: "Mariposa",
    year: "2019",
    spotify_id: "03lwJBajNLNBIq4jrWo1YK",
    artist_id: 3,
  },
  {
    cover_art: "Peach_Tree_Rascals_Mango.jpg",
    name: "Mango",
    year: "2019",
    spotify_id: "3EwfEobd4LwcIojznV2vYl",
    artist_id: 3,
  },
  {
    cover_art: "Billy_Joel_The_Stranger.jpg",
    name: "The Stranger",
    year: "1977",
    spotify_id: "3IILMjMMnoN2sKzgesX8KV",
    artist_id: 4,
  },
  {
    cover_art: "Billy_Joel_The_Nylon_Curtain.jpg",
    name: "The Nylon Curtain",
    year: "1982",
    spotify_id: "50bajZpetfL5T0iRCOR74J",
    artist_id: 4,
  },
  {
    cover_art: "Queen_Greatest_Hits_II.jpg",
    name: "Greatest Hits II",
    year: "1991",
    spotify_id: "7rq68qYz66mNdPfidhIEFa",
    artist_id: 5,
  },
  {
    cover_art: "Queen_Queen_II.jpg",
    name: "Queen II",
    year: "1974",
    spotify_id: "6Cg1pPfnfFXlR1qH2H6NDL",
    artist_id: 5,
  },
  {
    cover_art: "Bowling_For_Soup_Drunk_Enough_to_Dance.jpg",
    name: "Drunk Enough to Dance",
    year: "2002",
    spotify_id: "2safYwJ4j0WKLcQUwEBQEi",
    artist_id: 6,
  },
  {
    cover_art: "Bowling_For_Soup_A_Hangover_You_Dont_Deserve.jpg",
    name: "A Hangover You Don't Deserve",
    year: "2004",
    spotify_id: "43jBR9MNJk5AUuB56M0pRF",
    artist_id: 6,
  },
  {
    cover_art: "ABBA_Gold.jpg",
    name: "Gold",
    year: "1992",
    spotify_id: "2cKZfaz7GiGtZEeQNj1RyR",
    artist_id: 7,
  },
  {
    cover_art: "ABBA_Waterloo.jpg",
    name: "Waterloo",
    year: "1974",
    spotify_id: "5gSBDA6ufk8UZejT4XR7av",
    artist_id: 7,
  },
  {
    cover_art: "Lizzo_Special.jpg",
    name: "Special",
    year: "2022",
    spotify_id: "1NgFBv1PxMG1zhFDW1OrRr",
    artist_id: 8,
  },
  {
    cover_art: "Lizzo_Lizzobangers.jpg",
    name: "Lizzobangers",
    year: "2013",
    spotify_id: "79Dum9lX5ARC0FbqlWFi1v",
    artist_id: 8,
  },
  {
    cover_art: "Beyonce_Lemonade.jpg",
    name: "Lemonade",
    year: "2016",
    spotify_id: "7dK54iZuOxXFarGhXwEXfF",
    artist_id: 9,
  },
  {
    cover_art: "Beyonce_Dangerously_in_Love.jpg",
    name: "Dangerously In Love",
    year: "2003",
    spotify_id: "6oxVabMIqCMJRYN1GqR3Vf",
    artist_id: 9,
  },
  {
    cover_art: "Joan_Jett_Album.jpg",
    name: "Album",
    year: "1983",
    spotify_id: "3irKU7djdb8SnPPGBQr36G",
    artist_id: 10,
  },
  {
    cover_art: "Joan_Jett_I_Love_Rock_n_Roll.jpg",
    name: "I Love Rock 'n Roll",
    year: "1981",
    spotify_id: "555qwe1qUgLdee80TZ2CQt",
    artist_id: 10,
  },
  {
    cover_art: "Backstreet_Boys_Backstreet_Boys.jpg",
    name: "Backstreet Boys",
    year: "1996",
    spotify_id: "0wvQovgaVU99eqw8n3g22S",
    artist_id: 11,
  },
  {
    cover_art: "Backstreet_Boys_Millennium.jpg",
    name: "Millennium",
    year: "1999",
    spotify_id: "5ySxm9hxBNss01WCL7GLyQ",
    artist_id: 11,
  },
  {
    cover_art: "Dido_Life_For_Rent.jpg",
    name: "Life for Rent",
    year: "2003",
    spotify_id: "0X9QCwbxIRm4MWKWnIHNaA",
    artist_id: 12,
  },
  {
    cover_art: "Dido_Still_on_My_Mind.jpg",
    name: "Still on My Mind",
    year: "2019",
    spotify_id: "6zRAoDzxuZuai82uJm0heZ",
    artist_id: 12,
  },
];

const seedRecords = () => Record.bulkCreate(recordData);

module.exports = seedRecords;
