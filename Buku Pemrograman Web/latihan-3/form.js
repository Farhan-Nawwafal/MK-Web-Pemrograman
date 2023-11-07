/*------------PARENT FORMULIR START------------*/
// div.container
const divContainer = document.querySelector("div.container");

// div.formulir
const divFormulir = divContainer.querySelector("div.formulir");

// tag table
const table = divFormulir.querySelector("table");

// tag tbody
const tBody = table.querySelector("tbody");
/*------------PARENT FORMULIR END------------*/

/*------------VARIABEL INPUT FORMULIR START------------*/
// input nama
const inputNama = tBody.querySelector("tr > td > input#nama");

// input NIK
const inputNik = tBody.querySelector("tr > td > input#nik");

// input tempat lahir
const inputTempatLahir = tBody.querySelector("tr > td > input#tempat-lahir");

// input tanggal lahir
const inputTanggalLahir = tBody.querySelector("tr > td > input#tanggal-lahir");

// input tahun lahir
const inputTahunLahir = tBody.querySelector("tr > td > input#tahun-lahir");

// tag button kirim
const buttonKirim = divFormulir.querySelector("div.button > button#kirim");

// div container image
const divContainerImage = divContainer.querySelector("div.container-image");

// div image
const divImage = divContainerImage.querySelector("div.image");

// tag image
const img = divImage.querySelector("img");

// input file
const inputFile = divImage.querySelector("input");
inputFile.addEventListener("click", () =>{
    setTimeout(() => {
        img.setAttribute("src", `${inputFile.value}`);
    },2000);
});


/*------------VARIABEL INPUT FORMULIR END------------*/