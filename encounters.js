/* Add, remove, or edit encounters here. */
const SIGNAL_ENCOUNTERS = [
  {
    location: "24-Hour Diner",
    situation: "The only empty booth has to be shared.",
    complication: "The server assumes you arrived together and combines the check."
  },
  {
    location: "Apartment Elevator",
    situation: "The power cuts out between floors.",
    complication: "The emergency phone connects, but the operator cannot hear you clearly."
  },
  {
    location: "Corner Store",
    situation: "You both reach for the last item on the shelf.",
    complication: "The cashier refuses to split the package."
  },
  {
    location: "Train Platform",
    situation: "The final train is delayed indefinitely.",
    complication: "One of you recognizes the other from somewhere, but is wrong."
  },
  {
    location: "Hospital Waiting Room",
    situation: "You are the only two people still awake.",
    complication: "A nurse assumes you arrived together."
  },
  {
    location: "Neighborhood Bar",
    situation: "A stranger leaves a phone at your table.",
    complication: "It starts ringing before either of you can turn it in."
  },
  {
    location: "Laundromat",
    situation: "One of you accidentally takes the other's clothes.",
    complication: "The machines lock before the mistake can be fixed."
  },
  {
    location: "Grocery Store Parking Lot",
    situation: "Both cars refuse to start during heavy rain.",
    complication: "There is only one working phone between you."
  },
  {
    location: "Coffee Shop",
    situation: "You both need the last open outlet.",
    complication: "One charger works, but only at a very specific angle."
  },
  {
    location: "Bookstore",
    situation: "A book falls from a high shelf between you.",
    complication: "A note inside appears to be addressed to one of you."
  },
  {
    location: "Dog Park",
    situation: "The same loose dog runs up to both of you.",
    complication: "Neither of you owns it, and its tag is unreadable."
  },
  {
    location: "City Bus",
    situation: "The driver announces an unexpected route change.",
    complication: "You both get off in a neighborhood neither of you knows."
  },
  {
    location: "Subway Car",
    situation: "The train stops inside the tunnel.",
    complication: "The lights flicker and one of your phones begins playing audio by itself."
  },
  {
    location: "Pharmacy",
    situation: "You are both waiting on delayed prescriptions.",
    complication: "The pharmacist calls the wrong name and hands one of you the other's bag."
  },
  {
    location: "Museum",
    situation: "One of you is mistaken for a tour guide.",
    complication: "A school group starts following both of you."
  },
  {
    location: "Community Pool",
    situation: "A sudden storm clears the water.",
    complication: "Your belongings are trapped on the opposite side of the locked gate."
  },
  {
    location: "Rooftop",
    situation: "The building loses power during a citywide outage.",
    complication: "Someone below starts calling for help."
  },
  {
    location: "Public Library",
    situation: "You keep reaching for the same reserved study room.",
    complication: "The booking system lists both of your names."
  },
  {
    location: "Farmers Market",
    situation: "A vendor insists you entered a couples raffle.",
    complication: "Your names are announced as the winners."
  },
  {
    location: "Hardware Store",
    situation: "You both ask for help with the same oddly specific repair.",
    complication: "The employee assumes you are fixing it together."
  },
  {
    location: "Airport Gate",
    situation: "Your flight is delayed for several hours.",
    complication: "Your luggage tags have been switched."
  },
  {
    location: "Hotel Lobby",
    situation: "A booking error leaves one reservation under both names.",
    complication: "The front desk needs one of you to prove it is yours."
  },
  {
    location: "Motel",
    situation: "The highway closes during a storm.",
    complication: "Only one room remains, and neither of you trusts the situation."
  },
  {
    location: "Roadside Gas Station",
    situation: "The station loses power after you arrive.",
    complication: "One car has fuel and the other has a working battery."
  },
  {
    location: "Car Wash",
    situation: "The automatic system stops mid-cycle.",
    complication: "You are trapped in neighboring cars with the exit blocked."
  },
  {
    location: "Parking Garage",
    situation: "You both forgot where you parked.",
    complication: "A security alarm starts sounding on your level."
  },
  {
    location: "Tow Yard",
    situation: "You arrive to retrieve different vehicles.",
    complication: "The clerk insists the paperwork links your cases."
  },
  {
    location: "DMV",
    situation: "Your ticket numbers are called at the same time.",
    complication: "The clerk says one of your records has the other's address."
  },
  {
    location: "Courthouse Hallway",
    situation: "You are both waiting outside the wrong courtroom.",
    complication: "Someone mistakes one of you for the other's witness."
  },
  {
    location: "Police Station Lobby",
    situation: "You are both there to report unrelated incidents.",
    complication: "The desk officer thinks the reports are connected."
  },
  {
    location: "Fire Escape",
    situation: "A false alarm sends everyone outside.",
    complication: "The building door locks behind you."
  },
  {
    location: "Apartment Hallway",
    situation: "Neither of your keys will open the correct door.",
    complication: "A neighbor claims one of you moved in yesterday."
  },
  {
    location: "Mail Room",
    situation: "Two packages have the same apartment number.",
    complication: "Both names are partially torn off."
  },
  {
    location: "Moving Truck",
    situation: "A box splits open between you.",
    complication: "Its contents belong to neither of you."
  },
  {
    location: "Storage Unit",
    situation: "You are both given access to the same unit.",
    complication: "Something inside has both of your names on it."
  },
  {
    location: "Open House",
    situation: "You are the only visitors left with the realtor.",
    complication: "The front door jams during the showing."
  },
  {
    location: "Furniture Store",
    situation: "You sit on the same display couch.",
    complication: "An employee begins pitching it as a set made for couples."
  },
  {
    location: "Thrift Store",
    situation: "You both want the same vintage jacket.",
    complication: "A receipt in the pocket contains a familiar address."
  },
  {
    location: "Record Shop",
    situation: "You reach for the same last copy of an album.",
    complication: "The owner offers it free if you can agree who found it first."
  },
  {
    location: "Movie Theater",
    situation: "Your tickets list the same seat.",
    complication: "The film has already started and every other seat is taken."
  },
  {
    location: "Bowling Alley",
    situation: "The system assigns you to the same lane.",
    complication: "The scoreboard has already entered both of your names."
  },
  {
    location: "Arcade",
    situation: "One of you beats the other's high score.",
    complication: "The machine prints a prize ticket with a phone number on it."
  },
  {
    location: "Karaoke Bar",
    situation: "The host calls both of you for the same song.",
    complication: "The crowd refuses to let either of you back out."
  },
  {
    location: "Concert Venue",
    situation: "You are standing in each other's assigned place.",
    complication: "Security threatens to remove both of you unless you sort it out."
  },
  {
    location: "Festival Entrance",
    situation: "Your wristbands scan as duplicates.",
    complication: "Only one of you is allowed through until staff investigates."
  },
  {
    location: "Street Fair",
    situation: "A photographer assumes you are together.",
    complication: "Your picture appears on the event's public screen."
  },
  {
    location: "Art Gallery",
    situation: "One of you criticizes a piece the other has a connection to.",
    complication: "The artist walks over before either of you can explain."
  },
  {
    location: "Cooking Class",
    situation: "You are assigned as partners.",
    complication: "The ingredient you both need is missing."
  },
  {
    location: "Dance Class",
    situation: "The instructor pairs you without asking.",
    complication: "One of you clearly signed up for the wrong level."
  },
  {
    location: "Yoga Studio",
    situation: "The class is overbooked.",
    complication: "There is one mat left between you."
  },
  {
    location: "Gym",
    situation: "You both claim the same locker.",
    complication: "The key opens it, but the belongings inside are unfamiliar."
  },
  {
    location: "Boxing Gym",
    situation: "A trainer mistakes one of you for the other's sparring partner.",
    complication: "The real partner never arrives."
  },
  {
    location: "Ice Rink",
    situation: "One of you falls and grabs the other.",
    complication: "A child nearby insists you stole their gloves."
  },
  {
    location: "Beach Boardwalk",
    situation: "A sudden wave soaks both of you.",
    complication: "One phone is ruined and the other contains an unexpected message."
  },
  {
    location: "Public Park",
    situation: "A sprinkler turns on without warning.",
    complication: "Your bags are left on the wet side of a locked fence."
  },
  {
    location: "Community Garden",
    situation: "Your assigned plots overlap.",
    complication: "Someone has already planted something neither of you chose."
  },
  {
    location: "Animal Shelter",
    situation: "The same animal refuses to leave either of you.",
    complication: "Staff thinks you submitted a joint adoption application."
  },
  {
    location: "Veterinary Clinic",
    situation: "Your pets have nearly identical names.",
    complication: "The receptionist mixes up the files."
  },
  {
    location: "Pet Store",
    situation: "A bird escapes and lands on one of you.",
    complication: "The employee locks the doors until it is caught."
  },
  {
    location: "Florist",
    situation: "You both order the same unusual arrangement.",
    complication: "Only one bouquet can be made in time."
  },
  {
    location: "Bakery",
    situation: "The last custom cake has the wrong name on it.",
    complication: "Both of your events start in less than an hour."
  },
  {
    location: "Food Truck",
    situation: "The payment system goes down after you order.",
    complication: "The owner offers a deal if you help solve a small problem."
  },
  {
    location: "Restaurant Kitchen",
    situation: "You both end up behind the staff-only door.",
    complication: "A manager assumes you are the emergency replacements."
  },
  {
    location: "Office Lobby",
    situation: "The receptionist mistakes you for the same appointment.",
    complication: "The person you are meeting is already waiting."
  },
  {
    location: "Coworking Space",
    situation: "You both reserve the same desk.",
    complication: "A confidential folder has been left on it."
  },
  {
    location: "Copy Shop",
    situation: "Your print jobs are mixed together.",
    complication: "One document contains information one of you was not meant to see."
  },
  {
    location: "Radio Station",
    situation: "A live microphone is accidentally left on.",
    complication: "Your private conversation begins broadcasting."
  },
  {
    location: "Newsroom",
    situation: "A breaking story sends everyone scrambling.",
    complication: "You are both handed the same anonymous tip."
  },
  {
    location: "Photo Studio",
    situation: "The scheduled client never arrives.",
    complication: "The photographer assumes one of you brought the other as a model."
  },
  {
    location: "Salon",
    situation: "An appointment cancellation opens one chair.",
    complication: "Both of you were promised the slot."
  },
  {
    location: "Tattoo Shop",
    situation: "You arrive with similar reference images.",
    complication: "The artist thinks you planned matching tattoos."
  },
  {
    location: "Funeral Home",
    situation: "You are both early for different services.",
    complication: "The signs have been switched."
  },
  {
    location: "Wedding Reception",
    situation: "The seating chart puts you together.",
    complication: "A relative insists you already know each other."
  },
  {
    location: "Rehearsal Dinner",
    situation: "One of you is mistaken for a missing guest.",
    complication: "Correcting the mistake would expose another problem."
  },
  {
    location: "Baby Shower",
    situation: "A game pairs you as teammates.",
    complication: "The host reveals an embarrassing fact about one of you."
  },
  {
    location: "Family Reunion",
    situation: "Neither of you belongs to the family hosting it.",
    complication: "Everyone assumes one of you brought the other."
  },
  {
    location: "Funeral",
    situation: "You came for different reasons and neither knew the deceased well.",
    complication: "A family member asks you both to speak."
  },
  {
    location: "Graduation Ceremony",
    situation: "You are saving seats for people who are late.",
    complication: "The ushers insist the row must be cleared."
  },
  {
    location: "School Pickup Line",
    situation: "A child confidently approaches the wrong person.",
    complication: "The actual guardian is nowhere in sight."
  },
  {
    location: "Parent-Teacher Night",
    situation: "You both wait outside the same classroom.",
    complication: "The teacher assumes you are discussing the same student."
  },
  {
    location: "College Lecture Hall",
    situation: "You sit through the wrong class.",
    complication: "The professor calls on both of you by name."
  },
  {
    location: "Campus Library",
    situation: "A fire drill interrupts your work.",
    complication: "One of you accidentally leaves with the other's notes."
  },
  {
    location: "Job Fair",
    situation: "A recruiter thinks you applied as a team.",
    complication: "The interview begins before you can correct them."
  },
  {
    location: "Networking Event",
    situation: "Your name tags are switched.",
    complication: "Someone important starts a conversation using the wrong identities."
  },
  {
    location: "Charity Auction",
    situation: "You raise your paddles at the same time.",
    complication: "The auctioneer combines your bids."
  },
  {
    location: "Volunteer Shift",
    situation: "The coordinator pairs you for a task neither of you understands.",
    complication: "The person who was meant to train you disappears."
  },
  {
    location: "Soup Kitchen",
    situation: "A delivery arrives with no labels.",
    complication: "You have to sort it before service begins."
  },
  {
    location: "Blood Drive",
    situation: "You are both stuck in the recovery area longer than expected.",
    complication: "A staff member asks one of you to keep an eye on the other."
  },
  {
    location: "Emergency Shelter",
    situation: "A storm fills every available cot.",
    complication: "You are asked to share the last private corner."
  },
  {
    location: "Power Outage",
    situation: "You meet in the only building with lights.",
    complication: "The generator begins failing."
  },
  {
    location: "Snowstorm",
    situation: "Public transit shuts down while you are out.",
    complication: "The nearest safe place is somewhere neither of you wants to go."
  },
  {
    location: "Heatwave",
    situation: "The neighborhood cooling center reaches capacity.",
    complication: "One chair remains and an argument has already started around it."
  },
  {
    location: "Flash Flood",
    situation: "A street closes behind you.",
    complication: "Your only dry route requires crossing private property."
  },
  {
    location: "Thunderstorm",
    situation: "You take shelter beneath the same awning.",
    complication: "Something nearby is struck and the block goes dark."
  },
  {
    location: "City Blackout",
    situation: "Traffic lights fail across downtown.",
    complication: "You are both trying to reach the same person."
  },
  {
    location: "Broken-Down Bus",
    situation: "Passengers are told to wait for a replacement.",
    complication: "Everyone else finds another ride except you two."
  },
  {
    location: "Road Closure",
    situation: "A detour sends you down an unfamiliar road.",
    complication: "Your navigation apps give opposite directions."
  },
  {
    location: "Taxi Stand",
    situation: "Only one cab arrives.",
    complication: "The driver refuses to make two separate trips."
  },
  {
    location: "Rideshare",
    situation: "The app assigns both of you the same car.",
    complication: "The driver insists the destination is identical."
  },
  {
    location: "Bike Trail",
    situation: "One bike gets a flat tire.",
    complication: "The repair kit belongs to the person who did not bring a bike."
  },
  {
    location: "Crosswalk",
    situation: "A delivery truck splashes both of you.",
    complication: "One of your dropped bags is picked up by a stranger."
  },
  {
    location: "Alley",
    situation: "You both hear a crash behind a locked door.",
    complication: "Someone inside calls one of your names."
  },
  {
    location: "Fire Station Open House",
    situation: "A child wanders off near you.",
    complication: "Staff assumes you are the responsible adults."
  },
  {
    location: "City Hall",
    situation: "You are waiting to file unrelated forms.",
    complication: "The clerk says both issues involve the same property."
  },
  {
    location: "Post Office",
    situation: "A package is addressed to both of you.",
    complication: "Neither recognizes the sender."
  },
  {
    location: "Bank Lobby",
    situation: "The security doors lock unexpectedly.",
    complication: "One of you was already trying to leave in a hurry."
  },
  {
    location: "Pawn Shop",
    situation: "You both recognize the same item in the display case.",
    complication: "The owner claims neither story matches the seller's."
  },
  {
    location: "Antique Store",
    situation: "A music box starts playing when one of you enters.",
    complication: "The shopkeeper says it has never worked before."
  },
  {
    location: "Flea Market",
    situation: "You both bargain for the same box of old photographs.",
    complication: "One picture appears to include someone you know."
  },
  {
    location: "Pier",
    situation: "A wallet falls between the boards.",
    complication: "It belongs to neither of you, but contains one of your addresses."
  },
  {
    location: "Marina",
    situation: "A boat drifts loose from its line.",
    complication: "The dockmaster assumes one of you owns it."
  },
  {
    location: "Aquarium",
    situation: "You linger at the same exhibit after closing announcements.",
    complication: "A staff member locks the gallery before noticing you."
  },
  {
    location: "Zoo",
    situation: "An animal escapes into a restricted walkway.",
    complication: "You are both ushered into the same staff room."
  },
  {
    location: "Botanical Garden",
    situation: "The greenhouse doors seal during a systems test.",
    complication: "The temperature begins climbing."
  },
  {
    location: "Cemetery",
    situation: "You arrive at neighboring graves.",
    complication: "The flowers have been placed on the wrong marker."
  },
  {
    location: "Church Basement",
    situation: "A community meeting runs late.",
    complication: "You are volunteered to lock up together."
  },
  {
    location: "Community Center",
    situation: "A room reservation is double-booked.",
    complication: "Both groups are already arriving."
  },
  {
    location: "Public Restroom",
    situation: "A pipe bursts and floods the hallway.",
    complication: "Your belongings are trapped inside opposite stalls."
  },
  {
    location: "Fireworks Show",
    situation: "The crowd separates you from everyone you came with.",
    complication: "One of you receives a text meant for the other."
  },
  {
    location: "New Year's Party",
    situation: "The countdown starts while you are both outside.",
    complication: "The door locks and everyone inside thinks you left together."
  },
  {
    location: "Halloween Party",
    situation: "Your costumes are mistaken for a matching set.",
    complication: "A contest entry has already been submitted under both names."
  },
  {
    location: "Holiday Market",
    situation: "A vendor gives you the same claim ticket.",
    complication: "The item is gone when you return."
  },
  {
    location: "Birthday Party",
    situation: "You both brought the same gift.",
    complication: "The recipient opens them in front of everyone."
  },
  {
    location: "House Party",
    situation: "You are the only two sober people left.",
    complication: "The host disappears and the music will not stop."
  },
  {
    location: "Dinner Party",
    situation: "The host seats you beside each other on purpose.",
    complication: "Neither of you knows why."
  },
  {
    location: "Blind Date Venue",
    situation: "You are both waiting for different people.",
    complication: "The staff assumes you are each other's dates."
  },
  {
    location: "Speed Dating Event",
    situation: "A scheduling mistake leaves you at the same table repeatedly.",
    complication: "The host refuses to move either of you."
  },
  {
    location: "Escape Room",
    situation: "Your groups are merged due to cancellations.",
    complication: "The first clue seems personally aimed at one of you."
  },
  {
    location: "Trivia Night",
    situation: "You are assigned to the same undersized team.",
    complication: "The final category is something neither of you wants discussed."
  },
  {
    location: "Board Game Caf\u00e9",
    situation: "A stranger abandons an unfinished game between you.",
    complication: "The rules require both players to reveal a secret."
  },
  {
    location: "Comic Convention",
    situation: "You are mistaken for part of the same panel.",
    complication: "The moderator introduces you before you can leave."
  },
  {
    location: "Hotel Conference",
    situation: "Your badges list the same company.",
    complication: "An investor asks for your joint proposal."
  },
  {
    location: "Backstage Hallway",
    situation: "You both have passes that should not work.",
    complication: "Security starts checking names."
  },
  {
    location: "Theater Lobby",
    situation: "A performance is canceled without explanation.",
    complication: "One cast member hands you both the same envelope."
  },
  {
    location: "Film Set",
    situation: "A production assistant mistakes you for extras.",
    complication: "The cameras begin rolling before anyone notices."
  },
  {
    location: "Construction Site",
    situation: "You take the same wrong entrance.",
    complication: "A supervisor assumes you are the missing inspectors."
  },
  {
    location: "Warehouse",
    situation: "A delivery is addressed to neither of you.",
    complication: "The driver leaves before you can refuse it."
  },
  {
    location: "Loading Dock",
    situation: "You are both waiting for different shipments.",
    complication: "Only one truck arrives and its paperwork names both recipients."
  },
  {
    location: "Night Shift Break Room",
    situation: "You reach for the last fresh coffee.",
    complication: "An alarm sounds before either of you can drink it."
  },
  {
    location: "Office Stairwell",
    situation: "A drill locks the main doors.",
    complication: "One of you receives a message saying the drill is not real."
  },
  {
    location: "Restaurant Closing Time",
    situation: "You are the last two customers left.",
    complication: "The staff vanishes before bringing the check."
  },
  {
    location: "Convenience Store at 2 A.M.",
    situation: "The clerk steps outside and does not return.",
    complication: "Someone begins knocking from the stockroom."
  },
  {
    location: "Late-Night Drive-Thru",
    situation: "The intercom sends your orders to the wrong cars.",
    complication: "One bag contains something that is not food."
  },
  {
    location: "All-Night Pharmacy",
    situation: "A computer outage stops every transaction.",
    complication: "The employee asks you both to verify a delivery in back."
  },
  {
    location: "Bus Depot",
    situation: "Your tickets show the same seat on the same overnight route.",
    complication: "The bus is already boarding."
  },
  {
    location: "Train Station Caf\u00e9",
    situation: "You both fall asleep waiting for delays to clear.",
    complication: "You wake up after the station has closed."
  },
  {
    location: "Hotel Elevator",
    situation: "It repeatedly returns to the same floor.",
    complication: "The floor does not appear on the directory."
  },
  {
    location: "Apartment Lobby",
    situation: "A delivery driver leaves a large package with you both.",
    complication: "The recipient does not live in the building."
  },
  {
    location: "Neighborhood Watch Meeting",
    situation: "You are the only newcomers present.",
    complication: "Everyone assumes you reported the latest complaint."
  },
  {
    location: "Block Party",
    situation: "A sudden downpour sends everyone under one tent.",
    complication: "The tent begins collapsing on your side."
  },
  {
    location: "Garage Sale",
    situation: "You both find an item connected to your past.",
    complication: "The seller insists it was donated anonymously."
  },
  {
    location: "Bake Sale",
    situation: "Your purchases are boxed together by mistake.",
    complication: "One box contains a note that names one of you."
  },
  {
    location: "Little League Field",
    situation: "A foul ball lands between you.",
    complication: "Two children insist it belongs to them."
  },
  {
    location: "Skate Park",
    situation: "A bag is left unattended near you.",
    complication: "A phone inside begins ringing with one of your numbers."
  },
  {
    location: "Fishing Pier",
    situation: "Your lines tangle beneath the water.",
    complication: "You pull up something neither of you expected."
  },
  {
    location: "Hiking Trail",
    situation: "A trail marker has been removed.",
    complication: "You disagree about which direction leads back."
  },
  {
    location: "Campground",
    situation: "Your sites have the same reservation number.",
    complication: "A storm is moving in before the ranger returns."
  },
  {
    location: "Roadside Lookout",
    situation: "Both of you stop for the same view.",
    complication: "One car door locks with the keys inside."
  },
  {
    location: "Abandoned Lot",
    situation: "You arrive separately to meet different people.",
    complication: "Neither person shows, but the same car circles twice."
  },
  {
    location: "Quiet Residential Street",
    situation: "A house alarm starts as you pass.",
    complication: "A neighbor calls out one of your names."
  },
  {
    location: "Front Porch",
    situation: "You both arrive with keys to the same house.",
    complication: "Neither key belongs to the current owner."
  },
  {
    location: "Backyard",
    situation: "A pet digs under the fence between properties.",
    complication: "It returns carrying something neither of you recognizes."
  },
  {
    location: "Fire Pit",
    situation: "Everyone else leaves unexpectedly.",
    complication: "A forgotten phone begins receiving urgent messages."
  },
  {
    location: "Kitchen",
    situation: "You are both trying to cook for the same person.",
    complication: "The power goes out halfway through."
  },
  {
    location: "Living Room",
    situation: "A gathering becomes uncomfortable and you both step away.",
    complication: "The door back into the party jams."
  },
  {
    location: "Balcony",
    situation: "You hear an argument through the neighboring window.",
    complication: "Someone inside calls for one of you."
  },
  {
    location: "Basement",
    situation: "You are searching for different things.",
    complication: "The lights reveal a locked door neither of you knew existed."
  },
  {
    location: "Attic",
    situation: "A storm forces you to investigate a leak.",
    complication: "You find a box labeled with both surnames."
  },
  {
    location: "Back Office",
    situation: "You are left waiting for different managers.",
    complication: "A security monitor shows someone searching for you."
  },
  {
    location: "Break Room",
    situation: "Someone takes the lunch both of you thought was yours.",
    complication: "The note attached mentions a private detail."
  },
  {
    location: "Conference Room",
    situation: "You are booked for separate meetings.",
    complication: "The presentation screen opens a file neither of you created."
  },
  {
    location: "Supply Closet",
    situation: "The door handle breaks while you are inside.",
    complication: "A meeting you both need to attend is starting nearby."
  },
  {
    location: "Restaurant Patio",
    situation: "Wind scatters papers from both tables.",
    complication: "You each pick up a page that should have stayed private."
  },
  {
    location: "Diner Counter",
    situation: "The cook serves you the same unusual order.",
    complication: "Neither of you ordered it."
  },
  {
    location: "Coffee Drive-Thru",
    situation: "Your drinks are swapped.",
    complication: "One cup has a name neither of you recognizes."
  },
  {
    location: "Food Court",
    situation: "You share the only clean table.",
    complication: "A lost child decides one of you is their parent."
  },
  {
    location: "Grocery Aisle",
    situation: "A shelf collapses beside you.",
    complication: "An employee blames one of you before checking the camera."
  },
  {
    location: "Checkout Line",
    situation: "The register stops working after your items mix together.",
    complication: "The cashier asks you to sort the receipt yourselves."
  },
  {
    location: "Produce Market",
    situation: "You both follow the same handwritten shopping list.",
    complication: "The list includes an address familiar to one of you."
  },
  {
    location: "Butcher Shop",
    situation: "A prepaid order is filed under both surnames.",
    complication: "The clerk refuses to release it without agreement."
  },
  {
    location: "Liquor Store",
    situation: "The doors lock during a security alert.",
    complication: "One of you recognizes the person shown on the monitor."
  },
  {
    location: "Music Festival Shuttle",
    situation: "The driver takes the wrong exit.",
    complication: "Your phones lose service at the same time."
  },
  {
    location: "Sports Arena",
    situation: "Your seats are next to each other in the wrong section.",
    complication: "An usher says the tickets were issued by the same account."
  },
  {
    location: "Stadium Parking Lot",
    situation: "Everyone leaves at once and traffic stops moving.",
    complication: "One of your passengers has vanished."
  },
  {
    location: "Public Tennis Court",
    situation: "The reservation app double-books your hour.",
    complication: "A tournament organizer arrives and assumes you are a team."
  },
  {
    location: "Basketball Court",
    situation: "A pickup game is short two players.",
    complication: "You are volunteered despite very different skill levels."
  },
  {
    location: "Community Theater",
    situation: "A cast member fails to appear.",
    complication: "The director decides one of you can fill in and the other can coach."
  },
  {
    location: "Choir Rehearsal",
    situation: "You are both seated in the wrong section.",
    complication: "The conductor starts before anyone corrects it."
  },
  {
    location: "Recording Booth",
    situation: "The door locks during a test recording.",
    complication: "The playback includes a voice neither of you made."
  },
  {
    location: "Podcast Studio",
    situation: "The scheduled guest cancels.",
    complication: "The host decides to interview both of you instead."
  },
  {
    location: "Local TV Station",
    situation: "A producer mistakes you for the morning segment guests.",
    complication: "The red light turns on."
  },
  {
    location: "Newspaper Archive",
    situation: "You request the same old issue.",
    complication: "A page has been cut out where one of you expected an article."
  },
  {
    location: "Community Radio Fundraiser",
    situation: "You are put on phones together.",
    complication: "The same anonymous caller keeps asking for one of you."
  },
  {
    location: "Repair Shop",
    situation: "Your devices have identical cases.",
    complication: "The technician returns the wrong one to each of you."
  },
  {
    location: "Electronics Store",
    situation: "A demo screen displays one of your private photos.",
    complication: "Staff cannot figure out which device is connected."
  },
  {
    location: "Photo Booth",
    situation: "The curtain opens mid-session.",
    complication: "The machine prints an extra strip featuring neither of you."
  },
  {
    location: "Passport Office",
    situation: "Your documents are clipped together.",
    complication: "One form lists the same emergency contact."
  },
  {
    location: "Embassy Waiting Room",
    situation: "An evacuation drill moves everyone outside.",
    complication: "Your bags are left behind in the same locked room."
  },
  {
    location: "Immigration Desk",
    situation: "A system error links your appointment numbers.",
    complication: "The officer asks how you know each other."
  },
  {
    location: "Baggage Claim",
    situation: "You both grab identical suitcases.",
    complication: "Neither suitcase belongs to either of you."
  },
  {
    location: "Rental Car Counter",
    situation: "Only one vehicle remains.",
    complication: "Both reservations are marked priority."
  },
  {
    location: "Ferry Terminal",
    situation: "The final crossing is canceled.",
    complication: "A staff member offers one unusual alternative."
  },
  {
    location: "Ferry Deck",
    situation: "A gust blows one of your belongings over the rail.",
    complication: "The other person catches it but drops something of their own."
  },
  {
    location: "Harbor Walk",
    situation: "You hear someone calling from a moored boat.",
    complication: "The gangway is locked."
  },
  {
    location: "Beach Parking Lot",
    situation: "A storm surge blocks the exit.",
    complication: "One vehicle sits higher, but belongs to neither of you."
  },
  {
    location: "Lighthouse Grounds",
    situation: "You arrive after the gates close.",
    complication: "The beacon suddenly goes dark."
  },
  {
    location: "Mountain Lodge",
    situation: "A reservation error puts you in the same cabin.",
    complication: "The road back closes for the night."
  },
  {
    location: "Ski Lift",
    situation: "The lift stops above the slope.",
    complication: "One of you receives bad news while trapped there."
  },
  {
    location: "Cabin Porch",
    situation: "Something keeps moving near the tree line.",
    complication: "The only flashlight has dying batteries."
  },
  {
    location: "Ranger Station",
    situation: "You report separate problems in the same area.",
    complication: "The ranger believes they are connected."
  },
  {
    location: "Nature Center",
    situation: "A storm warning sends everyone to shelter.",
    complication: "You are asked to account for one missing visitor."
  },
  {
    location: "Farm Stand",
    situation: "The honor box is short money.",
    complication: "The owner assumes one of you witnessed what happened."
  },
  {
    location: "Horse Stable",
    situation: "A horse breaks loose between you.",
    complication: "It responds only when both of you approach."
  },
  {
    location: "County Fair",
    situation: "A ride stops at the highest point.",
    complication: "One of you knows the operator personally."
  },
  {
    location: "Carnival Game",
    situation: "You win a prize neither of you wants.",
    complication: "A child claims you promised it to them."
  },
  {
    location: "Ferris Wheel",
    situation: "The ride pauses for maintenance.",
    complication: "You can see someone below doing something they should not."
  },
  {
    location: "Haunted House",
    situation: "A staff exit opens into a real storage corridor.",
    complication: "The door shuts behind you."
  },
  {
    location: "Corn Maze",
    situation: "You both insist you know the way out.",
    complication: "A voice over the speakers starts giving one of you directions."
  },
  {
    location: "Pumpkin Patch",
    situation: "You choose the same pumpkin.",
    complication: "A hidden object rattles inside it."
  },
  {
    location: "Christmas Tree Lot",
    situation: "A tree falls across the exit.",
    complication: "Your vehicles are trapped on opposite sides."
  },
  {
    location: "Ice Storm Shelter",
    situation: "The building fills beyond capacity.",
    complication: "You are assigned the same emergency supply kit."
  },
  {
    location: "Election Polling Place",
    situation: "A machine lists one of you at the other's address.",
    complication: "The line behind you grows impatient."
  },
  {
    location: "Town Hall Meeting",
    situation: "You sit in the only two empty seats.",
    complication: "The moderator calls you forward as representatives."
  },
  {
    location: "Protest March",
    situation: "The crowd surges and separates you from your groups.",
    complication: "A police barrier closes behind you."
  },
  {
    location: "Press Conference",
    situation: "You are both mistaken for reporters.",
    complication: "The speaker points to one of you for the first question."
  },
  {
    location: "Public Hearing",
    situation: "You submit comments on opposite sides of an issue.",
    complication: "A clerical mistake combines your statements."
  },
  {
    location: "Neighborhood Cleanup",
    situation: "You are assigned the same block.",
    complication: "You find something that should be reported."
  },
  {
    location: "Recycling Center",
    situation: "Your boxes spill and mix together.",
    complication: "One item reveals more than either of you intended."
  },
  {
    location: "Dump Site",
    situation: "You arrive to discard unrelated things.",
    complication: "A worker says both items came from the same address."
  },
  {
    location: "Lost and Found",
    situation: "You claim similar objects.",
    complication: "The attendant asks a question neither of you can answer."
  },
  {
    location: "Security Office",
    situation: "You are both reviewing different camera incidents.",
    complication: "The footage shows you crossing paths before today."
  },
  {
    location: "Building Management Office",
    situation: "You file separate complaints.",
    complication: "The manager says both problems trace back to the same unit."
  },
  {
    location: "Lease Signing",
    situation: "Two folders contain the same apartment number.",
    complication: "The property manager is suddenly unreachable."
  },
  {
    location: "Apartment Viewing",
    situation: "You arrive for the same private tour.",
    complication: "The realtor says one of you already submitted an application."
  },
  {
    location: "Key Exchange",
    situation: "A lockbox contains two keys and one note.",
    complication: "The note addresses both of you by first name."
  },
  {
    location: "Moving Day",
    situation: "Your boxes are unloaded into the same hallway.",
    complication: "The labels have been smeared by rain."
  },
  {
    location: "Housewarming Party",
    situation: "You both bring gifts for different hosts.",
    complication: "The address belongs to neither party."
  },
  {
    location: "Neighbor's Porch",
    situation: "A delivered meal sits unattended.",
    complication: "The receipt lists both of your phone numbers."
  },
  {
    location: "Maintenance Closet",
    situation: "A leaking pipe brings you both looking for help.",
    complication: "The shutoff valve is behind a locked panel."
  },
  {
    location: "Laundry Room",
    situation: "The lights go out during the final cycle.",
    complication: "Someone removes a load before they return."
  },
  {
    location: "Trash Room",
    situation: "A bag splits open as you enter.",
    complication: "Something inside belongs to one of you."
  },
  {
    location: "Package Locker",
    situation: "The screen assigns both of you the same compartment.",
    complication: "Inside is a sealed envelope, not a package."
  },
  {
    location: "Lobby Desk",
    situation: "The concierge asks you to verify each other's identities.",
    complication: "A visitor claims to know both of you."
  },
  {
    location: "Resident Meeting",
    situation: "A disputed vote ends in a tie.",
    complication: "You are both selected to settle it."
  },
  {
    location: "Apartment Courtyard",
    situation: "A sprinkler malfunction soaks the gathering.",
    complication: "The gate locks before everyone can leave."
  },
  {
    location: "Shared Balcony",
    situation: "A dropped object lands between your units.",
    complication: "Neither of you admits owning it."
  },
  {
    location: "Fire Alarm Assembly Point",
    situation: "Residents are grouped by floor.",
    complication: "You are both listed in the wrong building."
  },
  {
    location: "Late-Night Hallway",
    situation: "You hear music from an empty apartment.",
    complication: "The door opens when one of you knocks."
  },
  {
    location: "Building Roof",
    situation: "You both go up for privacy.",
    complication: "A locked access door leaves you stranded outside."
  },
  {
    location: "Mailboxes",
    situation: "A handwritten letter is wedged between your boxes.",
    complication: "It begins with both of your names."
  },
  {
    location: "Intercom",
    situation: "A visitor buzzes both units at once.",
    complication: "They refuse to say who they came to see."
  },
  {
    location: "Front Steps",
    situation: "You are both waiting for rides that never arrive.",
    complication: "The same car circles the block repeatedly."
  },
  {
    location: "Neighborhood Caf\u00e9",
    situation: "The owner asks you to watch the counter briefly.",
    complication: "A customer arrives with an urgent request."
  },
  {
    location: "Local Bakery",
    situation: "You both volunteer to carry a large order.",
    complication: "The delivery address has been written incorrectly."
  },
  {
    location: "Corner Barbershop",
    situation: "A sudden outage stops every appointment.",
    complication: "Someone in the waiting area recognizes one of you."
  },
  {
    location: "Neighborhood Clinic",
    situation: "Walk-in appointments are running hours late.",
    complication: "You are asked to complete forms for each other after a mix-up."
  },
  {
    location: "Public Playground",
    situation: "A child hands you both the same lost object.",
    complication: "No guardian claims it."
  },
  {
    location: "Community Bulletin Board",
    situation: "You reach for the same tear-off number.",
    complication: "The notice has no date and a familiar handwriting style."
  },
  {
    location: "Neighborhood Association Office",
    situation: "You are both accused of submitting the same complaint.",
    complication: "Neither of you wrote it."
  },
  {
    location: "Local Election Office",
    situation: "Your signatures appear on the same petition.",
    complication: "One of you never signed it."
  },
  {
    location: "Street Corner",
    situation: "A reporter asks you both about an incident.",
    complication: "Your accounts contradict each other."
  },
  {
    location: "Crosswalk in Heavy Rain",
    situation: "An umbrella flips inside out between you.",
    complication: "One of your phones slides into the street."
  },
  {
    location: "Taxi Back Seat",
    situation: "You both enter from opposite doors.",
    complication: "The driver pulls away before either of you gets out."
  },
  {
    location: "Wrong Apartment",
    situation: "You both knock on the same door.",
    complication: "The person inside knows one of your names."
  },
  {
    location: "Wrong Number Call",
    situation: "You arrive after receiving similar urgent messages.",
    complication: "The caller stops responding once you meet."
  },
  {
    location: "Accidental Group Chat",
    situation: "You both appear in a private conversation by mistake.",
    complication: "Someone sends a message that changes the context entirely."
  },
  {
    location: "Misdelivered Invitation",
    situation: "You attend the same event under different assumptions.",
    complication: "The host welcomes neither of you by name."
  },
  {
    location: "Shared Calendar Error",
    situation: "You are scheduled for the same appointment.",
    complication: "The organizer insists you requested it together."
  },
  {
    location: "Duplicate Reservation",
    situation: "Your names appear on the same booking.",
    complication: "Canceling one reservation will cancel both."
  },
  {
    location: "Mistaken Identity",
    situation: "A stranger approaches one of you as the other.",
    complication: "The information they share is too specific to ignore."
  },
  {
    location: "Wrong Coat",
    situation: "You each leave wearing the other's coat.",
    complication: "An important item is discovered in one pocket."
  },
  {
    location: "Switched Phones",
    situation: "Identical cases cause a mix-up.",
    complication: "A message arrives before you can switch them back."
  },
  {
    location: "Mixed-Up Orders",
    situation: "Two deliveries arrive with crossed labels.",
    complication: "One package contains something personal."
  },
  {
    location: "Shared Emergency Contact",
    situation: "A form lists the same person for both of you.",
    complication: "Neither understands why."
  },
  {
    location: "Anonymous Tip",
    situation: "You receive the same message separately.",
    complication: "It tells each of you not to trust the other."
  },
  {
    location: "Found Photograph",
    situation: "You both recognize different people in the same picture.",
    complication: "The date on the back should be impossible."
  },
  {
    location: "Lost Wallet",
    situation: "You both try to return it.",
    complication: "The identification inside belongs to someone one of you knows."
  },
  {
    location: "Dropped Journal",
    situation: "You reach it at the same time.",
    complication: "The open page mentions one of you."
  },
  {
    location: "Unclaimed Keys",
    situation: "A ring of keys is found between you.",
    complication: "One key opens something nearby."
  },
  {
    location: "Stray Voicemail",
    situation: "The same recording is sent to both phones.",
    complication: "The speaker addresses you together."
  },
  {
    location: "Power Failure",
    situation: "The room goes dark during a tense moment.",
    complication: "When the lights return, something has changed places."
  },
  {
    location: "Fire Drill",
    situation: "Everyone evacuates through different exits.",
    complication: "You are both directed to wait for questioning."
  },
  {
    location: "Water Main Break",
    situation: "The street floods without warning.",
    complication: "You have to move one stalled vehicle together."
  },
  {
    location: "False Alarm",
    situation: "An emergency alert sends everyone indoors.",
    complication: "The message disappears from both phones."
  },
  {
    location: "Locked Door",
    situation: "You are stranded on opposite sides of the same entrance.",
    complication: "Only one of you has a key, and it does not fit."
  },
  {
    location: "Missing Person Search",
    situation: "You volunteer separately.",
    complication: "Both of you receive the same private instruction."
  },
  {
    location: "Lost Child Search",
    situation: "You are assigned the same area.",
    complication: "The child appears to recognize one of you."
  },
  {
    location: "Neighborhood Search Party",
    situation: "A personal item is found near you.",
    complication: "Someone assumes it belongs to one of you."
  },
  {
    location: "Unexpected Delivery",
    situation: "A courier insists you must sign together.",
    complication: "The sender used a name neither of you recognizes."
  },
  {
    location: "Unplanned Road Trip",
    situation: "Transportation falls through for both of you.",
    complication: "The only available ride is going in the right direction for one person."
  },
  {
    location: "Shared Ride Home",
    situation: "A friend volunteers one car for both of you.",
    complication: "The driver abandons the trip halfway through."
  },
  {
    location: "Missed Connection",
    situation: "You both wait for people who never arrive.",
    complication: "The same cancellation message reaches both phones."
  },
  {
    location: "Last Table",
    situation: "A crowded place seats you together.",
    complication: "Someone nearby is openly listening to your conversation."
  },
  {
    location: "Last Ticket",
    situation: "You both attempt to buy it.",
    complication: "The seller proposes an unusual condition."
  },
  {
    location: "Last Room",
    situation: "A booking system error gives you both access.",
    complication: "The storm outside makes leaving unsafe."
  },
  {
    location: "Last Train",
    situation: "You board moments before the doors close.",
    complication: "The train skips your intended stop."
  },
  {
    location: "Last Bus",
    situation: "Only one seat remains.",
    complication: "The driver says one passenger must help with a problem first."
  },
  {
    location: "Last Ferry",
    situation: "The crew counts one extra passenger.",
    complication: "Your tickets have the same serial number."
  },
  {
    location: "Last Elevator Ride",
    situation: "The building is closing for the night.",
    complication: "The elevator opens on a floor neither selected."
  },
  {
    location: "Last Call",
    situation: "The bar is clearing out.",
    complication: "A tab has been left open under both of your names."
  },
  {
    location: "Closing Time",
    situation: "You are the final customers in a store.",
    complication: "The staff accidentally locks you inside."
  }
];
