function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

function toggleMobileDropdown() {
  document.getElementById("mobile-dropdown-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#dropdown-button') && !event.target.matches("#mobile-dropdown-button")) {
    var dropdown = document.getElementById("dropdown-content");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }

    var mobileDropdown = document.getElementById("mobile-dropdown-content");
    if (mobileDropdown.classList.contains("show")) {
      mobileDropdown.classList.remove("show");
    }
  }
}

var languagePositions = [
  "en-US",
  "es-ES",
  "fr-FR",
  "zh-Hans",
  "zh-Hant"
]

function changeLanguage(lang) {
  var tagline = document.getElementById("tagline");
  var description = document.getElementById("description");
  var email = document.getElementById("email");
  var submit = document.getElementById("submit");

  var openSource = document.getElementById("open-source");
  var support = document.getElementById("support");
  var button0 = document.getElementById("dropdown-button");
  var button1 = document.getElementById("dropdown-button-1");
  var button2 = document.getElementById("dropdown-button-2");
  var button3 = document.getElementById("dropdown-button-3");
  var button4 = document.getElementById("dropdown-button-4");

  var mobileOpenSource = document.getElementById("mobile-open-source");
  var mobileSupport = document.getElementById("mobile-support");
  var mobileButton0 = document.getElementById("mobile-dropdown-button");
  var mobileButton1 = document.getElementById("mobile-dropdown-button-1");
  var mobileButton2 = document.getElementById("mobile-dropdown-button-2");
  var mobileButton3 = document.getElementById("mobile-dropdown-button-3");
  var mobileButton4 = document.getElementById("mobile-dropdown-button-4");

  if (languagePositions[lang] == "en-US") {
    tagline.innerHTML = "Enact change in your neighborhood";
    description.innerHTML = "Work with your community to break language barriers while communicating with local legislators";
    email.setAttribute("placeholder", "Enter your email address");
    submit.setAttribute("value", "Submit");
    openSource.innerHTML = "Open Source";
    support.innerHTML = "Support";
    button0.innerHTML = "English";
    button1.innerHTML = "Español";
    button2.innerHTML = "Français";
    button3.innerHTML = "简体中文";
    button4.innerHTML = "繁體中文";
    mobileOpenSource.innerHTML = "Open Source";
    mobileSupport.innerHTML = "Support";
    mobileButton0.innerHTML = "English";
    mobileButton1.innerHTML = "Español";
    mobileButton2.innerHTML = "Français";
    mobileButton3.innerHTML = "简体中文";
    mobileButton4.innerHTML = "繁體中文";
    languagePositions = ["en-US", "es-ES", "fr-FR", "zh-Hans", "zh-Hant"];
  } else if (languagePositions[lang] == "es-ES") {
    tagline.innerHTML = "Promulgar el cambio en su barrio";
    description.innerHTML = "Trabajar con su comunidad para romper la barrera del idioma mientras se comunica con legislaturas locales";
    email.setAttribute("placeholder", "Anotar su correo electronico");
    submit.setAttribute("value", "Enviar");
    openSource.innerHTML = "Código abierto";
    support.innerHTML = "Apoyo";
    button0.innerHTML = "Español";
    button1.innerHTML = "English";
    button2.innerHTML = "Français";
    button3.innerHTML = "简体中文";
    button4.innerHTML = "繁體中文";
    mobileOpenSource.innerHTML = "Código abierto";
    mobileSupport.innerHTML = "Apoyo";
    mobileButton0.innerHTML = "Español";
    mobileButton1.innerHTML = "English";
    mobileButton2.innerHTML = "Français";
    mobileButton3.innerHTML = "简体中文";
    mobileButton4.innerHTML = "繁體中文";
    languagePositions = ["es-ES", "en-US", "fr-FR", "zh-Hans", "zh-Hant"];
  } else if (languagePositions[lang] == "fr-FR") {
    tagline.innerHTML = "Promulger le changement dans votre quartier";
    description.innerHTML = "Travailler avec votre communauté pour rompre des barrières linguistiques en communiquant avec des législateurs locaux";
    email.setAttribute("placeholder", "Entrer votre adresse email");
    submit.setAttribute("value", "Soumettre");
    openSource.innerHTML = "Open Source";
    support.innerHTML = "Soutien";
    button0.innerHTML = "Français";
    button1.innerHTML = "English";
    button2.innerHTML = "Español";
    button3.innerHTML = "简体中文";
    button4.innerHTML = "繁體中文";
    mobileOpenSource.innerHTML = "Open Source";
    mobileSupport.innerHTML = "Soutien";
    mobileButton0.innerHTML = "Français";
    mobileButton1.innerHTML = "English";
    mobileButton2.innerHTML = "Español";
    mobileButton3.innerHTML = "简体中文";
    mobileButton4.innerHTML = "繁體中文";
    languagePositions = ["fr-FR", "en-US", "es-ES", "zh-Hans", "zh-Hant"];
  } else if (languagePositions[lang] == "zh-Hans") {
    tagline.innerHTML = "使你的小区变得更好";
    description.innerHTML = "与你的社区一起打破语言障碍并与立法者合作";
    email.setAttribute("placeholder", "输入您的Email");
    submit.setAttribute("value", "提交");
    openSource.innerHTML = "开源";
    support.innerHTML = "帮助";
    button0.innerHTML = "简体中文";
    button1.innerHTML = "English";
    button2.innerHTML = "Español";
    button3.innerHTML = "Français";
    button4.innerHTML = "繁體中文";
    mobileOpenSource.innerHTML = "开源";
    mobileSupport.innerHTML = "帮助";
    mobileButton0.innerHTML = "简体中文";
    mobileButton1.innerHTML = "English";
    mobileButton2.innerHTML = "Español";
    mobileButton3.innerHTML = "Français";
    mobileButton4.innerHTML = "繁體中文";
    languagePositions = ["zh-Hans", "en-US", "es-ES", "fr-FR", "zh-Hant"];
  } else if (languagePositions[lang] == "zh-Hant") {
    tagline.innerHTML = "使你的小區變得更好";
    description.innerHTML = "與你的社區一起打破語言障礙並與立法者合作";
    email.setAttribute("placeholder", "輸入您的Email");
    submit.setAttribute("value", "提交");
    openSource.innerHTML = "開源";
    support.innerHTML = "幫助";
    button0.innerHTML = "繁體中文";
    button1.innerHTML = "English";
    button2.innerHTML = "Español";
    button3.innerHTML = "Français";
    button4.innerHTML = "简体中文";
    mobileOpenSource.innerHTML = "開源";
    mobileSupport.innerHTML = "幫助";
    mobileButton0.innerHTML = "繁體中文";
    mobileButton1.innerHTML = "English";
    mobileButton2.innerHTML = "Español";
    mobileButton3.innerHTML = "Français";
    mobileButton4.innerHTML = "简体中文";
    languagePositions = ["zh-Hant", "en-US", "es-ES", "fr-FR", "zh-Hans"];
  }
}
