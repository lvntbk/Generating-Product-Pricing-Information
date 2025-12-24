const urunAdi = "Gaming Laptop";
const birimFiyat = 50000;
const indirimOrani = 10;

const adet = Number(prompt(`${urunAdi} (Birim Fiyat: ${birimFiyat.toLocaleString('tr-TR')} TL)\nKaç adet almak istersiniz?`));

const cikti = `
    <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400" alt="Laptop" class="urun-resmi">
    <h3 style="margin:0 0 10px 0;">${urunAdi}</h3>
    
    <div style="text-align: left; line-height: 1.8;">
        Birim Fiyat: <b>${birimFiyat.toLocaleString('tr-TR')} TL</b> <br>
        Seçilen Adet: <b>${adet}</b> <br>
        ------------------------- <br>
        Normal Tutar: ${(birimFiyat * adet).toLocaleString('tr-TR')} TL <br>
        İndirim Tutarı: -${((birimFiyat * adet * indirimOrani) / 100).toLocaleString('tr-TR')} TL <br>
        <span class="vurgu">Ödenecek: ${((birimFiyat * adet) - ((birimFiyat * adet * indirimOrani) / 100)).toLocaleString('tr-TR')} TL</span>
    </div>
`;

document.getElementById("sonuc").innerHTML = cikti;