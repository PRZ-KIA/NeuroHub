import type { WikiEntry } from '../types';

export const wikiEntries: WikiEntry[] = [
  // Anatomy entries
  {
    id: 'hippocampus',
    title: 'Hipokamp',
    titleLatin: 'Hippocampus',
    category: 'anatomy',
    definition: 'Struktura mózgu w kształcie konika morskiego, kluczowa dla konsolidacji pamięci deklaratywnej i nawigacji przestrzennej.',
    etymology: 'Od greckiego ἱππόκαμπος (hippokampos) – "koń morski", ze względu na charakterystyczny kształt struktury.',
    clinicalRelevance: 'Uszkodzenie hipokampa (np. w przebiegu choroby Alzheimera, niedokrwienia tylnej tętnicy mózgowej lub po zabiegach chirurgicznych) prowadzi do amnezji anterogradnej – niemożności tworzenia nowych wspomnień deklaratywnych.',
    relatedModules: ['module-1', 'module-2'],
    relatedTerms: ['Amnezja', 'Formacja hipokampowa', 'Kora rywalna', 'Układ limbiczny'],
    content: `
      <p>Hipokamp jest częścią układu limbicznego, położonym w płatach skroniowych mediomedialnie. Składa się z trzech głównych obszarów: zawiasków ( Cornu Ammonis – CA1, CA2, CA3), zakrętu zębatego (gyrus dentatus) oraz poduszkowatego (subiculum).</p>
      
      <p><strong>Funkcje:</strong></p>
      <ul>
        <li><strong>Konsolidacja pamięci deklaratywnej</strong> – Hipokamp jest kluczowy dla przekształcania krótkotrwałych wspomnień w długotrwałe. Proces ten wymaga syntezy białek i jest modulowany przez emocje (przez ciałko migdałowate).</li>
        <li><strong>Nawigacja przestrzenna</strong> – Neurony miejsca (place cells) odkryte przez O'Keefe'a (2014, Nagroda Nobla) kodują pozycję przestrzenną zwierzęcia w otoczeniu.</li>
        <li><strong>Tworzenie map poznawczych</strong> – Hipokamp tworzy reprezentacje relacji przestrzennych i czasowych między zdarzeniami.</li>
      </ul>
      
      <p><strong>Połączenia:</strong></p>
      <ul>
        <li><strong>Aferentne (wejściowe)</strong> – Kora entorhinalna (główne źródło), kora peryrhinalna, zakręt obręczy.</li>
        <li><strong>Eferentne (wyjściowe)</strong> – Powrót do kory entorhinalnej, projekcje do podwzgórza, wzgórza i kory przedczołowej.</li>
      </ul>
      
      <p><strong>Plastyczność hipokampa:</strong> Hipokamp jest jednym z nielicznych obszarów mózgu, w których występuje neurogeneza dorosłych (powstawanie nowych neuronów) – szczególnie w zakręcie zębatym.</p>
    `,
  },
  {
    id: 'amygdala',
    title: 'Ciałko Migdałowate',
    titleLatin: 'Corpus Amygdaloideum',
    category: 'anatomy',
    definition: 'Migdałowata struktura w głębi płatów skroniowych, centralna dla przetwarzania emocji, szczególnie strachu i zagrożenia.',
    etymology: 'Od greckiego ἀμυγδαλή (amygdalē) – "migdał", ze względu na kształt struktury.',
    clinicalRelevance: 'Uszkodzenie ciałka migdałowatego (np. w przebiegu zespołu Urbacha-Wiethe) prowadzi do zaburzeń rozpoznawania emocji, szczególnie strachu w wyrazach twarzy. Pacjenci z bilateralnym uszkodzeniem wykazują zmniejszoną reaktywność na zagrożenie.',
    relatedModules: ['module-1', 'module-4'],
    relatedTerms: ['Strach', 'Emocje', 'Układ limbiczny', 'Hipokamp'],
    content: `
      <p>Ciałko migdałowate składa się z wielu podgrup jąder, z których najważniejsze to:</p>
      <ul>
        <li><strong>Jądro podstawne boczne (BLA – Basolateral Amygdala)</strong> – Odbiera informacje sensoryczne z kory i wzgórza, kluczowe dla uczenia się asocjacyjnego.</li>
        <li><strong>Jądro środkowe (CeA – Central Amygdala)</strong> – Główne wyjście do struktur podwzgórzowych, kontrolujących odpowiedź autonomiczną na strach.</li>
        <li><strong>Jądro korowe (CoA – Cortical Amygdala)</strong> – Powiązane z przetwarzaniem zapachów i feromonów.</li>
      </ul>
      
      <p><strong>Obwód strachu:</strong> Joseph LeDoux (1996) opisał "obwód strachu" – szybką ścieżkę od wzgórza przez ciałko migdałowate do podwzgórza, umożliwiającą reakcję na zagrożenie zanim świadomy umysł zdąży je zidentyfikikować.</p>
      
      <p><strong>Neuroplastyczność emocjonalna:</strong> Ciałko migdałowate wykazuje wyjątkową plastyczność. Ekspozycja na przewlekły stres może powodować jego powiększenie, podczas gdy terapie redukujące lęk mogą zmniejszać jego reaktywność.</p>
    `,
  },
  {
    id: 'prefrontal-cortex',
    title: 'Kora Przedczołowa',
    titleLatin: 'Cortex Praefrontalis',
    category: 'anatomy',
    definition: 'Przednia część płatów czołowych, odpowiedzialna za funkcje wykonawcze, planowanie, podejmowanie decyzji i kontrolę behawioralną.',
    etymology: 'Łacińskie przedrostki: prae- (przed) + frontalis (czołowy).',
    clinicalRelevance: 'Uszkodzenie kory przedczołowej (jak w przypadku Phineasa Gage) prowadzi do dramatycznych zmian osobowości, upośledzenia funkcji wykonawczych, zaburzeń kontroli impulsów i dysfunkcji społecznych. Jest to obszar szczególnie wrażliwy na urazy pourazowe.',
    relatedModules: ['module-1', 'module-4'],
    relatedTerms: ['Funkcje wykonawcze', 'Osobowość', 'Planowanie', 'Decyzje'],
    content: `
      <p>Kora przedczołowa dzieli się na kilka funkcjonalnych obszarów:</p>
      <ul>
        <li><strong>Przedczołowa kora przyśrodkowa (dlPFC)</strong> – Pamięć robocza, kontrola poznawcza, planowanie złożone.</li>
        <li><strong>Przedczołowa kora brzuszna (vmPFC)</strong> – Podejmowanie decyzji, regulacja emocjonalna, teoria umysłu.</li>
        <li><strong>Przedczołowa kora boczna (lPFC)</strong> – Selekcja odpowiedzi, elastyczność poznawcza.</li>
        <li><strong>Kora ruchowa dodatkowa (SMA)</strong> – Planowanie sekwencji ruchowych.</li>
      </ul>
      
      <p><strong>Dojrzewanie:</strong> Kora przedczołowa jest jednym z ostatnich obszarów mózgu, który dojrzewa – proces ten trwa do około 25. roku życia. To wyjaśnia, dlaczego nastolatki mogą mieć trudności z długoterminowym planowaniem i kontrolą impulsów.</p>
      
      <p><strong>Teoria umysłu:</strong> Brzuszna część kory przedczołowej jest kluczowa dla rozumienia stanów mentalnych innych osób (teoria umysłu) – umiejętności, której brak jest charakterystyczny dla autyzmu.</p>
    `,
  },
  {
    id: 'corpus-callosum',
    title: 'Ciało Modzelowate',
    titleLatin: 'Corpus Callosum',
    category: 'anatomy',
    definition: 'Największy spoidłowy szlak nerwowy, łączący lewą i prawą półkulę mózgowe.',
    etymology: 'Łac. corpus (ciało) + callosum (modzelowate, twarde), ze względu na strukturę tkanki.',
    clinicalRelevance: 'Przecięcie ciała modzelowatego (np. w leczeniu padaczki opornej) prowadzi do "rozspojenia półkul" – zaburzenia przekazywania informacji między półkulami. Pacjenci mogą wykazywać "zanik lewej ręki" (left hand apraxia) i inne deficyty integracji międzypółkulowej.',
    relatedModules: ['module-1'],
    relatedTerms: ['Szlaki komisyralne', 'Półkule mózgowe', 'Lateralizacja'],
    content: `
      <p>Ciało modzelowate zawiera około 200-250 milionów włókien nerwowych, organizowanych w części:</p>
      <ul>
        <li><strong>Rostrum (dziób)</strong> – Najbardziej przednia, wąska część.</li>
        <li><strong>Genu (kolano)</strong> – Zakrzywiona część przednia, łączy kory przedczołowe.</li>
        <li><strong>Trunk (pień)</strong> – Główna część, łączy kory ciemieniowe.</li>
        <li><strong>Isthmus (przesmyk)</strong> – Wąska część, łączy kory skroniowe.</li>
        <li><strong>Splenium (płat)</strong> – Gruba część tylna, łączy kory potyliczne.</li>
      </ul>
      
      <p><strong>Topografia włókien:</strong> Włókna są zorganizowane somatotopowo – włókna z przednich obszarów kory biegną w przedniej części ciała modzelowatego, a z tylnych – w tylnej.</p>
      
      <p><strong>Agenezja ciała modzelowatego:</strong> Wrodony brak ciała modzelowatego może być częściowy lub całkowity. Osoby z tym zaburzeniem często rozwijają kompensacyjne strategie (np. silniejsze projekcje podwzgórzowe) i mogą mieć zaskakująco dobrze zachowane funkcje, choć deficyty w integracji wzrokowo-motorycznej są zazwyczaj obecne.</p>
    `,
  },

  // Physiology entries
  {
    id: 'ltp',
    title: 'Długotrwała Potencjacja',
    titleLatin: 'Long-Term Potentiation (LTP)',
    category: 'physiology',
    definition: 'Trwałe wzmocnienie transmisji synaptycznej między dwoma neuronami w wyniku wysokiej aktywności presynaptycznej. Uważana za podstawę komórkową uczenia się i pamięci.',
    etymology: 'Angielskie określenie: long-term (długotrwała) + potentiation (potencjacja, wzmocnienie).',
    clinicalRelevance: 'Zaburzenia LTP są obserwowane w wielu stanach patologicznych: choroba Alzheimera (zaburzona LTP przez toksyczne oligomery beta-amyloidu), schizofrenia, zaburzenia lękowe. Leki nootropowe (np. donepezil) mogą wzmacniać LTP.',
    relatedModules: ['module-2'],
    relatedTerms: ['LTD', 'Synaptyczność', 'Hipokamp', 'NMDA', 'Plastyczność'],
    content: `
      <p>LTP została odkryta w 1973 roku przez Terje Lømo i Timothy'ego Bliss w hipokampie królika. Jest to jeden z najlepiej zbadanych mechanizmów plastyczności neuronalnej.</p>
      
      <p><strong>Mechanizm LTP w synapsie CA3-CA1:</strong></p>
      <ol>
        <li><strong>Depolaryzacja postsynaptyczna</strong> – Wysokofrekencyjna stymulacja (np. 100 Hz przez 1s) powoduje silną depolaryzację neuronu postsynaptycznego przez receptory AMPA.</li>
        <li><strong>Odblokowanie NMDAR</strong> – Depolaryzacja usuwa jon Mg²⁺ z kanału receptora NMDA, umożliwiając wnikanie Ca²⁺.</li>
        <li><strong>Kaskada sygnałowa Ca²⁺</strong> – Wzrost Ca²⁺ aktywuje kinazę CaMKII, która fosforyluje receptory AMPA i inne białka.</li>
        <li><strong>Wstawianie receptorów AMPA</strong> – Do błony postsynaptycznej wstawiane są dodatkowe receptory AMPA, zwiększając przewodnictwo.</li>
        <li><strong>Synteza białek (L-LTP)</strong> – Trwała LTP wymaga aktywacji genów i syntezy nowych białek synaptycznych.</li>
      </ol>
      
      <p><strong>Typy LTP:</strong></p>
      <ul>
        <li><strong>LTP NMDA-zależna</strong> – Najczęstsza forma, wymaga aktywacji receptorów NMDA.</li>
        <li><strong>LTP NMDA-niezależna</strong> – Może być mediowana przez receptory mGluR lub kanały wapniowe.</li>
        <li><strong>E-LTP (wczesna)</strong> – Trwa 1-3 godziny, nie wymaga syntezy białek.</li>
        <li><strong>L-LTP (późna)</strong> – Trwa godziny do dni, wymaza transkrypcji i translacji.</li>
      </ul>
    `,
  },
  {
    id: 'ltd',
    title: 'Długotrwała Depresja',
    titleLatin: 'Long-Term Depression (LTD)',
    category: 'physiology',
    definition: 'Trwałe osłabienie transmisji synaptycznej, przeciwstawny mechanizm do LTP. Może być mechanizmem zapominania lub "czyszczenia" nieużywanych synaps.',
    etymology: 'Ang. long-term (długotrwała) + depression (depresja, obniżenie).',
    clinicalRelevance: 'Zaburzenia LTD mogą prowadzić do nadmiernej stabilności wspomnień (np. w PTSD) lub trudności w uczeniu się nowych asocjacji. W móżdżku LTD jest kluczowa dla uczenia się koordynacji ruchowej.',
    relatedModules: ['module-2'],
    relatedTerms: ['LTP', 'Zapominanie', 'Móżdżek', 'Synaptyczność'],
    content: `
      <p>LTD jest mechanizmem komplementarnym do LTP – podczas gdy LTP wzmacnia używane synapsy, LTD osłabia te, które są rzadko aktywowane. Ten proces jest kluczowy dla optymalizacji sieci neuronalnej.</p>
      
      <p><strong>Mechanizmy LTD:</strong></p>
      <ul>
        <li><strong>LTD NMDA-zależna (hipokamp)</strong> – Zachodzi przy niskiej częstotliwości stymulacji (1-5 Hz). Umiarkowany wzrost Ca²⁺ aktywuje fosfatazy (PP1, PP2A, kalcyneurynę), które defosforylują receptory AMPA.</li>
        <li><strong>LTD mGluR-zależna (móżdżek)</strong> – W móżdżku LTD wymaga aktywacji receptorów metabotropowych glutaminianu (mGluR1) i wejścia Ca²⁺ przez kanały IP3.</li>
        <li><strong>Endocytoza receptorów</strong> – Mechanizm wewnętrzny: receptory AMPA są usuwane z błony postsynaptycznej poprzez endocytozę.</li>
      </ul>
      
      <p><strong>LTD w móżdżku:</strong> W komórkach Purkinjego móżdżku LTD jest kluczowa dla uczenia się koordynacji ruchowej. Zaburzenia tego procesu (np. w ataksji) prowadzą do niezgrabnych, niekoordynowanych ruchów.</p>
    `,
  },
  {
    id: 'neuroplasticity',
    title: 'Neuroplastyczność',
    titleLatin: 'Neuroplasticitas',
    category: 'physiology',
    definition: 'Zdolność układu nerwowego do zmiany swojej struktury i funkcji w odpowiedzi na doświadczenie, uczenie się lub uszkodzenie.',
    etymology: 'Z greckiego νεῦρον (neuron – nerw) + łacińskiego plasticus (plastyczny, dający się formować).',
    clinicalRelevance: 'Neuroplastyczność jest fundamentem rehabilitacji neurologicznej. Po urazie mózgu, nieuszkodzone obszary mogą przejąć funkcje uszkodzonych. Treningi neuroplastyczności są stosowane w rehabilitacji po udarze, w terapii afazji i zaburzeń poznawczych.',
    relatedModules: ['module-1', 'module-2'],
    relatedTerms: ['Synaptyczność', 'Neurogeneza', 'Rehabilitacja', 'LTP', 'LTD'],
    content: `
      <p>Neuroplastyczność manifestuje się na wielu poziomach:</p>
      <ul>
        <li><strong>Plastyczność molekularna</strong> – Zmiany w składzie receptorów, ekspresji genów, syntezie białek (LTP/LTD).</li>
        <li><strong>Plastyczność synaptyczna</strong> – Tworzenie, wzmacnianie, osłabianie i eliminacja synaps.</li>
        <li><strong>Plastyczność strukturalna</strong> – Zmiany w morfologii dendrytów i aksonów, tworzenie nowych połączeń.</li>
        <li><strong>Plastyczność funkcjonalna</strong> – Zmiany w mapach korowych, reorganizacja po uszkodzeniu.</li>
        <li><strong>Neurogeneza</strong> – Powstawanie nowych neuronów (głównie w zakręcie zębatym hipokampa).</li>
      </ul>
      
      <p><strong>Krytyczne okresy:</strong> W rozwoju występują "krytyczne okresy" – fazy szczególnej plastyczności, podczas których doświadczenie kształtuje rozwój układu nerwowego (np. okres krytyczny dla rozwoju wzroku).</p>
      
      <p><strong>Rehabilitacja:</strong> Współczesne terapie wykorzystują zasadę "używaj albo strać" (use it or lose it) oraz "specyficzność treningu" – ćwiczenia muszą być specyficzne dla deficytu, aby maksymalizować neuroplastyczność.</p>
    `,
  },

  // Pathology entries
  {
    id: 'aphasia-broca',
    title: 'Afazja Broki',
    titleLatin: 'Aphasia Expressiva',
    category: 'pathology',
    definition: 'Zaburzenie produkcji mowy spowodowane uszkodzeniem tylnej części trzeciego zakrętu czołowego lewej półkuli (obszaru Broki).',
    etymology: 'Od nazwiska Paula Broki, francuskiego chirurga, który opisał ten zespół w 1861 roku.',
    clinicalRelevance: 'Afazja Broki jest najczęstszym typem afazji niepłynnej. Pacjenci mają trudności z tworzeniem zdań, ale rozumienie jest względnie zachowane. Mowa jest telegraficzna, agramatyczna. Wymaga intensywnej terapii logopedycznej.',
    relatedModules: ['module-3'],
    relatedTerms: ['Afazja', 'Obszar Broki', 'Język', 'Mowa', 'Afazja Wernickego'],
    content: `
      <p>Afazja Broki (nazywana też afazją motoryczną, ekspresyjną lub niepłynną) charakteryzuje się:</p>
      
      <ul>
        <li><strong>Niepłynna mowa</strong> – Wysiłkowa, telegraficzna, z opuszczaniem spójników i przyimków (agramatyzm).</li>
        <li><strong>Zachowane rozumienie</strong> – Pacjenci rozumieją mowę, choć mogą mieć trudności ze złożonymi strukturami składniowymi.</li>
        <li><strong>Dysprozodia</strong> – Monotonna, pozbawiona intonacji mowa.</li>
        <li><strong>Awareność deficytu</strong> – Pacjenci są zazwyczaj świadomi swoich trudności, co może prowadzić do frustracji.</li>
        <li><strong>Hemiplegia prawostronna</strong> – Często towarzyszy afazji, ponieważ obszar Broki jest blisko kory motorycznej.</li>
      </ul>
      
      <p><strong>Lokalizacja:</strong> Obszar Broki (pola Brodmanna 44 i 45) znajduje się w zakręcie czołowym dolnym (pars opercularis i pars triangularis) lewej półkuli. U około 95% osób praworęcznych i 70% leworęcznych język jest lateralizowany do lewej półkuli.</p>
      
      <p><strong>Rehabilitacja:</strong> Terapia Melodic Intonation Therapy (MIT) wykorzystuje melodyjność do rekrutowania prawej półkuli w produkcję mowy. Intensywna terapia (godziny dziennie) w pierwszych miesiącach po udarze daje najlepsze efekty.</p>
    `,
  },
  {
    id: 'agnosia',
    title: 'Agnosja',
    titleLatin: 'Agnosia',
    category: 'pathology',
    definition: 'Zaburzenie rozpoznawania bodźców sensorycznych przy zachowanym funkcjonowaniu zmysłów. Pacjent widzi/słyszy/czuje, ale nie może zidentyfikikować bodźca.',
    etymology: 'Z greckiego ἀ- (a- – bez) + γνῶσις (gnosis – poznanie, wiedza).',
    clinicalRelevance: 'Agnosja jest objawem uszkodzenia kory asocjacyjnej. Najczęstsza to agnosja wzrokowa (po uszkodzeniu płatów potyliczno-skroniowych) i prozopagnosja (niedostrzeganie twarzy). Rehabilitacja opiera się na wykorzystywaniu innych modalności sensorycznych.',
    relatedModules: ['module-5'],
    relatedTerms: ['Prozopagnosja', 'Apercepcja', 'Asocjacja', 'Poznanie', 'Percepcja'],
    content: `
      <p>Ludia Teuber (1968) zdefiniowała agnozję jako "percepcję bez poznania". Kluczowe jest rozróżnienie agnozji od deficytów sensorycznych – pacjent z agnozją ma zachowane funkcje pierwotne (np. widzi kontury, kolory), ale nie może zidentyfikikować obiektu.</p>
      
      <p><strong>Typy agnozji:</strong></p>
      <ul>
        <li><strong>Agnosja appercepcyjna</strong> – Deficyt na poziomie percepcji. Pacjent nie może skonstruować spójnej reprezentacji percepcyjnej. Związana z uszkodzeniem kory wzrokowej asocjacyjnej (V2, V4).</li>
        <li><strong>Agnosja asocjacyjna</strong> – Percepcja zachowana, ale brak dostępu do pamięci semantycznej. Pacjent może narysować obiekt, ale go nie rozpozna. Związana z kora skroniową dolną.</li>
        <li><strong>Prozopagnosja</strong> – Specyficzny deficyt rozpoznawania twarzy. Związana z zakrętem poduszkowatym (FFA).</li>
        <li><strong>Agnosja przestrzenna</strong> – Deficyty w lokalizacji i orientacji przestrzennej.</li>
        <li><strong>Akinetopsja</strong> – Niedostrzeganie ruchu (rzadka, po uszkodzeniu MT/V5).</li>
      </ul>
      
      <p><strong>Przypadek Dr. P.:</strong> Oliver Sacks opisał pacjenta ("The Man Who Mistook His Wife for a Hat"), który nie mógł rozpoznawać twarzy i przedmiotów, widząc je jako zbiory niezależnych cech. Mógł jednak rozpoznawać przez dotyk lub dźwięk.</p>
    `,
  },
  {
    id: 'neglect',
    title: 'Neglekt Przestrzenny',
    titleLatin: 'Neglegentia Spatialis',
    category: 'pathology',
    definition: 'Zaburzenie uwagi przestrzennej polegające na nieświadomym pomijaniu bodźców z jednej strony przestrzeni, najczęściej lewej.',
    etymology: 'Łac. neglegentia – zaniedbanie, niedbalstwo; spatialis – przestrzenny.',
    clinicalRelevance: 'Neglekt występuje w 50-80% przypadków udaru prawej półkuli. Utrudnia rehabilitację i zwiększa ryzyko urazów. Terapia obejmuje skanowanie wizualne, stymulację lewej strony i techniki lustrzane.',
    relatedModules: ['module-5'],
    relatedTerms: ['Uwaga', 'Przestrzeń', 'Kora ciemieniowa', 'Ekstynkcja'],
    content: `
      <p>Neglekt jest jednym z najbardziej spektakularnych deficytów w neuropsychologii. Pacjent nie tylko nie zwraca uwagi na lewą stronę, ale często nie jest świadomy jej istnienia (anosognozja).</p>
      
      <p><strong>Formy neglektu:</strong></p>
      <ul>
        <li><strong>Egocentryczny</strong> – Względem ciała (lewa strona ciała jest ignorowana).</li>
        <li><strong>Alocentryczny</strong> – Względem obiektu (lewa strona każdego obiektu).</li>
        <li><strong>Przestrzenny</strong> – Względem środka przestrzeni (wszystko na lewo od środka).</li>
        <li><strong>Personalny</strong> – Ignorowanie części własnego ciała.</li>
        <li><strong>Representacyjny</strong> – Deficyty w wyobrażeniowej przestrzeni (np. w opisie z pamięci).</li>
      </ul>
      
      <p><strong>Neuroanatomia:</strong> Neglekt najczęściej występuje po uszkodzeniu prawej kory ciemieniowej (kąt skroniowo-ciermieniowy) i/lub przedniej części zakrętu obręczy. Prawa półkula dominuje w uwadze przestrzennej obu stron przestrzeni, podczas gdy lewa kontroluje tylko prawą stronę.</p>
      
      <p><strong>Testy:</strong> Test przekreślania linii, kopiowanie rysunku, test bisekcji linii, test karmienia lwa (kancielowanie celów po lewej stronie).</p>
    `,
  },

  // Cognition entries
  {
    id: 'working-memory',
    title: 'Pamięć Robocza',
    titleLatin: 'Memoria Operativa',
    category: 'cognition',
    definition: 'Zdolność do tymczasowego przechowywania i manipulowania informacją w umyśle. Kluczowa dla funkcji wykonawczych, rozwiązywania problemów i uczenia się.',
    etymology: 'Ang. working memory – dosłownie "pamięć pracująca", podkreślająca aktywny charakter procesu.',
    clinicalRelevance: 'Deficyty pamięci roboczej są obserwowane w ADHD, schizofrenii, demencji i po uszkodzeniach przedczołowych. Ograniczona pojemność pamięci roboczej (7±2 elementy) jest czynnikiem ryzyka trudności w nauce.',
    relatedModules: ['module-2', 'module-4'],
    relatedTerms: ['Funkcje wykonawcze', 'Uwaga', 'Pamięć krótkotrwała', 'Span'],
    content: `
      <p>Baddeley i Hitch (1974) zaproponowali wielokomponentowy model pamięci roboczej, zaktualizowany przez Baddeleya (2000):</p>
      
      <ol>
        <li><strong>Nadzorca centralny (Central Executive)</strong> – Kontroler uwagi, koordynuje podsystemy. Związany z przedczołową korą przyśrodkową (dlPFC).</li>
        <li><strong>Pętla fonologiczna (Phonological Loop)</strong> – Przechowywanie werbalne.
          <ul>
            <li>Składnik fonologiczny (pasywne przechowywanie)</li>
            <li>Artulatoryjna kontrola (subwokalna repetycja)</li>
          </ul>
        </li>
        <li><strong>Szkicownik wzrokowo-przestrzenny (Visuospatial Sketchpad)</strong> – Przechowywanie wzrokowo-przestrzenne. Związany z płatami ciemieniowymi i potylicznymi.</li>
        <li><strong>Bufor epizodyczny (Episodic Buffer)</strong> – Integracja informacji między modalnościami, łączy pamięć roboczą z pamięcią długotrwałą.</li>
      </ol>
      
      <p><strong>Pojemność:</strong> George Miller (1956) wykazał, że pojemność pamięci krótkotrwałej wynosi 7±2 elementy ("magiczna liczba siedem"). Nelson Cowan (2001) zasugerował, że rzeczywista pojemność to 4±1 elementy, gdy kontroluje się strategie grupowania (chunking).</p>
      
      <p><strong>Neuronalne podstawy:</strong> Neurony w dlPFC wykazują aktywność utrzymaną (persistent activity) podczas opóźnień w zadaniach pamięciowych. Aktywność ta koduje tożsamość i lokalizację obiektu w pamięci.</p>
    `,
  },
  {
    id: 'executive-functions',
    title: 'Funkcje Wykonawcze',
    titleLatin: 'Functiones Executivae',
    category: 'cognition',
    definition: 'Zespół procesów poznawczych odpowiedzialnych za celowe, kontrolowane zachowanie: planowanie, podejmowanie decyzji, kontrolę impulsów, elastyczność poznawczą.',
    etymology: 'Łac. functiones – funkcje; executivae – wykonawcze, od exsequi (wykonywać).',
    clinicalRelevance: 'Deficyty funkcji wykonawczych są jednym z najczęstszych objawów uszkodzenia przedczołowego. Występują w ADHD, otępieniu czołowo-skroniowym, schizofrenii i zaburzeniach osobowości. Poważnie utrudniają funkcjonowanie w życiu codziennym.',
    relatedModules: ['module-4'],
    relatedTerms: ['Kora przedczołowa', 'Planowanie', 'Kontrola', 'Inhibicja'],
    content: `
      <p>Funkcje wykonawcze obejmują szereg powiązanych procesów:</p>
      
      <ul>
        <li><strong>Inhibicja odpowiedzi</strong> – Zdolność do powstrzymania domyślnej lub wyuczonej odpowiedzi.</li>
        <li><strong>Ustalanie i zmiana zestawu (set-shifting)</strong> – Elastyczność poznawcza, przełączanie między zadaniami.</li>
        <li><strong>Aktualizację i monitorowanie</strong> – Śledzenie informacji w pamięci roboczej, detekcja błędów.</li>
        <li><strong>Planowanie i organizację</strong> – Tworzenie sekwencji działań prowadzących do celu.</li>
        <li><strong>Teorię umysłu</strong> – Rozumienie stanów mentalnych innych osób.</li>
      </ul>
      
      <p><strong>Zimne vs. gorące funkcje:</strong> Stuss i Shallice (1986) rozróżnili:</p>
      <ul>
        <li><strong>Zimne (cognitive)</strong> – Abstrakcyjne, pozbawione emocjonalnego kontekstu (np. sortowanie kart Wisconsin).</li>
        <li><strong>Gorące (emotional/social)</strong> – Związane z regulacją emocjonalną, motywacją i kontekstem społecznym (np. podejmowanie decyzji osobistych, teoria umysłu).</li>
      </ul>
      
      <p><strong>Testy:</strong> Sortowanie kart Wisconsin (WCST), Wieża z Hanoi, zadanie Stroopa, Trail Making Test, test fluencji słownej.</p>
    `,
  },

  // Clinical entries
  {
    id: 'anterograde-amnesia',
    title: 'Amnezja Anterogradna',
    titleLatin: 'Amnesia Anterograda',
    category: 'clinical',
    definition: 'Niezdolność do tworzenia nowych wspomnień po wystąpieniu uszkodzenia mózgu. Pacjent pamięta przeszłość, ale nie może zapamiętywać nowych zdarzeń.',
    etymology: 'Z greckiego ἀ- (a- – bez) + μνήμη (mneme – pamięć); łac. anterogradus – skierowany do przodu.',
    clinicalRelevance: 'Amnezja anterogradna jest najczęstszym typem amnezji po uszkodzeniu hipokampa (np. w chorobie Alzheimera, zespole Korzakoffa, po zabiegach chirurgicznych). Wymaga specjalistycznej opieki i strategii kompensacyjnych.',
    relatedModules: ['module-2'],
    relatedTerms: ['Amnezja', 'Hipokamp', 'Konsolidacja', 'H.M.', 'Pamięć'],
    content: `
      <p>Amnezja anterogradna jest definiowana jako niemożność tworzenia nowych wspomnień deklaratywnych (epizodycznych i semantycznych) po wystąpieniu uszkodzenia. Wspomnienia utworzone przed uszkodzeniem są zazwyczaj zachowane (chociaż może występować częściowa amnezja retrogradna dla okresu bezpośrednio poprzedzającego uszkodzenie).</p>
      
      <p><strong>Przyczyny:</strong></p>
      <ul>
        <li><strong>Uszkodzenie hipokampa</strong> – Bilateralna resekcja (jak u H.M.), niedokrwienie tylnej tętnicy mózgowej, choroba Alzheimera.</li>
        <li><strong>Zespół Korzakoffa</strong> – Amnezja związana z niedoborem tiaminy (witaminy B1), często w przebiegu alkoholizmu.</li>
        <li><strong>Encefalitisy</strong> – Szczególnie wywołane przez HSV (opryszczkowe zapalenie mózgu), które atakuje hipokamp i skroniowe rogi.</li>
        <li><strong>Urazy czaszkowo-mózgowe</strong> – Szczególnie obrażenia wyrostków skroniowych.</li>
      </ul>
      
      <p><strong>Zachowana pamięć nie-deklaratywna:</strong> Pacjenci z amnezją anterogradną (jak H.M.) zazwyczaj zachowują zdolność uczenia się procedur (pamięć nie-deklaratywna), prymingu i uczenia się warunkowego. To rozróżnienie potwierdza podział pamięci na deklaratywną i nie-deklaratywną.</p>
      
      <p><strong>Rehabilitacja:</strong> Strategie kompensacyjne obejmują dzienniki, smartfony z przypomnieniami, rutyny i strukturyzowane środowisko.</p>
    `,
  },
  {
    id: 'prosopagnosia',
    title: 'Prozopagnosja',
    titleLatin: 'Prosopagnosia',
    category: 'clinical',
    definition: 'Specyficzny deficyt rozpoznawania twarzy. Pacjent widzi oczy, nos, usta, ale nie może zintegrować ich w rozpoznawalną twarz.',
    etymology: 'Z greckiego πρόσωπον (prosopon – twarz) + ἀ- (a- – bez) + γνῶσις (gnosis – poznanie).',
    clinicalRelevance: 'Prozopagnosja może być nabyta (po uszkodzeniu) lub wrodzona (developmental). Osoby z prozopagnosją wrodzoną często nie zdają sobie sprawy ze swojego deficytu do późnej adolescencji. Utrudnia funkcjonowanie społeczne i zawodowe.',
    relatedModules: ['module-5'],
    relatedTerms: ['Agnosja', 'Twarze', 'FFA', 'Płat skroniowy', 'Percepcja'],
    content: `
      <p>Prozopagnosja jest najczęściej opisywanym typem agnozji wzrokowej. Nazywana jest czasem "ślepotą twarzy" (face blindness).</p>
      
      <p><strong>Typy prozopagnosji:</strong></p>
      <ul>
        <li><strong>Appercepcyjna</strong> – Deficyt na poziomie percepcyjnym. Pacjent nie może skonstruować spójnej reprezentacji twarzy. Związana z uszkodzeniem prawego zakrętu poduszkowatego (FFA).</li>
        <li><strong>Asocjacyjna</strong> – Percepcja twarzy zachowana, ale brak dostępu do tożsamości. Pacjent może ocenić wiek i płeć, ale nie rozpoznać osoby.</li>
        <li><strong>Wrodzona (developmental)</strong> – Obecna od urodzenia, często rodzinna. Może dotyczyć 2-3% populacji. Związana z nieprawidłowościami w rozwoju sieci twarzy.</li>
      </ul>
      
      <p><strong>Obszar FFA:</strong> Nancy Kanwisher (1997) zidentyfikikowała Fusiform Face Area (FFA) – obszar w zakręcie poduszkowatym, który jest specjalizowany dla przetwarzania twarzy. Aktywacja FFA jest silniejsza dla twarzy niż dla innych obiektów.</p>
      
      <p><strong>Strategie kompensacyjne:</strong> Osoby z prozopagnosją uczą się rozpoznawać ludzi po głosie, sposobie chodzenia, fryzurze, ubiorze lub charakterystycznych cechach (np. "wysoki mężczyzna z brodą").</p>
    `,
  },
  {
    id: 'apraxia',
    title: 'Apraksja',
    titleLatin: 'Apraxia',
    category: 'clinical',
    definition: 'Zaburzenie wykonywania celowych ruchów przy zachowanych możliwościach motorycznych i chęci wykonania czynności. Pacjent wie, co chce zrobić, ale nie może tego wykonać.',
    etymology: 'Z greckiego ἀ- (a- – bez) + πρᾶξις (praxis – działanie, czyn).',
    clinicalRelevance: 'Apraksja jest częstym objawem po udarze lewej półkuli, szczególnie w przebiegu choroby Alzheimera i innych otępień. Utrudnia codzienne czynności (ubieranie się, jedzenie) i wymaga rehabilitacji ergoterapeutycznej.',
    relatedModules: ['module-5'],
    relatedTerms: ['Mowa', 'Ruch', 'Kora czołowa', 'Jądra podstawy', 'Parietal'],
    content: `
      <p>Hughlings Jackson opisał apraksję jako "bezradność ruchową" (motor helplessness). Liepmann (1900) sformalizował pojęcie i wyróżnił jej typy.</p>
      
      <p><strong>Typy apraksji:</strong></p>
      <ul>
        <li><strong>Ideaomotoryczna</strong> – Niezdolność do wykonywania gestów na komendę (np. "pokaż, jak używasz młotka"), choć gesty spontaniczne mogą być zachowane. Najczęstszy typ, związana z lewą kora ciemieniową.</li>
        <li><strong>Kinestetyczna</strong> – Trudności z manipulacją przedmiotami w przestrzeni. Pacjent może nie umieć włożyć ręki do rękawa.</li>
        <li><strong>Mowy (dysarthria)</strong> – Trudności z artykulacją mimo zachowanych mięśni. Związana z obszarem Broki.</li>
        <li><strong>Konstrukcyjna</strong> – Trudności z konstruowaniem przedmiotów lub rysunków w przestrzeni (np. kopiowanie figur). Związana z kora ciemieniową.</li>
        <li><strong>Ocularna</strong> – Trudności z programowaniem ruchów gałek ocznych.</li>
      </ul>
      
      <p><strong>Neuroanatomia:</strong> Apraksja zazwyczaj wynika z uszkodzenia lewej kory ciemieniowej (szczególnie płata czołowo-usznego) lub rozspojenia między obszarami czołowymi a ciemieniowymi (włókno łukowate).</p>
      
      <p><strong>Testy:</strong> Polecenia gestyczne ("pokaż, jak..."), naśladowanie gestów, używanie przedmiotów, konstrukcja (np. rysowanie zegara, kopiowanie wieloboków).</p>
    `,
  },

  // Additional entries
  {
    id: 'synapse',
    title: 'Synapsa',
    titleLatin: 'Synapsis',
    category: 'physiology',
    definition: 'Strukturalna i funkcjonalna jednostka połączenia między neuronami (lub neuronem a efektorem), umożliwiająca przekazywanie sygnałów.',
    etymology: 'Z greckiego συνάπτειν (synaptein – łączyć, spajać). Termin wprowadzony przez Charlesa Sherringtona w 1897 roku.',
    clinicalRelevance: 'Zaburzenia transmisji synaptycznej są podstawą wielu chorób neurologicznych i psychiatrycznych: miastenia (zaburzenie receptora Ach), choroba Alzheimera (zaburzenia cholinergiczne), depresja (zaburzenia monoaminergiczne), padaczka (nadmierna ekscytacja).',
    relatedModules: ['module-1', 'module-2'],
    relatedTerms: ['Neuroprzekaźnik', 'Receptor', 'LTP', 'LTD', 'Akson'],
    content: `
      <p>Synapsa składa się z trzech głównych elementów:</p>
      <ul>
        <li><strong>Presynaptyczny zakończenie</strong> – Zawiera pęcherzyki synaptyczne z neuroprzekaźnikami.</li>
        <li><strong>Szpara synaptyczna</strong> – Przestrzeń między neuronami (20-40 nm).</li>
        <li><strong>Postsynaptyczna gęstość</strong> – Zawiera receptory neuroprzekaźników i mechanizmy sygnałowe.</li>
      </ul>
      
      <p><strong>Typy synaps:</strong></p>
      <ul>
        <li><strong>Chemiczne</strong> – Najczęstsze, wykorzystują neuroprzekaźniki (glutaminian, GABA, acetylocholina, dopamina, noradrenalina, serotonina).</li>
        <li><strong>Elektryczne</strong> – Bezpośrednie połączenie przez szczeliny komunikacyjne (gap junctions), szybkie i dwukierunkowe.</li>
        <li><strong>Immunologiczne</strong> – Synapsy między komórkami immunologicznymi (mniej znane).</li>
      </ul>
      
      <p><strong>Neurotransmisja:</strong> Potencjał czynnościowy dociera do zakończenia aksonu → otwarcie kanałów wapniowych → fuzja pęcherzyków z błoną → uwolnienie neuroprzekaźnika → wiązanie z receptorami postsynaptycznymi → zmiana przewodnictwa jonowego lub kaskada sygnałowa.</p>
    `,
  },
  {
    id: 'neurotransmitter',
    title: 'Neuroprzekaźnik',
    titleLatin: 'Neurotransmissor',
    category: 'physiology',
    definition: 'Chemiczna substancja przekazująca sygnał między neuronami poprzez synapsę. Może być ekscytacyjna (pobudzająca) lub inhibicyjna (hamująca).',
    etymology: 'Z greckiego νεῦρον (neuron – nerw) + łacińskiego transmittere (przekazywać, przesyłać).',
    clinicalRelevance: 'Zaburzenia neuroprzekaźników są podstawą farmakoterapii neurologicznej i psychiatrycznej. Leki działające na układ cholinergiczny (Alzheimer), dopaminergiczny (Parkinson, schizofrenia), serotoninergiczny (depresja, lęk) i GABAergiczny (padaczka, lęk) są powszechnie stosowane.',
    relatedModules: ['module-1', 'module-2'],
    relatedTerms: ['Synapsa', 'Receptor', 'Dopamina', 'Serotonina', 'GABA', 'Glutaminian'],
    content: `
      <p><strong>Główne klasy neuroprzekaźników:</strong></p>
      
      <ol>
        <li><strong>Aminokwasy</strong>
          <ul>
            <li><em>Glutaminian</em> – Główny neuroprzekaźnik ekscytacyjny w OUN.</li>
            <li><em>GABA (kwas γ-aminomasłowy)</em> – Główny neuroprzekaźnik inhibicyjny w OUN.</li>
            <li><em>Glicyna</em> – Inhibicyjny, głównie w rdzeniu kręgowym.</li>
          </ul>
        </li>
        <li><strong>Aminy biogenne</strong>
          <ul>
            <li><em>Dopamina</em> – Motywacja, nagroda, kontrola ruchu.</li>
            <li><em>Noradrenalina</em> – Uwaga, pobudzenie, stres.</li>
            <li><em>Serotonina (5-HT)</em> – Nastrój, sen, apetyt.</li>
            <li><em>Acetylocholina</em> – Pamięć, uwaga, aktywacja kory.</li>
          </ul>
        </li>
        <li><strong>Neuropeptydy</strong> – Substancja P (ból), endorfiny (przyjemność), oksytocyna (więź), wazopresyna.</li>
        <li><strong>Gazy</strong> – Tlenek azotu (NO), tlenek węgla (CO).</li>
        <li><strong>Kannabinoidy endogenne</strong> – Anandamid, 2-AG.</li>
      </ol>
      
      <p><strong>Kryteria neuroprzekaźnika:</strong> Synteza w neuronie, obecność w pęcherzykach synaptycznych, uwolnienie w odpowiedzi na stymulację, obecność receptorów postsynaptycznych, mechanizm inaktywacji.</p>
    `,
  },
  {
    id: 'myelination',
    title: 'Mielinizacja',
    titleLatin: 'Myelinisatio',
    category: 'physiology',
    definition: 'Proces tworzenia pochewki mielinowej wokół aksonów, zapewniającej szybkie i efektywne przekazywanie impulsów nerwowych.',
    etymology: 'Z gr. μυελός (myelos – rdzeń, szpik) – ze względu na podobieństwo do szpiku kostnego.',
    clinicalRelevance: 'Zaburzenia mielinizacji są podstawą wielu chorób: stwardnienie rozsiane (autoimmunologiczna demielinizacja), zaburzenia leukodystrofii (wrodzone), neuropatie (Guillain-Barre), urazy rdzenia kręgowego.',
    relatedModules: ['module-1'],
    relatedTerms: ['Mielina', 'Oligodendrocyty', 'Schwann', 'Istota biała', 'DTI'],
    content: `
      <p>Mielina jest błoną bogatą w lipidy, tworzoną przez:</p>
      <ul>
        <li><strong>Oligodendrocyty</strong> – W ośrodkowym układzie nerwowym. Jedna komórka tworzy mielinę dla wielu aksonów.</li>
        <li><strong>Komórki Schwanna</strong> – W obwodowym układzie nerwowym. Jedna komórka tworzy mielinę dla jednego aksonu.</li>
      </ul>
      
      <p><strong>Funkcje mieliny:</strong></p>
      <ul>
        <li><strong>Elektryczna izolacja</strong> – Zapobiega utracie ładunku jonowego z aksonu.</li>
        <li><strong>Przewodzenie soltatoryjne</strong> – Impuls "skacze" między węzłami Ranviera, znacznie przyspieszając przekazywanie.</li>
        <li><strong>Wsparcie metaboliczne</strong> – Oligodendrocyty dostarczają laktyd i inne metabolity aksonom.</li>
        <li><strong>Plastyczność</strong> – Mielinizacja jest dynamiczna i może być modyfikowana przez doświadczenie.</li>
      </ul>
      
      <p><strong>Rozwój:</strong> Mielinizacja zaczyna się w okresie płodowym i trwa do wczesnej dorosłości. Kolejność mielinizacji odpowiada hierarchii funkcjonalnej – najpierw obszary sensoryczne i motoryczne, potem asocjacyjne.</p>
    `,
  },
  {
    id: 'circle-of-willis',
    title: 'Krąg Willisa',
    titleLatin: 'Circulus Arteriosus Cerebri',
    category: 'anatomy',
    definition: 'Układ połączeń tętniczych u podstawy mózgu, zapewniający redundancję w zaopatrzeniu naczyniowym i równomierny rozkład krwi.',
    etymology: 'Od nazwiska Thomasa Willisa, angielskiego lekarza, który opisał ten układ w 1664 roku w pracy "Cerebri Anatome".',
    clinicalRelevance: 'Anatomia kręgu Willisa jest zmienna (tylko u ~50% osób jest "kompletny"). Zrozumienie wariantów jest kluczowe dla interpretacji objawów niedokrwiennych i planowania interwencji naczyniowych.',
    relatedModules: ['module-1'],
    relatedTerms: ['Tętnice mózgowe', 'Niedokrwienie', 'Udar', 'Krąg Willisa'],
    content: `
      <p>Krąg Willisa tworzą następujące naczynia:</p>
      <ul>
        <li><strong>Tętnice szyjne wewnętrzne (A. carotis interna)</strong> – Główne źródło zaopatrzenia przedniej części mózgu.</li>
        <li><strong>Tętnice kręgowe (A. vertebralis)</strong> – Łączą się w tętnicę podstawną (A. basilaris).</li>
        <li><strong>Tętnica łącząca przednia (A. communicans anterior)</strong> – Łączy obie tętnice przednie mózgowe.</li>
        <li><strong>Tętnice łączące tylne (A. communicans posterior)</strong> – Łączą tętnice szyjne z kręgowymi.</li>
      </ul>
      
      <p><strong>Funkcje:</strong></p>
      <ul>
        <li><strong>Redundancja</strong> – Jeśli jedno naczynie jest zamknięte, inne mogę dostarczyć krew do tego samego obszaru.</li>
        <li><strong>Równoważenie ciśnienia</strong> – Umożliwia równomierny rozkład krwi między półkulami.</li>
        <li><strong>Kompensacja</strong> – W przypadku zwężenia lub zamknięcia jednej tętnicy, krąg może przekierować przepływ.</li>
      </ul>
      
      <p><strong>Warianty anatomiczne:</strong> U około 50% osób krąg jest "kompletny" i zapewnia pełną redundancję. U pozostałych mogą występować: hipoplazja tętnic łączących, niekompletne okrążenie, dodatkowe tętnice.</p>
    `,
  },
];
