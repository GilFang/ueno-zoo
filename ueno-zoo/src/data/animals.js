const animals = [
  {
  "id": 1,
  "name": "Galapagos Tortoise",
  "scientificName": "Chelonoidis niger",
  "type": "Reptile",
  "habitat": "Grasslands and desert",
  "diet": "Herbivore",
  "fact": "They are the largest tortoises in the world and can live over 100 years."
  },
  {
    "id": 2,
    "name": "Saltwater Crocodile",
    "scientificName": "Crocodylus porosus",
    "type": "Reptile",
    "habitat": "Coastal rivers and swamps",
    "diet": "Carnivore",
    "fact": "They have the strongest bite of any living animal—up to 3,700 PSI."
  },
  {
    "id": 3,
    "name": "Green Iguana",
    "scientificName": "Iguana iguana",
    "type": "Reptile",
    "habitat": "Tropical forests",
    "diet": "Herbivore",
    "fact": "They can detach and regrow their tails if caught."
  },
  {
    "id": 4,
    "name": "Red-Footed Tortoise",
    "scientificName": "Chelonoidis carbonaria",
    "type": "Reptile",
    "habitat": "Dry and wet forests, grasslands, savannas",
    "diet": "Primarily herbivore, occasionally small animals",
    "fact": "Males flip rivals onto their backs during mating season fights."
  },
  {
    "id": 5,
    "name": "Pig-Nosed Turtle",
    "scientificName": "Carettochelys insculpta",
    "type": "Reptile",
    "habitat": "Warm, tropical bodies of water",
    "diet": "Omnivore (mostly plants)",
    "fact": "Its leathery shell makes it extra flexible for swimming."
  },
  {
    "id": 6,
    "name": "Asian Arowana",
    "scientificName": "Scleropages formosus",
    "type": "Fish",
    "habitat": "Lowland swamps and rivers",
    "diet": "Carnivore",
    "fact": "Also called the 'dragonfish' for its red color and jumping ability."
  },
  {
    "id": 7,
    "name": "African Bullfrog",
    "scientificName": "Pyxicephalus adspersus",
    "type": "Amphibian",
    "habitat": "Dry and moist savanna, shrubland",
    "diet": "Invertebrates, lizards, birds, small mammals",
    "fact": "They stay underground up to 10 months during the dry season."
  },
  {
    "id": 8,
    "name": "Dyeing Poison Dart Frog",
    "scientificName": "Dendrobates tinctorius",
    "type": "Amphibian",
    "habitat": "Tropical forests",
    "diet": "Insectivore",
    "fact": "Their bright colors warn predators that they’re toxic."
  },
  {
    "id": 9,
    "name": "False Gharial",
    "scientificName": "Tomistoma schlegelii",
    "type": "Reptile",
    "habitat": "Freshwater with dense vegetation",
    "diet": "Carnivore",
    "fact": "Their long, narrow snouts help catch fish efficiently."
  },
  {
    "id": 10,
    "name": "Western Hognose Snake",
    "scientificName": "Heterodon nasicus",
    "type": "Reptile",
    "habitat": "Flat prairie areas with sandy soil",
    "diet": "Toads, lizards, reptile eggs",
    "fact": "They use their upturned snouts to burrow for food."
  },
  {
    "id": 11,
    "name": "Flamingo",
    "scientificName": "Phoenicopterus",
    "type": "Bird",
    "habitat": "Lakes, lagoons, wetlands",
    "diet": "Algae, brine shrimp",
    "fact": "Their pink color comes from pigments in the algae and shrimp they eat."
  },
  {
    "id": 12,
    "name": "Shoebill",
    "scientificName": "Balaeniceps rex",
    "type": "Bird",
    "habitat": "Swamps and wetlands in Central Africa",
    "diet": "Fish, frogs, reptiles",
    "fact": "Shoebills can stand completely still for hours and catch lungfish with their huge beaks."
  },
  {
    "id": 13,
    "name": "Giraffe",
    "scientificName": "Giraffa",
    "type": "Mammal",
    "habitat": "Savannas and open woodlands",
    "diet": "Leaves, especially acacia",
    "fact": "They use their 45 cm long tongues to reach leaves high in the trees."
  },
  {
    "id": 14,
    "name": "Black Rhino",
    "scientificName": "Diceros bicornis",
    "type": "Mammal",
    "habitat": "Savannas, grasslands, forests",
    "diet": "Leaves, twigs, shrubs",
    "fact": "Their two horns grow throughout their lives, like fingernails."
  },
  {
    "id": 15,
    "name": "Penguin",
    "scientificName": "Spheniscidae",
    "type": "Bird",
    "habitat": "Antarctic and sub-Antarctic regions, coastal areas",
    "diet": "Fish, squid, krill",
    "fact": "Penguins can't fly, but they are excellent swimmers and slide on ice."
  },
  {
    "id": 16,
    "name": "Ring-Tailed Lemur",
    "scientificName": "Lemur catta",
    "type": "Mammal",
    "habitat": "Forests and scrublands of Madagascar",
    "diet": "Fruits, leaves, flowers",
    "fact": "They use scent glands to mark territory and have many vocal calls."
  },
  {
    "id": 17,
    "name": "Hippo",
    "scientificName": "Hippopotamus amphibius",
    "type": "Mammal",
    "habitat": "Rivers, lakes, swamps",
    "diet": "Grasses, aquatic plants",
    "fact": "Hippos stay in water during the day to keep cool and graze at night."
  },
  {
    "id": 18,
    "name": "Asian Elephant",
    "scientificName": "Elephas maximus",
    "type": "Mammal",
    "habitat": "Tropical forests, grasslands",
    "diet": "Grasses, fruits, bark, roots",
    "fact": "Asian elephants live in matriarchal groups and feed most of the day."
  },
  {
    "id": 19,
    "name": "Sumatran Tiger",
    "scientificName": "Panthera tigris sumatrae",
    "type": "Mammal",
    "habitat": "Tropical rainforests of Sumatra",
    "diet": "Deer, wild boar, birds",
    "fact": "They are the smallest tiger species and enjoy swimming to cool off."
  },
  {
    "id": 20,
    "name": "Gorilla",
    "scientificName": "Gorilla",
    "type": "Mammal",
    "habitat": "Forests of Central Africa",
    "diet": "Fruits, leaves, shoots",
    "fact": "Gorillas live in family groups and share 98.3% of our DNA."
  },
  {
    "id": 21,
    "name": "Polar Bear",
    "scientificName": "Ursus maritimus",
    "type": "Mammal",
    "habitat": "Arctic sea ice",
    "diet": "Seals, fish",
    "fact": "Polar bears have black skin and translucent fur that looks white because it reflects light. They can swim for days nonstop."
  },
  {
    "id": 22,
    "name": "Colobus Monkey",
    "scientificName": "Colobus",
    "type": "Mammal (primate)",
    "habitat": "Forests of Central and East Africa",
    "diet": "Leaves, fruits, flowers",
    "fact": "Colobus monkeys can digest toxic plants and spend most of their time in the trees."
  },
  {
    "id": 23,
    "name": "Black-handed Spider Monkey",
    "scientificName": "Ateles geoffroyi",
    "type": "Mammal (primate)",
    "habitat": "Tropical forests of Central America",
    "diet": "Fruits, leaves, flowers",
    "fact": "They have prehensile tails with unique prints, used like a fifth limb for grabbing and hanging."
  },
  {
    "id": 24,
    "name": "Japanese Macaque",
    "scientificName": "Macaca fuscata",
    "type": "Mammal (primate)",
    "habitat": "Mountains and forests of Japan (Honshu, Shikoku, Kyushu)",
    "diet": "Fruits, leaves, seeds, insects",
    "fact": "Japanese macaques, or snow monkeys, bathe in hot springs to stay warm during winter."
  },
  {
    "id": 25,
    "name": "African White-backed Vulture",
    "scientificName": "Gyps africanus",
    "type": "Bird (raptor)",
    "habitat": "Savannas and open woodlands of sub-Saharan Africa",
    "diet": "Carrion",
    "fact": "These vultures often feed in large groups and can strip a carcass in under three minutes."
  },
  {
    "id": 26,
    "name": "Andean Condor",
    "scientificName": "Vultur gryphus",
    "type": "Bird (raptor)",
    "habitat": "Mountains and coastal regions of South America",
    "diet": "Carrion",
    "fact": "Andean condors can soar up to 18,000 feet and are the largest flying birds in South America."
  },
  {
    "id": 27,
    "name": "Harris Hawk",
    "scientificName": "Parabuteo unicinctus",
    "type": "Bird (raptor)",
    "habitat": "Semiarid deserts of the Americas",
    "diet": "Small mammals, birds, reptiles",
    "fact": "Harris hawks perform 'back-standing' and are unusually social for raptors."
  },
  {
    "id": 28,
    "name": "Steller’s Sea Eagle",
    "scientificName": "Haliaeetus pelagicus",
    "type": "Bird (raptor)",
    "habitat": "Coasts and islands of eastern Russia and northern Japan",
    "diet": "Fish, water birds",
    "fact": "One of the rarest raptors, they breed only in eastern Russia but migrate to Hokkaido in winter."
  },
  {
    "id": 29,
    "name": "Prairie Dog",
    "scientificName": "Cynomys",
    "type": "Mammal (rodent)",
    "habitat": "Grasslands of North America",
    "diet": "Grasses, seeds, roots",
    "fact": "Prairie dogs have a complex communication system and a mating season lasting only one hour."
  },
  {
    "id": 30,
    "name": "American Bison",
    "scientificName": "Bison bison",
    "type": "Mammal",
    "habitat": "Plains and prairies of North America",
    "diet": "Grasses, herbs",
    "fact": "Bison can run faster than a horse, and calves are called 'red dogs' due to their orange-red fur."
  }

];

export default animals;