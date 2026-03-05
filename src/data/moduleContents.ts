export const moduleContents: Record<string, {
  sections: Array<{
    title: string;
    content: string;
    subsections?: Array<{
      title: string;
      content: string;
    }>;
  }>;
  interactiveElement: {
    title: string;
    description: string;
  };
}> = {
  'module-1': {
    sections: [
      {
        title: 'Wprowadzenie do Neuroanatomii Funkcjonalnej',
        content: `
          <p>Neuroanatomia funkcjonalna stanowi fundament współczesnej neuropsychologii, łącząc wiedzę o strukturze mózgu z jego funkcjami poznawczymi. Współczesne metody obrazowania neurobiologicznego, takie jak funkcjonalny rezonans magnetyczny (fMRI), dyfuzyjna tomografia komputerowa (DTI) oraz pozytonowa tomografia emisyjna (PET), umożliwiają nieinwazyjne badanie aktywności mózgu <span class="scientific-term">in vivo</span>.</p>
          
          <p>Zrozumienie organizacji przestrzennej struktur mózgowych oraz ich wzajemnych połączeń jest kluczowe dla diagnozowania i rehabilitacji zaburzeń neurologicznych. W tym module przyjrzymy się szczegółowo polom Brodmanna, układowi limbicznemu, szlakom istoty białej oraz zaopatrzeniu naczyniowemu mózgu.</p>
        `,
      },
      {
        title: 'Pola Brodmanna i Mapowanie Korowe',
        content: `
          <p>W roku 1909 niemiecki neurolog Korbinian Brodmann opublikował fundamentalną pracę dotyczącą cytoarchitektoniki kory mózgowej człowieka. Na podstawie różnic w organizacji warstwowej komórek nerwowych (neuronów) wyróżnił 52 obszary, znane dziś jako <strong>pola Brodmanna</strong> (ang. <span class="scientific-term">Brodmann areas</span>).</p>
          
          <p>Każde pole Brodmanna charakteryzuje się specyficzną strukturą histologiczną i, co za tym idzie, funkcjonalną specjalizacją. Pola te stanowią podstawę współczesnego rozumienia lokalizacji funkcji w korze mózgowej.</p>
        `,
        subsections: [
          {
            title: 'Kluczowe Pola Brodmanna i Ich Funkcje',
            content: `
              <ul>
                <li><strong>Pola 1, 2, 3 (Kora pierwotna somatosensoryczna, S1)</strong> – Zlokalizowane w zakręcie pośrodkowym płata ciemieniowego. Odpowiedzialne za odbiór informacji dotykowych, proprioceptywnych i bólowych z całego ciała.</li>
                <li><strong>Pola 4 (Kora pierwotna motoryczna, M1)</strong> – Znajduje się w zakręcie przedpośrodkowym. Inicjuje ruchy dobrowolne poprzez projekcje do rdzenia kręgowego.</li>
                <li><strong>Pola 17 (Kora wzrokowa pierwotna, V1)</strong> – W zakręcie potylicznym. Pierwszy obszar przetwarzania informacji wzrokowej z siatkówki.</li>
                <li><strong>Pola 41, 42 (Kora słuchowa pierwotna, A1)</strong> – W zakrętach skroniowych transwersalnych. Przetwarzanie dźwięków i analiza częstotliwości.</li>
                <li><strong>Pola 44, 45 (Obszar Broki)</strong> – W tylnej części trzeciego zakrętu czołowego lewej półkuli. Kluczowy dla produkcji mowy i przetwarzania składni.</li>
                <li><strong>Pole 22 (Obszar Wernickego)</strong> – W płacie skroniowym górnym. Rozumienie języka i integracja słuchowo-językowa.</li>
              </ul>
            `,
          },
          {
            title: 'Zasady Organizacji Kory Mózgowej',
            content: `
              <p>Kora mózgowa jest zorganizowana zgodnie z kilkoma fundamentalnymi zasadami:</p>
              <ol>
                <li><strong>Specjalizacja funkcjonalna</strong> – Różne obszary kory odpowiadają za różne funkcje, od przetwarzania sensorycznego po funkcje wykonawcze.</li>
                <li><strong>Hierarchia przetwarzania</strong> – Informacja przepływa od kory pierwotnej (np. V1) przez obszary asocjacyjne do obszarów wielomodalnych.</li>
                <li><strong>Plastyczność</strong> – Organizacja kory może ulegać zmianom w odpowiedzi na doświadczenie i uszkodzenie.</li>
                <li><strong>Lateralizacja</strong> – Niektóre funkcje są asymetrycznie zlokalizowane (np. język zazwyczaj w lewej półkuli).</li>
              </ol>
            `,
          },
        ],
      },
      {
        title: 'Układ Limbiczny – Emocje i Pamięć',
        content: `
          <p><span class="scientific-term">Układ limbiczny</span> (łac. <em>systema limbicum</em>) to zespół struktur mózgowych położonych w głębi półkul mózgowych, otaczających pień mózgu i międzymózgowie. Termin "limbiczny" (od łac. <em>limbus</em> – brzeg) został wprowadzony przez Paula Brocę w 1878 roku.</p>
          
          <p>Układ limbiczny odgrywa kluczową rolę w regulacji emocji, formowaniu pamięci, motywacji oraz zachowaniach związanych z przetrwaniem gatunku. Jego struktury są ewolucyjnie stare i dobrze zachowane u ssaków.</p>
        `,
        subsections: [
          {
            title: 'Główne Struktury Układu Limbicznego',
            content: `
              <ul>
                <li><strong>Hipokamp (łac. <em>hippocampus</em>)</strong> – Struktura w kształcie konika morskiego, kluczowa dla konsolidacji pamięci deklaratywnej (epizodycznej i semantycznej) oraz nawigacji przestrzennej. Uszkodzenie hipokampa prowadzi do amnezji anterogradnej.</li>
                <li><strong>Ciałko migdałowate (łac. <em>corpus amygdaloideum</em>)</strong> – Migdałowaty kształt, położone przed hipokampem. Centralna rola w przetwarzaniu emocji, szczególnie strachu, oraz w zapamiętywaniu emocjonalnym.</li>
                <li><strong>Zakręt obręczy (łac. <em>gyrus cinguli</em>)</strong> – Obszar kory mózgowej otaczający ciało modzelowate. Dzieli się na część przednią (ACC – <em>anterior cingulate cortex</em>), zaangażowaną w funkcje wykonawcze i emocjonalne, oraz tylną (PCC – <em>posterior cingulate cortex</em>), związaną z pamięcią i uwagą.</li>
                <li><strong>Podwzgórze (łac. <em>hypothalamus</em>)</strong> – Mała struktura podkorowa regulująca funkcje autonomiczne, hormonalne (przez przysadkę) oraz zachowania motywacyjne (głód, pragnienie, temperatura).</li>
                <li><strong>Ciało modzelowate (łac. <em>corpus callosum</em>)</strong> – Największy spoidłowy szlak komisuralny, łączący obie półkule mózgowe.</li>
              </ul>
            `,
          },
          {
            title: 'Sieć Papeza i Obwody Emocjonalne',
            content: `
              <p>W 1937 roku James Papez zaproponował model obwodu neuronalnego odpowiedzialnego za emocje, znany dziś jako <strong>obwód Papeza</strong>. Oryginalny obwód obejmował: hipokamp → ciało modzelowate → zakręt obręczy → kora skroniowa → hipokamp.</p>
              
              <p>Współczesna wiedza wzbogaciła ten model o rolę ciałka migdałowatego, które okazało się kluczowe dla generowania emocjonalnych odpowiedzi. Obecnie rozróżniamy:</p>
              <ul>
                <li><strong>Obwód hipokampowy</strong> – Konsolidacja pamięci emocjonalnie neutralnych.</li>
                <li><strong>Obwód migdałowaty</strong> – Szybkie, automatyczne reakcje emocjonalne (szczególnie strachu).</li>
              </ul>
            `,
          },
        ],
      },
      {
        title: 'Szlaki Istoty Białej i Traktografia DTI',
        content: `
          <p><span class="scientific-term">Dyfuzyjna tomografia komputerowa</span> (DTI – <em>Diffusion Tensor Imaging</em>) to metoda obrazowania rezonansu magnetycznego, która pozwala wizualizować organizację istoty białej mózgu <span class="scientific-term">in vivo</span>. Technika ta wykorzystuje zjawisko anizotropii dyfuzji wody wzdłuż włókien nerwowych.</p>
          
          <p>W obszarach z dużą ilością uporządkowanych włókien białych (np. szlaki komisyralne, asocjacyjne) woda dyfunduje preferencyjnie wzdłuż aksonów, co pozwala na rekonstrukcję traktów nerwowych – proces znany jako <strong>traktografia</strong>.</p>
        `,
        subsections: [
          {
            title: 'Klasyfikacja Szlaków Istoty Białej',
            content: `
              <ol>
                <li><strong>Szlaki komisyralne (łac. <em>fibrae commissurales</em>)</strong> – Łączą odpowiadające sobie obszary obu półkul.
                  <ul>
                    <li><em>Corpus callosum</em> – Największy, łączy szerokie obszary kory.</li>
                    <li><em>Commissura anterior</em> – Łączy płaty skroniowe i czołowe brzuszne.</li>
                    <li><em>Commissura posterior</em> – Łączy płaty potyliczne.</li>
                  </ul>
                </li>
                <li><strong>Szlaki asocjacyjne (łac. <em>fibrae associationes</em>)</strong> – Łączą obszary w obrębie jednej półkuli.
                  <ul>
                    <li><em>Fasciculus longitudinalis superior</em> – Główny szlak asocjacyjny, biegnący wzdłuż całej półkuli.</li>
                    <li><em>Fasciculus arcuatus</em> – Łączy obszar Broki z Wernickego, kluczowy dla przetwarzania językowego.</li>
                    <li><em>Fasciculus uncinatus</em> – Haczykowaty szlak łączący płat skroniowy z czołowym.</li>
                  </ul>
                </li>
                <li><strong>Szlaki rzutowe (łac. <em>fibrae projectiones</em>)</strong> – Łączą korę z podkorowymi strukturami i rdzeniem kręgowym.
                  <ul>
                    <li><em>Radiatio corona radiata</em> – Promieniste włókna łączące korę z wzgórzem.</li>
                    <li><em>Pedunculus cerebri</em> – Pęczki mózgu zawierające włókna ruchowe i czuciowe.</li>
                    <li><em>Lemniscus medialis</em> – Główny szlak czuciowy do wzgórza.</li>
                  </ul>
                </li>
              </ol>
            `,
          },
          {
            title: 'Kliniczne Znaczenie DTI',
            content: `
              <p>DTI ma kluczowe znaczenie w diagnozowaniu i planowaniu leczenia wielu zaburzeń neurologicznych:</p>
              <ul>
                <li><strong>Stwardnienie rozsiane (SM)</strong> – Wizualizacja ognisk demielinizacji w istocie białej.</li>
                <li><strong>Urazy mózgu</strong> – Ocena uszkodzeń szlaków włókienistych.</li>
                <li><strong>Guzy mózgu</strong> – Planowanie chirurgii z uwzględnieniem relacji z ważnymi szlakami.</li>
                <li><strong>Zaburzenia neurorozwojowe</strong> – Badanie nieprawidłowości w łączności neuronalnej (np. w autyźmie, ADHD).</li>
                <li><strong>Demencja</strong> – Ocena degeneracji szlaków, szczególnie w otępieniu z ciałami Lewy'ego.</li>
              </ul>
            `,
          },
        ],
      },
      {
        title: 'Zaopatrzenie Naczyniowe Mózgu – Krąg Willisa',
        content: `
          <p>Mózg, stanowiący zaledwie 2% masy ciała, zużywa około 20% tlenu i 25% glukozy. Ciągłe zaopatrzenie w krew jest absolutnie kluczowe dla funkcjonowania neuronów, które nie mogą magazynować glukozy i są wysoce wrażliwe na niedotlenienie.</p>
          
          <p><span class="scientific-term">Krąg Willisa</span> (łac. <em>circulus arteriosus cerebri</em>) to unikalny system anastomoz (połączeń) tętnic podstawy mózgu, zapewniający redundancję w zaopatrzeniu naczyniowym. Został opisany przez Thomasa Willisa w 1664 roku.</p>
        `,
        subsections: [
          {
            title: 'Anatomia Kręgu Willisa',
            content: `
              <p>Krąg Willisa tworzą następujące naczynia:</p>
              <ul>
                <li><strong>Tętnice szyjne wewnętrzne (A. carotis interna)</strong> – Główne źródło zaopatrzenia przedniej i środkowej części mózgu. Dzielą się na:
                  <ul>
                    <li><em>A. cerebri anterior (ACA)</em> – Zaopatruje przyśrodkową powierzchnię płatów czołowych i ciemieniowych.</li>
                    <li><em>A. cerebri media (MCA)</em> – Największa gałąź, zaopatruje boczną powierzchnię półkul, w tym obszary językowe i motoryczne.</li>
                  </ul>
                </li>
                <li><strong>Tętnice kręgowe (A. vertebralis)</strong> – Łączą się w <em>A. basilaris</em>, tworzącą:
                  <ul>
                    <li><em>A. cerebri posterior (PCA)</em> – Zaopatruje płaty potyliczne i podkorowe struktury tylne.</li>
                  </ul>
                </li>
                <li><strong>Tętnica łącząca tylna (A. communicans posterior)</strong> – Łączy tętnice szyjne z kręgowymi.</li>
                <li><strong>Tętnica łącząca przednia (A. communicans anterior)</strong> – Łączy obie tętnice przednie mózgowe.</li>
              </ul>
            `,
          },
          {
            title: 'Zaburzenia Naczyniowe i Ich Konsekwencje',
            content: `
              <p>Zrozumienie zaopatrzenia naczyniowego jest kluczowe dla interpretacji objawów klinicznych:</p>
              <table>
                <tr>
                  <th>Naczynie</th>
                  <th>Obszar zaopatrzenia</th>
                  <th>Objawy niedokrwienia</th>
                </tr>
                <tr>
                  <td>ACA</td>
                  <td>Kora przyśrodkowa nóg, pęcherza</td>
                  <td>Niedowład nogi, zaburzenia mikcji</td>
                </tr>
                <tr>
                  <td>MCA</td>
                  <td>Kora boczna, jądro podstawy</td>
                  <td>Hemiplegia, afazja, neglect</td>
                </tr>
                <tr>
                  <td>PCA</td>
                  <td>Płat potyliczny, wzgórze</td>
                  <td>Hemianopsja, zaburzenia pamięci</td>
                </tr>
              </table>
              
              <p><strong>Uwaga kliniczna:</strong> Krąg Willisa zapewnia kolateralne zaopatrzenie, ale jego anatomia jest zmienna. U około 50% osób krąg jest "kompletny" i zapewnia pełną redundancję.</p>
            `,
          },
        ],
      },
    ],
    interactiveElement: {
      title: 'Interaktywny Model 3D Mózgu',
      description: 'Eksploruj struktury mózgowe w trzech wymiarach. Kliknij na poszczególne regiony, aby zobaczyć ich nazwy łacińskie i funkcje. Model przedstawia kluczowe obszary kory mózgowej oraz struktury podkorowe.',
    },
  },
  
  // Module 2: Memory & Learning
  'module-2': {
    sections: [
      {
        title: 'Wprowadzenie do Systemów Pamięci',
        content: `
          <p>Pamięć jest fundamentalną funkcją poznawczą, umożliwiającą gromadzenie, przechowywanie i odtwarzanie informacji. Współczesna neuropsychologia rozróżnia wiele typów pamięci, każdy związany z odmiennymi strukturami mózgowymi i mechanizmami neuronalnymi.</p>
          
          <p>W 1972 roku Endel Tulving wprowadził kluczowy podział pamięci deklaratywnej na <strong>epizodyczną</strong> (wspomnienia osobistych zdarzeń) i <strong>semantyczną</strong> (wiedza ogólna o świecie). Równolegle, Larry Squire rozwinął taksonomię rozróżniającą pamięć deklaratywną od nie-deklaratywnej (proceduralnej).</p>
        `,
      },
      {
        title: 'Baza Molekularna Pamięci: LTP i LTD',
        content: `
          <p>Na poziomie komórkowym, pamięć jest reprezentowana przez zmiany w siłach połączeń synaptycznych między neuronami. <span class="scientific-term">Długotrwała potencjacja</span> (LTP – <em>Long-Term Potentiation</em>) i <span class="scientific-term">długotrwała depresja</span> (LTD – <em>Long-Term Depression</em>) są podstawowymi mechanizmami plastyczności synaptycznej.</p>
          
          <p>LTP została po raz pierwszy opisana w 1973 roku przez Terje Lømo i Timothy'ego Bliss w hipokampie królika. Jest to trwałe wzmocnienie transmisji synaptycznej w wyniku wysokiej aktywności neuronu presynaptycznego.</p>
        `,
        subsections: [
          {
            title: 'Mechanizm LTP w Hipokampie',
            content: `
              <ol>
                <li><strong>Depolaryzacja</strong> – Wysoka częstotliwość stymulacji powoduje silną depolaryzację neuronu postsynaptycznego.</li>
                <li><strong>Odblokowanie receptora NMDA</strong> – Depolaryzacja usuwa jon magnezu z kanału receptora NMDA, umożliwiając wnikanie jonów wapnia (Ca²⁺).</li>
                <li><strong>Kaskada sygnałowa</strong> – Wzrost poziomu Ca²⁺ aktywuje kinazę CaMKII, która fosforyluje receptory AMPA.</li>
                <li><strong>Wstawianie receptorów</strong> – Do błony postsynaptycznej wstawiane są dodatkowe receptory AMPA, zwiększając przewodnictwo synaptyczne.</li>
                <li><strong>Wczesna faza LTP (E-LTP)</strong> – Trwa 1-3 godziny, nie wymaga syntezy białek.</li>
                <li><strong>Późna faza LTP (L-LTP)</strong> – Wymaga aktywacji genów i syntezy nowych białek, trwa godziny do dni.</li>
              </ol>
            `,
          },
          {
            title: 'LTD i Zapominanie',
            content: `
              <p>LTD jest przeciwstawnym mechanizmem do LTP – prowadzi do osłabienia transmisji synaptycznej. Zachodzi przy niskiej częstotliwości stymulacji (1-5 Hz) i może być mediowana przez:</p>
              <ul>
                <li>Receptory NMDA (w hipokampie)</li>
                <li>Receptory metabotropowe glutaminianu (mGluR)</li>
                <li>Fosfatazy białkowe (PP1, PP2A, kalcyneuryna)</li>
              </ul>
              <p>LTD może pełnić funkcję "czyszczenia" nieużywanych synaps oraz być mechanizmem zapominania.</p>
            `,
          },
        ],
      },
      {
        title: 'Hipokamp vs. Kora Rywalna',
        content: `
          <p>Hipokamp i sąsiednie struktury skroniowo-podstawne (kora rywalna – <span class="scientific-term">rhinal cortex</span>) odgrywają komplementarne role w pamięci deklaratywnej. Zrozumienie tego podziału funkcjonalnego jest kluczowe dla interpretacji zaburzeń pamięci.</p>
          
          <p>Badania na małpach (Meunier et al., 1993) i badania neuroobrazowe u ludzi wykazały, że uszkodzenie kory rywalnej (peryrhinalnej i entorhinalnej) prowadzi do amnezji semantycznej, podczas gdy uszkodzenie hipokampa powoduje głównie deficyty epizodyczne.</p>
        `,
        subsections: [
          {
            title: 'Model Complementary Learning Systems',
            content: `
              <p>James McClelland, Bruce McNaughton i Randall O'Reilly (1995) zaproponowali model <strong>uzupełniających się systemów uczenia się</strong> (CLS):</p>
              <ul>
                <li><strong>Hipokamp</strong> – Szybkie uczenie się epizodów, przechowywanie szczegółowych wspomnień. Struktura wzorcowa (pattern separator) minimalizuje interferencję.</li>
                <li><strong>Kora mózgowa</strong> – Powolne uczenie się struktur semantycznych poprzez powtarzanie i ekstrakcję wspólnych cech.</li>
              </ul>
              <p>Hipokamp pełni rolę "nauczyciela" dla kory podczas konsolidacji systemowej – procesu, w którym wspomnienia stopniowo stają się niezależne od hipokampa.</p>
            `,
          },
        ],
      },
    ],
    interactiveElement: {
      title: 'Wizualizacja Formacji Hipokampowej',
      description: 'Trójwymiarowy model hipokampa, zawiasków i kory rywalnej. Zobacz, jak te struktury są zorganizowane przestrzennie i jak tworzą obwody pamięciowe.',
    },
  },

  // Module 3: Language
  'module-3': {
    sections: [
      {
        title: 'Modele Przetwarzania Językowego',
        content: `
          <p>Rozumienie neuronalnych podstaw języka było jednym z pierwszych celów neuropsychologii. Współczesne modele ewoluowały od klasycznego modelu lokalizacyjnego do złożonych sieci dynamicznych uwzględniających szlaki włókieniste.</p>
          
          <p>Klasyczny <strong>model Wernicke-Lichtheim-Geschwind</strong> (lat 70. XIX wieku) zakładał, że język jest zlokalizowany w dwóch głównych obszarach (Broki i Wernickego) połączonych włóknem łukowatym. Współczesne badania wykazały jednak, że przetwarzanie językowe jest znacznie bardziej rozproszone i dynamiczne.</p>
        `,
      },
      {
        title: 'Model Dual-Stream: Szlaki Dorsalny i Wentralny',
        content: `
          <p>W 2004 roku Gregory Hickok i David Poeppel zaproponowali <strong>model dual-stream</strong> przetwarzania językowego, inspirowany podziałem szlaków wzrokowych (What vs. Where). Model ten dzieli przetwarzanie na dwa główne strumienie:</p>
          
          <ol>
            <li><strong>Szlak wentralny ("What" / semantyczny)</strong> – Odpowiedzialny za rozumienie języka, od dźwięku do znaczenia. Biegnie od kory słuchowej pierwotnej przez skroniowy biegun do kory ciemieniowo-czołowej.</li>
            <li><strong>Szlak dorsalny ("How" / sensoromotoryczny)</strong> – Odpowiedzialny za mapowanie dźwięków mowy na reprezentacje artykulacyjne. Biegnie od kory słuchowej przez zakręt skroniowy górny tylny do kory czołowej (obszar Broki).</li>
          </ol>
        `,
        subsections: [
          {
            title: 'Neurobiologia Składni i Semantyki',
            content: `
              <p>Współczesne badania fMRI i TMS wykazały, że składnia i semantyka angażują częściowo odrębne sieci:</p>
              <ul>
                <li><strong>Semantyka</strong> – Rozproszona sieć obejmująca skroniowy biegun, środkowy zakręt skroniowy oraz obszary ciemieniowe. Semantyka jest reprezentowana w sposób rozproszony (distributed), z różnymi cechami semantycznymi kodowanymi w różnych obszarach.</li>
                <li><strong>Składnia</strong> – Bardziej zlokalizowana w obszarze Broki (pola 44/45) oraz w tylnej części zakrętu skroniowego górnego. Składnia angażuje operacje sekwencyjne i hierarchiczne.</li>
              </ul>
              <p>Badania pacjentów z afazją wskazują, że deficyty semantyczne (afazja Wernickego) i składniowe (afazja Broki) mogą występować niezależnie, co wspiera podział funkcjonalny.</p>
            `,
          },
        ],
      },
      {
        title: 'Włókno Łukowate i Połączenia Miedzyobszarowe',
        content: `
          <p><span class="scientific-term">Włókno łukowate</span> (łac. <em>fasciculus arcuatus</em>) to główny szlak asocjacyjny łączący obszar Broki z Wernickego. Biegnie on łukowato wokół tylnego odgałęzienia bocznego bruzdy Sylwiusza.</p>
          
          <p>Badania DTI wykazały, że włókno łukowate jest złożone z wielu podskładowych szlaków, różniących się kierunkowością i terminacjami. Szlak przedni (od czołowego do skroniowego) może być szczególnie ważny dla przetwarzania składniowego.</p>
        `,
      },
    ],
    interactiveElement: {
      title: 'Model 3D Szlaków Językowych',
      description: 'Zobacz, jak włókno łukowate łączy obszar Broki z Wernickego. Eksploruj szlaki dorsalny i wentralny w trzech wymiarach.',
    },
  },

  // Module 4: Executive Functions
  'module-4': {
    sections: [
      {
        title: 'Funkcje Wykonawcze – Zimne i Gorące',
        content: `
          <p><span class="scientific-term">Funkcje wykonawcze</span> (ang. <em>executive functions</em>) to zespół procesów poznawczych odpowiedzialnych za celowe, kontrolowane zachowanie. Obejmują one planowanie, podejmowanie decyzji, kontrolę impulsów, pamięć roboczą i elastyczność poznawczą.</p>
          
          <p>Donald Stuss i Murray Shallice (1986) wprowadzili rozróżnienie między <strong>zimnymi</strong> (cognitive) a <strong>gorącymi</strong> (emotional) funkcjami wykonawczymi:</p>
          <ul>
            <li><strong>Zimne funkcje wykonawcze</strong> – Abstrakcyjne, pozbawione emocjonalnego kontekstu (np. sortowanie kart Wisconsin, zadania Stroopa).</li>
            <li><strong>Gorące funkcje wykonawcze</strong> – Związane z regulacją emocjonalną, motywacją i kontekstem społecznym (np. podejmowanie decyzji osobistych, teoria umysłu).</li>
          </ul>
        `,
      },
      {
        title: 'Zakręt Obręczy Przedniej (ACC) i Monitorowanie Błędów',
        content: `
          <p><span class="scientific-term">Zakręt obręczy przedni</span> (ACC – <em>anterior cingulate cortex</em>) jest kluczową strukturą dla monitorowania konfliktów, detekcji błędów i regulacji wysiłku poznawczego. Cameron Carter i colleagues (1998) wykazali, że ACC jest aktywowany w sytuacjach wysokiego konfliktu (np. w zadaniu Stroopa).</p>
          
          <p>Matthew Botvinick zaproponował <strong>teorię monitorowania konfliktów</strong>, zgodnie z którą ACC wykrywa sytuacje, w których współzawodniczą ze sobą alternatywne odpowiedzi, i sygnalizuje potrzebę zwiększenia kontroli poznawczej.</p>
        `,
        subsections: [
          {
            title: 'Podział ACC na Część Brzuszną i Grzbietową',
            content: `
              <p>Współczesne badania wyróżniają dwa główne obszary ACC:</p>
              <ul>
                <li><strong>ACC grzbietowy (dACC)</strong> – Zaangażowany w funkcje poznawcze: monitorowanie konfliktów, detekcja błędów, oczekiwanie nagrody.</li>
                <li><strong>ACC brzuszny (vACC)</strong> – Zaangażowany w funkcje emocjonalne i autonomiczne: regulacja emocjonalna, odpowiedź na stres.</li>
              </ul>
              <p>Podział ten odzwierciedla różne połączenia: dACC projektuje do kory przedczołowej, wzgórza i jąder podstawy, podczas gdy vACC jest silnie połączony z ciałkiem migdałowatym i hipokampem.</p>
            `,
          },
        ],
      },
      {
        title: 'Przedczołowa Kora Przyśrodkowa (dlPFC) i Pamięć Robocza',
        content: `
          <p><span class="scientific-term">Przedczołowa kora przyśrodkowa</span> (dlPFC – <em>dorsolateral prefrontal cortex</em>) jest kluczowym obszarem dla <strong>pamięci roboczej</strong> – zdolności do tymczasowego przechowywania i manipulowania informacją.</p>
          
          <p>Patricia Goldman-Rakic (1987) wykazała w badaniach na małpach, że neurony w dlPFC wykazują aktywność utrzymaną (sustained activity) podczas opóźnień w zadaniach pamięciowych. Aktywność ta koduje lokalizację przestrzenną obiektu w pamięci.</p>
        `,
        subsections: [
          {
            title: 'Model Pamięci Roboczej Baddeleya',
            content: `
              <p>Alan Baddeley i Graham Hitch (1974) zaproponowali wielokomponentowy model pamięci roboczej:</p>
              <ol>
                <li><strong>Nadzorca centralny (Central Executive)</strong> – Kontroler uwagi, koordynuje podsystemy. Związany z dlPFC.</li>
                <li><strong>Pętla fonologiczna (Phonological Loop)</strong> – Przechowywanie werbalne. Związana z zakrętem Broki i kora skroniową lewą.</li>
                <li><strong>Szkicownik wzrokowo-przestrzenny (Visuospatial Sketchpad)</strong> – Przechowywanie wzrokowo-przestrzenne. Związany z płatami ciemieniowymi i potylicznymi.</li>
                <li><strong>Bufor epizodyczny (Episodic Buffer)</strong> – Integracja informacji między modalnościami. Związany z ACC i skroniowym biegunem.</li>
              </ol>
            `,
          },
        ],
      },
    ],
    interactiveElement: {
      title: 'Podregiony Kory Przedczołowej',
      description: 'Eksploruj różne podregiony kory przedczołowej: dlPFC, vlPFC, OFC, ACC. Zobacz ich połączenia i specjalizacje funkcjonalne.',
    },
  },

  // Module 5: Agnosia, Apraxia, Spatial Neglect
  'module-5': {
    sections: [
      {
        title: 'Szlaki Przetwarzania Wzrokowego: Co? vs. Gdzie?',
        content: `
          <p>Przetwarzanie wzrokowe w mózgu zachodzi wzdłuż dwóch głównych szlaków, rozdzielających się już na poziomie kory wzrokowej pierwrotnej (V1). Ten podział został po raz pierwszy zaproponowany przez Leslie Ungerleider i Mortimera Mishkina w 1982 roku.</p>
          
          <ol>
            <li><strong>Szlak wentralny ("Co?" / What)</strong> – Biegnie od V1 przez V2, V4 do kory skroniowej dolnej. Odpowiedzialny za identyfikację obiektów, rozpoznawanie twarzy i analizę koloru oraz formy.</li>
            <li><strong>Szlak dorsalny ("Gdzie? / Jak?" / Where/How)</strong> – Biegnie od V1 przez V2, MT/V5 do kory ciemieniowej. Odpowiedzialny za lokalizację przestrzenną, analizę ruchu i kontrolę działania.</li>
          </ol>
          
          <p>Melvyn Goodale i David Milner (1992) zaproponowali modyfikację tego modelu, sugerując, że szlak dorsalny jest bardziej związany z kontrolą działania ("How") niż tylko z lokalizacją ("Where").</p>
        `,
      },
      {
        title: 'Agnosja Wzrokowa – Gdy Widzenie Nie Wystarcza',
        content: `
          <p><span class="scientific-term">Agnosja wzrokowa</span> (z gr. <em>a-</em> "bez" + <em>gnosis</em> "poznanie") to zaburzenie rozpoznawania obiektów wzrokowych przy zachowanym widzeniu pierwotnym. Termin wprowadził Sigmund Freud w 1891 roku, choć opisy przypadków pojawiały się już wcześniej.</p>
          
          <p>Ludia Teuber (1968) zdefiniowała agnozję jako "percepcję bez poznania" – pacjenci mogą widzieć szczegóły obiektu, ale nie mogą go zidentyfikikować.</p>
        `,
        subsections: [
          {
            title: 'Typy Agnozji Wzrokowej',
            content: `
              <ul>
                <li><strong>Agnosja przedmiotowa (apperceptive)</strong> – Deficyt na poziomie percepcji. Pacjent nie może skonstruować spójnej reprezentacji percepcyjnej obiektu. Związana z uszkodzeniem szlaku wentralnego (V2, V4).</li>
                <li><strong>Agnosja asocjacyjna (associative)</strong> – Percepcja jest zachowana, ale nie można powiązać jej z pamięcią semantyczną. Pacjent może narysować obiekt, ale go nie rozpoznać. Związana z koreą skroniową dolną.</li>
                <li><strong>Prozopagnosja</strong> – Specyficzny deficyt rozpoznawania twarzy. Może być towarzyska (rozpoznaje znajomych po głosie, zapachu) lub appercepcyjna. Związana z zakrętem skroniowym dolnym (FFA – <em>fusiform face area</em>).</li>
                <li><strong>Agnosja przestrzenna</strong> – Deficyt analizy przestrzennej, lokalizacji i orientacji. Związana z uszkodzeniem szlaku dorsalnego (kora ciemieniowa).</li>
              </ul>
            `,
          },
        ],
      },
      {
        title: 'Neglekt Przestrzenny – Zapomniana Połowa Świata',
        content: `
          <p><span class="scientific-term">Neglekt przestrzenny</span> (łac. <em>neglegentia</em> – zaniedbanie) to zaburzenie uwagi przestrzennej polegające na nieświadomym pomijaniu bodźców z jednej strony przestrzeni (zazwyczaj lewej). Jest to jeden z najbardziej spektakularnych deficytów w neuropsychologii.</p>
          
          <p>Neglekt najczęściej występuje po uszkodzeniu prawej półkuli (prawej kory ciemieniowej), co wiąże się z lateralizacją uwagi przestrzennej. Edward Vallar (1993) zaproponował model neglektu jako zaburzenia reprezentacji przestrzeni mentalnej.</p>
        `,
        subsections: [
          {
            title: 'Przestrzenny vs. Allo- i Egocentryczny Neglekt',
            content: `
              <p>Neglekt może być zdefiniowany w różnych układach odniesienia:</p>
              <ul>
                <li><strong>Egocentryczny</strong> – Względem ciała pacjenta (lewa strona ciała jest ignorowana).</li>
                <li><strong>Alocentryczny</strong> – Względem obiektu (lewa strona każdego obiektu jest ignorowana, niezależnie od jego pozycji).</li>
                <li><strong>Przestrzenny</strong> – Względem środka przestrzeni (wszystko na lewo od środka jest ignorowane).</li>
              </ul>
              <p>Te odmiany sugerują, że neglekt jest zaburzeniem wielokomponentowym, angażującym różne reprezentacje przestrzeni.</p>
            `,
          },
          {
            title: 'Rehabilitacja Neglektu',
            content: `
              <p>Istnieje kilka podejść rehabilitacyjnych:</p>
              <ol>
                <li><strong>Terapia skanowania wizualnego</strong> – Nauka celowego przeszukiwania przestrzeni.</li>
                <li><strong>Stymulacja lewej strony</strong> – Przymusowe zwracanie uwagi na lewą stronę (np. przez okulary z przesłoną).</li>
                <li><strong>Stymulacja wzrokowa z wibracją</strong> – Łączenie bodźców wzrokowych z czuciowymi.</li>
                <li><strong>Terapia lustrzana</strong> – Użycie lustra do "przeniesienia" prawej strony na lewą.</li>
                <li><strong>Stymulacja mózgu</strong> – tDCS, TMS do modulacji aktywności kory ciemieniowej.</li>
              </ol>
            `,
          },
        ],
      },
    ],
    interactiveElement: {
      title: 'Symulacja Pola Wzrokowego i Neglektu',
      description: 'Zobacz, jak neglekt przestrzenny wpływa na percepcję. Interaktywna symulacja pokazuje, jak pacjent z neglektem lewostronnym postrzega świat.',
    },
  },
};
