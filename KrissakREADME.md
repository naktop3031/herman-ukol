# Image Gallery a Mapa

Tento projekt je jednoduchá aplikace pro prohlížení obrázků s jejich zobrazením na mapě pomocí knihovny Leaflet. Obrázky jsou uloženy na serveru a obsahují GPS souřadnice, které jsou použity pro zobrazení markerů na mapě.

**Vím, že ve specifikaci bylo nepoužívat frameworky, ale kvůli čtení názvů obrázků jsem použil NodeJS, protože Javascript neumí číst názvy souborů ze složky. Jinak by projekt běžel bez NodeJS, čistě na JavaScriptu.**

## Požadavky

- Node.js a npm
- Internetové připojení pro načtení externích knihoven

## Instalace

2. Nainstalujte závislosti:

   ```bash
   npm install
   ```

3. Ujistěte se, že máte ve složce `public/content` nějaké obrázky ve formátu JPG nebo JPEG, které obsahují GPS souřadnice.

## Spuštění serveru

Server spustíte příkazem:

```bash
npm start
```

Server poběží na portu 3000

**Aplikace se spustí spuštěním (kliknutím) na soubor index.html .**



## Struktura projektu

- `server.js`: Hlavní soubor serveru, který zpracovává požadavky na API a obsluhuje statické soubory.
- `public/content`: Složka, kde jsou uloženy obrázky.
- `public/index.html`: HTML soubor s galerií a mapou.
- `public/style.css`: CSS soubor pro stylování galerie a mapy.

## Funkce

- Načítání obrázků ze složky `public/content`.
- Extrakce GPS souřadnic z obrázků pomocí knihovny `exifr`.
- Zobrazení obrázků v galerii.
- Zobrazení markerů na mapě podle GPS souřadnic z obrázků.
- Kliknutím na obrázek se mapa posune k odpovídajícímu markeru a naopak.

## Použité knihovny

- [Express](https://expressjs.com/): Webový framework pro Node.js.
- [Cors](https://github.com/expressjs/cors): Middleware pro povolení CORS.
- [Exifr](https://github.com/MikeKovarik/exifr): Knihovna pro extrakci EXIF dat z obrázků.
- [Leaflet](https://leafletjs.com/): Knihovna pro práci s mapami.