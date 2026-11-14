import type { Plant } from '../types';

export const mockPlants: readonly Plant[] = [
  {
    id: 'smaragdna-tuja',
    name: 'Smaragdna tuja',
    latinName: "Thuja occidentalis 'Smaragd'",
    categoryId: 'cetinari',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    priceRsd: 1450,
    height: '100-120 cm',
    potSize: 'C5',
    shortDescription:
      'Gusta, stubasta četinarka idealna za živu ogradu i uredne vrtne linije. Zadržava svežu zelenu boju tokom cele godine i odlično podnosi oblikovanje.',
    care: {
      sun: 'Puno sunce do polusenka; najbolje napreduje na svetlim položajima.',
      watering: 'Umereno zalivanje, posebno tokom prve godine i letnjih suša.',
      soil: 'Propusno, plodno zemljište bez zadržavanja vode.',
      planting: 'Najbolje saditi u proleće ili ranu jesen uz obilno zalivanje.',
      hardiness: 'Vrlo otporna na niske temperature i zimske uslove.',
    },
  },
  {
    id: 'plava-kleka-blue-arrow',
    name: 'Plava kleka Blue Arrow',
    latinName: "Juniperus scopulorum 'Blue Arrow'",
    categoryId: 'cetinari',
    image:
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    priceRsd: 3200,
    height: '120-150 cm',
    potSize: 'C10',
    shortDescription:
      'Uska, elegantna kleka plavkastih iglica koja unosi vertikalni akcenat i moderan karakter. Odličan izbor za istaknute pozicije i manje vrtove.',
    care: {
      sun: 'Najbolje raste na punom suncu.',
      watering: 'Štedljivo zalivanje; podnosi sušu kada se ukoreni.',
      soil: 'Suvo do umereno vlažno, dobro drenirano zemljište.',
      planting: 'Sadnja u proleće ili jesen, uz rahlo zemljište oko korena.',
      hardiness: 'Izuzetno otporna na mraz i vetrovita staništa.',
    },
    badge: 'Novo',
  },
  {
    id: 'japanski-javor',
    name: 'Japanski javor',
    latinName: "Acer palmatum 'Atropurpureum'",
    categoryId: 'liscari',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    priceRsd: 3800,
    height: '60-80 cm',
    potSize: 'C5',
    shortDescription:
      'Dekorativno drvo nežne krošnje i tamnocrvenog lišća koje stvara prefinjen fokalni tačku. Posebno je atraktivno u proleće i jesen.',
    care: {
      sun: 'Polusenka do svetla senka, zaštićeno od jakog podnevnog sunca.',
      watering: 'Redovno umereno zalivanje bez potapanja korena.',
      soil: 'Blago kiselo, humusno i propusno zemljište.',
      planting: 'Preporučuje se sadnja u proleće na zaklonjenijem mestu.',
      hardiness: 'Dobro podnosi hladnoće uz zaštitu od jakih vetrova.',
    },
  },
  {
    id: 'magnolija',
    name: 'Magnolija',
    latinName: 'Magnolia x soulangeana',
    categoryId: 'liscari',
    image:
      'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80',
    priceRsd: 5900,
    height: '120-150 cm',
    potSize: 'C10',
    shortDescription:
      'Raskošna magnolija krupnih cvetova koji najavljuju proleće i daju dvorištu romantičan izgled. Cenjena je zbog dekorativnog cvetanja i skladne krošnje.',
    care: {
      sun: 'Sunčano do polusenovito mesto, bez jakih vetrova.',
      watering: 'Redovno zalivanje u periodu rasta i tokom sušnih dana.',
      soil: 'Humusno, blago kiselo i dobro drenirano tlo.',
      planting: 'Sadnja u proleće ili jesen, uz pažljivo rukovanje korenom.',
      hardiness: 'Otporna na niske temperature, ali cvetovi traže zaštitu od kasnih mrazeva.',
    },
  },
  {
    id: 'lavanda',
    name: 'Lavanda',
    latinName: "Lavandula angustifolia 'Hidcote'",
    categoryId: 'cvetnice',
    image:
      'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1200&q=80',
    priceRsd: 490,
    height: '25-30 cm',
    potSize: 'C2',
    shortDescription:
      'Mirisna mediteranska trajnica ljubičastih cvetova, savršena za bordure, kamenjare i saksije. Privlači pčele i unosi miris leta u svaki kutak.',
    care: {
      sun: 'Puno sunce tokom većeg dela dana.',
      watering: 'Umereno i retko; ne voli previše vlage.',
      soil: 'Lako, peskovito i odlično drenirano zemljište.',
      planting: 'Sadnja u proleće nakon prolaznih mrazeva.',
      hardiness: 'Dobra otpornost uz suvo zemljište i sunčan položaj.',
    },
  },
  {
    id: 'hortenzija',
    name: 'Hortenzija',
    latinName: 'Hydrangea macrophylla',
    categoryId: 'cvetnice',
    image:
      'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=1200&q=80',
    priceRsd: 980,
    oldPriceRsd: 1190,
    height: '40-50 cm',
    potSize: 'C3',
    shortDescription:
      'Bujna cvetnica velikih cvasti koje obogaćuju terase i polusenovite delove bašte. Daje raskošan vizuelni efekat od leta do jeseni.',
    care: {
      sun: 'Polusenka ili jutarnje sunce uz zaštitu od jakog popodnevnog zagrevanja.',
      watering: 'Redovno i obilnije zalivanje, naročito u toplim danima.',
      soil: 'Vlažno, humusno i blago kiselo zemljište.',
      planting: 'Najbolje saditi u proleće ili ranu jesen.',
      hardiness: 'Otporna na hladnoću, uz zaštitu pupoljaka u oštrijim zimama.',
    },
    badge: 'Akcija',
  },
  {
    id: 'jabuka-zlatni-delises',
    name: 'Jabuka Zlatni delišes',
    latinName: "Malus domestica 'Golden Delicious'",
    categoryId: 'vocne',
    image:
      'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=1200&q=80',
    priceRsd: 1800,
    height: '150-180 cm',
    potSize: 'C10',
    shortDescription:
      'Pouzdana voćna sorta slatkih, aromatičnih plodova zlatnožute boje. Odlična za porodične voćnjake i ljubitelje domaćih jabuka.',
    care: {
      sun: 'Puno sunce za obilniji rod i kvalitet plodova.',
      watering: 'Umereno zalivanje, češće u prvoj godini i tokom suša.',
      soil: 'Plodno, umereno vlažno i propusno zemljište.',
      planting: 'Sadnja u jesen ili rano proleće na otvorenom položaju.',
      hardiness: 'Dobra otpornost na niske temperature i tipične baštenske uslove.',
    },
  },
  {
    id: 'visnja-oblacinska',
    name: 'Višnja Oblačinska',
    latinName: "Prunus cerasus 'Oblačinska'",
    categoryId: 'vocne',
    image:
      'https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=1200&q=80',
    priceRsd: 1650,
    height: '120-150 cm',
    potSize: 'C10',
    shortDescription:
      'Tradicionalna sorta cenjena zbog pouzdanog roda i plodova punog ukusa. Idealan izbor za preradu, sokove, kolače i uživanje iz bašte.',
    care: {
      sun: 'Otvoren i sunčan položaj.',
      watering: 'Redovno zalivanje u periodu ukorenjavanja i formiranja plodova.',
      soil: 'Plodno, umereno vlažno zemljište dobre propusnosti.',
      planting: 'Preporučljiva sadnja u jesen ili rano proleće.',
      hardiness: 'Veoma dobro prilagođena domaćim klimatskim uslovima.',
    },
  },
] as const;
