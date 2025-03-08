const disableSetup = true;
var topBarCenterText = `W0MMK - EN33`;



// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [

  ["2196F3",     "SEMNARC",     "https://semnarc.org/",     "1",   ],

  ["2196F3", "TIME.IS", "https://time.is/", "1", ],

  ["2196F3", "POTA", "https://pota.app/", "1.7"],

  ["2196F3",  "CONTEST",     "https://www.contestcalendar.com/fivewkcal.html",    "1",   ],

  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],

<!---  ---!>  ["2196F3", "BAND PLAN", "https://www.arrl.org/band-plan", "1", "R", ], 

    ["2196F3",    "ADV RADAR",    "https://radar.weather.gov/",    "1",    "R",  ],

    ["2196F3",     "WINDS",     "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",     "R",   ],

  ["2196F3",    "LIGHTNING",    "https://map.blitzortung.org/#3.87/36.5/-89.41",     "1",    "R",  ],

   ["2196F3",    "SPACE WEATHER",    "https://www.swpc.noaa.gov/",     "1",    "R",  ],

    ["2196F3",    "QRZ LOOKUP",    "https://www.qrz.com/lookup",     "1",    "R",  ],




];



// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "NWS RADAR LACROSSE WI",
    "https://radar.weather.gov/ridge/standard/KARX_loop.gif",
  ],
  [
    "NWS RADAR SOUTH DAKOTA",
    "https://radar.weather.gov/ridge/standard/KFSD_loop.gif",
  ],
  [
    "BEACON",
    "https://www.reversebeacon.net/main.php?rows=10&max_age=10,hours&bands=160,80,60,40,30,20,17,15,12,10,6,4,2&spot_types=3&hide=distance_km",
  ],
    [
      "SPD DAY 1 ",
      "https://www.spc.noaa.gov/products/outlook/day1otlk_1300.gif",
  ],

  [
    "THUNDERSTORM",
    "https://www.spc.noaa.gov/products/exper/enhtstm/imgs/enh_1600.gif",
  ],


  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],

   ["APRS", "iframe|https://aprs-map.info/?center=43.8553,-92.1863&zoom=9"],

  [
    "10M = yellow 6M = orange",
    "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
  ],


  [
    "PROP",
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
  ],

  ["MUF", "https://www.hamqsl.com/solarmuf.php"],



  ["HF",
    "https://www.hamqsl.com/solar101vhf.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];
