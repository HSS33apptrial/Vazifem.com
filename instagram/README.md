# Vazifem Instagram Sablonlari

Vazifem.com Instagram paylasimlarini olusturmak icin HTML sablonlari ve icerik stratejisi.

## Dosya Yapisi

```
instagram/
  strategy/content-strategy.md   # Icerik stratejisi
  templates/                     # HTML paylasim sablonlari (1080x1080px)
    01-coming-soon.html          # "Cok Yakinda" duyurusu
    02-problem-solution.html     # Sorun / Cozum egitim paylasimi
    03-feature-highlight.html    # Ozellik tanitimi
    04-emotional-trust.html      # Duygusal / guven paylasimi (koyu arka plan)
    05-before-after.html         # Oncesi / Sonrasi karsilastirma
    06-how-it-works.html         # Nasil Calisir 3 adim
  assets/brand-colors.md         # Marka renkleri referansi
```

## Nasil Kullanilir

### 1. Sablonu acin
Herhangi bir `.html` dosyasini Chrome tarayicida acin.

### 2. Metinleri duzenleyin
HTML dosyasini bir metin editoru ile acin. Duzenlenebilir alanlar `<!-- EDITABLE: ... -->` yorumlariyla isaretlenmistir. Metni degistirip kaydedin.

### 3. Gorsel ekleyin (05-before-after icin)
Fotograf yer tutucularini gercek gorsellerle degistirmek icin:
```css
/* Eski: */
background: var(--neutral-200);
border: 2px dashed var(--neutral-300);

/* Yeni: */
background-image: url('fotograf-yolu.jpg');
background-size: cover;
background-position: center;
border: none;
```
Ic elemanlari (SVG icon ve "Fotograf buraya" metni) silin.

### 4. Ekran goruntusu alin
1. Chrome'da sablonu acin
2. **F12** tusuna basin (DevTools)
3. Ust barda **device toolbar** ikonuna tiklayin (telefon/tablet ikonu)
4. Boyut olarak **1080 x 1080** girin
5. Sag tik > **Capture screenshot**

Alternatif: DevTools konsolunda:
```js
document.querySelector('.post').style.transform = 'none';
```
yazarak `.post` elemanini sag tikla > "Capture node screenshot" secerek de alabilirsiniz.

## Marka Renkleri

| Renk | Hex Kodu | Kullanim |
|------|----------|----------|
| Ana Yesil | `#16a34a` | Logo, butonlar, vurgular |
| Koyu Yesil | `#14532d` | Basliklar |
| Acik Yesil BG | `#f0fdf4` | Arka planlar |
| Krem | `#faf9f6` | Sayfa arka plani |
| Metin (ana) | `#1c1917` | Basliklar |
| Metin (ikincil) | `#78716c` | Aciklamalar |

Font: **Inter** (Google Fonts, latin-ext)
