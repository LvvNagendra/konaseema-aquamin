/* Product catalogue data.
   Each product: id, name, cat (category key), tag (short label), img (optional),
   comp (array of [ingredient, amount] OR plain strings), compNote, benefits[], dosage[], pack.
   Edit this file to add / change products — the site renders everything from here. */

const CATEGORIES = {
  pond:     { label: 'Pond & Water Probiotics', color: '#1a9f8c' },
  mineral:  { label: 'Minerals',                color: '#0c75a8' },
  feed:     { label: 'Feed Supplements',        color: '#d08a1e' },
  disinfect:{ label: 'Disinfectants & Health',  color: '#7a4fc4' },
  oxygen:   { label: 'Oxygen & Water Treatment',color: '#2a7fd4' },
  fish:     { label: 'Fish Care',               color: '#16834b' },
  chemical: { label: 'Lab-Grade Chemicals',     color: '#5b6b7a' }
};

const PRODUCTS = [
  /* ---------- Featured: supplied by owner ---------- */
  {
    id: 'pro-ps', name: 'Super PS', cat: 'pond', tag: 'Pond Stabilizer & Water Quality Enhancer', featured: true, range: true,
    img: 'assets/pack-superps.webp',
    comp: ['Rhodococcus', 'Rhodobacter', 'Nitrobacter', 'Selective organisms from Bacillus groups'],
    compNote: 'Minimum strength: 20 billion CFU/ml',
    benefits: [
      'Enhances decomposition of organic waste',
      'Prevents formation of toxic gases like ammonia and hydrogen sulphide',
      'Develops and stabilises a good algal bloom',
      'Stabilises pH and helps balance the pond ecology',
      'Inhibits growth of harmful bacteria by substrate competition, minimising diseases',
      'Reduces Vibrio and other pathogenic bacterial loads',
      'Improves DO levels',
      'Improves animal activeness'
    ],
    dosage: [
      'Based on 1 metre water depth',
      'Regular use: 5 Ltrs / Acre',
      'Toxic gas conditions / high Vibrio loads / stress / low plankton: 10 Ltrs / Acre on the 1st day, followed by 5 Ltrs / Acre after 3 days'
    ],
    pack: '20 Ltrs',
    te: {
      tag: 'చెరువు స్టెబిలైజర్ & నీటి నాణ్యత మెరుగుదల',
      compNote: 'కనీస బలం: 20 బిలియన్ CFU/ml',
      benefits: [
        'సేంద్రీయ వ్యర్థాలు త్వరగా కుళ్ళిపోవడానికి సహాయపడుతుంది',
        'అమ్మోనియా, హైడ్రోజన్ సల్ఫైడ్ వంటి విష వాయువులు ఏర్పడకుండా నివారిస్తుంది',
        'మంచి ఆల్గల్ బ్లూమ్‌ను అభివృద్ధి చేసి స్థిరంగా ఉంచుతుంది',
        'pH ను స్థిరపరచి చెరువు పర్యావరణ సమతుల్యతను కాపాడుతుంది',
        'పోషకాల పోటీ ద్వారా హానికర బ్యాక్టీరియా పెరుగుదలను అడ్డుకుని వ్యాధులను తగ్గిస్తుంది',
        'విబ్రియో మరియు ఇతర వ్యాధికారక బ్యాక్టీరియా లోడ్‌ను తగ్గిస్తుంది',
        'DO (కరిగిన ఆక్సిజన్) స్థాయిలను మెరుగుపరుస్తుంది',
        'రొయ్యల చురుకుదనాన్ని పెంచుతుంది'
      ],
      dosage: [
        '1 మీటర్ నీటి లోతు ఆధారంగా',
        'సాధారణ వాడకం: ఎకరానికి 5 లీటర్లు',
        'విష వాయువులు / అధిక విబ్రియో / ఒత్తిడి / తక్కువ ప్లాంక్టన్: 1వ రోజు ఎకరానికి 10 లీటర్లు, 3 రోజుల తర్వాత ఎకరానికి 5 లీటర్లు'
      ]
    }
  },
  {
    id: 'min-power', name: 'AQUAMIN Minerals', cat: 'mineral', tag: 'Balanced Mineral Blend', featured: true, range: true,
    img: 'assets/pack-aquamin-minerals.webp',
    comp: [
      ['Manganese', '1500 mg'], ['Vitamin A', '7,00,000 I.U.'],
      ['Copper', '1200 mg'], ['Vitamin D3', '7,00,000 I.U.'],
      ['Iron', '1500 mg'], ['Vitamin C', '250 mg'],
      ['Zinc', '9600 mg'], ['Vitamin E', '250 mg'],
      ['Iodine', '325 mg'], ['Vitamin K', '50 mg'],
      ['Cobalt', '150 mg'], ['Thiamine', '15600 mg'],
      ['Selenium', '150 mg'], ['Niacinamide', '1000 mg'],
      ['Molybdenum', '0.00125 mg'], ['Biotin', '2000 mg'],
      ['Aluminium', '150 mg'], ['Folic Acid', '75 mg'],
      ['Calcium', '30%'], ['Sodium', '14.6 mg'],
      ['Phosphorous', '9%'], ['Chlorides', '22.87 gms']
    ],
    benefits: ['Improves growth', 'Increases antibody production', 'Regeneration of red blood cells', 'Synthesis of Vitamin B12'],
    dosage: ['10 kg / Acre or as advised by an aqua consultant'],
    pack: '10 Kg, 20 Kg',
    te: {
      tag: 'సమతుల్య మినరల్ మిశ్రమం',
      benefits: ['పెరుగుదలను మెరుగుపరుస్తుంది', 'యాంటీబాడీ ఉత్పత్తిని పెంచుతుంది', 'ఎర్ర రక్త కణాల పునరుత్పత్తి', 'విటమిన్ B12 సంశ్లేషణ'],
      dosage: ['ఎకరానికి 10 కిలోలు లేదా ఆక్వా కన్సల్టెంట్ సలహా మేరకు']
    }
  },

  /* ---------- KONASEEMA range (details from the pack artwork) ---------- */
  {
    id: 'pondbiotic', name: 'PondBiotic', cat: 'pond', tag: 'Probiotic · Pond Microbial Blend', range: true,
    img: 'assets/pack-pondbiotic.webp',
    comp: ['Pond microbial blend (beneficial bacteria)'],
    compNote: 'Full strain list & CFU: please contact us',
    benefits: ['Degrades organic waste', 'Controls harmful bacteria', 'Improves water quality', 'Enhances shrimp health'],
    dosage: ['As advised by our aqua consultant — contact us for dosage'],
    pack: '1 Kg',
    te: {
      tag: 'ప్రోబయోటిక్ · చెరువు సూక్ష్మజీవుల మిశ్రమం',
      compNote: 'పూర్తి స్ట్రెయిన్ వివరాలు & CFU కోసం మమ్మల్ని సంప్రదించండి',
      benefits: ['సేంద్రీయ వ్యర్థాలను కుళ్ళిస్తుంది', 'హానికర బ్యాక్టీరియాను నియంత్రిస్తుంది', 'నీటి నాణ్యతను మెరుగుపరుస్తుంది', 'రొయ్యల ఆరోగ్యాన్ని పెంచుతుంది'],
      dosage: ['మా ఆక్వా కన్సల్టెంట్ సలహా మేరకు — మోతాదు కోసం సంప్రదించండి']
    }
  },
  {
    id: 'pondzeolite', name: 'PondZeolite', cat: 'pond', tag: 'Natural Zeolite · Water Purifier', range: true,
    img: 'assets/pack-pondzeolite.webp',
    comp: ['Natural zeolite granules'],
    compNote: 'Grade & particle size: please contact us',
    benefits: ['Adsorbs ammonia (NH₃)', 'Controls toxic gases (H₂S)', 'Improves water clarity', 'Maintains pond stability'],
    dosage: ['As advised by our aqua consultant — contact us for dosage'],
    pack: '10 Kg',
    te: {
      tag: 'సహజ జియోలైట్ · నీటి శుద్ధి',
      compNote: 'గ్రేడ్ & కణ పరిమాణం కోసం మమ్మల్ని సంప్రదించండి',
      benefits: ['అమ్మోనియా (NH₃) ను శోషిస్తుంది', 'విష వాయువులను (H₂S) నియంత్రిస్తుంది', 'నీటి స్పష్టతను మెరుగుపరుస్తుంది', 'చెరువు స్థిరత్వాన్ని కాపాడుతుంది'],
      dosage: ['మా ఆక్వా కన్సల్టెంట్ సలహా మేరకు — మోతాదు కోసం సంప్రదించండి']
    }
  },
  {
    id: 'aquagel', name: 'AquaGel', cat: 'feed', tag: 'Feed Supplement Gel · Mineral & Electrolyte', range: true,
    img: 'assets/pack-aquagel.webp',
    comp: ['Minerals', 'Electrolytes', 'Gel base'],
    compNote: 'Full composition: please contact us',
    benefits: ['Quick energy', 'Reduces stress', 'Supports moulting'],
    dosage: ['As advised by our aqua consultant — contact us for dosage'],
    pack: '5 Ltrs',
    te: {
      tag: 'ఫీడ్ సప్లిమెంట్ జెల్ · మినరల్ & ఎలక్ట్రోలైట్',
      compNote: 'పూర్తి కంపోజిషన్ కోసం మమ్మల్ని సంప్రదించండి',
      benefits: ['త్వరిత శక్తి', 'ఒత్తిడిని తగ్గిస్తుంది', 'మౌల్టింగ్‌కు సహాయపడుతుంది'],
      dosage: ['మా ఆక్వా కన్సల్టెంట్ సలహా మేరకు — మోతాదు కోసం సంప్రదించండి']
    }
  },

  /* ---------- Pond & water probiotics ---------- */
  {
    id: 'pro-5g', name: 'PRO 5G', cat: 'pond', tag: 'Pond Probiotic',
    comp: ['Special strains that maintain the pond environment', 'Convert toxic ammonia into non-toxic form', 'Improve dissolved oxygen', 'Suppress Vibrio'],
    benefits: ['Arrests growth of pathogenic bacteria', 'Eliminates toxic gases', 'Maintains optimum plankton', 'Improves DO and water parameters', 'Keeps the pond clear'],
    dosage: ['240 gms / Acre, repeat every 7 days'],
    pack: '240 gms'
  },
  {
    id: 'pro-9000', name: 'PRO 9000 WS', cat: 'pond', tag: 'Water-Soluble Probiotic',
    comp: ['Specially selected microbes for degrading organic material'],
    compNote: 'Minimum strength: 20 billion CFU/gm',
    benefits: ['Degrades organic matter', 'Controls Vibrio', 'Reduces poisonous gases', 'Reduces ammonia, H₂S and nitrates'],
    dosage: ['240 grams / Acre, repeat every 7 days'],
    pack: '240 gms'
  },
  {
    id: 'rama-pro', name: 'RAMA PRO', cat: 'pond', tag: 'Multi-Strain Probiotic',
    comp: [
      ['Bacillus sps', '225,000,000 cfu/gm'], ['Nitrosomonas sps', '800,000 cfu/gm'],
      ['Nitrobacter sps', '6,000,000 cfu/gm'], ['Cellulomonas sps', '150,000,000 cfu/gm'],
      ['Pseudomonas sps', '15,000,000 cfu/gm'], ['Lactobacillus sps', '450,000,000 cfu/gm'],
      ['Aerobacter sps', '10,000,000 cfu/gm'], ['Aspergillus niger', '60,000,000 cfu/gm'],
      ['Aspergillus oryzae', '60,000,000 cfu/gm'], ['Rhodococcus sps', '18,000,000 cfu/gm']
    ],
    benefits: ['Arrests growth of pathogenic bacteria', 'Eliminates toxic gases', 'Maintains optimum plankton', 'Improves DO and water parameters', 'Keeps the pond clear'],
    dosage: ['1 kg / Acre once in 10 days, or as advised by an aqua consultant'],
    pack: '1 Kg'
  },
  {
    id: 'zeolite-g', name: 'ZEOLITE-G', cat: 'pond', tag: 'Zeolite Probiotic Granules',
    comp: [['Bacillus spp.', '2–3 Billion CFU'], ['Others', 'Minerals, vitamins, amino acids, attractants']],
    compNote: 'Light to medium grey, round and very uniform granules',
    benefits: ['Clears pond bottom organic load', 'Purifies water', 'Deodorises NH₃ and H₂S', 'Increases dissolved oxygen'],
    dosage: ['Per 1 metre water depth', 'Pond preparation: 10 Kgs / Acre', 'During culture: 5 Kgs / Acre'],
    pack: '25 Kgs'
  },
  {
    id: 'odoact-plus', name: 'ODOACT PLUS', cat: 'pond', tag: 'Gas Binder + Probiotic',
    comp: ['Yucca schidigera', 'Aloe vera', 'Bacillus subtilis', 'Bacillus polymyxa', 'Bacillus licheniformis', 'Nitrobacter', 'Pseudomonas denitrificans', 'Digestive enzymes'],
    benefits: ['Binds ammonia and poisonous gases', 'Reduces harmful bacteria', 'Reduces moulting problems'],
    dosage: ['500 gms / Acre or as directed by an aqua consultant'],
    pack: '500 gms & 1 Kg'
  },
  {
    id: 'yeast-plus', name: 'YEAST+', cat: 'pond', tag: 'Fermentation Yeast',
    comp: ['Saccharomyces cerevisiae'],
    benefits: ['Enhances beneficial microbes', 'Stabilises pond pH', 'Fast fermentation of fruit juice, molasses and jaggery'],
    dosage: ['Mix in 1 ton of feed or as advised by an aqua consultant'],
    pack: '1 Kg'
  },

  /* ---------- Minerals ---------- */
  {
    id: 'minimix-gold', name: 'MINIMIX GOLD', cat: 'mineral', tag: 'Mineral & Vitamin Mix',
    comp: [
      ['Sodium', '2000 mg'], ['Potassium', '100 mg'], ['Chlorine', '3000 mg'], ['Boron', '3000 mg'],
      ['Copper', '1500 mg'], ['Manganese', '1500 mg'], ['Iron', '1500 mg'], ['Zinc', '9600 mg'],
      ['Iodine', '325 mg'], ['Cobalt', '150 mg'], ['Selenium', '150 mg'], ['Molybdenum', '0.00125 mg'],
      ['Aluminium', '150 mg'], ['Vitamin A', '7,00,000 I.U.'], ['Vitamin D3', '7,00,000 I.U.'], ['Vitamin C', '250 mg'],
      ['Vitamin E', '250 mg'], ['Thiamine', '15600 mg'], ['Niacinamide', '1000 mg'], ['Biotin', '2000 mg'],
      ['Folic Acid', '75 mg'], ['Calcium', '30%'], ['Phosphorous', '9%'], ['Chlorides', '22.86 gms'],
      ['Base', 'Q.S.']
    ],
    benefits: ['Improves growth', 'Increases antibody production', 'Regeneration of red blood cells', 'Synthesis of Vitamin B12', 'Prevents soft shell and white muscle', 'Increases alkalinity and hardness'],
    dosage: ['10 Kg / Acre as advised by an aqua consultant'],
    pack: '10 Kgs'
  },
  {
    id: 'soda-mix', name: 'SODA MIX', cat: 'mineral', tag: 'Mixed Mineral',
    comp: ['Major and trace minerals', 'Na⁺, K⁺, Cl⁻, Ca²⁺, Mg²⁺ and SO₄²⁻ ions'],
    benefits: ['Mixed mineral for shrimp culture', 'Supports osmoregulation', 'Decreases nitrite effect'],
    dosage: ['50–75 kg / hectare / week'],
    pack: '25 Kgs'
  },
  {
    id: 'mini-flow', name: 'MINI FLOW – MS', cat: 'mineral', tag: 'Nano Liquid Minerals',
    comp: ['Nano Magnesium', 'Manganese', 'Calcium', 'Zinc', 'Ferrous', 'Chromium', 'Cobalt', 'Selenium', 'Molybdenum', 'Amino acids, probiotics, vitamins & enzymes'],
    benefits: ['Supports 100% mass moulting', 'Prevents loose and soft shell', 'Prevents body cramps', 'Prevents white muscle'],
    dosage: ['Water: 1 Litre / Acre per week', 'Feed: 10 ml / kg feed, twice daily'],
    pack: '1 Ltr, 5 Ltrs'
  },
  {
    id: 'nano-shell', name: 'NANO SHELL', cat: 'mineral', tag: 'Moulting Support',
    comp: ['Nano Sodium', 'Nano Copper', 'Nano Magnesium', 'Nano Ferrous', 'Nano Selenium', 'Nano Chromium', 'Di-Calcium Phosphate', 'Nano Vitamin C', 'Citric Acid', 'Amino acids & nutrients'],
    benefits: ['Moulting without stress', 'Prevents loose and soft shell', 'Prevents body cramps', 'Supports growth'],
    dosage: ['15 ml / kg feed, two feeds per day (morning & evening)'],
    pack: '1 Ltr'
  },

  /* ---------- Feed supplements ---------- */
  {
    id: 'gut-care', name: 'GUT CARE', cat: 'feed', tag: 'Gut Probiotic',
    comp: ['14 probiotic strains incl. Lactic acid bacillus', 'Osmo-protectants'],
    benefits: ['Maintains gastro-intestinal micro flora', 'Keeps gut pH acidic', 'Prevents pathogen colonisation', 'Improves feed breakdown', 'Promotes butyric acid', 'Scavenges oxygen radicals'],
    dosage: ['5 gms / kg of feed, preferably one meal a day for 4–5 days a week, or as directed by an aqua consultant'],
    pack: '1 Kg'
  },
  {
    id: 'double-growth', name: 'DOUBLE GROWTH', cat: 'feed', tag: 'Growth Promoter',
    comp: [['Protein (per 100 g)', '23 gm'], ['Essential amino acids', '14'], ['Chelated minerals', '12'], ['Carbohydrates', 'Present']],
    benefits: ['Enhances body weight of shrimp & prawns', 'Promotes growth', 'Immune modulation & antioxidant', 'Reduces mortalities', 'Supportive in moulting, anorexia and fatty liver'],
    dosage: ['Regular: 2 kg per ton of feed', 'Treatment: 5–10 gm per kg feed'],
    pack: '1 Kg'
  },
  {
    id: 'vitamin-c', name: 'VITAMIN C', cat: 'feed', tag: 'Coated Vitamin C',
    comp: [['Ascorbic acid (coated), per gram', '500 mg']],
    benefits: ['Collagen synthesis', 'Muscle development', 'Chitin and exoskeleton formation'],
    dosage: ['0.5 – 2.0 grams / kg feed or as advised by an aqua consultant'],
    pack: '1 Kg'
  },
  {
    id: 'bioforte', name: 'BIOFORTE', cat: 'feed', tag: 'Enzyme + Probiotic',
    comp: ['Phytase', 'Cellulase', 'Xylanase', 'Amylase', 'Protease', 'Pectinase', 'Bacillus subtilis', 'Bacillus coagulans'],
    benefits: ['Promotes growth', 'Removes anti-nutritional factors', 'Improves mineral uptake', 'Antibiotic-free support'],
    dosage: ['Regular: 2 kg per ton of feed', 'Treatment: 5–10 gm per kg feed'],
    pack: '1 Kg'
  },
  {
    id: 'gel-bond', name: 'GEL BOND', cat: 'feed', tag: 'Feed Binder Gel',
    comp: ['Carbohydrates', 'Proteins', 'Fats', 'Calcium', 'Phosphorus', 'Vitamin D3'],
    compNote: 'In appropriate proportion in gel form',
    benefits: ['Better growth and weight gain', 'Reduces feed wastage', 'Binds powders to feed pellets'],
    dosage: ['20–30 gms / kg of pellets or as advised by an aqua consultant'],
    pack: '5 Ltrs, 20 Ltrs, 50 Ltrs'
  },
  {
    id: 'nano-plus', name: 'NANO PLUS', cat: 'feed', tag: 'Liquid Calcium & Vitamins',
    comp: [
      ['Vitamin A', '1,00,000 IU'], ['Vitamin E', '1000 mg'], ['Vitamin D3', '1,80,000 IU'], ['Vitamin B12', '600 mcg'],
      ['Calcium', '44000 mg'], ['Phosphorous', '22000 mg'], ['Shatavari', '1000 mg'], ['Leptadenia', '300 mg'],
      ['Carbohydrates', '280000 mg'], ['Iodine', '500 mg'], ['Copper', '1400 mg'], ['Cobalt', '1250 mg'],
      ['Manganese', '500 mg'], ['Zinc', '2500 mg'], ['Lysine', '100 mg'], ['Methionine', '100 mg'], ['Excipients', 'Q.S.']
    ],
    compNote: 'Each 1000 ml contains',
    benefits: ['Supports 100% mass moulting', 'Prevents loose shell', 'Supports growth'],
    dosage: ['Aqua feed: 5 ml / kg feed'],
    pack: '1 Ltr'
  },
  {
    id: 'liver-tonic', name: 'LIVER TONIC', cat: 'feed', tag: 'Herbal Hepato Tonic',
    comp: ['Arjuna', 'Bhringaraja', 'Bhumyamalaki', 'Kakamachi', 'Nimba', 'Punarnava', 'Sarapunkha', 'Kutki'],
    compNote: 'Herbal extracts per 10 ml',
    benefits: ['Supports liver & pancreas function', 'Growth promoter', 'Improves digestibility'],
    dosage: ['10–20 ml / kg feed, sprinkle directly'],
    pack: '1 Ltr & 5 Ltr'
  },

  /* ---------- Disinfectants & health ---------- */
  {
    id: 'redvin', name: 'REDVIN', cat: 'disinfect', tag: 'Red Disease Control',
    comp: ['Neutralised organic acids (Tartaric & Butyric)', 'Herbal extract (Andrographis paniculata)', 'Distilled water'],
    benefits: ['Prevents red disease and tail rot', 'Bacterial, viral and fungal control'],
    dosage: ['1 Ltr / Acre at 1 metre depth — dissolve in 30 Ltrs of pond water'],
    pack: '1 Ltr'
  },
  {
    id: 'all-clear', name: 'ALL CLEAR', cat: 'disinfect', tag: 'Nano Technology Solution',
    comp: ['Nano technology solution'],
    benefits: ['Prevents red disease and tail rot', 'Bacterial, viral and fungal control'],
    dosage: ['Water: 2 Ltr / Acre once, dissolved in 30 Ltrs water', 'Feed: 200 ml / 1 ton biomass for three days'],
    pack: '1 Ltr'
  },
  {
    id: 'pool-guard', name: 'POOL GUARD', cat: 'disinfect', tag: 'Brominated Sanitizer',
    comp: [['Brominated compounds', '5% w/v'], ['Stabilizers', 'Q.S.']],
    benefits: ['Prevents and cures bacterial and fungal infection', 'Absorbs toxic gases', 'Maintains pH, DO, alkalinity and hardness'],
    dosage: ['As advised by an aqua consultant'],
    pack: '1 Ltr, 5 Ltrs & 20 Ltrs'
  },
  {
    id: 'idomax-plus', name: 'IODOMAX PLUS', cat: 'disinfect', tag: 'Iodine Complex',
    comp: [['Nonyl phenoxy polyethylene oxide iodine complex', '20% available iodine']],
    benefits: ['Improves metabolic rates', 'Freshens pond water', 'Treats gill and tail infections'],
    dosage: ['500 ml – 1 Ltr / acre / metre depth'],
    pack: '1 Ltr, 5 Ltrs, 20 Ltrs'
  },
  {
    id: 'bkc-80', name: 'BKC 80%', cat: 'disinfect', tag: 'Benzalkonium Chloride',
    comp: [['Alkyl benzyl dimethyl ammonium chloride (Benzalkonium chloride)', '50% w/v']],
    benefits: ['Supports complete moulting', 'Controls external infections', 'Cleans water', 'Controls protozoa'],
    dosage: ['250 – 500 ml / acre / foot of water, once in 15 days'],
    pack: '1 Ltr, 10 Ltrs, 20 Ltrs'
  },
  {
    id: 'microban', name: 'MICROBAN', cat: 'disinfect', tag: 'Broad Disinfectant',
    comp: ['Formaldehyde', 'Glutaraldehyde', 'BKC 80%', 'Copper sulphate'],
    benefits: ['Broad-spectrum disinfectant', 'Controls bacterial, fungal and protozoan disease'],
    dosage: ['1.0 – 1.5 Ltr / acre once in 15 days', 'Dilute 50–100 times before spraying'],
    pack: '5 Ltrs'
  },
  {
    id: 'virakill', name: 'VIRAKILL', cat: 'disinfect', tag: 'Oxidising Disinfectant',
    comp: [['Potassium monopersulphate compound (triple salt)', '50.0% w/w'], ['Colour', 'Tartrazine yellow'], ['Excipients', 'Q.S.']],
    benefits: ['Powerful oxidiser', 'Regenerates active chlorine'],
    dosage: ['1 – 2 kg / acre'],
    pack: '1 Kg'
  },
  {
    id: 'micro-shield', name: 'MICRO SHIELD', cat: 'disinfect', tag: 'BKC + Iodine',
    comp: [['Alkyl benzyl dimethyl ammonium chloride', '80% w/v'], ['Iodine', '20%']],
    benefits: ['Prevents water pollution', 'Controls surface ulcers and wounds', 'Antenna rot, gill rot, black gill, red gill, black spot, tail rot'],
    dosage: ['Shrimp: 1 Ltr / acre', 'Fish: 500 ml – 1 Ltr / acre'],
    pack: '1 Ltr'
  },
  {
    id: 'spyker', name: 'SPYKER', cat: 'disinfect', tag: 'Pond & Soil Disinfectant',
    comp: [['Alkyl dimethyl benzyl ammonium chloride', '80%'], ['Glutaraldehyde', '5%'], ['Acetic acid', '10%']],
    benefits: ['Disinfectant for water and soil', 'Residue-free'],
    dosage: ['1 – 1.5 Ltr / acre'],
    pack: '1 Ltr or 5 Ltr'
  },
  {
    id: 'vbnil', name: 'VBNIL', cat: 'disinfect', tag: 'Colloidal Silver',
    comp: ['Colloidal silver nano-particles (< 40 nm)', 'Bio-polymers', 'Stabilisers', 'Water Q.S.'],
    benefits: ['Nano-silver biocide', 'Preventive and curative pond treatment'],
    dosage: ['Preventive: 1–2.5 Ltr / acre, 5 days before stocking; feed 10 ml / kg', 'Curative: 2–5 Ltr / ha; feed 10 ml / kg for three days'],
    pack: 'Contact for pack sizes'
  },

  /* ---------- Oxygen & water treatment ---------- */
  {
    id: 'oxy-grans', name: 'OXY GRANS', cat: 'oxygen', tag: 'Oxygen Granules',
    comp: ['Calcium peroxide', 'Sodium percarbonate', 'Perborates'],
    compNote: 'High oxygen release',
    benefits: ['Improves dissolved oxygen', 'Relieves stress', 'Fast emergency action'],
    dosage: ['1 metre water depth: 1–3 kg / acre'],
    pack: '1 Kg & 10 Kgs'
  },
  {
    id: 'oxy-tab', name: 'OXY TAB', cat: 'oxygen', tag: 'Oxygen Tablets',
    comp: ['Calcium peroxide', 'Sodium percarbonate', 'Perborates'],
    benefits: ['Improves dissolved oxygen', 'Relieves stress', 'Fast emergency action'],
    dosage: ['1 metre water depth: 1–2 kg / hectare'],
    pack: '1 Kg, 10 Kgs, 25 Kgs'
  },
  {
    id: 'hydro-flow', name: 'HYDRO FLOW', cat: 'oxygen', tag: 'Hardness Regulator',
    comp: ['Ametox', 'Sodium dodecyl sulphate', 'Edetic acid (EDTA)', 'HSAS'],
    compNote: 'Non-antibiotic · Non-steroid',
    benefits: ['Regulates water hardness', 'Improves moulting', 'Removes calcium precipitation'],
    dosage: ['Shrimp: 1 – 2 kg / acre'],
    pack: '1 Kg, 10 Kgs'
  },

  /* ---------- Fish care ---------- */
  {
    id: 'fish-pro', name: 'FISH PRO', cat: 'fish', tag: 'Fish Probiotic',
    comp: ['Special strains that convert ammonia and suppress Vibrio'],
    compNote: 'Probiotic analysis: 10 billion CFU/gm',
    benefits: ['Disease control', 'Growth promoter', 'Better digestion & immunity', 'Improves water quality'],
    dosage: ['1 kg / acre'],
    pack: '5 Kg, 10 Kg & 25 Kgs'
  },
  {
    id: 'lice-care', name: 'LICE CARE', cat: 'fish', tag: 'Anti-Parasitic',
    comp: ['Medicinal plant alkaloid extracts', 'Feed additives'],
    benefits: ['Controls fish lice larval stages', 'Lernaea, Argulus, Ergasilus', 'Internal parasites: trematodes, cestodes, nematodes'],
    dosage: ['350 – 500 ml / acre or consult your aqua technician'],
    pack: '1 Ltr'
  },
  {
    id: 'bio-gold', name: 'BIO GOLD', cat: 'fish', tag: 'Anti-Parasitic',
    comp: ['Medicinal plant alkaloid extracts', 'Feed additives'],
    benefits: ['Controls Argulus lice', 'Improves appetite', 'Controls internal parasites'],
    dosage: ['By depth: 1 m – 250 ml, 2 m – 500 ml, 3 m – 750 ml, 4 m – 1 Ltr (add 250 ml per extra metre)'],
    pack: '1 Ltr'
  },
  {
    id: 'delta-x', name: 'DELTA X', cat: 'fish', tag: 'Insecticide',
    comp: [['Deltamethrin (per ml)', '1.75']],
    benefits: ['Kills insects incl. ants, spiders, fleas and flies', 'For aquaculture, agriculture and cattle sheds'],
    dosage: ['150 ml / acre or as advised by an aqua technician'],
    pack: '1 Ltr'
  },

  /* ---------- Lab-grade chemicals ---------- */
  {
    id: 'mgcl2', name: 'MAGNESIUM CHLORIDE', cat: 'chemical', tag: 'Hexahydrate',
    comp: [['Assay', 'NLT 99.5%'], ['Formula', 'MgCl₂·6H₂O'], ['Shelf life', '5 years']],
    benefits: ['High-purity magnesium source'],
    dosage: ['For laboratory and manufacturing use'],
    pack: 'Powder, Flakes, LR Grade'
  },
  {
    id: 'kcl', name: 'POTASSIUM CHLORIDE', cat: 'chemical', tag: 'Pure / LR Grade',
    comp: [['Assay', 'NLT 99.5%'], ['pH (5% aq.)', '5.5 – 8.5'], ['Bromide & Iodide', '0.01%'], ['Sulphate', '0.03%'], ['Iron', '0.002%'], ['CAS No.', '7447-40-7'], ['Formula', 'KCl'], ['Shelf life', '5 years']],
    benefits: ['High-purity potassium source'],
    dosage: ['For laboratory and manufacturing use'],
    pack: 'Commercial, Pure, LR Grade'
  },
  {
    id: 'cacl2', name: 'CALCIUM CHLORIDE', cat: 'chemical', tag: 'Powder / LR Grade',
    comp: [['Assay', 'NLT 99.5%'], ['Formula', 'CaCl₂'], ['Mol. weight', '110.98 g'], ['Shelf life', '5 years']],
    benefits: ['High-purity calcium source'],
    dosage: ['For laboratory and manufacturing use'],
    pack: 'Powder, LR Grade'
  }
];

/* ---------- Dosage calculator rules (per acre) ----------
   unit: 'L' | 'ml' | 'kg' | 'g'.  depth: true = dose is for 1 m depth and scales with depth.
   min/max = label range per acre; stress = emergency day-1 dose; prep = pond preparation dose. */
const DOSE_CALC = {
  'pro-ps':      { min: 5,   max: 5,   unit: 'L',  depth: true,  stress: 10 },
  'min-power':   { min: 10,  max: 10,  unit: 'kg', depth: false },
  'pro-5g':      { min: 240, max: 240, unit: 'g',  depth: false },
  'pro-9000':    { min: 240, max: 240, unit: 'g',  depth: false },
  'rama-pro':    { min: 1,   max: 1,   unit: 'kg', depth: false },
  'zeolite-g':   { min: 5,   max: 5,   unit: 'kg', depth: true,  prep: 10 },
  'odoact-plus': { min: 500, max: 500, unit: 'g',  depth: false },
  'minimix-gold':{ min: 10,  max: 10,  unit: 'kg', depth: false },
  'mini-flow':   { min: 1,   max: 1,   unit: 'L',  depth: false },
  'oxy-grans':   { min: 1,   max: 3,   unit: 'kg', depth: true },
  'hydro-flow':  { min: 1,   max: 2,   unit: 'kg', depth: false },
  'redvin':      { min: 1,   max: 1,   unit: 'L',  depth: true },
  'all-clear':   { min: 2,   max: 2,   unit: 'L',  depth: false },
  'idomax-plus': { min: 0.5, max: 1,   unit: 'L',  depth: true },
  'micro-shield':{ min: 1,   max: 1,   unit: 'L',  depth: false },
  'microban':    { min: 1,   max: 1.5, unit: 'L',  depth: false },
  'spyker':      { min: 1,   max: 1.5, unit: 'L',  depth: false },
  'virakill':    { min: 1,   max: 2,   unit: 'kg', depth: false },
  'fish-pro':    { min: 1,   max: 1,   unit: 'kg', depth: false },
  'lice-care':   { min: 350, max: 500, unit: 'ml', depth: false },
  'bio-gold':    { min: 250, max: 250, unit: 'ml', depth: true },
  'delta-x':     { min: 150, max: 150, unit: 'ml', depth: false }
};

/* ---------- Pond problem finder ---------- */
const PROBLEMS = [
  { id: 'gas',      en: 'Ammonia / toxic gas',      te: 'అమ్మోనియా / విష వాయువు',      products: ['pro-ps', 'pondzeolite', 'pondbiotic', 'odoact-plus', 'zeolite-g'] },
  { id: 'do',       en: 'Low oxygen (DO)',          te: 'తక్కువ ఆక్సిజన్ (DO)',          products: ['oxy-grans', 'oxy-tab', 'pro-ps'] },
  { id: 'vibrio',   en: 'High Vibrio',              te: 'అధిక విబ్రియో',                products: ['pro-ps', 'pro-9000', 'rama-pro'] },
  { id: 'bottom',   en: 'Dirty / black pond bottom',te: 'మురికి / నల్లని చెరువు అడుగు',  products: ['pondbiotic', 'zeolite-g', 'pro-ps', 'rama-pro'] },
  { id: 'plankton', en: 'Low plankton / bloom crash',te: 'తక్కువ ప్లాంక్టన్',           products: ['pro-ps', 'yeast-plus', 'min-power'] },
  { id: 'shell',    en: 'Soft shell / moulting',    te: 'మెత్తని పొట్టు / మౌల్టింగ్',     products: ['min-power', 'aquagel', 'mini-flow', 'nano-shell', 'hydro-flow'] },
  { id: 'growth',   en: 'Slow growth',              te: 'నెమ్మదిగా పెరుగుదల',            products: ['min-power', 'double-growth', 'bioforte', 'liver-tonic'] },
  { id: 'gut',      en: 'Gut health / feed intake', te: 'పేగు ఆరోగ్యం / మేత తీసుకోవడం',   products: ['gut-care', 'bioforte', 'gel-bond'] },
  { id: 'red',      en: 'Red disease / tail rot',   te: 'ఎర్ర వ్యాధి / తోక కుళ్ళు',       products: ['redvin', 'all-clear', 'micro-shield'] },
  { id: 'lice',     en: 'Fish lice / parasites',    te: 'చేప పేను / పరాన్నజీవులు',      products: ['lice-care', 'bio-gold'] }
];

/* ---------- Available packings (shown in the "Available packings" panel) ---------- */
const PACKINGS = [
  { id: 'min-power',   en: 'Minerals',            te: 'మినరల్స్',            size: '20 kg' },
  { id: 'min-power',   en: 'Minerals',            te: 'మినరల్స్',            size: '10 kg' },
  { id: 'pondbiotic',  en: 'Probiotic',           te: 'ప్రోబయోటిక్',          size: '1 kg' },
  { id: 'pondzeolite', en: 'Zeolite',             te: 'జియోలైట్',            size: '10 kg' },
  { id: 'pro-ps',      en: 'Super PS',            te: 'సూపర్ PS',             size: '20 Ltrs' },
  { id: 'aquagel',     en: 'Feed Supplement Gel', te: 'ఫీడ్ సప్లిమెంట్ జెల్', size: '5 Ltrs' }
];
