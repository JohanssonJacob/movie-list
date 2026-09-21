# Kvällens film

Kvällens film är en simpel filmapplikation byggd med React och TMDbs API. Användaren kan bläddra bland populära filmer eller söka efter en specifik titel, se detaljer och trailer för en film, och spara filmer till "Min lista".


## Kör projektet lokalt

1. Installera dependencies:
   ```
   npm install
   ```
2. Skapa en .env-fil i projektroten baserad på .env.example, och lägg in din egen TMDb API token:
   ```
   VITE_TMDB_TOKEN=din-token-här
   ```
   Kräver kostnadsfri registrering på [TMDb](https://www.themoviedb.org/settings/api)

3. Starta dev servern med:
   ```
   npm run dev
   ```
   

## Uppfyllda krav
1. [X] Minst 5 komponenter med tydligt ansvar, rimlig mappstruktur.

   Komponenter: MovieCard, Navbar, SearchBar, TrailerButton, WatchlistButton.
   
   Mappstruktur: components/, pages/, services/, hooks/, context/

2. [X] Routing mellan minst två vyer.

   Tre vyer: /, /movie/:id och /watchlist

3. [X] State delas mellan minst två komponenter.

   Delas genom context via WatchlistContext: WatchlistButton (lägger till eller tar bort) och WatchlistPage (visar listan) läser och skriver samma state.

4. [/] Minst ett API-anrop med loading- och felhantering.

   API-anrop mot TMDb finns i nuläget, dock utan loading och ordentlig felhantering.

5. [/] Minst ett formulär med validering.

   Ej implementerat än. Inte bestämt vad formuläret ska vara/innehålla.

6. [X] Data lagras mellan sidladdningar.

   Sparad lista lagras i localstorage via useLocalStorage.

7. [X] Ren, namngiven och committad kod.

   Simpel namngivning och committad med rimlig historik (än så länge).

8. [/] Komplett inlämning enligt ovan.

   Länk till GitHub-repo och denna README. Ingen deployad sida än.

## VÄL GODKÄND (VG)

Minst tre av följande ska vara uppfyllda:

1. [/] Utökad felhantering: tydliga tomma-tillstånd, samt hantering av nätverksfel.

   Ej implementerat än.

2. [/] Genomtänkt komponentarkitektur: återanvändbara komponenter, egna hooks för delad logik, tydlig separation mellan presentation och datahämtning.

   Återanvändbara komponenter och egna hooks (useWatchlist, useLocalStorage) finns.
   
    Men datahämtning är inte separerad från presentation än.

3. [/] Responsiv design: gränssnittet fungerar och ser bra ut även på mobil skärmstorlek.

   Ej anpassat än då jag fortfarande mestadels använder standard Vite css, sidan kommer designas om och anpassas i senare skede.

4. [/ ?] Utökad funktionalitet utöver de gemensamma kraven, motiverad och relevant för idén.

   Vet inte riktigt vad som räknas, än så länge har jag en sökfunktion.

5. [X] Tydlig och väl underhållen commit-historik med beskrivande commit-meddelanden genom hela arbetet.

   Än så länge 7 commits med beskrivande meddelanden, gjorda löpande under arbetet.
