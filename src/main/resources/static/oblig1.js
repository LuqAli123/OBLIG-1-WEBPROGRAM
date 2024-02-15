const billetter = [];

function leggTilBillett(){
    if (document.getElementById("film").value === ""){

    }

    if (document.getElementById("filmerror").innerHTML !== "" ||
        document.getElementById("feilepost").innerHTML !== "" ||
        document.getElementById("feiltelefon").innerHTML !== "" ||
        document.getElementById("feilNavn").innerHTML !== "" ||
        document.getElementById("feilantall").innerHTML !== "" ||
        document.getElementById("feiletternavn").innerHTML !== ""){
        return;
    }
    let eksisterendeBilletter = billetter.length; // Lagrer antall billetter allerede skrevet ut
    // Array med navn på filmer indeksert tilsvarende verdier i "filmer"-select
    const filmer = ["Dune 2", "Batman", "Cars", "Avatar"];
    const billett = {
        film: document.getElementById("film").value,
        antall: document.getElementById("antall").value,
        navn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefon: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    };
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

    if (document.getElementById("fornavn").value === ""){
        document.getElementById("feilNavn").innerText = "Må skrive inn fornavn"
    }

    if (document.getElementById("etternavn").value === ""){
        document.getElementById("feiletternavn").innerText = "Må skrive inn etternavn"
    }

    if (document.getElementById("epost").value === ""){
        document.getElementById("feilepost").innerText = "Må  skrive inn riktig epost"
    }

    if(document.getElementById("telefonnr").value === ""){
        document.getElementById("feiltelefon").innerText = "Må skrive inn telefon"
    }

    if (document.getElementById("antall").value === ""){
        document.getElementById("feilantall").innerText = "Må skrive inn antall"
    }
}