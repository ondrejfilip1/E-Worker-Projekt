function hover(element) {
    element.setAttribute('src', 'src/kosikbilej.png');
}

function unhover(element) {
    element.setAttribute('src', 'src/kosikcernej.png');
}

function kosik4() {
    if (document.getElementById('otrok4').checked) {
        document.getElementById("otrok4text").textContent = "Odebrat z košíku";
        document.getElementById("pracovnik4").style.display = "block";
        alert("Položka byla přidána do košíku.");
    } else {
        document.getElementById("otrok4text").textContent = "Přidat do košíku";
        document.getElementById("pracovnik4").style.display = "none";
        alert("Položka byla odebrána z košíku.");
    }
}

function kosik3() {
    if (document.getElementById('otrok3').checked) {
        document.getElementById("otrok3text").textContent = "Odebrat z košíku";
        document.getElementById("pracovnik3").style.display = "block";
        alert("Položka byla přidána do košíku.");
    } else {
        document.getElementById("otrok3text").textContent = "Přidat do košíku";
        document.getElementById("pracovnik3").style.display = "none";
        alert("Položka byla odebrána z košíku.");
    }
}

function kosik2() {
    if (document.getElementById('otrok2').checked) {
        document.getElementById("otrok2text").textContent = "Odebrat z košíku";
        document.getElementById("pracovnik2").style.display = "block";
        alert("Položka byla přidána do košíku.");
    } else {
        document.getElementById("otrok2text").textContent = "Přidat do košíku";
        document.getElementById("pracovnik2").style.display = "none";
        alert("Položka byla odebrána z košíku.");
    }
}

function kosik() {
    if (document.getElementById('jamal').checked) {
        document.getElementById("jamaltext").textContent = "Odebrat z košíku";
        document.getElementById("pracovnik1").style.display = "block";
        alert("Položka byla přidána do košíku.");
    } else {
        document.getElementById("pracovnik1").style.display = "none";
        document.getElementById("jamaltext").textContent = "Přidat do košíku";
        alert("Položka byla odebrána z košíku.");
    }
}

function objednavkabutton() {
    alert("Položky byly objednány.");
}

function pribehdropdown4() {
    if (document.getElementById('pribehclick4').checked) {
        document.getElementById("dropdownimage4").style.transform = "rotate(0deg)";
        document.getElementById("pribeh4").style.display = "block";
        document.getElementById("divdrop4").classList.remove("marginpopisvec");
    } else {
        document.getElementById("dropdownimage4").style.transform = "rotate(-90deg)";
        document.getElementById("pribeh4").style.display = "none";
        document.getElementById("divdrop4").classList.add("marginpopisvec");
    }
}

function pribehdropdown3() {
    if (document.getElementById('pribehclick3').checked) {
        document.getElementById("dropdownimage3").style.transform = "rotate(0deg)";
        document.getElementById("pribeh3").style.display = "block";
        document.getElementById("divdrop3").classList.remove("marginpopisvec");
    } else {
        document.getElementById("dropdownimage3").style.transform = "rotate(-90deg)";
        document.getElementById("pribeh3").style.display = "none";
        document.getElementById("divdrop3").classList.add("marginpopisvec");
    }
}

function pribehdropdown2() {
    if (document.getElementById('pribehclick2').checked) {
        document.getElementById("dropdownimage2").style.transform = "rotate(0deg)";
        document.getElementById("pribeh2").style.display = "block";
        document.getElementById("divdrop2").classList.remove("marginpopisvec");
    } else {
        document.getElementById("dropdownimage2").style.transform = "rotate(-90deg)";
        document.getElementById("pribeh2").style.display = "none";
        document.getElementById("divdrop2").classList.add("marginpopisvec");
    }
}

function pribehdropdown1() {
    if (document.getElementById('pribehclick1').checked) {
        document.getElementById("dropdownimage1").style.transform = "rotate(0deg)";
        document.getElementById("pribeh1").style.display = "block";
        document.getElementById("divdrop1").classList.remove("marginpopisvec");
    } else {
        document.getElementById("dropdownimage1").style.transform = "rotate(-90deg)";
        document.getElementById("pribeh1").style.display = "none";
        document.getElementById("divdrop1").classList.add("marginpopisvec");
    }
}

function karta() {
    if (document.getElementById('Radio3').checked) {
        document.getElementById("kartaform").style.display = "block";
        document.getElementById("mezerabutton").style.display = "none";
    }
}

function ostatnicheck() {
        document.getElementById("kartaform").style.display = "none";
        document.getElementById("mezerabutton").style.display = "block";
}