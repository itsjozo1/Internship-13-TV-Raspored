const tvPrograms = [
    {
        id: 1,
        title: "Breaking Bad",
        desc: "Nastavlja priču o nastavniku kemije koji postaje proizvođač metamfetamina i partnerira s bivšim učenikom kako bi izgradio carstvo droge, dok se suočava s opasnostima kriminalnog podzemlja.",
        genre: ["Crime", "Serija"],
        image: "https://churchlifejournal.nd.edu/assets/515222/1200x/1900px_ozymandias_breaking_bad.jpg",
        channelId: 4,
        startTime: "00:00",
        endTime: "01:00"
    },
    {
        id: 2,
        title: "Game of Thrones",
        desc: "Smatra se jednim od najboljih televizijskih serija svih vremena. Smještena u fiktivne kontinente Westeros i Essos, Igra prijestolja istražuje borbu za vlast među plemićkim obiteljima dok se bore za kontrolu Željeznog prijestolja i Sedam kraljevstava.",
        genre: ["Serija"],
        image: "https://cdn.vox-cdn.com/thumbor/t6MM8K66BH83ghZP7VN-u6TsLoY=/0x0:1920x1080/1200x800/filters:focal(807x72:1113x378)/cdn.vox-cdn.com/uploads/chorus_image/image/57890539/got_group.0.jpg",
        channelId: 4,
        startTime: "01:00",
        endTime: "03:00"
    },
    {
        id: 3,
        title: "Friends",
        desc: "Prati živote, odnose i komične pustolovine šestero prijatelja koji žive na Manhattanu.",
        genre: ["Sitkom", "Serija"],
        image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9/525e19cadd275c68e933773cc3bdad91a12fe10e.jpg?submitted=1684658977805&host=wbd-images.prod-vod.h264.io&partner=beamcom",
        channelId: 4,
        startTime: "03:00",
        endTime: "04:00"
    },
    {
        id: 4,
        title: "Stranger Things",
        desc: "Grupa djece u malom gradu susreće nadnaravne sile i vladine zavjere kada se jedan dječak tajanstveno nestane.",
        genre: ["Serija", "Horor"],
        image: "https://assets.teenvogue.com/photos/6436c21b4ea1fdd79f2d6c94/4:3/w_1499,h_1124,c_limit/StrangerThings_S3_Illustrated_Vertical_FINAL_RGB_Digital__EN.jpg",
        channelId: 4,
        startTime: "04:00",
        endTime: "06:00"
    },
    {
        id: 5,
        title: "The Office (SAD)",
        desc: "Mockumentary sitcom koji prikazuje svakodnevne živote uredskih radnika u tvrtki za prodaju papira Dunder Mifflin.",
        genre: ["Sitkom", "Serija"],
        image: "https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg",
        channelId: 4,
        startTime: "06:00",
        endTime: "08:00"
    },
    {
        id: 6,
        title: "The Crown",
        desc: "Prati vladavinu kraljice Elizabete II i događaje koji su oblikovali drugu polovicu 20. stoljeća.",
        genre: ["Serija"],
        image: "https://harpersbazaar.com.au/wp-content/uploads/2022/10/The-Crown-Feature-Image-1.webp",
        channelId: 4,
        startTime: "08:00",
        endTime: "10:00"
    },
    {
        id: 7,
        title: "Sherlock",
        desc: "Moderni prilagodba detektivskih priča o Sherlocku Holmesu Arthura Conana Doylea, s briljantnom dedukcijom, složenim misterijima i dinamičnim odnosom između Holmesa i Watsona.",
        genre: ["Crime", "Serija"],
        image: "https://m.media-amazon.com/images/S/pv-target-images/53e83bc204a084572f88498d99c4e347eb3d6dbe59507889df26a02133ab9b06.jpg",
        channelId: 4,
        startTime: "10:00",
        endTime: "13:00"
    },
    {
        id: 8,
        title: "Mandalorian",
        desc: "Smješten u svemiru Ratova zvijezda, prati avanture usamljenog lovca na ucjene u vanjskim predjelima galaksije, daleko od autoriteta Nove Republike.",
        genre: ["Znanstvena fantastika", "Serija"],
        image: "https://books.disney.com/content/uploads/2022/08/915a2Dr5L.jpg",
        channelId: 4,
        startTime: "13:00",
        endTime: "16:30"
    },
    {
        id: 9,
        title: "Black Mirror",
        desc: "Antologijska serija koja istražuje mračne i satirične aspekte suvremenog društva i tehnologije, često s neočekivanim obratima i jezivim pričama.",
        genre: ["Znanstvena fantastika", "Drama"],
        image: "https://www.nme.com/wp-content/uploads/2018/12/bm.png",
        channelId: 4,
        startTime: "16:30",
        endTime: "19:45"
    },
    {
        id: 10,
        title: "Narcos",
        desc: "Prati priču o stvarnim događajima u vezi s kolumbijskim narko kartelom i borbi američkih agenata da ga zaustave.",
        genre: ["Crime", "Serija"],
        image: "https://m.media-amazon.com/images/M/MV5BZjllMGZlZmMtNmQ2NS00ZmZjLThkMDQtNTU5MWJlNDFiZDg1XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
        channelId: 4,
        startTime: "19:45",
        endTime: "21:30"
    },
    {
        id: 11,
        title: "Money Heist",
        desc: "Skupina pljačkaša, vođena tajanstvenim likom poznatim kao Profesor, izvodi najveću pljačku u povijesti španjolske Uprave za tisak i novčarstvo.",
        genre: ["Crime", "Serija"],
        image: "https://deadline.com/wp-content/uploads/2020/10/money-heist-part-4-preview-netflix.jpg?w=681&h=383&crop=1",
        channelId: 4,
        startTime: "21:30",
        endTime: "23:00"
    },
    {
        id: 12,
        title: "Dark",
        desc: "Njemačka serija koja prati složene zaplete i obiteljske tajne u malom njemačkom gradu nakon nestanka dječaka.",
        genre: ["Znanstvena fantastika", "Serija"],
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14652182_b_v8_aa.jpg",
        channelId: 4,
        startTime: "23:00",
        endTime: "00:00"
    },
    {
        id: 14,
        title: "Dnevnik",
        desc: "Dnevnik je redoviti informativni program koji donosi najnovije vijesti iz zemlje i svijeta, političke događaje, gospodarske trendove, sportske rezultate i druge važne informacije.",
        genre: ["Informativni program"],
        image: "https://www.novilist.hr/wp-content/uploads/2023/03/7866935-scaled.jpg",
        channelId: 1,
        startTime: "12:00",
        endTime: "13:15"
    },    
    {
        id: 15,
        title: "Noćna muzika",
        desc: "Noćni glazbeni program koji nudi najnovije glazbene hitove, intervjue s poznatim glazbenicima i nastupe uživo.",
        genre: ["Glazbeni program", "Zabavni program"],
        image: "https://emibo.com.hr/5_storage-share/6790_Slika-Pozadina-za-Glazbene-Note-Tema-Pozadina-Crkveno.jpg",
        channelId: 1,
        startTime: "00:00",
        endTime: "06:30"
    },
    {
        id: 16,
        title: "Afričke savane",
        desc: "Dokumentarni film koji istražuje raznolikost i ljepotu afričkih savana, prikazujući život divljih životinja i njihovu borbu za opstanak.",
        genre: ["Dokumentarni film"],
        image: "https://s14.gonet.tv/api/obr/skupina_556f1341cc0dae923e66fb58987f70ff-960.jpg",
        channelId: 1,
        startTime: "10:00",
        endTime: "12:00"
    },
    {
        id: 17,
        title: "Podmorje jadrana",
        desc: "Dokumentarni film koji istražuje bogatstvo i ljepotu podmorja Jadranskog mora, prikazujući raznoliki podvodni svijet i ekološke izazove.",
        genre: ["Dokumentarni film"],
        image: "https://bodulija.net/wp-content/uploads/2021/09/podmorje_1.jpg",
        channelId: 1,
        startTime: "13:15",
        endTime: "15:30"
    }, 
    {
        id: 18,
        title: "Dobro jutro, Hrvatska",
        desc: "Dobro jutro, Hrvatska je jutarnji televizijski program koji pruža gledateljima širok spektar informacija, zabave i korisnih savjeta za početak dana. Uključuje intervjue s gostima iz svijeta politike, kulture, sporta i zabave, vijesti, meteorološke prognoze, zanimljive reportaže te savjete o zdravlju, kulinarstvu i stilu života.",
        genre: ["Informativni program", "Zabavni program"],
        image: "https://direktno.hr/upload/publish/83710/dobro-jutro1_5900a3442b40e.jpg",
        channelId: 1,
        startTime: "06:30",
        endTime: "10:00"
    },  
    {
        id: 19,
        title: "Crno-bijeli svijet",
        desc: "Crno-bijeli svijet je serija koja se odvija u Zagrebu 1968. godine, istražujući živote mladih ljudi i njihove obitelji u turbulentnom vremenu društvenih promjena. Serija prikazuje sukobe generacija, društvene nemire, ljubavne priče te borbu za osobnu slobodu i identitet u vrijeme političkih previranja i kulturnih promjena.",
        genre: ["Serija"],
        image: "https://apihrt.akamaized.net/media/1a/b3/01-crno-bijeli-svijet-2-logo-20220708080101.webp",
        channelId: 1,
        startTime: "15:30",
        endTime: "17:00"
    }, 
    {
        id: 20,
        title: "Potjera",
        desc: "Potjera je popularna kviz emisija u kojoj se natjecatelji bore protiv izazovnog protivnika, poznatog kao 'Lovac', kako bi osvojili novčanu nagradu. Natjecatelji moraju odgovoriti na pitanja iz različitih područja znanja te pokušati pobjeći od Lovca kako bi sačuvali svoj novac. Emisija nudi dinamičnu i napetu atmosferu uz puno zabave i adrenalina.",
        genre: ["Kviz", "Zabavni program"],
        image: "https://apihrt.akamaized.net/media/25/b6/potjera-20211129122133.webp",
        channelId: 1,
        startTime: "17:00",
        endTime: "19:00"
    },
    {
        id: 21,
        title: "Dnevnik 2",
        desc: "Dnevnik 2 je kasnovečernji informativni program koji donosi pregled najvažnijih vijesti dana, analize događaja iz zemlje i svijeta te specijalne reportaže i intervjue. Emitira se nakon večernjih sati kako bi gledateljima pružio svežu i temeljitu informiranost prije no što završe svoj dan. Program je fokusiran na ozbiljno novinarstvo i pruža dublji uvid u aktualna zbivanja.",
        genre: ["Informativni program"],
        image: "https://apihrt.akamaized.net/media/a5/43/tvd2-logo-20210124175805.webp",
        channelId: 1,
        startTime: "19:00",
        endTime: "21:00"
    },
    {
        id: 22,
        title: "Večernji jazz koncert",
        desc: "Večernji jazz koncert je glazbeni program posvećen izvedbama vrhunskih jazz glazbenika i sastava. Gledatelji imaju priliku uživati u izuzetnim glazbenim nastupima koji obuhvaćaju širok raspon jazz stilova, od klasičnog jazz standarda do suvremenih interpretacija. Ovaj program stvara opuštajuću atmosferu i pruža glazbenu poslasticu za ljubitelje jazza.",
        genre: ["Glazbeni program", "Zabavni program"],
        image: "https://www.vecernji.hr/media/img/e6/ce/d500eb1e05a1df12ae3d.jpeg",
        channelId: 1,
        startTime: "21:00",
        endTime: "00:00"
    },
    {
        id: 23,
        title: "Tarot",
        desc: "Mistični program u kojem tarot majstor čita karte i tumači sudbine gledatelja.",
        genre: ["Zabavni program"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWZFxLXYSQ89Oe5ArCjKsj6GXtxgI0XILBQ&usqp=CAU",
        channelId: 2,
        startTime: "00:00",
        endTime: "05:00"
    },
    {
        id: 24,
        title: "Dječji program",
        desc: "Dječji program je zabavni i edukativni sadržaj namijenjen najmlađoj publici. Ovaj program obuhvaća raznolike dječje emisije, crtane serije, edukativne dokumentarce te interaktivne igre i aktivnosti koje potiču dječju kreativnost i razvoj. Dječji program pruža siguran i inspirativan prostor za djecu da istražuju, uče i zabavljaju se.",
        genre: ["Zabavni program", "Dječji program"],    
        image: "https://www.vecernji.hr/media/img/f5/3d/da694b36e9ed92ecf020.jpeg",
        channelId: 2,
        startTime: "05:00",
        endTime: "11:00"
    },
    {
        id: 25,
        title: "Supertalent",
        desc: "Spektakularni talent show u kojem natjecatelji pokazuju svoje izvanredne talente pred žirijem i publikom.",
        genre: ["Zabavni program", "Reality"],
        image: "https://image.dnevnik.hr/media/images/1920x1080/Sep2023/62621153-supertalent-splash.jpg",
        channelId: 2,
        startTime: "21:00",
        endTime: "00:00"
    },
    {
        id: 26,
        title: "Brak na prvu",
        desc: "Emotivno iskustvo u kojem pojedinci pristaju na aranžirani brak s potpunim strancem i vide hoće li se zaljubiti nakon prvog susreta.",
        genre: ["Zabavni program", "Reality"],
        image: "https://images.rtl.hr/media/images/original/Oct2021/cro-b690f102-2b47-11ec-9c27-0e39e2a72cf9_208234.jpeg?v=62fb&fop=fp:0.50:0.50",
        channelId: 2,
        startTime: "19:00",
        endTime: "21:00"
    },
    {
        id: 27,
        title: "Krv nije voda",
        desc: "Krv nije voda je emocionalna dramska serija koja prati živote članova jedne obitelji i njihove međusobne odnose. Kroz zaplete ljubavi, tajne, i sukobe, serija istražuje duboke emocionalne veze unutar obitelji te njihovu borbu s izazovima svakodnevnog života. Dinamični likovi i neočekivani obrati čine ovu seriju intrigantnom i uzbudljivom za gledatelje.",
        genre: ["Serija"],
        image: "https://images.rtl.hr/media/images/822x468/Nov2022/6f62e7bbc9fa2debe3eb_57321.jpg?v=afce",
        channelId: 2,
        startTime: "11:00",
        endTime: "13:00"
    },
    {
        id: 28,
        title: "Titanic",
        desc: "Titanic je epski romantični filmski spektakl režiran od strane Jamesa Camerona. Smješten protiv pozadine nesretnog prvog putovanja broda RMS Titanic 1912. godine, film prati ljubavnu priču između Rose, mlade aristokratkinje, i Jacka, siromašnog umjetnika, koji se susreću i zaljubljuju na brodu. Dok njihova romansa cvjeta, moraju se nositi s klasnim podjelama i društvenim očekivanjima tog vremena. Međutim, njihova ljubav se suočava s konačnim ispitom kada Titanic udari u ledeni brijeg i počne tonuti, pokrećući utrku s vremenom za preživljavanje. Titanic je vječna priča o ljubavi, gubitku i ljudskoj otpornosti, s prekrasnim vizualima, nezaboravnom glazbom i nezaboravnim izvedbama svojih glumaca.",
        genre: ["Romantika", "Film"],
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20056_v_h10_ab.jpg",
        channelId: 2,
        startTime: "13:00",
        endTime: "16:00"
    },
    {
        id: 29,
        title: "Magazin",
        desc: "Magazin je publikacija koja nudi raznovrsne članke, reportaže, intervjue, i fotografije o različitim temama, uključujući zabavu, modu, kulturu, putovanja, zdravlje, i još mnogo toga. Sadržaj je obično organiziran u različite rubrike kako bi se zadovoljile različite interese čitatelja. Magazini mogu biti tiskani ili digitalni, a često se ističu vizualno privlačnim izgledom i kvalitetnim novinarskim radom.",
        genre: ["Informativni program", "Zabavni program"],
        image: "https://image.dnevnik.hr/media/images/840x460/Jan2019/61625676.jpg",
        channelId: 2,
        startTime: "16:00",
        endTime: "18:00"
    },
    {
        id: 30,
        title: "RTL Danas",
        desc: "RTL Danas je popularni televizijski informativni program koji donosi najnovije vijesti i događaje iz Hrvatske i svijeta. Emisija pruža svežu i relevantnu informaciju o politici, gospodarstvu, kulturi, sportu i ostalim temama od interesa. Uz stručne komentare i analize, gledatelji dobivaju cjelovit pregled dnevnih zbivanja. RTL Danas je pouzdan izvor informacija koji drži korak s aktualnostima i pruža jasnu sliku o svijetu oko nas.",
        genre: ["Informativni program"],
        image: "https://images.rtl.hr/media/images/822x468/Oct2022/4edc4c1ff2d735034715_41154.jpg?v=3671",
        channelId: 2,
        startTime: "18:00",
        endTime: "19:00"
    },
    {
        id: 31,
        title: "Best porn movies compilation",
        desc: "Kompilacija filmova za odrasle.",
        genre: ["Program za odrasle"],
        image: "https://trademarks.justia.com/media/og_image.php?serial=77668581",
        channelId: 3,
        startTime: "00:00",
        endTime: "02:00"
    },
    {
        id: 32,
        title: "Porn bloopers",
        desc: "Kompilacija grešaka sa setova filmova za odrasle.",
        genre: ["Program za odrasle"],
        image: "https://s3-prod.adage.com/s3fs-public/styles/800x600/public/20200904_pornhubLaborDay_3x2_0.jpg",
        channelId: 3,
        startTime: "03:00",
        endTime: "04:00"
    },
    {
        id: 33,
        title: "Porn land",
        desc: "Kompilacija filmova za odrasle",
        genre: ["Program za odrasle"],
        image: "https://cigars.roku.com/v1/contain/800x454/https%3A%2F%2Fimage.roku.com%2Fdeveloper_channels%2Fprod%2F118c3798ac12a2c4fb4029d9452654ec69d90e7821f45f7da7e79987edf1b6be.jpg",
        channelId: 3,
        startTime: "02:00",
        endTime: "03:00"
    },
    {
        id: 13,
        title: "Jutarnja klapska glazba",
        desc: "Jutarnja klapska glazba je program namijenjen ljubiteljima tradicionalne dalmatinske glazbe. Uz zvuke klapskih pjesama i instrumentalne glazbe, gledatelji mogu uživati u autentičnom glazbenom iskustvu koje evocira duh Mediterana. Ovaj program stvara ugodnu atmosferu i pruža osjećaj topline i nostalgije, idealan za započeti dan s pozitivnom energijom.",
        genre: ["Glazbeni program"],
        image: "https://barikada.com/wp-content/uploads/2017/02/Klapa-Iskon-Band.jpg",
        channelId: 3,
        startTime: "04:00",
        endTime: "08:00"
    },
    {
        id: 34,
        title: "Himalaje",
        desc: "Himalaje su dokumentarna serija koja istražuje fascinantni svijet najviših planinskih vrhova na Zemlji. Kroz impresivne pejzaže, divlji život, i izazove ekstremnih vremenskih uvjeta, ova serija vodi gledatelje na nevjerojatno putovanje kroz jedan od najimpresivnijih i najnedostupnijih dijelova našeg planeta. Upoznajte tajanstveni svijet Himalaja i otkrijte priče o hrabrosti, izdržljivosti i ljepoti koja ostavlja bez daha.",
        genre: ["Dokumentarni film"],    
        image: "https://t3.ftcdn.net/jpg/01/50/68/38/360_F_150683839_fzRSwBu0bcb6tjDvOGw3wOdIWpnOUayz.jpg",
        channelId: 3,
        startTime: "08:00",
        endTime: "11:00"
    },
    {
        id: 35,
        title: "Starci",
        desc: "Grown Ups (Starci) je američka komedija iz 2010. godine, koju je režirao Dennis Dugan, a u glavnim ulogama su Adam Sandler, Kevin James, Chris Rock, David Spade i Rob Schneider",
        genre: ["Film", "Romantika"],
        image: "https://image.dnevnik.hr/media/images/1600xX/Sep2023/62636822-starci.jpg",
        channelId: 3,
        startTime: "11:00",
        endTime: "13:00"
    },
    {
        id: 36,
        title: "Shrek",
        desc: "je animirani filmski klasik iz 2001. godine, koji je producirala kompanija DreamWorks Animation. Film je postao izuzetno popularan zbog svoje jedinstvene priče, izvanredne animacije i humorističnih likova.",
        genre: ["Film", "Dječji program"],
        image: "https://cdn.vox-cdn.com/thumbor/1i4ECs3zLWaWf32jmEFAc_U4AyI=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/54014619/shrek.0.jpg",
        channelId: 3,
        startTime: "13:00",
        endTime: "14:30"
    },    
    {
        id: 37,
        title: "Milijunaš",
        desc: "Milijunaš je popularna televizijska igra u kojoj sudionici imaju priliku osvojiti velike novčane nagrade odgovarajući na seriju općih znanstvenih pitanja. Igrači se natječu kako bi postali milijunaši odabirom točnog odgovora između četiri opcije. Svako pitanje donosi sve veći iznos novca, ali s povećanjem iznosa raste i težina pitanja. Ova dinamična emisija nudi gledateljima uzbuđenje i napetost dok natjecatelji testiraju svoje znanje i vještine pod pritiskom.",
        genre: ["Kviz", "Zabavni program"],    
        image: "https://lidermedia.hr/images/slike/2022/01/13/405236.jpg",
        channelId: 3,
        startTime: "14:30",
        endTime: "16:00"
    },   
    {
        id: 38,
        title: "Dva i pol muškarca",
        desc: "Dva i pol muškarca je popularna humoristična serija koja prati živote nekonvencionalne obitelji. Glavni likovi su Charlie Harper, uspješni pisac melodija i ženskar, njegov brat Alan, razvedeni chiropractor, te Alanov sin Jake. Serija prikazuje njihove svakodnevne avanture, ljubavne pustolovine i komične situacije u kojima se nalaze. Kroz humoristične dijaloge i nekonvencionalne odnose likova, Dva i pol muškarca nudi gledateljima obilje smijeha i zabave.",
        genre: ["Sitkom", "Serija"],
        image: "https://static2.story.hr/api/v3/images/108/216/277244?ts=2021-09-01T13:35:08",
        channelId: 3,
        startTime: "16:00",
        endTime: "18:30"
    },    
    {
        id: 39,
        title: "Music News",
        desc: "Music News je emisija koja donosi najnovije vijesti iz glazbenog svijeta. Gledatelji imaju priliku saznati o najnovijim albumima, koncertima, glazbenim trendovima i događajima iz svijeta glazbe. Uz ekskluzivne intervjue s glazbenicima, iza scene snimanja glazbenih videa i priče o glazbenim uspjesima i kontroverzama, Music News pruža sveobuhvatni pregled događaja iz glazbene industrije. Emisija je namijenjena ljubiteljima glazbe svih žanrova i pruža informacije i zabavu vezane uz njihovu omiljenu umjetnost.",
        genre: ["Glazbeni program", "Informativni program"],
        image: "https://images.rtl.hr/media/images/1024x576/Mar2023/0f479a5b7f23074c9c39_73843.jpg?v=a52e",
        channelId: 3,
        startTime: "18:30",
        endTime: "21:30"
    },    
    {
        id: 40,
        title: "Alien",
        desc: "Alien je znanstveno-fantastični horor film iz 1979. godine, redatelja Ridleyja Scotta. Radnja filma prati posadu svemirskog broda Nostromo koja istražuje neistraženi planet, gdje nailaze na opasnu izvanzemaljsku formu života. Kada otkriju da su zarobljeni s neizmjerno opasnim stvorenjem, posada se bori za preživljavanje protiv nemilosrdnog i nepredvidljivog neprijatelja. Alien se ističe svojom napetom atmosferom, vizualnim efektima i nezaboravnim dizajnom stvorenja, postavši klasik znanstveno-fantastičnog žanra.",
        genre: ["Film", "Horor"],
        image: "https://variety.com/wp-content/uploads/2020/12/alien-1.jpg?w=1000",
        channelId: 3,
        startTime: "21:30",
        endTime: "00:00"
    },
  ];

  export {tvPrograms};
  

  