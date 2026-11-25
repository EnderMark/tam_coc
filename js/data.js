/**
 * Dati strutturati per la visita di 2 giorni / 2 notti a Tam Cốc (Ninh Bình, Vietnam)
 * Partenza: oggi alle ore 12:00 · Soggiorno: 2 notti
 */

export const EXCHANGE_RATE_VND_PER_EUR = 27500;

export const ITINERARY_DAYS = [
  {
    id: 'day1',
    dayOffset: 0,
    shortLabel: 'Giorno 1',
    periodLabel: 'Da mezzogiorno · Notte 1',
    title: 'Arrivo, Grotte di Tam Cốc e Tramonto a Bích Động',
    summary:
      'Inizio alle 12:00 nel cuore di Tam Cốc: check-in tra le risaie, barca a remi lungo il fiume Ngô Đồng e pagoda nella roccia al tramonto.',
    stops: [
      {
        id: 'd1-checkin',
        time: '12:00',
        duration: '45 min',
        transport: 'Arrivo & Bici',
        title: 'Arrivo a Tam Cốc & Check-in in Homestay',
        subtitle: 'Villaggio di Văn Lâm · Zona Tam Cốc',
        description:
          'Arrivo a mezzogiorno, deposito bagagli o check-in anticipato in bungalow vista picchi carsici. Noleggia subito una bicicletta (spesso gratuita in homestay) o uno scooter per muoverti in autonomia.',
        tip: 'Scegli una struttura leggermente defilata dalla via principale (zona Đam Khê o verso Bích Động) per dormire nel silenzio assoluto tra le risaie.',
        costVnd: 120000,
        costLabel: 'Noleggio scooter ~120.000 VND/giorno (bici spesso inclusa)',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tam+Coc+Ninh+Binh+Vietnam',
        mapPinId: 'tam-coc-pier',
      },
      {
        id: 'd1-lunch',
        time: '12:45',
        duration: '1h 15m',
        transport: 'A piedi',
        title: 'Pranzo locale: primi sapori di Ninh Bình',
        subtitle: 'Centro di Tam Cốc',
        description:
          'Pausa pranzo leggera prima della barca. Prova il Cơm cháy (riso croccante tipico della provincia), involtini primavera freschi o una ciotola di Bún chả con erbe aromatiche.',
        tip: 'Se preferisci cucina locale autentica e veloce, cerca i piccoli locali familiari lungo la strada verso il molo o la zona di Chookie’s / Minh Khoi.',
        costVnd: 160000,
        costLabel: '~150.000–180.000 VND a persona',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tam+Coc+restaurants+Ninh+Binh',
        mapPinId: 'tam-coc-pier',
      },
      {
        id: 'd1-boat',
        time: '14:30',
        duration: '2h',
        transport: 'Barca a remi',
        title: 'Navigazione sul fiume Ngô Đồng e le Tre Grotte',
        subtitle: 'Molo di Tam Cốc (Bến thuyền Tam Cốc)',
        description:
          'L’esperienza simbolo di Tam Cốc: due ore a bordo di un sampan tradizionale remato con i piedi dai barcaioli locali, attraversando Hang Cả, Hang Hai e Hang Ba tra pareti verticali di calcare.',
        tip: 'Partire verso le 14:30 permette di evitare il picco dei bus giornalieri da Hanoi e di godere della luce calda del pomeriggio sulle risaie. Porta 50.000–100.000 VND in contanti per la mancia al barcaiolo.',
        costVnd: 375000,
        costLabel: '250.000 VND ingresso + 250.000 VND barca (divisibile in 2)',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tam+Coc+Boat+Pier+Ninh+Binh',
        mapPinId: 'tam-coc-pier',
      },
      {
        id: 'd1-bichdong',
        time: '16:45',
        duration: '1h 30m',
        transport: 'Bici · 10 min',
        title: 'Pagoda di Bích Động al tramonto',
        subtitle: 'Chùa Bích Động · 2,5 km dal molo',
        description:
          'Pedalata pianeggiante tra i picchi carsici fino al celebre ponte in pietra sul laghetto di loto. Esplora i tre livelli della pagoda del XV secolo (Hạ, Trung e Thượng) scavati nella montagna.',
        tip: 'L’ingresso alla pagoda è gratuito; si paga solo il parcheggio bici/scooter (~10.000–20.000 VND). Sali fino alla pagoda superiore (Thượng) per la vista sul tramonto.',
        costVnd: 15000,
        costLabel: 'Ingresso gratuito · Parcheggio ~15.000 VND',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bich+Dong+Pagoda+Ninh+Binh',
        mapPinId: 'bich-dong',
      },
      {
        id: 'd1-dinner',
        time: '19:30',
        duration: '1h 30m',
        transport: 'A piedi / Bici',
        title: 'Cena di specialità locali & Notte 1 a Tam Cốc',
        subtitle: 'Lago di Tam Cốc · Pernottamento 1/2',
        description:
          'Cena rilassata a base di Dê núi (capra di montagna alle erbe di Ninh Bình, piatto storico della regione) oppure tofu in salsa di pomodoro e verdure saltate con aglio. Passeggiata serale tranquilla lungo il lago.',
        tip: 'Domani la sveglia è presto per Hang Múa: prepara zaino leggero, acqua e scarpe da ginnastica già stasera.',
        costVnd: 220000,
        costLabel: '~200.000–250.000 VND a persona',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tam+Coc+Lake+Ninh+Binh',
        mapPinId: 'tam-coc-pier',
      },
    ],
  },
  {
    id: 'day2',
    dayOffset: 1,
    shortLabel: 'Giorno 2',
    periodLabel: 'Giornata intera · Notte 2',
    title: 'Picco del Drago, Antica Capitale Hoa Lư e Tràng An UNESCO',
    summary:
      'La giornata clou tra panorami mozzafiato dall’alto, storia imperiale vietnamita del X secolo e il labirinto acquatico di Tràng An.',
    stops: [
      {
        id: 'd2-hangmua',
        time: '07:45',
        duration: '2h',
        transport: 'Scooter / Bici · 15 min',
        title: 'Salita a Hang Múa (Picco del Drago — Ngọa Long)',
        subtitle: '500 gradini di pietra · Vista 360° su Tam Cốc',
        description:
          'Arrivo presto prima del caldo e dei gruppi turistici. La scalinata si divide in due cime: a sinistra il drago di pietra con la vista più iconica sul fiume Ngô Đồng, a destra la pagoda panoramica.',
        tip: 'Indossa scarpe chiuse con buona suola (la roccia calcarea può essere scivolosa) e porta almeno 1 litro d’acqua. Alle 08:00 la luce radente sulla valle è spettacolare.',
        costVnd: 100000,
        costLabel: '100.000 VND ingresso + 10.000 VND parcheggio ufficiale',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hang+Mua+Peak+Ninh+Binh',
        mapPinId: 'hang-mua',
      },
      {
        id: 'd2-hoalu',
        time: '10:30',
        duration: '1h 30m',
        transport: 'Scooter / Taxi · 15 min',
        title: 'Antica Capitale Imperiale di Hoa Lư',
        subtitle: 'Templi delle dinastie Đinh e Lê (X secolo)',
        description:
          'Prima di Hanoi, Hoa Lư fu la capitale del Vietnam indipendente, protetta naturalmente da una fortezza di montagne calcaree. Visita i templi degli imperatori Đinh Tiên Hoàng e Lê Đại Hành.',
        tip: 'Ricorda di coprire spalle e ginocchia per entrare nei santuari interni. La strada panoramica che collega Hang Múa a Hoa Lư è uno dei tratti più belli da fare in scooter.',
        costVnd: 20000,
        costLabel: '20.000 VND biglietto ingresso',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hoa+Lu+Ancient+Capital+Ninh+Binh',
        mapPinId: 'hoa-lu',
      },
      {
        id: 'd2-lunch',
        time: '12:30',
        duration: '1h 15m',
        transport: 'Scooter · 10 min',
        title: 'Pranzo nella valle di Tràng An',
        subtitle: 'Strada panoramica verso il molo UNESCO',
        description:
          'Sosta rigenerante tra le montagne prima della lunga navigazione pomeridiana. Ottimo momento per un Phở bò caldo o un Cà phê sữa đá (caffè vietnamita ghiacciato con latte condensato).',
        tip: 'Evita i grandi buffet per pullman turistici vicino al parcheggio principale e fermati in uno dei ristoranti più piccoli a 500 m dal molo.',
        costVnd: 150000,
        costLabel: '~130.000–170.000 VND a persona',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Trang+An+Landscape+Complex+Ninh+Binh',
        mapPinId: 'trang-an',
      },
      {
        id: 'd2-trangan',
        time: '14:00',
        duration: '2h 45m',
        transport: 'Barca · UNESCO',
        title: 'Complesso Paesaggistico di Tràng An (Percorso 3)',
        subtitle: 'Patrimonio Mondiale UNESCO · Grotte e Templi sull’acqua',
        description:
          'Più ampio e silenzioso di Tam Cốc, Tràng An offre acque color smeraldo e grotte lunghissime. Scegli il Percorso 3: attraversa Hang Đột (lunga quasi 1 km!), tocca il tempio Trình e la spettacolare vallata di Suối Tiên.',
        tip: 'Le barche partono con 4 passeggeri (puoi condividere con altri viaggiatori al molo senza sovrapprezzo). Porta un cappello e un impermeabile leggero se il cielo è variabile.',
        costVnd: 250000,
        costLabel: '250.000 VND a persona (barca condivisa inclusa)',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Trang+An+Boat+Tour+Pier+Ninh+Binh',
        mapPinId: 'trang-an',
      },
      {
        id: 'd2-sunset',
        time: '17:30',
        duration: '2h 30m',
        transport: 'Scooter · 15 min',
        title: 'Caffè all’uovo al tramonto, Cena & Notte 2',
        subtitle: 'Rientro a Tam Cốc · Pernottamento 2/2',
        description:
          'Rientro tra le risaie nella luce blu della sera. Concediti un Cà phê trứng (caffè all’uovo) vista acqua o un massaggio piedi dopo i 500 gradini di stamattina, seguito dall’ultima cena vietnamita a Tam Cốc.',
        tip: 'Conferma stasera l’orario del transfer di domani (limousine van per Hanoi o taxi per la stazione ferroviaria di Ninh Bình).',
        costVnd: 260000,
        costLabel: 'Caffè + cena ~260.000 VND a persona',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tam+Coc+Ninh+Binh+Vietnam',
        mapPinId: 'tam-coc-pier',
      },
    ],
  },
  {
    id: 'day3',
    dayOffset: 2,
    shortLabel: 'Giorno 3',
    periodLabel: 'Mattina · Check-out',
    title: 'Mattina lenta al Tempio Thái Vi e Partenza',
    summary:
      'Ultime ore nel silenzio della campagna di Ninh Bình dopo la seconda notte, prima del check-out e del proseguimento del viaggio.',
    stops: [
      {
        id: 'd3-thaivi',
        time: '08:15',
        duration: '1h 45m',
        transport: 'Bici · 10 min',
        title: 'Colazione vista risaie & Tempio Thái Vi (Đền Thái Vi)',
        subtitle: 'Sentieri rurali a nord di Tam Cốc',
        description:
          'Dopo una colazione tranquilla in homestay, fai un’ultima pedalata mattutina tra gli stagni e i bufali d’acqua fino al Tempio Thái Vi, dedicato ai re della dinastia Trần, quasi sempre privo di folla.',
        tip: 'È il momento più fotogenico e autentico per salutare la valle: al mattino gli abitanti lavorano nei campi e i barcaioli si preparano lungo il canale.',
        costVnd: 0,
        costLabel: 'Ingresso gratuito (offerta libera)',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Thai+Vi+Temple+Ninh+Binh',
        mapPinId: 'thai-vi',
      },
      {
        id: 'd3-checkout',
        time: '10:45',
        duration: '1h',
        transport: 'Van / Treno',
        title: 'Check-out e Trasferimento verso la prossima meta',
        subtitle: 'Stazione di Ninh Bình (15 min) o Limousine Van per Hanoi (2h)',
        description:
          'Check-out dalla struttura (solitamente entro le 11:00–12:00). Riconsegna bici/scooter e partenza: limousine van diretto per Hanoi (~2h) oppure taxi fino alla stazione di Ninh Bình per treni verso sud (Phong Nha, Huế, Đà Nẵng).',
        tip: 'Se parti nel pomeriggio, tutte le homestay di Tam Cốc custodiscono gratuitamente i bagagli e offrono una doccia di cortesia prima della partenza.',
        costVnd: 220000,
        costLabel: 'Limousine van per Hanoi ~200.000–250.000 VND',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ninh+Binh+Railway+Station',
        mapPinId: 'ninh-binh-station',
      },
    ],
  },
];

export const MAP_PINS = [
  {
    id: 'tam-coc-pier',
    num: 1,
    x: 255,
    y: 280,
    label: 'Tam Cốc (Base)',
    dayTag: 'Giorno 1 & 2 · Base 2 notti',
    title: 'Molo e Villaggio di Tam Cốc',
    distance: '0 km (Centro)',
    bestTime: '14:30 – 16:30',
    description:
      'Punto di partenza per il giro in barca lungo il fiume Ngô Đồng attraverso le tre grotte e base ideale per pernottare due notti tra ristoranti, noleggi bici e bungalow vista risaie.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tam+Coc+Boat+Pier+Ninh+Binh',
  },
  {
    id: 'bich-dong',
    num: 2,
    x: 135,
    y: 315,
    label: 'Pagoda Bích Động',
    dayTag: 'Giorno 1 · Tramonto',
    title: 'Pagoda di Bích Động',
    distance: '2,5 km da Tam Cốc',
    bestTime: '16:45 – 18:00',
    description:
      'Complesso di tre pagode antiche incastonate nella falesia calcarea, accessibile tramite un iconico ponte ad arco in pietra sul laghetto di loto.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bich+Dong+Pagoda+Ninh+Binh',
  },
  {
    id: 'thai-vi',
    num: 3,
    x: 215,
    y: 225,
    label: 'Tempio Thái Vi',
    dayTag: 'Giorno 3 · Mattina',
    title: 'Tempio Thái Vi (Đền Thái Vi)',
    distance: '1,8 km da Tam Cốc',
    bestTime: '08:15 – 09:45',
    description:
      'Santuario pacifico immerso nella campagna e circondato da risaie, perfetto per un’ultima pedalata mattutina lontana dal turismo di massa.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Thai+Vi+Temple+Ninh+Binh',
  },
  {
    id: 'hang-mua',
    num: 4,
    x: 310,
    y: 185,
    label: 'Hang Múa',
    dayTag: 'Giorno 2 · Mattina presto',
    title: 'Hang Múa — Picco del Drago',
    distance: '4,5 km da Tam Cốc',
    bestTime: '07:45 – 09:30',
    description:
      '500 gradini scolpiti nella roccia che conducono alla celebre statua del drago e al punto panoramico più spettacolare sull’intera valle di Tam Cốc.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hang+Mua+Peak+Ninh+Binh',
  },
  {
    id: 'trang-an',
    num: 5,
    x: 245,
    y: 120,
    label: 'Tràng An UNESCO',
    dayTag: 'Giorno 2 · Pomeriggio',
    title: 'Complesso di Tràng An',
    distance: '8 km da Tam Cốc',
    bestTime: '14:00 – 16:45',
    description:
      'Sito Patrimonio UNESCO famoso per i percorsi in barca (consigliato il Percorso 3) attraverso lunghe grotte naturali, lagune smeraldo e templi storici.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Trang+An+Boat+Tour+Pier+Ninh+Binh',
  },
  {
    id: 'hoa-lu',
    num: 6,
    x: 160,
    y: 85,
    label: 'Hoa Lư',
    dayTag: 'Giorno 2 · Tarda mattina',
    title: 'Antica Capitale di Hoa Lư',
    distance: '12 km da Tam Cốc',
    bestTime: '10:30 – 12:00',
    description:
      'Prima capitale del Vietnam indipendente nel X secolo, circondata da un anfiteatro naturale di vette calcaree.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hoa+Lu+Ancient+Capital+Ninh+Binh',
  },
  {
    id: 'ninh-binh-station',
    num: 7,
    x: 455,
    y: 230,
    label: 'Stazione Ninh Bình',
    dayTag: 'Giorno 3 · Partenza',
    title: 'Stazione Ferroviaria di Ninh Bình',
    distance: '7 km da Tam Cốc',
    bestTime: '11:30 · Partenza',
    description:
      'Hub ferroviario sulla linea Nord-Sud (Reunification Express) per proseguire verso Hanoi, Phong Nha, Huế o Đà Nẵng.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ninh+Binh+Railway+Station',
  },
];

export const BUDGET_STYLES = {
  backpacker: {
    label: 'Zaino in spalla',
    desc: 'Homestay semplice & street food',
    hotelPerNightPerRoomVnd: 450000,
    foodTotalPerPersonVnd: 520000,
    transportPerPersonVnd: 220000,
  },
  comfort: {
    label: 'Comfort',
    desc: 'Bungalow vista risaie & ristoranti tipici',
    hotelPerNightPerRoomVnd: 1150000,
    foodTotalPerPersonVnd: 920000,
    transportPerPersonVnd: 340000,
  },
  boutique: {
    label: 'Boutique',
    desc: 'Eco-lodge con piscina & transfer privati',
    hotelPerNightPerRoomVnd: 2600000,
    foodTotalPerPersonVnd: 1550000,
    transportPerPersonVnd: 650000,
  },
};

export const FIXED_TICKETS_PER_PERSON_VND = 760000; // Tam Coc + Hang Mua + Hoa Lu + Trang An + parcheggi/mance

export const PACKING_CHECKLIST = [
  { id: 'pack-shoes', label: 'Scarpe da ginnastica o trekking leggero (indispensabili per i 500 gradini di Hang Múa)' },
  { id: 'pack-cash', label: 'Contanti in VND (molti parcheggi, barcaioli e piccoli ristoranti non accettano carte)' },
  { id: 'pack-modest', label: 'Maglia con maniche e pantaloni/gonna sotto il ginocchio per Bích Động e Hoa Lư' },
  { id: 'pack-sun', label: 'Cappello, occhiali da sole e crema solare (le barche a Tam Cốc e Tràng An sono scoperte)' },
  { id: 'pack-rain', label: 'K-way o poncho leggero (il meteo nel Nord del Vietnam cambia rapidamente)' },
  { id: 'pack-bug', label: 'Repellente antizanzare per il tramonto lungo il fiume e le risaie' },
  { id: 'pack-power', label: 'Powerbank carico per mappe GPS e foto durante l’intera giornata del Giorno 2' },
];

export const VIETNAMESE_PHRASES = [
  { vi: 'Xin chào', phonetic: 'sin ciao', it: 'Ciao / Buongiorno' },
  { vi: 'Cảm ơn', phonetic: 'cam on', it: 'Grazie' },
  { vi: 'Bao nhiêu tiền?', phonetic: 'bao nieu tien', it: 'Quanto costa?' },
  { vi: 'Một cà phê sữa đá', phonetic: 'mot ca fe sua da', it: 'Un caffè ghiacciato con latte' },
  { vi: 'Tính tiền nhé', phonetic: 'tin tien gne', it: 'Il conto, per favore' },
];
