# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(
  id: 1001,
  email: "borrow@backpack.com",
  password: "password"
)
User.create!(
  id: 1002,
  email: "travel@explore.com",
  password: "password"
)
User.create!(
  id: 1003,
  email: "ben@gmail.com",
  password: "ben144"
)
User.create!(
  id: 1004,
  email: "emily@gmail.com",
  password: "password"
)
User.create!(
  id: 1005,
  email: "sara@mail.com",
  password: "asdfasdf"
)
User.create!(
  id: 1006,
  email: "teja@email.com",
  password: "password"
)
User.create!(
  id: 1007,
  email: "charlie@gmail.com",
  password: "password"
)
User.create!(
  id: 1008,
  email: "rob@games.com",
  password: "password"
)
User.create!(
  id: 1009,
  email: "cricket@cat.com",
  password: "password"
)
User.create!(
  id: 1010,
  email: "morgan@dusty.com",
  password: "password"
)

SportingGood.create!(
id: 1001,
user_id: 1001,
description: "Red. One-seater. Paddle included.",
category: "kayak",
lat: 37.769996,
lng: -122.511281,
pic_url: "http://i.imgur.com/ogPVR.jpg"
)

SportingGood.create!(
id: 1002,
user_id: 1001,
description: "Top-loading backpack easily holds a sleeping bag and a few extras. Has a ''rip-and-stick'' torso adjustment, shoulder strap system that easily slides on pack's frame to fit torsos of varying lengths
Waistbelt wraps around and adjusts for the best fit; hipbelt sports two mesh zip pockets for stashing rocks, other found treasures or action figures!
Hydration-compatible, zippered side pocket with a tube exit port holds up to a 1-liter reservoir. Top zippered pocket lets for stashing a headlamp, camp gear, and other gadgets. Unique ''windowpane'' panels on two zippered stash pockets let to allow you to inside, helping you to find your gear more quickly.
Bottom zippered storage compartment lets you keep dirty shoes or clothes separate from main compartment",
category: "backpack",
lat: 37.769996,
lng: -122.511281,
pic_url: "http://i.imgur.com/NGi79xE.jpg"
)

SportingGood.create!(
id: 1003,
user_id: 1002,
description: "Borrow my snowboard (with Dakine stomp pad) and bindings setup. For the past few seasons, these have been used only as a backup board and haven't gotten much use. It's a fun jibbing board for those around 5ft 6in.

It's about a 149 cm board. I don't know what brand this board is because the person I bought it from had spray painted over the whole top of it (he claimed it is a Burton; I have my doubts, but who knows). I have since done another coat of spray paint on it. Although the board has a little gash on the bottom (shown in pics), it doesn't affect the ride. I purchased the bindings new in the fall of 2005. They are Sims Link Helium bindings in size LARGE (I think they fit boot size 9-13). These aluminum bindings are in great shape and have plenty of life left in them. I've replaced one of the toe ratchets as well as some of the binding hardware with much higher quality nuts and bolts.",
category: "snowboard",
lat: 37.786049,
lng: -122.481804,
pic_url: "http://i.imgur.com/QuevphZ.jpg"
)

SportingGood.create!(
id: 1004,
user_id: 1002,
description: "Rain fly included. The outermost pocket has a broken zipper, but in great shape other than that. It holds 38L. It would most comfortably fit someone between 5 foot 5 inches and 5 foot 10 inches. Very durable and strong material used for suspension and provides cooling airflow across the back. Shoulder straps and hipbelt use moisture-wicking mesh to help keep you dry on the main contact point of the body. It's very clean and ready for your backpacking activities. You are welcome to borrow my water bladder, which holds 3L.",
category: "backpack",
lat: 37.786049,
lng: -122.481804,
pic_url: "http://i.imgur.com/UINm0AN.jpg"
)

SportingGood.create!(
id: 1005,
user_id: 1001,
description: "I'm out of town until September, so I'm hoping my surfboard can get a little love. If you'd like a wetsuit for the freezing cold Pacific Ocean, you can borrow mine! It's an adult sized medium.

5ft 5in performance fish surfboard. This board is catches waves well and is very fast, yet holds in in steeper sections due to a narrower tail. I really like this board, and have got it copied many times because it works so well.This Two Crows surfboard is in average-good condition with 2 repaired small dings and pressure dents on the deck.",
category: "surfboard",
lat: 37.786049,
lng: -122.481804,
pic_url: "http://i.imgur.com/JZFHNdb.jpg"
)
SportingGood.create!(
id: 1006,
user_id: 1003,
description: "Beach cruiser available for summer.",
category: "bicycle",
lat: 38.027913,
lng: -122.540225,
pic_url: "https://s-media-cache-ak0.pinimg.com/736x/9e/a0/d4/9ea0d4501af7bebbe53f3fb805e7b831.jpg"
)
SportingGood.create!(
id: 1007,
user_id: 1003,
description: "Ultra lightweight tent. Great for backpacking. Partially waterproof (there's a small hole).",
category: "tent",
lat: 38.027913,
lng: -122.540225,
pic_url: "http://192.185.146.249/~jhllamas/wp-content/uploads/2014/02/Llama-Trekking-Tent-740.jpg"
)
SportingGood.create!(
id: 1008,
user_id: 1008,
description: "Fantastic kayak for white water rafting. It could use a more comfortable seatback, but otherwise in perfect condition. It's been on multiple trips.",
category: "kayak",
lat: 37.792775,
lng: -122.256540,
pic_url: "http://jacksonkayak.com/wp-content/uploads/2015/12/Photo_de_patrick_levesque_09_15_04092015-I7D_6568.jpg"
)
SportingGood.create!(
id: 1009,
user_id: 1004,
description: "Shortboard. It's a good ride in choppy waters.",
category: "surfboard",
lat: 37.807153,
lng: -122.291902,
pic_url: "http://1.bp.blogspot.com/_jhf-7wU76qc/TIYqi1UNNeI/AAAAAAAABs8/B1pfzqydU2o/s1600/surfer-girl-air.jpg"
)
SportingGood.create!(
id: 1010,
user_id: 1004,
description: "Sweet vintage frame and parts. Over 40 years old.",
category: "bicycle",
lat: 37.807153,
lng: -122.291902,
pic_url: "http://cdn.blessthisstuff.com/imagens/stuff/le-velo-vintage-bikes-2.jpg"
)
SportingGood.create!(
id: 1011,
user_id: 1005,
description: "A bomber expedition tent designed for extreme cold weather. Convertible panels reveal mesh for milder base camp conditions.",
category: "tent",
lat: 37.746643,
lng: -122.434775,
pic_url: "http://www.humr.cz/content/uploads/2014/11/tent-snow.jpg"
)
SportingGood.create!(
id: 1012,
user_id: 1005,
description: "155cm board with bindings. Edges are in good shape and still pretty sharp, top sheet is not damaged. Boots are size nine (US). ",
category: "snowboard",
lat: 37.746648,
lng: -122.434770,
pic_url: "http://www.sparkrandd.com/core/wp-content/uploads/2010/03/danisummitpose.jpg"
)
SportingGood.create!(
id: 1013,
user_id: 1005,
description: "This bike is in great condition and works perfectly. The frame is perfectly straight, no dents or dings, it does obviously have some scratches and chips in the paint which is normal wear. The only thing this needs is a new front derailleur. Would love to meet up and make new friends, too!",
category: "bicycle",
lat: 37.746640,
lng: -122.434775,
pic_url: "http://www.womensmovement.com/wp-content/uploads/2014/07/leigh_ace_black-700x466.jpg"
)
SportingGood.create!(
id: 1014,
user_id: 1006,
description: "5' center height. It comfortably sleeps 2-3. The zipper sticks, but works. I can lend you my sleeping bag, too.",
category: "tent",
lat: 37.624923,
lng: -122.378470,
pic_url: "http://gadling.com/wp-content/uploads/2007/05/eztent.jpg"
)
SportingGood.create!(
id: 1015,
user_id: 1006,
description: "Need a high-capacity pack for your next backpacking trip? This is a large, 90 liter (approx 5000 cu. in.) pack intended for multi- day adventures. It has both internal support and an external frame (distributes the weight and let's some air circulate close to the back of the wearer). The top comes off and can be used as a belt pack.",
category: "backpack",
lat: 37.624923,
lng: -122.378470,
pic_url: "http://cdn.outdoorgearlab.com/photos/11/53/236848_9471_XL.jpg"
)
SportingGood.create!(
id: 1016,
user_id: 1007,
description: "Touring frame, very light. 63 cm size .... works well
for taller people or those with longer legs. Frame is the well designed
and proven large diameter (but very light) Aluminum frame.
The front forks are black Carbon Fiber. This frame is a deep dark
Midnight Blue. Peddles with toe clips and leather straps",
category: "bicycle",
lat: 37.855695,
lng: -122.204749,
pic_url: "http://i0.wp.com/farm3.staticflickr.com/2862/11270073023_e6b982478b_z.jpg?w=640"
)
SportingGood.create!(
id: 1017,
user_id: 1007,
description: "This board is well-loved. Has some scratches and nicks but no previous repairs or in need of any. No Rail Damage Base is clean. Includes Stomp Pad.",
category: "snowboard",
lat: 37.855696,
lng: -122.204748,
pic_url: "http://3.bp.blogspot.com/_gfXupHOEhH0/TKJYiCNefqI/AAAAAAAASKE/b2aJ40kOl7w/s1600/snowboarding-wallpaper-11.jpg"
)
SportingGood.create!(
id: 1018,
user_id: 1008,
description: "This board is an absolute beast. I love surfing this bad boy. Catches a lot of waves and handles great. Floats well and easy to paddle. There are a few pressure cracks here and there (as with all boards). The board is watertight and ready to surf. Hit me up if you want to take her out to the waters.",
category: "surfboard",
lat: 37.806886,
lng: -122.320105,
pic_url: "http://hirewallpapers.com/wp-content/uploads/2016/03/surfing_surf_wave_wallpaper_1080p.jpg"
)
SportingGood.create!(
id: 1019,
user_id: 1009,
description: "Comes with fishing accessories such as swivel pole holder in the front and two stationary holders in the rear. Paddle included.",
category: "kayak",
lat: 37.876538,
lng: -122.255787,
pic_url: "http://www.adventurecats.org/wp-content/uploads/2016/01/Bolt-and-Keel-Adventure-Cats-14-of-17.jpg"
)
SportingGood.create!(
id: 1020,
user_id: 1010,
description: "Great bag for hiking or camping. Lots of support for anyone with a smaller frame. Top-loading backpack.",
category: "backpack",
lat: 37.755574,
lng: -122.499546,
pic_url: "http://stepoutdoorscolorado.com/wp-content/uploads/2012/05/Fitting-A-Backpack-During-A-Step-Outdoors-Backpacking-Adventure.jpg"
)
SportingGood.create!(
id: 1021,
user_id: 1010,
description: "Tent sleeps 4 happy campers and includes a large door for easy entry/exit with a hooded fly to provide ventilation even in rain.",
category: "tent",
lat: 37.757389,
lng: -122.496746,
pic_url: "http://sectionhiker.com/wp-content/uploads/thumbskeep/2013/10/Tents-with-side-vestibules-let-you-store-gear-out-of-the-weather-at-night-without-having-to-keep-into-inside-your-living-space-Tarptent-Scarp1-shown..jpg"
)
SportingGood.create!(
id: 1022,
user_id: 1008,
description: "Very rideable as-is. Also has a spikey stomp plate installed. Great board. Also available are the aluminum metal Ride bindings in the photo, which are much more durable and provide a more solid grip on your snowboard boots than do the plastic bindings you find most of the time. ",
category: "snowboard",
lat: 37.737979,
lng: -122.453144,
pic_url: "https://pixabay.com/static/uploads/photo/2013/05/26/18/01/snowboard-113784_960_720.jpg"
)
SportingGood.create!(
id: 1023,
user_id: 1007,
description: "In great condition. Large bag that will hold a lot of gear. Great for trekking, backpacking, travel, etc.",
category: "backpack",
lat: 37.897452,
lng: -122.552021,
pic_url: "http://thekitchenrag.com/wp-content/uploads/blogger/-59YXEmZPOLM/UEWY2bcYsJI/AAAAAAAAAWg/vBuQaglmAYU/s1600/IMG_4923.jpg"
)
SportingGood.create!(
id: 1024,
user_id: 1006,
description: "Top lid pocket holds your map, compass or GPS, spare batteries and other small equipment items; interior valuables pocket secures important items
SOS label inside the lid includes information to help if you're lost or need assistance
Side compression straps cinch down loads for jostle-free carrying; attachment points allow you to lash trekking poles and ice tools to pack exterior",
category: "backpack",
lat: 37.999247,
lng: -122.476490,
pic_url: "http://stewieshow.com/wp-content/uploads/2016/03/dreamstime_xl_31762033.jpg"
)
SportingGood.create!(
id: 1025,
user_id: 1005,
description: "Too many great memories of camping trips with this tent. Sleeps two people. Has been in rain, snow, and heat. Functions well in all condtions.",
category: "tent",
lat: 37.961509,
lng: -122.284707,
pic_url: "http://static1.squarespace.com/static/5346a846e4b0101b157468cf/5554fe12e4b077499cda64a6/5555039ee4b0da38ef99a169/1431634919829/tent+view.jpg"
)
