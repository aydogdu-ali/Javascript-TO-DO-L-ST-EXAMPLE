/*İnputları yakalıyoruz.*/
const input_1 = document.querySelector(".value_1");
const input_2 = document.querySelector(".value_2");
const input_3 = document.querySelector(".value_3");
const input_4 = document.querySelector(".value_4");
console.log(input_1, input_2, input_3, input_4);

/* Butonları yakalıyoruz */

const btnOnemliAcil = document.querySelector(".btn-oa");
const btnOnemliAcilDegil = document.querySelector(".btn-oad");
const btnOnemliDegilAcil = document.querySelector(".btn-oda");
const btnOnemliDegilAcilDegil = document.querySelector(".btn-odad");

console.log(
  btnOnemliAcil,
  btnOnemliAcilDegil,
  btnOnemliAcilDegil,
  btnOnemliAcilDegil
);

//=========================================================
/********EVENTS **************/
//=========================================================

/* 1- Önemli-Acil Events*/
//=========================================================
// Ekleyeceğimiz parent elemanı yakalıyoruz.
let onemliAcilEkle = document.querySelector(".ekle");

console.log(onemliAcilEkle); // ekleyeceğimiz parent elemanı yakaladımızdan emin oluyoruz.

// click eventinde yapılması gereken fonksiyonu tanımlıyoruz
// Kullanıcı input girişine veri girmedi yada boş tıkladığı zaman uyarı verdiriyoruz.

btnOnemliAcil.addEventListener("click", () => {
  if (!input_1.value) {
    alert("Lütfen ver girişi yapınız!");
  }
  // Veri girişi varsa DOM'a yazdırıyoruz.
  else {
    input_1.style.TextTransform = "capitalize";
    onemliAcilEkle.innerHTML += ` 
    <li class ="text"> ${input_1.value} <i class="fa-regular fa-circle-check "> </i> <i class="fa-regular fa-trash-can"></i>  </li>
   `;
    // Kullanıcı veri girdikten sonra  en son girilen verinin input kutusundan silinmesini sağlıyoruz.
    input_1.value = "";
  }

  //* KULLANICI VERİ GİRDİKTEN SONRA */

  /* Yapılan işi İşaretledik*/

  // querySelectorAll bize nodelist çevirir biz burada dizilerin fonksiyonlarını kullanabiliriz.
  const Kontrol = document.querySelectorAll(".fa-circle-check"); // liste içindeki tüm check işaretlerini yakalıyoruz.
  console.log(Kontrol); // check işaretini yakaladığımız kontrol ediyoruz.
  // burada forEach döngüsü ile li elemanları üzerinde geziniyoruz.
  Kontrol.forEach((item) => {
    item.addEventListener("click", () => {
      // fonksiyonda gezinirken bitirdiklerimizi işaretliyoruz.
      //Ternary operatörü ile tıklayarak bitirdiysek yeşile döndürüyoruz. Başladıysak kırmızıya döndürüyoruz.
      let sayi = Math.floor(Math.random() * 2);
      sayi % 2 ? (item.style.color = "green") : (item.style.color = "red");
    });
  });

  /* Yapılan işi sİLME */

  // Veri girişi sonrası DOM da bulunna çöp kutusu ikonunu yakalıyoruz
  // querySelectorAll bize nodelist çevirir biz burada dizilerin fonksiyonlarını kullanabiliriz.
  const Del = document.querySelectorAll(".fa-trash-can");
  console.log(Del); // çöp kutusu ikonunu yakaladığımızdan emin oluyoruz
  // forEach föngüsü ile tüm ol elemanı üzerinde geziniyoruz ve istediğimizi silebiliyoruz.
  Del.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.style.display = "none";
    });
  });
});

//***** 1- Önemli-Acil ENTER Eventi***********

// Klavyeden kullanıcı veri girişi yaptığında Enter tuşu ile girilen bilgiyi ekrana yazdırdık.
input_1.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btnOnemliAcil.click();
  }
});

/* 2- Önemli-Acil Değil Events*/
//=========================================================
// Konsolda içinde gösterilecek elementi yakalıyoruz
const onemliAcilOlmayanEkle = document.querySelector(
  ".Onemli_Acil_Degil .ekle"
);
console.log(onemliAcilOlmayanEkle); // ekleyeceğimiz parent elemanı yakaladımızdan emin oluyoruz.

// click eventinde yapılması gereken fonksiyonu tanımlıyoruz

// click eventinde yapılması gereken fonksiyonu tanımlıyoruz
// Kullanıcı input girişine veri girmedi yada boş tıkladığı zaman uyarı verdiriyoruz.

btnOnemliAcilDegil.addEventListener("click", () => {
  if (!input_2.value) {
    alert("Lütfen ver girişi yapınız!"); //uyarı kısmı
  }
  // Veri girişi varsa DOM'a yazdırıyoruz.
  else {
    onemliAcilOlmayanEkle.innerHTML += ` 
    <li> ${input_2.value} <i class="fa-regular fa-circle-check "> </i> <i class="fa-regular fa-trash-can"></i>
    </li>  `;
    input_2.value = "";
  }

  /* Yapılan işi işaretledik*/

  const Kontrol = document.querySelectorAll(".fa-circle-check"); // liste içindeki tüm check işaretlerini yakalıyoruz.
  console.log(Kontrol); // check işaretini yakaladığımız kontrol ediyoruz.
  Kontrol.forEach((item) => {
    // burada forEach döngüsü ile li elemanları üzerinde geziniyoruz.
    item.addEventListener("click", () => {
      // fonksiyonda gezinirken bitirdiklerimizi işaretliyoruz.
      //Ternary operatörü ile tıklayarak bitirdiysek yeşile döndürüyoruz. Başladıysak kırmızıya döndürüyoruz.
      let sayi = Math.floor(Math.random() * 2);
      sayi % 2 ? (item.style.color = "green") : (item.style.color = "red");
    });
  });

  /* Yapılan İşi Listeden Kaldırma */
  // Veri girişi sonrası DOM da bulunna çöp kutusu ikonunu yakalıyoruz
  // querySelectorAll bize nodelist çevirir biz burada dizilerin fonksiyonlarını kullanabiliriz.
  const Del = document.querySelectorAll(".fa-trash-can");
  console.log(Del);
  Del.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.style.display = "none";
    });
  });
});

//****Önemli-Acil Değil ENTER Eventi ***********
// Klavyeden kullanıcı veri girişi yaptığında Enter tuşu ile girilen bilgiyi ekrana yazdırdık.
input_2.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btnOnemliAcilDegil.click();
  }
});

/* 3- Önemli Değil-Acil */
//=========================================================
// Ekleyeceğimiz parent elemanı yakalıyoruz.
const onemliDegilAcilOlanEkle = document.querySelector(
  ".Onemli_Degil_Acil .ekle"
);

console.log(onemliDegilAcilOlanEkle); // ekleyeceğimiz parent elemanı yakaladımızdan emin oluyoruz.

// click eventinde yapılması gereken fonksiyonu tanımlıyoruz
// Kullanıcı input girişine veri girmedi yada boş tıkladığı zaman uyarı verdiriyoruz.
btnOnemliDegilAcil.addEventListener("click", () => {
  if (!input_3.value) {
    alert("Lütfen ver girişi yapınız!"); //uyarı kısmı
  }

  // Veri girişi varsa DOM'a yazdırıyoruz.
  else {
    onemliDegilAcilOlanEkle.innerHTML += ` 
    <li> ${input_3.value} <i class="fa-regular fa-circle-check "> </i> <i class="fa-regular fa-trash-can"></i>
    </li> `;
    input_3.value = "";
  }
  /* Yapılan işi işaretledik*/
  const Kontrol = document.querySelectorAll(".fa-circle-check"); // liste içindeki tüm check işaretlerini yakalıyoruz.
  console.log(Kontrol); // check işaretini yakaladığımız kontrol ediyoruz.
  Kontrol.forEach((item) => {
    // burada forEach döngüsü ile li elemanları üzerinde geziniyoruz.
    item.addEventListener("click", () => {
      // fonksiyonda gezinirken bitirdiklerimizi işaretliyoruz.
      //Ternary operatörü ile tıklayarak bitirdiysek yeşile döndürüyoruz. Başladıysak kırmızıya döndürüyoruz.
      let sayi = Math.floor(Math.random() * 2);
      sayi % 2 ? (item.style.color = "green") : (item.style.color = "red");
    });
  });

  /* Yapılan İşi Listeden Kaldırma */
  // Veri girişi sonrası DOM da bulunna çöp kutusu ikonunu yakalıyoruz
  // querySelectorAll bize nodelist çevirir biz burada dizilerin fonksiyonlarını kullanabiliriz.
  const Del = document.querySelectorAll(".fa-trash-can");
  console.log(Del);
  Del.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.style.display = "none";
    });
  });
});

//****Önemli Değil- Acil ENTER Eventi***********
// Klavyeden kullanıcı veri girişi yaptığında Enter tuşu ile girilen bilgiyi ekrana yazdırdık.
input_3.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btnOnemliDegilAcil.click();
  }
});

/* 4- Önemli Değil-Acil Değil */
//=========================================================
// Ekleyeceğimiz parent elemanı yakalıyoruz.
const onemliDegilAcilDegilEkle = document.querySelector(
  ".Onemli_Degil_Acil_Degil .ekle"
);

console.log(onemliDegilAcilDegilEkle); //ekleyeceğimiz parent elemanı yakaladımızdan emin oluyoruz.

// click eventinde yapılması gereken fonksiyonu tanımlıyoruz
// Kullanıcı input girişine veri girmedi yada boş tıkladığı zaman uyarı verdiriyoruz.

btnOnemliDegilAcilDegil.addEventListener("click", () => {
  if (!input_4.value) {
    alert("Lütfen ver girişi yapınız!"); //uyarı kısmı
  } else {
    onemliDegilAcilDegilEkle.innerHTML += ` 
    <li>  ${input_4.value} <i class="fa-regular fa-circle-check "> </i> <i class="fa-regular fa-trash-can"></i>
    </li> `;
    input_4.value = "";
  }

  /* Yapılan işi işaretledik*/
  const Kontrol = document.querySelectorAll(".fa-circle-check"); // liste içindeki tüm check işaretlerini yakalıyoruz.
  console.log(Kontrol); // check işaretini yakaladığımız kontrol ediyoruz.
  Kontrol.forEach((item) => {
    // burada forEach döngüsü ile li elemanları üzerinde geziniyoruz.
    item.addEventListener("click", () => {
      // fonksiyonda gezinirken bitirdiklerimizi işaretliyoruz.
      //Ternary operatörü ile tıklayarak bitirdiysek yeşile döndürüyoruz. Başladıysak kırmızıya döndürüyoruz.
      let sayi = Math.floor(Math.random() * 2);
      sayi % 2 ? (item.style.color = "green") : (item.style.color = "red");
    });
  });

  /* Yapılan İşi Listeden Kaldırma */
  // Veri girişi sonrası DOM da bulunna çöp kutusu ikonunu yakalıyoruz
  // querySelectorAll bize nodelist çevirir biz burada dizilerin fonksiyonlarını kullanabiliriz.
  const Del = document.querySelectorAll(".fa-trash-can");
  console.log(Del);
  Del.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.style.display = "none";
    });
  });
});

//****Önemli-Değil-Acil-Değil ENTER Eventi***********
// Klavyeden kullanıcı veri girişi yaptığında Enter tuşu ile girilen bilgiyi ekrana yazdırdık.
input_4.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btnOnemliDegilAcilDegil.click();
  }
});
