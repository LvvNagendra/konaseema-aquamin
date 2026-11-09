/* Website text in English (en) and Telugu (te).
   Keys are referenced in index.html with data-i18n="key" (text) or data-i18n-html="key" (allows <em>/<br>).
   To change any wording, edit it here. */

const I18N = {
  en: {
    'top.msg': 'Trusted aquaculture inputs for shrimp & fish farmers across the Andhra Pradesh coast',
    'nav.home': 'Home', 'nav.products': 'Products', 'nav.tools': 'Farmer Tools', 'nav.reviews': 'Reviews',
    'nav.about': 'About', 'nav.contact': 'Contact', 'nav.cta': 'Get Expert Advice',

    'hero.eyebrow': 'KONASEEMA AQUAMIN · STRENGTH FOR EVERY POND',
    'hero.title': 'Healthy ponds.<br><em>Stronger harvests.</em>',
    'hero.lead': 'Probiotics, minerals, feed supplements and pond-health solutions from <strong>VM Aqua Solutions</strong> — made for the shrimp and fish farmers of Andhra Pradesh.',
    'hero.cta1': 'Explore Products', 'hero.cta2': 'Find a solution for my pond',
    'stat.products': 'Products', 'stat.cats': 'Categories', 'stat.cfu': 'CFU/ml in Super PS',
    'hero.packs': 'Featured AQUAMIN range',

    'trust.1t': 'Full composition', 'trust.1d': 'Every product lists exact ingredients & strength',
    'trust.2t': 'Per-acre dosage', 'trust.2d': 'Simple directions for regular & stress use',
    'trust.3t': 'Telugu & English', 'trust.3d': 'Support in the language you prefer',
    'trust.4t': 'WhatsApp experts', 'trust.4d': 'Quick answers from our aqua team',

    'feat.kicker': 'FEATURED PRODUCTS',
    'feat.title': 'Our <em>flagship</em> pond solutions',
    'feat.desc': 'Complete composition, benefits and dosage for our most popular pond probiotic and mineral mix.',

    'cata.kicker': 'PRODUCT CATALOGUE',
    'cata.title': 'Every product, <em>full composition</em>',
    'cata.desc': 'Search by product name or ingredient. Tap any product for complete composition, benefits, dosage and pack sizes.',
    'search.ph': 'Search products or ingredients… e.g. zinc, Bacillus',
    'filter.all': 'All', 'empty': 'No products match your search.', 'empty.reset': 'Clear filters',
    'card.comp': 'Composition', 'card.details': 'View details', 'card.featured': 'Featured', 'card.more': 'more',
    'products': 'products',

    'sec.comp': 'Composition', 'sec.benefits': 'Benefits', 'sec.dosage': 'Dosage', 'sec.pack': 'Presentation',
    'btn.enquire': 'Enquire about', 'btn.wa': 'Enquire on WhatsApp', 'btn.calc': 'Calculate dosage',

    'tools.kicker': 'FARMER TOOLS',
    'tools.title': 'Solve pond problems, <em>dose it right</em>',
    'tools.desc': 'Free tools to help you pick the right product and the right quantity for your pond.',
    'finder.title': 'Pond Problem Finder',
    'finder.desc': 'Select the problem you see in your pond — we suggest products that can help.',
    'finder.pick': 'Choose a problem above to see suggested products.',
    'finder.note': 'Suggestions only. Please confirm with our aqua consultant before use.',
    'calc.title': 'Dosage Calculator',
    'calc.desc': 'Enter your pond size to calculate how much product you need.',
    'calc.product': 'Product', 'calc.area': 'Pond area (acres)', 'calc.depth': 'Water depth (metres)',
    'calc.need': 'You need', 'calc.regular': 'Regular dose', 'calc.stress': 'Stress / emergency (day 1)',
    'calc.prep': 'Pond preparation', 'calc.basis': 'Label dose',
    'calc.note': 'Calculated from label dosage. Actual dose may vary with pond condition — consult our team.',
    'calc.depthNa': 'Dose does not depend on depth for this product',

    'brand.kicker': 'KONASEEMA PRODUCT RANGE',
    'brand.title': 'Our aquaculture <em>product range</em>',
    'brand.desc': 'Five focused products for pond health, faster growth, water quality, disease resistance and higher yield. Tap a pack to see its details.',
    'brand.cta': 'Enquire about the range', 'brand.cta2': 'Become a dealer',

    'rev.kicker': 'FARMER REVIEWS',
    'rev.title': 'What <em>farmers say</em>',
    'rev.desc': 'Real experiences from shrimp and fish farmers who use our products.',
    'rev.write': 'Write a review', 'rev.sample': 'Sample review',

    'about.kicker': 'ABOUT VM AQUA SOLUTIONS',
    'about.title': 'Rooted in Konaseema.<br><em>Focused on your pond.</em>',
    'about.lead': 'VM Aqua Solutions brings the KONASEEMA AQUAMIN range of aquaculture inputs to shrimp and fish farming communities across Andhra Pradesh — with clear labels, honest compositions and practical advice.',
    'val.1t': 'Clear compositions', 'val.1d': 'Every product lists its full composition, strength and pack size.',
    'val.2t': 'Practical dosage', 'val.2d': 'Per-acre directions for regular use and for stress conditions.',
    'val.3t': 'Expert support', 'val.3d': 'Talk to our aqua team on WhatsApp in Telugu or English.',
    'about.badge': 'Serving farmers<br>across coastal AP',

    'contact.kicker': "LET'S TALK AQUACULTURE",
    'contact.title': 'Have a pond<br><em>to take care of?</em>',
    'contact.desc': 'Ask about prices, dosage, dealership or bulk orders. Fill the form — your enquiry opens directly in WhatsApp with all details.',
    'contact.phone': 'PHONE / WHATSAPP', 'contact.office': 'OFFICE', 'contact.hours': 'WORKING HOURS', 'contact.hoursv': 'Mon – Sat · 9:00 AM – 7:00 PM',

    'form.title': 'Send an enquiry', 'form.step1': 'Your details', 'form.step2': 'Pond details',
    'form.type': 'I want to', 'type.price': 'Know price', 'type.dosage': 'Get dosage advice', 'type.dealer': 'Become a dealer', 'type.bulk': 'Bulk order',
    'form.name': 'Full name', 'form.phone': 'Mobile number', 'form.village': 'Village / Mandal', 'form.district': 'District',
    'form.species': 'Culture species', 'sp.vannamei': 'Vannamei', 'sp.tiger': 'Black Tiger', 'sp.scampi': 'Scampi', 'sp.fish': 'Fish',
    'form.area': 'Pond area (acres)', 'form.doc': 'Days of culture (DOC)', 'form.problems': 'Problems in pond (optional)',
    'form.product': 'Product of interest', 'form.general': 'Not sure — please suggest',
    'form.message': 'Message', 'form.msgph': 'Anything else we should know…',
    'form.next': 'Next: pond details', 'form.back': 'Back', 'form.send': 'Send on WhatsApp', 'form.call': 'Or call us now',
    'err.name': 'Please enter your name.', 'err.phone': 'Please enter a valid 10-digit mobile number.',
    'form.ok': 'WhatsApp opened with your enquiry. Just press send!',
    'form.privacy': 'Your details are only shared with VM Aqua Solutions via WhatsApp.',

    'rv.title': 'Share your experience', 'rv.name': 'Your name', 'rv.place': 'Village / District', 'rv.rating': 'Your rating',
    'rv.product': 'Product used', 'rv.text': 'Your review', 'rv.send': 'Send review on WhatsApp',
    'rv.note': 'Reviews are checked by our team before they appear on the website.',

    'how.kicker': 'HOW IT WORKS',
    'how.title': 'From pond problem to <em>healthy harvest</em>',
    'how.1t': 'Tell us about your pond', 'how.1d': 'Share species, acres, DOC and the problem you see.',
    'how.2t': 'Get expert advice', 'how.2d': 'Our aqua team suggests the right product and dosage.',
    'how.3t': 'Order on WhatsApp', 'how.3d': 'Confirm your order on WhatsApp or by phone.',
    'how.4t': 'Healthy harvest', 'how.4d': 'Apply as directed and watch your pond improve.',
    'rib.1': 'Pond Health', 'rib.2': 'Faster Growth', 'rib.3': 'Water Quality', 'rib.4': 'Disease Resistance',
    'rib.5': 'Higher Yield', 'rib.6': 'Better Moulting', 'rib.7': 'Toxic Gas Control', 'rib.8': 'Stronger Immunity',
    'footer.tag': 'Quality aquaculture inputs for the farmers of coastal Andhra Pradesh.',
    'footer.products': 'Products', 'footer.links': 'Quick links', 'footer.contact': 'Contact',
    'footer.note': 'Dosages are general guidance — consult an aqua consultant for your pond.',
    'wa.hello': 'Hello VM Aqua Solutions'
  },

  te: {
    'top.msg': 'ఆంధ్రప్రదేశ్ తీర ప్రాంత రొయ్య & చేపల రైతుల నమ్మకమైన ఆక్వా ఉత్పత్తులు',
    'nav.home': 'హోమ్', 'nav.products': 'ఉత్పత్తులు', 'nav.tools': 'రైతు సాధనాలు', 'nav.reviews': 'సమీక్షలు',
    'nav.about': 'మా గురించి', 'nav.contact': 'సంప్రదించండి', 'nav.cta': 'నిపుణుల సలహా',

    'hero.eyebrow': 'కోనసీమ ఆక్వామిన్ · ప్రతి చెరువుకు బలం',
    'hero.title': 'ఆరోగ్యకరమైన చెరువులు.<br><em>మెరుగైన దిగుబడి.</em>',
    'hero.lead': '<strong>VM ఆక్వా సొల్యూషన్స్</strong> నుండి ప్రోబయోటిక్స్, మినరల్స్, ఫీడ్ సప్లిమెంట్స్ మరియు చెరువు ఆరోగ్య ఉత్పత్తులు — ఆంధ్రప్రదేశ్ రొయ్య & చేపల రైతుల కోసం.',
    'hero.cta1': 'ఉత్పత్తులు చూడండి', 'hero.cta2': 'నా చెరువు సమస్యకు పరిష్కారం',
    'stat.products': 'ఉత్పత్తులు', 'stat.cats': 'విభాగాలు', 'stat.cfu': 'సూపర్ PS లో CFU/ml',
    'hero.packs': 'ప్రధాన ఆక్వామిన్ ఉత్పత్తులు',

    'trust.1t': 'పూర్తి కంపోజిషన్', 'trust.1d': 'ప్రతి ఉత్పత్తిలో ఖచ్చితమైన పదార్థాలు & బలం',
    'trust.2t': 'ఎకరానికి మోతాదు', 'trust.2d': 'సాధారణ & ఒత్తిడి సమయ వాడకానికి సులభ సూచనలు',
    'trust.3t': 'తెలుగు & ఇంగ్లీష్', 'trust.3d': 'మీకు నచ్చిన భాషలో సహాయం',
    'trust.4t': 'వాట్సాప్ నిపుణులు', 'trust.4d': 'మా ఆక్వా బృందం నుండి త్వరిత సమాధానాలు',

    'feat.kicker': 'ప్రత్యేక ఉత్పత్తులు',
    'feat.title': 'మా <em>ప్రధాన</em> ఉత్పత్తులు',
    'feat.desc': 'మా ప్రముఖ చెరువు ప్రోబయోటిక్ మరియు మినరల్ మిక్స్ యొక్క పూర్తి కంపోజిషన్, ప్రయోజనాలు, మోతాదు.',

    'cata.kicker': 'ఉత్పత్తుల జాబితా',
    'cata.title': 'ప్రతి ఉత్పత్తి, <em>పూర్తి కంపోజిషన్</em>',
    'cata.desc': 'ఉత్పత్తి పేరు లేదా పదార్థంతో వెతకండి. పూర్తి వివరాల కోసం ఏదైనా ఉత్పత్తిపై నొక్కండి.',
    'search.ph': 'ఉత్పత్తి లేదా పదార్థం వెతకండి… ఉదా. zinc, Bacillus',
    'filter.all': 'అన్నీ', 'empty': 'మీ శోధనకు సరిపోయే ఉత్పత్తులు లేవు.', 'empty.reset': 'ఫిల్టర్లు తొలగించు',
    'card.comp': 'కంపోజిషన్', 'card.details': 'వివరాలు', 'card.featured': 'ప్రత్యేకం', 'card.more': 'ఇంకా',
    'products': 'ఉత్పత్తులు',

    'sec.comp': 'కంపోజిషన్', 'sec.benefits': 'ప్రయోజనాలు', 'sec.dosage': 'మోతాదు', 'sec.pack': 'ప్యాక్ సైజు',
    'btn.enquire': 'విచారించండి', 'btn.wa': 'వాట్సాప్‌లో విచారించండి', 'btn.calc': 'మోతాదు లెక్కించండి',

    'tools.kicker': 'రైతు సాధనాలు',
    'tools.title': 'చెరువు సమస్యలకు పరిష్కారం, <em>సరైన మోతాదు</em>',
    'tools.desc': 'మీ చెరువుకు సరైన ఉత్పత్తి మరియు సరైన పరిమాణం ఎంచుకోవడానికి ఉచిత సాధనాలు.',
    'finder.title': 'చెరువు సమస్య పరిష్కారం',
    'finder.desc': 'మీ చెరువులో కనిపించే సమస్యను ఎంచుకోండి — సహాయపడే ఉత్పత్తులను సూచిస్తాము.',
    'finder.pick': 'సూచించిన ఉత్పత్తులు చూడటానికి పైన సమస్యను ఎంచుకోండి.',
    'finder.note': 'ఇవి సూచనలు మాత్రమే. వాడే ముందు మా ఆక్వా కన్సల్టెంట్‌ను సంప్రదించండి.',
    'calc.title': 'మోతాదు కాలిక్యులేటర్',
    'calc.desc': 'మీకు ఎంత ఉత్పత్తి కావాలో తెలుసుకోవడానికి చెరువు పరిమాణం నమోదు చేయండి.',
    'calc.product': 'ఉత్పత్తి', 'calc.area': 'చెరువు విస్తీర్ణం (ఎకరాలు)', 'calc.depth': 'నీటి లోతు (మీటర్లు)',
    'calc.need': 'మీకు కావలసింది', 'calc.regular': 'సాధారణ మోతాదు', 'calc.stress': 'ఒత్తిడి / అత్యవసర (1వ రోజు)',
    'calc.prep': 'చెరువు తయారీ', 'calc.basis': 'లేబుల్ మోతాదు',
    'calc.note': 'లేబుల్ మోతాదు ఆధారంగా లెక్కించబడింది. చెరువు పరిస్థితిని బట్టి మారవచ్చు — మా బృందాన్ని సంప్రదించండి.',
    'calc.depthNa': 'ఈ ఉత్పత్తి మోతాదు నీటి లోతుపై ఆధారపడదు',

    'brand.kicker': 'కోనసీమ ఉత్పత్తుల శ్రేణి',
    'brand.title': 'మా ఆక్వాకల్చర్ <em>ఉత్పత్తుల శ్రేణి</em>',
    'brand.desc': 'చెరువు ఆరోగ్యం, వేగవంతమైన పెరుగుదల, నీటి నాణ్యత, వ్యాధి నిరోధకత మరియు అధిక దిగుబడి కోసం ఐదు ప్రత్యేక ఉత్పత్తులు. వివరాల కోసం ప్యాక్‌పై నొక్కండి.',
    'brand.cta': 'శ్రేణి గురించి విచారించండి', 'brand.cta2': 'డీలర్ అవ్వండి',

    'rev.kicker': 'రైతుల అభిప్రాయాలు',
    'rev.title': '<em>రైతులు</em> ఏమంటున్నారు',
    'rev.desc': 'మా ఉత్పత్తులు వాడుతున్న రొయ్య మరియు చేపల రైతుల నిజమైన అనుభవాలు.',
    'rev.write': 'సమీక్ష రాయండి', 'rev.sample': 'నమూనా సమీక్ష',

    'about.kicker': 'VM ఆక్వా సొల్యూషన్స్ గురించి',
    'about.title': 'కోనసీమలో పాతుకుపోయి.<br><em>మీ చెరువుపై దృష్టి.</em>',
    'about.lead': 'VM ఆక్వా సొల్యూషన్స్ కోనసీమ ఆక్వామిన్ ఉత్పత్తులను ఆంధ్రప్రదేశ్ అంతటా రొయ్య మరియు చేపల రైతులకు అందిస్తుంది — స్పష్టమైన లేబుల్స్, నిజాయితీ కంపోజిషన్ మరియు ఆచరణాత్మక సలహాతో.',
    'val.1t': 'స్పష్టమైన కంపోజిషన్', 'val.1d': 'ప్రతి ఉత్పత్తి పూర్తి కంపోజిషన్, బలం మరియు ప్యాక్ సైజు.',
    'val.2t': 'ఆచరణాత్మక మోతాదు', 'val.2d': 'సాధారణ మరియు ఒత్తిడి పరిస్థితులకు ఎకరానికి సూచనలు.',
    'val.3t': 'నిపుణుల సహాయం', 'val.3d': 'తెలుగు లేదా ఇంగ్లీష్‌లో వాట్సాప్‌లో మా ఆక్వా బృందంతో మాట్లాడండి.',
    'about.badge': 'తీర ఆంధ్రప్రదేశ్<br>రైతులకు సేవ',

    'contact.kicker': 'ఆక్వా గురించి మాట్లాడుకుందాం',
    'contact.title': 'మీ చెరువు<br><em>సంరక్షణ మాకు వదిలేయండి</em>',
    'contact.desc': 'ధరలు, మోతాదు, డీలర్‌షిప్ లేదా బల్క్ ఆర్డర్ల గురించి అడగండి. ఫారం నింపండి — మీ విచారణ నేరుగా వాట్సాప్‌లో తెరుచుకుంటుంది.',
    'contact.phone': 'ఫోన్ / వాట్సాప్', 'contact.office': 'కార్యాలయం', 'contact.hours': 'పని వేళలు', 'contact.hoursv': 'సోమ – శని · ఉ. 9:00 – సా. 7:00',

    'form.title': 'విచారణ పంపండి', 'form.step1': 'మీ వివరాలు', 'form.step2': 'చెరువు వివరాలు',
    'form.type': 'నాకు కావలసింది', 'type.price': 'ధర తెలుసుకోవాలి', 'type.dosage': 'మోతాదు సలహా', 'type.dealer': 'డీలర్ అవ్వాలి', 'type.bulk': 'బల్క్ ఆర్డర్',
    'form.name': 'పూర్తి పేరు', 'form.phone': 'మొబైల్ నంబర్', 'form.village': 'గ్రామం / మండలం', 'form.district': 'జిల్లా',
    'form.species': 'సాగు జాతి', 'sp.vannamei': 'వన్నామీ', 'sp.tiger': 'బ్లాక్ టైగర్', 'sp.scampi': 'స్కాంపి', 'sp.fish': 'చేపలు',
    'form.area': 'చెరువు విస్తీర్ణం (ఎకరాలు)', 'form.doc': 'సాగు రోజులు (DOC)', 'form.problems': 'చెరువులో సమస్యలు (ఐచ్ఛికం)',
    'form.product': 'కావలసిన ఉత్పత్తి', 'form.general': 'తెలియదు — సూచించండి',
    'form.message': 'సందేశం', 'form.msgph': 'మేము తెలుసుకోవలసిన ఇతర విషయాలు…',
    'form.next': 'తర్వాత: చెరువు వివరాలు', 'form.back': 'వెనుకకు', 'form.send': 'వాట్సాప్‌లో పంపండి', 'form.call': 'లేదా ఇప్పుడే కాల్ చేయండి',
    'err.name': 'దయచేసి మీ పేరు నమోదు చేయండి.', 'err.phone': 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.',
    'form.ok': 'మీ విచారణతో వాట్సాప్ తెరుచుకుంది. పంపు నొక్కండి!',
    'form.privacy': 'మీ వివరాలు వాట్సాప్ ద్వారా VM ఆక్వా సొల్యూషన్స్‌తో మాత్రమే పంచుకోబడతాయి.',

    'rv.title': 'మీ అనుభవం పంచుకోండి', 'rv.name': 'మీ పేరు', 'rv.place': 'గ్రామం / జిల్లా', 'rv.rating': 'మీ రేటింగ్',
    'rv.product': 'వాడిన ఉత్పత్తి', 'rv.text': 'మీ సమీక్ష', 'rv.send': 'వాట్సాప్‌లో సమీక్ష పంపండి',
    'rv.note': 'సమీక్షలు వెబ్‌సైట్‌లో కనిపించే ముందు మా బృందం పరిశీలిస్తుంది.',

    'how.kicker': 'ఇది ఎలా పనిచేస్తుంది',
    'how.title': 'చెరువు సమస్య నుండి <em>ఆరోగ్యకరమైన దిగుబడి</em> వరకు',
    'how.1t': 'మీ చెరువు గురించి చెప్పండి', 'how.1d': 'జాతి, ఎకరాలు, DOC మరియు మీరు చూస్తున్న సమస్యను పంచుకోండి.',
    'how.2t': 'నిపుణుల సలహా పొందండి', 'how.2d': 'మా ఆక్వా బృందం సరైన ఉత్పత్తి మరియు మోతాదును సూచిస్తుంది.',
    'how.3t': 'వాట్సాప్‌లో ఆర్డర్ చేయండి', 'how.3d': 'వాట్సాప్‌లో లేదా ఫోన్ ద్వారా మీ ఆర్డర్ నిర్ధారించండి.',
    'how.4t': 'ఆరోగ్యకరమైన దిగుబడి', 'how.4d': 'సూచించిన విధంగా వాడి, చెరువు మెరుగుదలను గమనించండి.',
    'rib.1': 'చెరువు ఆరోగ్యం', 'rib.2': 'వేగవంతమైన పెరుగుదల', 'rib.3': 'నీటి నాణ్యత', 'rib.4': 'వ్యాధి నిరోధకత',
    'rib.5': 'అధిక దిగుబడి', 'rib.6': 'మెరుగైన మౌల్టింగ్', 'rib.7': 'విష వాయువుల నియంత్రణ', 'rib.8': 'బలమైన రోగనిరోధక శక్తి',
    'footer.tag': 'తీర ఆంధ్రప్రదేశ్ రైతుల కోసం నాణ్యమైన ఆక్వా ఉత్పత్తులు.',
    'footer.products': 'ఉత్పత్తులు', 'footer.links': 'త్వరిత లింకులు', 'footer.contact': 'సంప్రదించండి',
    'footer.note': 'మోతాదులు సాధారణ మార్గదర్శకం మాత్రమే — మీ చెరువుకు ఆక్వా కన్సల్టెంట్‌ను సంప్రదించండి.',
    'wa.hello': 'నమస్కారం VM ఆక్వా సొల్యూషన్స్'
  }
};

/* Telugu names for categories (English names live in products.js) */
const CATEGORY_TE = {
  pond: 'చెరువు & నీటి ప్రోబయోటిక్స్', mineral: 'మినరల్స్', feed: 'ఫీడ్ సప్లిమెంట్స్',
  disinfect: 'క్రిమిసంహారకాలు & ఆరోగ్యం', oxygen: 'ఆక్సిజన్ & నీటి శుద్ధి', fish: 'చేపల సంరక్షణ', chemical: 'ల్యాబ్ గ్రేడ్ రసాయనాలు'
};
