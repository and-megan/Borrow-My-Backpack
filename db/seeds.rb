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
description: "This is a very stable kayak; the V-hull design allows it to glide easily in the water, the seats are comfortable and easy to lean back to kick the foot up and float happily. The buckles for the seat straps are no different than what you'd find on a backpack. The foot rests are easy to adjust. The bolts for them are holding well and no leaks at all. I love having the pads on the side - it's a nice addition to keep from sore knees, and they also help to keep the paddle rested nicely without rolling around. The fin on the back works wonders for keeping it going straight as well. The vibrant red sure catches attention when you're paddling by people too!",
category: "kayak",
lat: 37.769996,
lng: -122.511281,
pic_url: "http://i.imgur.com/ogPVR.jpg"
)

SportingGood.create!(
id: 1002,
user_id: 1001,
description: "Top-loading backpack easily holds a sleeping bag and a few extras. Has a ''rip-and-stick'' torso adjustment, shoulder strap system that easily slides on pack's frame to fit torsos of varying lengths. Waistbelt wraps around and adjusts for the best fit; hipbelt sports two mesh zip pockets for stashing items. Hydration-compatible, zippered side pocket with a tube exit port holds up to a 1-liter reservoir. Top zippered pocket lets for stashing a headlamp, camp gear, and other gadgets.",
category: "backpack",
lat: 37.769996,
lng: -122.511281,
pic_url: "http://i.imgur.com/NGi79xE.jpg"
)

SportingGood.create!(
id: 1003,
user_id: 1002,
description: "Borrow my snowboard (with Dakine stomp pad) and bindings setup. It's a fun jibbing board for those around 5ft 6in. It's about a 149 cm board. I don't know what brand this board is because the person I bought it from had spray painted over the whole top of it (he claimed it is a Burton; I have my doubts, but who knows). Although the board has a little gash on the bottom (shown in pics), it doesn't affect the ride. I purchased the bindings new in the fall of 2005. They are Sims Link Helium bindings in size LARGE (I think they fit boot size 9-13). These aluminum bindings are in great shape and have plenty of life left in them. I've replaced one of the toe ratchets as well as some of the binding hardware with much higher quality nuts and bolts.",
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

5ft 5in performance fish surfboard. This board is catches waves well and is very fast, yet holds in in steeper sections due to a narrower tail. I really like this board, and have got it copied many times because it works so well. This Two Crows surfboard is in average-good condition with 2 repaired small dings and pressure dents on the deck.",
category: "surfboard",
lat: 37.786049,
lng: -122.481804,
pic_url: "http://i.imgur.com/JZFHNdb.jpg"
)
SportingGood.create!(
id: 1006,
user_id: 1003,
description: "Beach cruiser available for summer. I have used it for my 15 mile RT bike commute, and shorter trips like grocery shopping & had a great ride every time. Since I will be using it for shorter rides, shopping, etc. It is a tiny bit more of a bumpy ride since it doesn't have suspension like my other bike does, but it is not enought to detract from the ride at all. A nice complement to my mountain bike for rides around town, to the store, along dirt paths. Super cool, too. It's a smooth, comfortable ride. It's a few years old and it's best suited to flat rides.",
category: "bicycle",
lat: 38.027913,
lng: -122.540225,
pic_url: "https://s-media-cache-ak0.pinimg.com/736x/9e/a0/d4/9ea0d4501af7bebbe53f3fb805e7b831.jpg"
)
SportingGood.create!(
id: 1007,
user_id: 1003,
description: "Ultra lightweight tent. Great for backpacking. It has a lot of room and advaced features such as two vestibules. There are mesh pockets overhead and in the four corners. The doors are spacious and easy to operate. Having two doors is great when you're sharing the tent. Setup is easy. I like alternate setup with just the optional rainfly and floor only. The stakes work fine for most terrains. I added my own guy ropes (that you can borrow) to insure a sturdy tent. I tested the tent in a 10 hour thunderstorm night with high winds and hard rain. Stayed completely dry and no leaks. Very pleased with this tent. Will recommed to my friends as an excellent tent for car camping, bike camping and most backpacking trips.",
category: "tent",
lat: 38.027913,
lng: -122.540225,
pic_url: "http://192.185.146.249/~jhllamas/wp-content/uploads/2014/02/Llama-Trekking-Tent-740.jpg"
)
SportingGood.create!(
id: 1008,
user_id: 1008,
description: "Fantastic kayak for white water rafting. It could use a more comfortable seatback, but otherwise in perfect condition. It's been on multiple trips. I am six three, 240lbs, with a 37 in waist; I am a big guy and this kayak fits me perfectly with room to spare. The padding for the knees and the seat is just super comfy (I've been out for over 6 hours before) - I have been kayaking my whole life; this is by far the best Kayak I have owned. It tracked well. Not the fastest, but I did not expect it too. Back hatch and features on the Kayak are great. (note: the water bottle holder is really just for a small water bottle. However, the dry-sack on the table will hold a 1.5 l nal with the top off).",
category: "kayak",
lat: 37.792775,
lng: -122.256540,
pic_url: "http://jacksonkayak.com/wp-content/uploads/2015/12/Photo_de_patrick_levesque_09_15_04092015-I7D_6568.jpg"
)
SportingGood.create!(
id: 1009,
user_id: 1004,
description: "Shortboard. It's a good ride in choppy waters. It’s a board that adapts well to all our average, everyday conditions. It also isn’t out of its element when the wave gets a bit better, a bit more critical and a bit heaver. Ride this from stomach/chest high to well overhead. Then it has the rocker and the bottom contours of the Spawn and Fader keeping it quite performance oriented but while still keeping that volume up under your front foot. When you’re paddling into those slabby, steeper takeoff waves, it paddles really well. You get into those waves quite quick, but it’s also, it’s not too full through the nose, so when you’re turning into the contour of the wave, it actually handles it quite well.",
category: "surfboard",
lat: 37.807153,
lng: -122.291902,
pic_url: "http://1.bp.blogspot.com/_jhf-7wU76qc/TIYqi1UNNeI/AAAAAAAABs8/B1pfzqydU2o/s1600/surfer-girl-air.jpg"
)
SportingGood.create!(
id: 1010,
user_id: 1004,
description: "Sweet vintage frame and parts. Over 40 years old. I've taken it for a twenty mile rail-trail ride so far. Shifts smoothly, disc brakes are awesome, and it's an all around great bike. I've done the VA portion of the Trans-Am and the C&O on the Randonee. This bike is the perfect all around bike. It is light and nimble enough for the road and yet beefy enough for gravel and double track. I'm a rider that has a nice road bike (Bianchi), nice mountain (Giant & Santa Cruz) bikes and wanted something in between that could give all day exploring that looked really cute, too.",
category: "bicycle",
lat: 37.807153,
lng: -122.291902,
pic_url: "http://cdn.blessthisstuff.com/imagens/stuff/le-velo-vintage-bikes-2.jpg"
)
SportingGood.create!(
id: 1011,
user_id: 1005,
description: "A bomber expedition tent designed for extreme cold weather. Convertible panels reveal mesh for milder base camp conditions. I bought this tent 2 years ago and have used it numerous times since then. I've used it both in 2-person and solo situations. I am 6'4 220 lbs and I dedicate a lot of pack weight toward my tent, because I prefer more room. Anyways, in a 2 person situation this tent is great. The two doors and 2 Vestibules in our opinion sealed the deal because of comfort - in the backcountry it's great to have a refuge you can call your own. I've used it 5-6 times on cold weather backcountry trips. Protects against weather really well and barely any wind gets through during harsh storms.",
category: "tent",
lat: 37.746643,
lng: -122.434775,
pic_url: "http://www.humr.cz/content/uploads/2014/11/tent-snow.jpg"
)
SportingGood.create!(
id: 1012,
user_id: 1005,
description: "155cm board with bindings. Edges are in good shape and still pretty sharp, top sheet is not damaged. Boots are size nine (US). This is a premium board shaped for the powder sensei. It pairs the aesthetics and performance of a wood topsheet with environmentally conscious production. Reclined parabolic rocker keeps this board strong on its tail in both powder and hardpack. Triax over biax mixed glassing layup offers versatility for pow, backcountry, groomers, jumps and more. The strut runs down the center to maintain an easy turning ride while energizing longitudinal flex for improved all-mountain performance.",
category: "snowboard",
lat: 37.746648,
lng: -122.434770,
pic_url: "http://www.sparkrandd.com/core/wp-content/uploads/2010/03/danisummitpose.jpg"
)
SportingGood.create!(
id: 1013,
user_id: 1005,
description: "This bike is in great condition and works perfectly. The frame is perfectly straight, no dents or dings, it does obviously have some scratches and chips in the paint which is normal wear. The only thing this needs is a new front derailleur. The bike is comfortable, although I am going to add a spacer to the stem since I need it to be a little more upright (tube is fairly long). I really like having the shifters close to the breaks vs. at the end of the handle bar and the butterfly handlebars are amazing; they are perfect for cruising and climbing with so many places for your hands to find comfort and stability.  Would love to meet up and make new friends, too!",
category: "bicycle",
lat: 37.746640,
lng: -122.434775,
pic_url: "http://www.womensmovement.com/wp-content/uploads/2014/07/leigh_ace_black-700x466.jpg"
)
SportingGood.create!(
id: 1014,
user_id: 1006,
description: "I use this tent to sleep 2 adults with a dog at our feet. The tent is very durable and easy to setup. I split the load between two packs to lighten individual pack weight. Becuse of tent's durability, weight is increased. The double vestibule and doors are great. Has internal storage compartments - 4 side ones, plus an overhead one. It's a spacious durable tent. Use of a footprint is also a good recommendation with any lighter tent. Overall, a great tent, but be aware of pack weight verses other tents if ultralightweight camping is important to you.",
category: "tent",
lat: 37.624923,
lng: -122.378470,
pic_url: "http://gadling.com/wp-content/uploads/2007/05/eztent.jpg"
)
SportingGood.create!(
id: 1015,
user_id: 1006,
description: "Need a high-capacity pack for your next backpacking trip? This is a large, 90 liter (approx 5000 cu. in.) pack intended for multi- day adventures. It has both internal support and an external frame (distributes the weight and let's some air circulate close to the back of the wearer). The top comes off and can be used as a belt pack. Unique ''windowpane'' panels on two zippered stash pockets let to allow you to inside, helping you to find your gear more quickly.
Bottom zippered storage compartment lets you keep dirty shoes or clothes separate from main compartment",
category: "backpack",
lat: 37.624923,
lng: -122.378470,
pic_url: "http://cdn.outdoorgearlab.com/photos/11/53/236848_9471_XL.jpg"
)
SportingGood.create!(
id: 1016,
user_id: 1007,
description: "Touring frame, very light. 63 cm size .... works well
for taller people or those with longer legs. Frame is the well designed and proven large diameter (but very light) aluminum frame. This frame is a Midnight Blue. Peddles with toe clips and leather straps. It is very responsive and fast and has been able to handle the vast rock beds, jumps, and high speed cornering I've put it through. I am glad I made hard comparisons to competitive manufacturers in the market of similar all mountain full suspension bikes. The thru axle front fork upgrade they also provided routing for a dropper tube seat post if the bike were to be fitted with one by a future end rider. Very happy with this bike!",
category: "bicycle",
lat: 37.855695,
lng: -122.204749,
pic_url: "http://i0.wp.com/farm3.staticflickr.com/2862/11270073023_e6b982478b_z.jpg?w=640"
)
SportingGood.create!(
id: 1017,
user_id: 1007,
description: "This board is well-loved. Has some scratches and nicks but no previous repairs or in need of any. No Rail Damage Base is clean. Includes Stomp Pad. As far as snowboards go, you will be hard-pressed to find a stronger, more durable piece of gear for shredding than my favorite snowboard. Stable, predictable platform lets you hit a high-speed booter and stomp the landing, yet is flexible and poppy enough to ollie onto those rails. I took it to Breck this past weekend and the snow was fantastic. I tried carving this thing as hard as I could and not once did I ever feel even close to losing an edge. As a matter of fact, sometimes I would turn so hard it would yank me into my turn harder than I wanted rather than slipping out.",
category: "snowboard",
lat: 37.855696,
lng: -122.204748,
pic_url: "http://3.bp.blogspot.com/_gfXupHOEhH0/TKJYiCNefqI/AAAAAAAASKE/b2aJ40kOl7w/s1600/snowboarding-wallpaper-11.jpg"
)
SportingGood.create!(
id: 1018,
user_id: 1008,
description: "This board is an absolute beast. I love surfing this bad boy. Catches a lot of waves and handles great. Floats well and easy to paddle. There are a few pressure cracks here and there (as with all boards). The board is watertight and ready to surf. Hit me up if you want to take her out to the waters. It still has the really generous distribution of foam through the front and under the chest, which gets you into waves easily and it’s quite easy to surf. It’s quite versatile. It’s a fun board to ride.",
category: "surfboard",
lat: 37.806886,
lng: -122.320105,
pic_url: "http://hirewallpapers.com/wp-content/uploads/2016/03/surfing_surf_wave_wallpaper_1080p.jpg"
)
SportingGood.create!(
id: 1019,
user_id: 1009,
description: "This boat tracks very well, especially for a 10ft kayak. There's a locking compartment in the back that is plenty big to fit a bilge pump, jacket, dry bag and plenty of snacks. Between that compartment and the seat is an area that easily fits larger water bottles. The seat? Yeah, it's super comfortable. I'd suggest adjusting the height of the backrest before getting on the water; I couldn't figure out how to adjust it behind my back (oops). Foot pegs are stable and you have plenty of room in the front for other gear. You have a small table in front of you while paddling wit a small recessed cupholder and a semi-waterproof twisting latch compartment that is great for snacks, sunscreen, phone, keys, etc.",
category: "kayak",
lat: 37.876538,
lng: -122.255787,
pic_url: "http://www.adventurecats.org/wp-content/uploads/2016/01/Bolt-and-Keel-Adventure-Cats-14-of-17.jpg"
)
SportingGood.create!(
id: 1020,
user_id: 1010,
description: "Great bag for hiking or camping. Lots of support for anyone with a smaller frame. Top-loading backpack. Just did a 5-day backpacking trip with this pack. It is shockingly comfortable and enjoyable to hike with. The side pockets were clearly designed by somebody who finally gets it. They easily accommodate a wide variety of water bottles in either a vertical or forward-canted position. If you prefer to hike with larger bottles, IE., a 48oz Nalgene or I dunno... a Smartwater bottle or something you may experience a little elbow rubbing. Simple fix: Slide the bottle through the other opening so it stands vertically. Overall there's plenty of loops and other fasteners on this pack to accommodate a variety of gear.",
category: "backpack",
lat: 37.755574,
lng: -122.499546,
pic_url: "http://stepoutdoorscolorado.com/wp-content/uploads/2012/05/Fitting-A-Backpack-During-A-Step-Outdoors-Backpacking-Adventure.jpg"
)
SportingGood.create!(
id: 1021,
user_id: 1010,
description: "Tent sleeps a couple happy campers and includes a large door for easy entry/exit with a hooded fly to provide ventilation even in rain. It's big enough that it's nice to be able to keep our duffle bags and packs inside the tent. It's been rained on several times this summer, with nary a drop inside the tent. If you stake the fly out properly, the tent ventilates well. The wee storage pocket at each tent corner is super handy, as are the two storage pouches/shelves at the top of the tent. I love this tent so much I am happy to carry the weight when I go backpacking.",
category: "tent",
lat: 37.757389,
lng: -122.496746,
pic_url: "http://sectionhiker.com/wp-content/uploads/thumbskeep/2013/10/Tents-with-side-vestibules-let-you-store-gear-out-of-the-weather-at-night-without-having-to-keep-into-inside-your-living-space-Tarptent-Scarp1-shown..jpg"
)
SportingGood.create!(
id: 1022,
user_id: 1008,
description: " This board is an absolute dream to ride. Turn initiation is very easy and it kind of surfs in the transitions of the turns. Once the edge connects, carving is just as good as on traditional camber. It's nice to have the forgiving surfy feel, during transitions. It tracks very well when riding flat, unlike my other board that always felt like I was going to catch an edge. Many other reviews complain about hard pack and ice edge hold, although most of what I have rode it on has been soft snow to powder, I have been on ice and hard pack and it has done just as good if not a little better than my old board. I'd rather not ride on ice anyways so it doesn't bother me. Highly recommend this to any intermediate/advanced rider looking to have a blast ripping down the mountain.",
category: "snowboard",
lat: 37.737979,
lng: -122.453144,
pic_url: "https://pixabay.com/static/uploads/photo/2013/05/26/18/01/snowboard-113784_960_720.jpg"
)
SportingGood.create!(
id: 1023,
user_id: 1007,
description: "In great condition. Large bag that will hold a lot of gear. Great for trekking, backpacking, travel, etc. It's plenty large enough to accommodate things you'll need quick access to... rain jacket, gloves, hat, map case, or a combination of all of those. I'm very hot-natured, and the ventilation system works even better than I had hoped. This is not a pack that you can fit a weeks worth of gear in, however, it works great for overnights and weekend adventures. I will say there is a downside to this pack - the hip belt pockets...they aren't very big and are tricky to get in and out of. However, you can still get a headlamp/snack in and out with ease. Just not anything more than that.",
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
description: "Too many great memories of camping trips with this tent. Sleeps two people. Has been in rain, snow, and heat. Functions well in all condtions. I bought this tent for several weekend trips leading up to a week-long trip to the Big Horns in Wyoming. It was lightweight to carry and had plenty of room for 2 people. The two side entrances were very convenient and offered plenty of outside storage under the vestibule. There were 2 small details that I particularly loved: the 4 vents on the top of the tent, and the inside pockets in the center roof of the tent.  At 6ft 4in, I fit great in this tent and do not touch the sidewalls when laying down. Lots of internal storage pockets. A bit on the heavy side for a solo tent, but fine for two person trips (split the weight).",
category: "tent",
lat: 37.961509,
lng: -122.284707,
pic_url: "http://static1.squarespace.com/static/5346a846e4b0101b157468cf/5554fe12e4b077499cda64a6/5555039ee4b0da38ef99a169/1431634919829/tent+view.jpg"
)
