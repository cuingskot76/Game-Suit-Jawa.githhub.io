var tanya = true;
while (tanya) {
  // Membuat pilihan player
  var p = prompt("Silahkan pilih : orang, semut, atau gajah");

  // Membuat pilihan cumputer
  //Menentukan logika
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "orang";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "semut";
  } else {
    comp = "gajah";
  }

  // Menentukan rules
  var hasil = "";

  if (p == comp) {
    hasil = "Seri broo!";
  } else if (p == "orang") {
    //   if (comp == "gajah") {
    //     hasil = "Kamu kalah";
    //   } else {
    //     hasil = "Kamu menang";
    //   }
    hasil = comp == "gajah" ? "Kalah" : "Menang";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "Kamu menang";
    //   } else {
    //     hasil = "Kamu kalah";
    //   }
    hasil = comp == "orang" ? "Menang" : "Kalah";
  } else if (p == "semut") {
    //   if (comp == "orang") {
    //     hasil = "Kamu kalah";
    //   } else {
    //     hasil = "Kamu menang";
    //   }
    hasil = comp == "orang" ? "Kalah" : "Menang";
  } else {
    hasil = "Memasukkan pilihan yang salah";
  }

  // Menampilkan hasilnya
  alert("Kamu memilih: " + p + " dan komputer memilih: " + comp + " \nMaka hasilnya: kamu " + hasil);

  tanya = confirm("Lagi?");
}
alert("Terima kasih kamu sudah bermain :)");
