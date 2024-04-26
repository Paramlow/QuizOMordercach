// Pytania i odpowiedzi quizu
const daneQuizu = [
    {
		// Definicja pierwszego pytania
        pytanie: 'Kto to jest?', 
		// Odpowiedzi dla pierwszego pytania
        odpowiedzi: { 
            a: 'John Wayne Gacy',
            b: 'Jefrrey Dahmer',
            c: 'Joseph McGowan'
        },
		// Poprawna odpowiedź na pierwsze pytanie
        poprawnaOdpowiedz: 'a',
		zdjecie:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/John_Wayne_Gacy_1978_mugshot.jpg/1200px-John_Wayne_Gacy_1978_mugshot.jpg"
    },
    {
        pytanie: 'Kto to jest?', // Definicja drugiego pytania
        odpowiedzi: { // Odpowiedzi dla drugiego pytania
            a: 'Genene Jones',
            b: 'Aileen Wuornos',
            c: 'Ilse Koch'
        },
        poprawnaOdpowiedz: 'b', // Poprawna odpowiedź na drugie pytanie
		zdjecie:"https://static.kronikidziejow.pl/media/artykul/3/364/Ailen-l.webp"
    },
    {
      // Definicja trzeciego pytania
        pytanie: 'Kto to jest?', 
        odpowiedzi: { // Odpowiedzi dla trzeciego pytania
            a: 'Jeffrey Dahmer',
            b: 'Ted Bundy',
            c: 'Charles Manson'
        },
        poprawnaOdpowiedz: 'a', // Poprawna odpowiedź na trzecie pytanie
		zdjecie:"https://www.thesun.co.uk/wp-content/uploads/2022/09/arrested-like-serial-killer-photobooth-764230607.jpg"
    },
	{
		//Definicja czwartego pytania
		pytanie: 'Kto to jest?',
		odpowiedzi: {
		a: 'Ottis Toole',
		b: 'Ed Gein',
		c: 'Ted Bundy'
		},
		poprawnaOdpowiedz: 'c',
		zdjecie: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/ted-bundy-mug-shot-1975-horizontal-tony-rubino.jpg"
	},
	{
		pytanie: 'Kto to jest?',
		odpowiedzi: {
		a: 'Ilse Koch',
		b: 'Dagmar Overbye',
		c: 'Vera Renczi'
		},
		poprawnaOdpowiedz: 'c',
		zdjecie: 'https://forensic.legaldesire.com/wp-content/uploads/2021/06/Vera_Renczi-1.jpg'
	},
	{
		pytanie: 'Kto to jest?',
		odpowiedzi: {
		a: 'Andriej Czikatiło',
		b: 'Dennis Rader',
		c: 'Henry Lee Lucas'
		},
		poprawnaOdpowiedz: 'b',
		zdjecie: 'https://dims.apnews.com/dims4/default/4eb0557/2147483647/strip/true/crop/1848x2200+0+0/resize/503x599!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc2%2Fb7%2Ff3574135a1f49244e7c76668e786%2F41298af1cd9d44fab197561c5f884ec0'
	},
	{
		pytanie: 'Kto to jest?',
		odpowiedzi: {
		a: 'Hrabina Elżbieta Batory',
		b: 'Darya Nikolayevna Saltykova',
		c: 'Madame Delphine Lalaurie'
		},
		poprawnaOdpowiedz: 'a',
		zdjecie: 'https://gfx.antyradio.pl/var/antyradio/storage/images/media/images/zrodlo-wikimedia-commons2/2108692-1-pol-PL/Zrodlo-Wikimedia-Commons.jpg'
	},
	{
		pytanie: 'Kto to jest?',
		odpowiedzi: {
		a: 'Lao Rongzhi',
		b: 'Miyuki Ishikawa',
		c: 'Chisako Kakehi'
		},
		poprawnaOdpowiedz: 'b',
		zdjecie: 'https://miro.medium.com/v2/resize:fit:1000/1*Xp06fj2hEqip5r6-eJ1Tzg.jpeg'
	},
	{
		pytanie: 'Kto to jest?',
		odpowiedzi: {
		a: 'Paul Bernardo ',
		b: 'John George Haigh',
		c: 'Harold Shipman'
		},
		poprawnaOdpowiedz: 'b',
		zdjecie: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/JohnGeorgeHaigh.jpg'
	},
	{
		pytanie: 'Kto to jest?',
		odpowiedzi: {
		a: 'Bruno Ludke',
		b: 'Peter Kurten',
		c: 'Gary Ridgway'
		},
		poprawnaOdpowiedz: 'c',
		zdjecie: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Gary_Ridgway_Mugshot_11162001.jpg'
	}
	
];

// zmienna do śledzenia bieżącego pytania
let indeksBiezacegoPytania = 0; 
// zmienna do przechowywania wyniku
let wynik = 0; 

function wyswietlBiezacePytanie() {
	// Pobranie bieżącego pytania
    const biezacePytanie = daneQuizu[indeksBiezacegoPytania]; 
	// Znalezienie elementu pytania w HTML
    const elementPytania = document.getElementById('pytanie'); 
	// Znalezienie elementu odpowiedzi w HTML
    const elementOdpowiedzi = document.getElementById('odpowiedzi'); 
	//Znalezieie elementu zdjęcia w HTML
	const elementZdjecia = document.getElementById('zdjecie');
	//Znalezienie elemntu pytania np. 1 z 10
	const pytanieInfo = document.getElementById('pytanie-info');
	// Wyświetlenie treści bieżącego pytania
    elementPytania.textContent = biezacePytanie.pytanie; 
	// Wyczyszczenie poprzednich odpowiedzi
    elementOdpowiedzi.innerHTML = ''; 
	
	// Wyświetlenie tekstu które jest pytanie
	pytanieInfo.innerHTML = `Pytanie ${indeksBiezacegoPytania + 1} z ${daneQuizu.length}`;

	// Iteracja przez możliwe odpowiedzi
    for (const opcja in biezacePytanie.odpowiedzi) { 
	// Utworzenie przycisku dla każdej opcji odpowiedzi
        const przycisk = document.createElement('button'); 
		// Ustawienie tekstu na przycisku
        przycisk.textContent = `${opcja}: ${biezacePytanie.odpowiedzi[opcja]}`; 
		elementZdjecia.src = biezacePytanie.zdjecie; 
		// Dodanie obsługi zdarzenia po kliknięciu przycisku
        przycisk.addEventListener('click', function() { 
		// Sprawdzenie czy odpowiedź jest poprawna
            if (biezacePytanie.poprawnaOdpowiedz === opcja) { 
			// Inkrementacja wyniku
                wynik++; 
            }	
			
			// Przejście do następnego pytania
            indeksBiezacegoPytania++; 

			// Jeśli są jeszcze pytania do wyświetlenia
            if (indeksBiezacegoPytania < daneQuizu.length) { 
			// Wyświetlenie następnego pytania
                wyswietlBiezacePytanie(); 
				// W przeciwnym razie
            } else { 
			//Wyświetlenie innego zdjęcia na koniec
			elementZdjecia.src = 'https://ocdn.eu/pulscms-transforms/1/pT8k9kpTURBXy9lYmQ2NWE0OWRmNzFjYTJjMjVjOTUyZDRmN2ZlZDI5My5qcGeTlQPNCBwAzQprzQ-gkwXNAWjNAfSTBc0BaM0B9N4AAqEwBaExAA';
			// Wyświetlenie informacji o zakończeniu quizu
                elementPytania.textContent = 'Gratulacje!'; 
				
				// Wyświetlenie końcowego wyniku
                elementOdpowiedzi.innerHTML = `Twój wynik: ${wynik}`; 

            }
			if (indeksBiezacegoPytania == daneQuizu.length) {
				// Wyświetlenie innego tekstu jeśli zakończono quiz
				pytanieInfo.innerHTML = `Koniec quizu.`;

			}
		
        });
		// Dodanie przycisku do elementu odpowiedzi
        elementOdpowiedzi.appendChild(przycisk); 
    }
}

// Wywołanie funkcji do wyświetlania pierwszego pytania
wyswietlBiezacePytanie();