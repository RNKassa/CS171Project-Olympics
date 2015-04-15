function countryNameExceptions(country_name) {
    if(country_name == "UnitedStatesofAmerica") {
        country_name = "UnitedStates"
        return country_name;
    } else if(country_name == "UnitedKingdomofGreatBritainandNorthernIreland") {
        country_name = "UnitedKingdom"
        return country_name;
    } else if(country_name == "VietNam") {
        country_name = "Vietnam"
        return country_name;
    } else if(country_name == "RepublicofChina") {
        country_name = "China"
        return country_name;
    } else if(country_name == "Chinese Taipei") {
        country_name = "Taiwan"
        return country_name;
    } else if(country_name == "ChineseTaipei") {
        country_name = "Taiwan"
        return country_name;
    } else if(country_name == "Cook Islands") {
        country_name = "CookIslands"
        return country_name;
    } else if(country_name == "GuineaBissau") {
        country_name = "Guinea-Bissau"
        return country_name;
    } else if(country_name == "UnitedRepublicofTanzania") {
        country_name = "Tanzania"
        return country_name;
    } else if(country_name == "SyrianArabRepublic") {
        country_name = "Syria"
        return country_name;
    } else if(country_name == "RepublicofSerbia") {
        country_name = "Serbia"
        return country_name;
    } else if(country_name == "Costa Rica") {
        country_name = "CostaRica"
        return country_name;
    } else if(country_name == "Cape Verde") {
        country_name = "CapeVerde"
        return country_name;
    } else if(country_name == "DemocraticPeople'sRepublicofKorea") {
        country_name = "NorthKorea"
        return country_name;
    } else if(country_name == "Coted'Ivoire") {
        country_name = "IvoryCoast"
        return country_name;
    } else if(country_name == "CoteD'Ivoire") {
        country_name = "IvoryCoast"
        return country_name;
    } else if(country_name == "CoteD'Ivore") {
        country_name = "IvoryCoast"
        return country_name;
    } else if(country_name == "UnitedRepublicofTanzania") {
        country_name = "Tanzania"
        return country_name;
    } else if(country_name == "RepublicofKorea") {
        country_name = "SouthKorea"
        return country_name;
    } else if(country_name == "RussianFederation") {
        country_name = "Russia"
        return country_name;
    } else if(country_name == "Russian Federation") {
        country_name = "Russia"
        return country_name;
    } else if(country_name == "Soviet Union") {
        country_name = "Russia"
        return country_name;
    } else if(country_name == "Russian Empire") {
        country_name = "Russia"
        return country_name;
    } else if(country_name == "Republic of China") {
        country_name = "China"
        return country_name;
    } else if(country_name == "Cote D'Ivoire") {
        country_name = "IvoryCoast"
        return country_name;
    } else if(country_name == "SovietUnion") {
        country_name = "Russia"
        return country_name;
    } else if(country_name == "InternationTeam") {
        country_name = "Russia"
        return country_name;
    } else if(country_name == "Austrilasia") {
        country_name = "Australia"
        return country_name;
    } else if(country_name == "LaoPeople'sDemocraticRepublic") {
        country_name = "Laos"
        return country_name;
    } else if(country_name == "Democratic Republic of the Congo") {
        country_name = "DemocraticRepublicoftheCongo"
        return country_name;
    } else if(country_name == "British India") {
        country_name = "India"
        return country_name;
    } else if(country_name == "Russian Empire") {
        country_name = "Russia"
        return country_name;
    } else if(country_name == "RussianEmpire") {
        country_name = "Russia"
        return country_name;
    } else if(country_name == "WestGermany") {
        country_name = "Germany"
        return country_name;
    } else if(country_name == "EastGermany") {
        country_name = "Germany"
        return country_name;
    } else if(country_name == "DominicanRep.") {
        country_name = "DominicanRepublic"
        return country_name;
    } else if(country_name == "CzechRep.") {
        country_name = "CzechRepublic"
        return country_name;
    } else if(country_name == "Czech Republic") {
        country_name = "CzechRepublic"
        return country_name;
    } else if(country_name == "Sierra Leone") {
        country_name = "SierraLeone"
        return country_name;
    } else if(country_name == "SlovakRep.") {
        country_name = "Slovakia"
        return country_name;
    } else if(country_name == "Trinidad&amp;Tobago") {
        country_name = "TrinidadTobago"
        return country_name;
    } else return country_name;
}


function tipsyNameExceptions(countryName, countryYear) {
    if(countryName == "Armenia" || countryName == "Azerbaijan" ||
        countryName == "Russia" || countryName == "Belarus" ||
        countryName == "Estonia" || countryName == "Georgia" ||
        countryName == "Kazakhstan" || countryName == "Kyrgyzstan" ||
        countryName == "Latvia" || countryName == "Lithuania" ||
        countryName == "Moldova" || countryName == "Tajikistan" ||
        countryName == "Turkmenistan" || countryName == "Ukraine" ||
        countryName == "Uzbekistan") {
        if(countryYear > 1895 && countryYear < 1915) {
            countryName = "Russian Empire";
        }
    }
    if(countryName == "Armenia" || countryName == "Azerbaijan" ||
        countryName == "Russia" || countryName == "Belarus" ||
        countryName == "Georgia" ||
        countryName == "Kazakhstan" || countryName == "Kyrgyzstan" ||
        countryName == "Tajikistan" ||
        countryName == "Turkmenistan" || countryName == "Ukraine" ||
        countryName == "Uzbekistan") {
        if(countryYear > 1919 && countryYear < 1945) {
            countryName = "Soviet Union";
        }
    }
    if(countryName == "Armenia" || countryName == "Azerbaijan" ||
        countryName == "Russia" || countryName == "Belarus" ||
        countryName == "Estonia" || countryName == "Georgia" ||
        countryName == "Kazakhstan" || countryName == "Kyrgyzstan" ||
        countryName == "Latvia" || countryName == "Lithuania" ||
        countryName == "Moldova" || countryName == "Tajikistan" ||
        countryName == "Turkmenistan" || countryName == "Ukraine" ||
        countryName == "Uzbekistan") {
        if(countryYear > 1945 && countryYear < 1990) {
            countryName = "Soviet Union";
        }
    }
    if(countryName == "Bosnia and Herzegovina" || countryName == "Croatia" ||
        countryName == "Macedonia" || countryName == "Montenegro" ||
        countryName == "Serbia and Montenegro" || countryName == "Serbia" ||
        countryName == "Slovenia") {
        if(countryYear > 1919 && countryYear < 1992) {
            countryName = "Yugoslavia";
        }
    }
    if(countryName == "China" || countryName == "Taiwan" || countryName == "Chinese Taipei" || countryName == "ChineseTaipei") {
        if(countryYear > 1895 && countryYear < 1952) {
            countryName = "Republic of China";
        }
    }
    if(countryName == "CzechRepublic" || countryName == "CzechRep.") {
        if(countryYear > 1895 && countryYear < 1915) {
            countryName = "Bohemia";
        }
    }
    if(countryName == "CzechRepublic" || countryName == "CzechRep." || countryName == "Slovakia" || countryName == "SlovakRep.") {
        if(countryYear > 1915 && countryYear < 1996) {
            countryName = "Czechoslovakia";
        }
    }
    if(countryName == "South Africa (until 1960)") {
        countryName = "South Africa";
    }
    if(countryName == "Germany (until 1912)") {
        countryName = "Germany";
    }
    if(countryName == "Yugoslavia (until 1988)") {
        countryName = "Yugoslavia";
    }
    if(countryName == "Czechoslovakia (until 1992)") {
        countryName = "Czechoslovakia";
    }
    return countryName;
};

function tipsyClassExceptions(countryName, countryYear) {
    if(countryName == "Armenia" || countryName == "Azerbaijan" ||
        countryName == "Russia" || countryName == "Belarus" ||
        countryName == "Estonia" || countryName == "Georgia" ||
        countryName == "Kazakhstan" || countryName == "Kyrgyzstan" ||
        countryName == "Latvia" || countryName == "Lithuania" ||
        countryName == "Moldova" || countryName == "Tajikistan" ||
        countryName == "Turkmenistan" || countryName == "Ukraine" ||
        countryName == "Uzbekistan") {
        if(countryYear > 1895 && countryYear < 1915) {
            countryName = "Russia";
        }
    }
    if(countryName == "Armenia" || countryName == "Azerbaijan" ||
        countryName == "Russia" || countryName == "Belarus" ||
        countryName == "Georgia" ||
        countryName == "Kazakhstan" || countryName == "Kyrgyzstan" ||
        countryName == "Tajikistan" ||
        countryName == "Turkmenistan" || countryName == "Ukraine" ||
        countryName == "Uzbekistan") {
        if(countryYear > 1919 && countryYear < 1945) {
            countryName = "Russia";
        }
    }
    if(countryName == "Armenia" || countryName == "Azerbaijan" ||
        countryName == "Russia" || countryName == "Belarus" ||
        countryName == "Estonia" || countryName == "Georgia" ||
        countryName == "Kazakhstan" || countryName == "Kyrgyzstan" ||
        countryName == "Latvia" || countryName == "Lithuania" ||
        countryName == "Moldova" || countryName == "Tajikistan" ||
        countryName == "Turkmenistan" || countryName == "Ukraine" ||
        countryName == "Uzbekistan") {
        if(countryYear > 1945 && countryYear < 1990) {
            countryName = "Russia";
        }
    }
    if(countryName == "BosniaandHerzegovina" || countryName == "Croatia" ||
        countryName == "Macedonia" || countryName == "Montenegro" ||
        countryName == "SerbiaandMontenegro" || countryName == "Serbia" ||
        countryName == "Slovenia") {
        if(countryYear > 1919 && countryYear < 1992) {
            countryName = "Yugoslavia";
        }
    }
    if(countryName == "China" || countryName == "Taiwan" || countryName == "Chinese Taipei" || countryName == "ChineseTaipei") {
        if(countryYear > 1895 && countryYear < 1952) {
            countryName = "China";
        }
    }
    if(countryName == "CzechRepublic" || countryName == "CzechRep.") {
        if(countryYear > 1895 && countryYear < 1915) {
            countryName = "Bohemia";
        }
    }
    if(countryName == "CzechRepublic" || countryName == "CzechRep." || countryName == "Slovakia" || countryName == "SlovakRep.") {
        if(countryYear > 1915 && countryYear < 1996) {
            countryName = "Czechoslovakia";
        }
    }
    return countryName;
};

function addData(data, olympicYear, country_arr) {
    for(var i = 0; i < country_arr.length; i++) {
        data[olympicYear][country_arr[i]] = {};
        data[olympicYear][country_arr[i]]["Bronze"] = 0;
        data[olympicYear][country_arr[i]]["Silver"] = 0;
        data[olympicYear][country_arr[i]]["Gold"] = 0;
        data[olympicYear][country_arr[i]]["Total"] = 0;
        data[olympicYear][country_arr[i]]["Country"] = country_arr[i]
    }
}

function dataExceptions(data) {

    data["1908 Summer Olympics"]["Australia"] = {};
    data["1908 Summer Olympics"]["Australia"]["Bronze"] = 2;
    data["1908 Summer Olympics"]["Australia"]["Silver"] = 2;
    data["1908 Summer Olympics"]["Australia"]["Gold"] = 1;
    data["1908 Summer Olympics"]["Australia"]["Total"] = 5;


    data["1912 Summer Olympics"]["Australia"] = {};
    data["1912 Summer Olympics"]["Australia"]["Bronze"] = 3;
    data["1912 Summer Olympics"]["Australia"]["Silver"] = 2;
    data["1912 Summer Olympics"]["Australia"]["Gold"] = 2;
    data["1912 Summer Olympics"]["Australia"]["Total"] = 7;


    data["1948 Summer Olympics"]["Trinidad and Tobago"] = {};
    data["1948 Summer Olympics"]["Trinidad and Tobago"]["Bronze"] = 0;
    data["1948 Summer Olympics"]["Trinidad and Tobago"]["Silver"] = 1;
    data["1948 Summer Olympics"]["Trinidad and Tobago"]["Gold"] = 0;
    data["1948 Summer Olympics"]["Trinidad and Tobago"]["Total"] = 0;

    data["1952 Summer Olympics"]["Trinidad and Tobago"] = {};
    data["1952 Summer Olympics"]["Trinidad and Tobago"]["Bronze"] = 2;
    data["1952 Summer Olympics"]["Trinidad and Tobago"]["Silver"] = 0;
    data["1952 Summer Olympics"]["Trinidad and Tobago"]["Gold"] = 0;
    data["1952 Summer Olympics"]["Trinidad and Tobago"]["Total"] = 0;

    country_arr = ["Bulgaria", "Chile", "China", "Chinese Taipei", "Estonia", "Italy", "Sweden"];

    addData(data, "1896 Summer Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Azerbaijan", "Belarus", "China",
"Chinese Taipei", "Czech Republic", "Estonia", "Georgia",
"Greece", "India", "Kazakhstan", "Kyrgyzstan", "Latvia", "Lithuania",
"Moldova", "Romania", "Russia", "SlovakRepublic", "Tajikistan", "Turkmenistan",
"Ukraine", "Uzbekistan"];

    addData(data, "1900 Summer Olympics", country_arr);

    country_arr = ["Australia", "Czech Republic", "France",
"SlovakRepublic", "SouthAfrica"];

    addData(data, "1904 Summer Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Azerbaijan", "Belarus",
"Czech Republic", "Estonia", "Georgia", "Kazakhstan",
"Kyrgyzstan", "Latvia", "Lithuania", "Moldova", "NewZealand",
"SlovakRepublic", "Switzerland", "Tajikistan", "Turkey", "Turkmenistan",
"Ukraine", "Uzbekistan"];

    addData(data, "1908 Summer Olympics", country_arr);

    country_arr = ["Armenia", "Azerbaijan", "Belarus", "Chile", "Czech Republic",
"Bohemia", "Egypt", "Estonia", "Georgia", "Iceland", "Japan",
"Kazakhstan", "Kyrgyzstan", "Latvia", "Lithuania", "Luxembourg", "Moldova",
"NewZealand", "Portugal", "Serbia", "SlovakRepublic", "Tajikistan", "Turkey",
"Turkmenistan", "Ukraine", "Uzbekistan"];

    addData(data, "1912 Summer Olympics", country_arr);

    country_arr = ["Argentina", "Austria", "Bosnia and Herzegovina",
"Bulgaria", "Chile", "Croatia", "Cuba", "Bohemia", "Egypt",
 "Hungary", "India", "Ireland", "Macedonia",
"Mexico", "Montenegro", "Philippines", "Poland",
"Portugal", "Serbia", "Serbia and Montenegro", "Slovenia", "Turkey",
"Uruguay"];

    addData(data, "1920 Summer Olympics", country_arr);

    country_arr = ["Bosnia and Herzegovina", "Bulgaria", "Chile",
 "Croatia", "Cuba", "Ecuador", "Egypt", "Germany",
 "India", "Macedonia", "Malta", "Mexico", "Montenegro", "Panama",
 "Philippines", "Serbia", "Serbia and Montenegro", "Slovenia", "Spain",
 "Turkey"];

    addData(data, "1924 Summer Olympics", country_arr);

    country_arr = ["Bosnia and Herzegovina", "Brazil", "Colombia", "Croatia",
"Czech Republic", "Greece", "India", "Macedonia", "Mexico", "Montenegro",
"Romania", "Serbia", "Serbia and Montenegro", "SlovakRepublic", "Slovenia"];

    addData(data, "1928 Summer Olympics", country_arr);

    country_arr = ["Bolivia", "Bosnia and Herzegovina", "Brazil", "Bulgaria",
"Chile", "China", "Colombia", "Costa Rica", "Croatia", "Czech Republic", "Egypt",
  "Greece", "Haiti", "India", "Luxembourg", "Macedonia", "Malta", "Montenegro",
  "Norway", "Peru", "Portugal", "Serbia", "Serbia and Montenegro", "SlovakRepublic",
  "Slovenia", "Turkey"];

    addData(data, "1932 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Bosnia and Herzegovina", "Brazil", "Chile", "China",
 "Colombia", "Croatia", "Czech Republic", "Greece", "Guyana", "Iceland", "India", "Iran",
 "Iraq", "Ireland", "Luxembourg", "Macedonia", "Malta", "Montenegro", "Panama", "Peru",
 "Puerto Rico", "Serbia", "Serbia and Montenegro", "SlovakRepublic", "Slovenia",
 "Sri Lanka", "Syria", "Uruguay", "Zimbabwe"]

    addData(data, "1936 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Bosnia and Herzegovina", "Croatia", "Czech Republic",
 "Germany", "Iceland", "Lebanon", "Macedonia", "Montenegro", "Myanmar", "Pakistan",
 "Serbia", "Serbia and Montenegro", "SlovakRepublic", "Slovenia", "Venezuela"]

    addData(data, "1948 Summer Olympics", country_arr);

    country_arr = ["Armenia", "Azerbaijan", "Bahamas", "Belarus",
"Bosnia and Herzegovina", "China", "Croatia", "Cuba", "Czech Republic", "Estonia",
 "Georgia", "Ghana", "Greece", "Guatemala", "Guyana", "HongKong", "Iceland",
 "Indonesia", "Israel", "Kazakhstan", "Kyrgyzstan", "Latvia", "Lithuania",
 "Macedonia", "Moldova", "Montenegro", "Myanmar", "Nigeria", "Pakistan", "Panama",
 "Philippines", "Puerto Rico", "Serbia", "Serbia and Montenegro", "SlovakRepublic",
 "Slovenia", "Sri Lanka", "Tajikistan", "Thailand", "Turkmenistan", "Ukraine",
 "Uzbekistan", "Vietnam"]

    addData(data, "1952 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Armenia", "Azerbaijan", "Belarus",
"Bosnia and Herzegovina", "Cambodia", "Chinese Taipei", "Colombia", "Croatia",
"Cuba", "Czech Republic", "Egypt", "Estonia", "Ethiopia", "Fiji", "Georgia",
"Guyana", "HongKong", "Indonesia", "Israel", "Jamaica", "Kazakhstan", "Kenya",
"Kyrgyzstan", "Latvia", "Liberia", "Lithuania", "Luxembourg", "Macedonia", "Malaysia",
"Moldova", "Montenegro", "Myanmar", "Netherlands", "Nigeria", "Peru", "Philippines",
"Portugal", "Puerto Rico", "Serbia", "Serbia and Montenegro", "SlovakRepublic",
"Slovenia", "Spain", "Sri Lanka", "Tajikistan", "Thailand", "Trinidad and Tobago",
"Turkmenistan", "Uganda", "Ukraine", "Uzbekistan", "Venezuela", "Vietnam"]

    addData(data, "1956 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Bahamas", "Chile", "Chinese Taipei",
"Colombia", "Cuba", "Fiji", "Haiti", "HongKong", "Iceland", "Indonesia", "Ireland",
"Israel", "Kenya", "SouthKorea", "Lebanon", "Liberia", "Luxembourg",
"Malaysia", "Malta", "Panama", "Peru", "Philippines", "Puerto Rico", "Sudan",
"Thailand", "Tunisia", "Uganda", "Uruguay", "Vietnam"];

    addData(data, "1960 Summer Olympics", country_arr);

    country_arr = ["Armenia", "Azerbaijan", "Belarus", "Bosnia and Herzegovina",
"Croatia", "Czech Republic", "Estonia", "Georgia", "Guyana", "Jamaica",
"Kazakhstan", "Kyrgyzstan", "Latvia", "Lithuania", "Macedonia", "Moldova", "Montenegro",
"Myanmar", "Nigeria", "Serbia", "Serbia and Montenegro", "SlovakRepublic",
"Slovenia", "Sri Lanka", "Tajikistan", "Trinidad and Tobago", "Turkmenistan", "Ukraine",
"Uzbekistan", "Zimbabwe"];

    addData(data, "1964 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Algeria", "Armenia", "Azerbaijan", "Bahamas", "Barbados",
 "Belarus", "Belize", "Bolivia", "Bosnia and Herzegovina", "Central African Republic",
 "Chad", "Chile", "Chinese Taipei", "Colombia", "Congo", "Costa Rica", "Cote D'Ivoire",
 "Croatia", "Czech Republic", "DominicanRepublic", "Ecuador", "Egypt", "El Salvador",
 "Estonia", "Fiji", "Georgia", "Ghana", "Guatemala", "Guinea", "Guyana", "Honduras",
 "HongKong", "Iceland", "Indonesia", "Iraq", "Ireland", "Israel", "Kazakhstan", "Kuwait",
 "Kyrgyzstan", "Latvia", "Lebanon", "Libya", "Lithuania", "Luxembourg", "Macedonia",
 "Madagascar", "Malaysia", "Mali", "Malta", "Moldova", "Montenegro", "Morocco", "Myanmar",
 "Nicaragua", "Niger", "Nigeria", "Panama", "Paraguay", "Peru", "Philippines", "Portugal",
 "Puerto Rico", "Senegal", "Serbia", "Serbia and Montenegro", "Sierra Leone",
 "SlovakRepublic", "Slovenia", "Spain", "Sri Lanka", "Sudan", "Suriname", "Syria",
 "Tajikistan", "Tanzania", "Thailand", "Trinidad and Tobago", "Turkmenistan", "Ukraine",
 "Uruguay", "Uzbekistan", "Vietnam", "Virgin Islands", "Zambia"];

    addData(data, "1968 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Albania", "Algeria", "Armenia", "Azerbaijan", "Bahamas",
 "Barbados", "Belarus", "Belize", "Benin", "Bolivia", "Bosnia and Herzegovina",
 "BurkinaFaso", "Cambodia", "Cameroon", "Chad", "Chile", "Chinese Taipei", "Congo",
 "Costa Rica", "Cote D'Ivoire", "Croatia", "Czech Republic", "DominicanRepublic",
 "Ecuador", "Egypt", "El Salvador", "Estonia", "Fiji", "Gabon", "Georgia", "Guatemala",
 "Guyana", "Haiti", "HongKong", "Iceland", "Indonesia", "Ireland", "Israel", "Kazakhstan",
 "Kuwait", "Kyrgyzstan", "Latvia", "Lesotho", "Liberia", "Lithuania", "Luxembourg",
 "Macedonia", "Madagascar", "Malawi", "Malaysia", "Mali", "Malta", "Moldova", "Montenegro",
 "Morocco", "Myanmar", "Nepal", "Nicaragua", "Panama", "Paraguay", "Peru", "Philippines",
 "Portugal", "Puerto Rico", "Saudi Arabia", "Senegal", "Serbia", "Serbia and Montenegro",
 "SlovakRepublic", "Slovenia", "Somalia", "Sri Lanka", "Sudan", "Suriname", "Swaziland",
 "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago", "Turkmenistan",
 "Ukraine", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands", "Zambia"];

    addData(data, "1972 Summer Olympics", country_arr);

    country_arr = ["Antigua and Barbuda", "Argentina", "Armenia", "Azerbaijan", "Bahamas",
"Barbados", "Belarus", "Belize", "Bolivia", "Bosnia and Herzegovina", "Cameroon",
"Cayman Islands", "Chile", "Colombia", "Costa Rica", "Cote D'Ivoire", "Croatia",
"DominicanRepublic", "Ecuador", "Egypt", "Estonia", "Fiji", "Georgia", "Greece",
"Guatemala", "Haiti", "Honduras", "HongKong", "Iceland", "India", "Indonesia", "Ireland",
"Israel", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania",
"Luxembourg", "Macedonia", "Malaysia", "Moldova", "Montenegro", "Morocco", "Nepal",
"Nicaragua", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Saudi Arabia",
 "Senegal", "Serbia", "Serbia and Montenegro", "Slovenia", "Suriname", "Tajikistan",
 "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Ukraine", "Uruguay", "Uzbekistan",
 "Virgin Islands"];

    addData(data, "1976 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Algeria", "Angola", "Armenia", "Azerbaijan", "Belarus",
"Benin", "Bosnia and Herzegovina", "Botswana", "Cameroon", "Colombia", "Congo", "Costa Rica",
 "Croatia", "Cyprus", "DominicanRepublic", "Ecuador", "Estonia", "Georgia", "Guatemala", "Guinea",
 "Iceland", "Iraq", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lesotho",
 "Libya", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Mali", "Malta", "Moldova",
 "Montenegro", "Mozambique", "Myanmar", "Nepal", "NewZealand", "Nicaragua", "Nigeria", "Peru",
 "Portugal", "Puerto Rico", "Senegal", "Serbia", "Serbia and Montenegro", "Sierra Leone",
 "Slovenia", "Sri Lanka", "Syria", "Tajikistan", "Trinidad and Tobago", "Turkmenistan", "Ukraine",
 "Uzbekistan", "Vietnam", "Zambia"];

    addData(data, "1980 Summer Olympics", country_arr);

    country_arr = ["Antigua and Barbuda", "Argentina", "Bahamas", "Bahrain", "Bangladesh",
"Barbados", "Belize", "Benin", "Bhutan", "Bolivia", "Botswana", "British Virgin Islands",
"Cayman Islands", "Central African Republic", "Chad", "Chile", "Chinese Taipei", "Congo",
"Democratic Republic of the Congo", "Costa Rica", "Cote D'Ivoire", "Cyprus", "Djibouti",
"Ecuador", "El Salvador", "Equatorial Guinea", "Fiji", "Gabon", "Gambia", "Ghana", "Grenada",
"Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "HongKong", "India", "Indonesia",
"Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Lesotho", "Liberia", "Luxembourg",
"Madagascar", "Malawi", "Malaysia", "Mali", "Malta", "Mauritania", "Mauritius", "Mozambique",
"Myanmar", "Nepal", "Nicaragua", "Niger", "Oman", "Panama", "Papua New Guinea", "Paraguay",
"Philippines", "Qatar", "Rwanda", "Samoa", "Saudi Arabia", "Senegal", "Sierra Leone",
"Solomon Islands", "Somalia", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Tanzania",
"Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Uganda", "United Arab Emirates", "Uruguay",
"Virgin Islands", "Yemen", "Zimbabwe"];

    addData(data, "1984 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Algeria", "American Samoa", "Angola", "Antigua and Barbuda",
 "Armenia", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
 "Belize", "Benin", "Bhutan", "Bolivia", "Botswana", "British Virgin Islands", "BurkinaFaso",
 "Cameroon", "Cayman Islands", "Central African Republic", "Chad", "Chinese Taipei", "Congo",
 "Democratic Republic of the Congo", "Cook Islands", "Cote D'Ivoire", "Cyprus", "DominicanRepublic",
 "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Fiji", "Gabon", "Gambia",
 "Georgia", "Ghana", "Grenada", "Guam", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras",
 "HongKong", "Iceland", "India", "Iraq", "Ireland", "Israel", "Jordan", "Kazakhstan", "Kuwait",
 "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania",
 "Luxembourg", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius",
 "Moldova", "Mozambique", "Myanmar", "Nepal", "Niger", "Nigeria", "Oman", "Panama",
 "Papua New Guinea", "Paraguay", "Puerto Rico", "Qatar", "Rwanda", "Saint Vincent and the Grenadines",
 "Samoa", "Saudi Arabia", "Sierra Leone", "Solomon Islands", "Somalia", "Sri Lanka", "Sudan",
 "Swaziland", "Syria", "Tajikistan", "Tanzania", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
 "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "Uruguay", "Uzbekistan", "Vanuatu",
 "Venezuela", "Vietnam", "Virgin Islands", "Yemen", "Zambia", "Zimbabwe"];

    addData(data, "1988 Summer Olympics", country_arr);

    country_arr = ["Albania", "American Samoa", "Angola", "Antigua and Barbuda", "Armenia",
"Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belize", "Benin", "Bhutan",
"Bolivia", "Bosnia and Herzegovina", "Botswana", "British Virgin Islands", "BurkinaFaso",
"Cameroon", "Cayman Islands", "Central African Republic", "Chad", "Chile", "Chinese Taipei",
"Congo", "Democratic Republic of the Congo", "Cook Islands", "Costa Rica", "Cote D'Ivoire",
"Cyprus", "Djibouti", "DominicanRepublic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
"Fiji", "Gabon", "Gambia", "Georgia", "Grenada", "Guam", "Guatemala", "Guinea", "Guyana",
"Haiti", "Honduras", "HongKong", "Iceland", "India", "Iraq", "Jordan", "Kazakhstan", "Kuwait",
"Kyrgyzstan", "Laos", "Lebanon", "Lesotho", "Libya", "Luxembourg", "Madagascar", "Malawi",
"Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Moldova", "Mozambique", "Myanmar",
"Nepal", "Nicaragua", "Niger", "Oman", "Panama", "Papua New Guinea", "Paraguay", "Portugal",
"Rwanda", "Saint Vincent and the Grenadines", "Samoa", "Saudi Arabia", "Senegal", "Sierra Leone",
  "Solomon Islands", "Sri Lanka", "Sudan", "Swaziland", "Syria", "Tajikistan", "Tanzania",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkmenistan", "Uganda", "Ukraine",
  "United Arab Emirates", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands",
  "Yemen", "Zambia", "Zimbabwe"];

    addData(data, "1992 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Albania", "American Samoa", "Angola", "Antigua and Barbuda",
   "Bahrain", "Bangladesh", "Barbados", "Belize", "Benin", "Bhutan", "Bolivia",
   "Bosnia and Herzegovina", "Botswana", "British Virgin Islands", "Brunei", "BurkinaFaso",
   "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad",
   "Chile", "Chinese Taipei", "Colombia", "Comoros", "Congo", "Democratic Republic of the Congo",
   "Cook Islands", "Cote D'Ivoire", "Cyprus", "Djibouti", "Dominica", "DominicanRepublic", "Egypt",
   "El Salvador", "Equatorial Guinea", "Estonia", "Fiji", "Gabon", "Gambia", "Ghana", "Grenada",
   "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Iceland",
   "Iraq", "Jordan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Lesotho", "Liberia", "Libya",
   "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Maldives", "Mali", "Malta", "Mauritania",
   "Mauritius", "Myanmar", "Nauru", "Nepal", "Nicaragua", "Niger", "Oman", "Pakistan",
   "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Qatar", "Rwanda",
   "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
   "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Sierra Leone", "Solomon Islands",
   "Somalia", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Tajikistan", "Tanzania", "Togo",
   "Trinidad and Tobago", "Turkmenistan", "United Arab Emirates", "Uruguay", "Vanuatu", "Venezuela",
   "Vietnam", "Virgin Islands", "Yemen", "Zimbabwe"];

    addData(data, "1996 Summer Olympics", country_arr);

    country_arr = ["Albania", "American Samoa", "Angola", "Antigua and Barbuda", "Bahrain",
"Bangladesh", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
"British Virgin Islands", "Brunei", "BurkinaFaso", "Burundi", "Cambodia", "Cape Verde",
"Cayman Islands", "Central African Republic", "Chad", "Chinese Taipei", "Comoros", "Congo",
"Democratic Republic of the Congo", "Cook Islands", "Cote D'Ivoire", "Cyprus", "Djibouti",
"Dominica", "DominicanRepublic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
"Eritrea", "Fiji", "Gabon", "Gambia", "Ghana", "Grenada", "Guam", "Guatemala", "Guinea",
"Guinea-Bissau", "Guyana", "Haiti", "Honduras", "HongKong", "Iraq", "Jordan", "Laos", "Lebanon",
"Lesotho", "Liberia", "Libya", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
"Mali", "Malta", "Mauritania", "Mauritius", "Federated States of Micronesia", "Mongolia",
"Myanmar", "Namibia", "Nauru", "Nepal", "Nicaragua", "Niger", "Oman", "Pakistan", "Palestine",
"Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Puerto Rico", "Rwanda",
"Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
"Senegal", "Serbia and Montenegro", "Sierra Leone", "Solomon Islands", "Somalia",
"Sudan", "Suriname", "Swaziland", "Syria", "Tajikistan", "Tanzania", "Togo", "Tonga",
"Trinidad and Tobago", "Tunisia", "Turkmenistan", "Uganda", "United Arab Emirates",
"Vanuatu", "Venezuela", "Virgin Islands", "Yemen", "Zambia", "Zimbabwe"];

    addData(data, "2000 Summer Olympics", country_arr);

    country_arr = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Angola",
"Antigua and Barbuda", "Armenia", "Bahrain", "Bangladesh", "Barbados", "Belize",
"Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "British Virgin Islands",
 "Brunei", "BurkinaFaso", "Burundi", "Cambodia", "Cape Verde", "Cayman Islands",
 "Central African Republic", "Chad", "Chinese Taipei", "Comoros", "Congo",
 "Democratic Republic of the Congo", "Cook Islands", "Costa Rica", "Cote D'Ivoire",
 "Cyprus", "Dominica", "Ecuador", "El Salvador", "Equatorial Guinea", "Fiji", "Gabon",
 "Gambia", "Ghana", "Grenada", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
 "Haiti", "Honduras", "Iceland", "Iraq", "Ireland", "Jordan", "Kiribati", "Kuwait",
 "Kyrgyzstan", "Laos", "Lebanon", "Lesotho", "Liberia", "Libya", "Luxembourg", "Macedonia",
 "Madagascar", "Malawi", "Malaysia", "NorthBorneo", "Maldives", "Mali", "Malta",
 "Mauritania", "Mauritius", "Federated States of Micronesia", "Moldova", "Mozambique",
 "Myanmar", "Namibia", "Nauru", "Nepal", "Nicaragua", "Niger", "Oman", "Pakistan",
 "Palestine", "Panama", "Papua New Guinea", "Peru", "Philippines", "Puerto Rico", "Qatar",
 "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
 "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro",
 "Sierra Leone", "Solomon Islands", "Somalia", "Sri Lanka", "Sudan", "Suriname", "Swaziland",
 "Tajikistan", "Tanzania", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
 "Turkmenistan", "Uganda", "Uruguay", "Vanuatu", "Vietnam", "Virgin Islands", "Yemen", "Zambia"]

    addData(data, "2004 Summer Olympics", country_arr);

    country_arr = ["Tanzania", "Peru", "Albania", "American Samoa", "Angola", "Antigua and Barbuda",
"Bangladesh", "Barbados", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
"Botswana", "British Virgin Islands", "Burundi", "Cambodia", "Cape Verde", "Cayman Islands",
 "Central African Republic", "Chad", "Chinese Taipei", "Comoros", "Congo",
 "Democratic Republic of the Congo", "Cook Islands", "Costa Rica", "Cote D'Ivoire",
 "Cyprus", "Djibouti", "Dominica", "El Salvador", "Equatorial Guinea", "Eritrea", "Fiji",
 "Gabon", "Gambia", "Ghana", "Grenada", "Guam", "Guatemala", "Guinea", "Guinea-Bissau",
 "Guyana", "Haiti", "Honduras", "HongKong", "Iceland", "Iran", "Iraq", "Jordan", "Kiribati",
 "Kuwait", "Laos", "Lebanon", "Lesotho", "Liberia", "Libya", "Luxembourg", "Macedonia",
 "Madagascar", "Malawi", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
 "Federated States of Micronesia", "Montenegro", "Mozambique", "Myanmar", "Namibia",
 "Nauru", "Nepal", "Nicaragua", "Niger", "Oman", "Pakistan", "Palestine", "Papua New Guinea",
 "Paraguay", "Peru", "Philippines", "Puerto Rico", "Qatar", "Rwanda", "Saint Kitts and Nevis",
 "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "Sao Tome and Principe",
 "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Sierra Leone", "Solomon Islands",
 "Somalia", "Sri Lanka", "Suriname", "Swaziland", "Syria", "Tanzania", "Timor-Leste", "Tonga",
 "Trinidad and Tobago", "Turkmenistan", "Tuvalu", "Uganda", "United Arab Emirates", "Uruguay",
 "Vanuatu", "Virgin Islands", "Yemen", "Zambia"];

    addData(data, "2008 Summer Olympics", country_arr);

    country_arr = ["Czechoslovakia", "Bosnia and Herzegovina", "Croatia", "Czech Republic",
"Hungary", "Italy", "SouthKorea", "Latvia", "Macedonia", "Montenegro", "Poland", "Serbia",
"Slovakia", "Slovenia"];

    addData(data, "1924 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Bosnia and Herzegovina", "Croatia", "Czech Republic",
"Estonia", "Hungary", "Italy", "Japan", "Latvia", "Lithuania", "Luxembourg", "Macedonia",
"Mexico", "Moldova", "Montenegro", "Netherlands", "Poland", "Romania", "Serbia", "Slovakia",
"Slovenia"];

    addData(data, "1928 Winter Olympics", country_arr);

    country_arr = ["Czechoslovakia", "Belgium", "Czech Republic", "UnitedKingdom", "Italy",
"Japan", "Moldova", "Poland", "Romania", "Slovakia"];

    addData(data, "1932 Winter Olympics", country_arr);

    country_arr = ["Czechoslovakia", "Australia", "Belgium", "Bosnia and Herzegovina",
"Bulgaria", "Croatia", "Czech Republic", "Estonia", "Greece", "Italy", "Japan", "Latvia",
"Luxembourg", "Macedonia", "Moldova", "Montenegro", "Netherlands", "Poland", "Romania",
"Serbia", "Slovakia", "Slovenia", "Spain", "Turkey"];

    addData(data, "1936 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Bolivia", "Bosnia and Herzegovina", "Bulgaria", "Chile",
"Croatia", "Czech Republic", "Denmark", "Greece", "Iceland", "Lebanon", "Macedonia",
"Montenegro", "Netherlands", "Poland", "Romania", "Serbia", "Slovakia", "Slovenia",
"Spain", "Turkey"];

    addData(data, "1948 Winter Olympics", country_arr);

    country_arr = ["Czechoslovakia", "Argentina", "Australia", "Belgium", "Bosnia and Herzegovina",
 "Bulgaria", "Chile", "Croatia", "Czech Republic", "Denmark", "Greece", "Iceland", "Japan",
 "Lebanon", "Macedonia", "Montenegro", "NewZealand", "Poland", "Portugal", "Romania", "Serbia",
 "Slovakia", "Slovenia", "Spain"];

    addData(data, "1952 Winter Olympics", country_arr);

    country_arr = ["Czechoslovakia", "Armenia", "Australia", "Azerbaijan", "Belarus", "Belgium",
"Bosnia and Herzegovina", "Bulgaria", "Chile", "Croatia", "Czech Republic", "France", "Georgia",
 "UnitedKingdom", "Greece", "Iceland", "Iran", "Kazakhstan", "SouthKorea", "Kyrgyzstan", "Latvia",
 "Lebanon", "Lithuania", "Macedonia", "Moldova", "Montenegro", "Netherlands", "Romania", "Serbia",
 "Slovakia", "Slovenia", "Spain", "Tajikistan", "Turkey", "Ukraine", "Uzbekistan"];

    addData(data, "1956 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus", "Bulgaria",
"Chile", "Czech Republic", "Denmark", "Georgia", "UnitedKingdom", "Hungary", "Iceland",
"Japan", "Kazakhstan", "SouthKorea", "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania",
"Moldova", "NewZealand", "Slovakia", "SouthAfrica", "Spain", "Tajikistan", "Turkey",
"Ukraine", "Uzbekistan"];

    addData(data, "1960 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus", "Belgium",
 "Bosnia and Herzegovina", "Bulgaria", "Chile", "Croatia", "Czech Republic", "Denmark",
 "Georgia", "Greece", "Hungary", "Iceland", "India", "Iran", "Japan", "Kazakhstan",
 "SouthKorea", "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania", "Macedonia", "Moldova",
 "Mongolia", "Montenegro", "Poland", "Romania", "Serbia", "Slovakia", "Slovenia", "Spain",
 "Switzerland", "Tajikistan", "Turkey", "Ukraine", "Uzbekistan"];

    addData(data, "1964 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus",
"Bosnia and Herzegovina", "Bulgaria", "Chile", "Croatia", "Czech Republic", "Denmark",
"Georgia", "UnitedKingdom", "Greece", "Hungary", "Iceland", "India", "Iran", "Japan",
"Kazakhstan", "SouthKorea", "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania", "Macedonia",
 "Moldova", "Mongolia", "Montenegro", "Morocco", "NewZealand", "Poland", "Serbia", "Slovakia",
 "Slovenia", "Spain", "Tajikistan", "Turkey", "Ukraine", "Uzbekistan"];

    addData(data, "1968 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus", "Belgium",
"Bolivia", "Bosnia and Herzegovina", "Bulgaria", "Chinese Taipei", "Croatia", "Czech Republic",
"Georgia", "UnitedKingdom", "Greece", "Hungary", "Iran", "Kazakhstan", "NorthKorea", "SouthKorea",
 "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania", "Macedonia", "Moldova", "Mongolia",
 "Montenegro", "NewZealand", "Philippines", "Romania", "Serbia", "Slovakia", "Slovenia",
 "Tajikistan", "Ukraine", "Uzbekistan"];

    addData(data, "1972 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus", "Belgium",
"Bolivia", "Bosnia and Herzegovina", "Bulgaria", "Chile", "Chinese Taipei", "Croatia",
"Czech Republic", "Georgia", "Greece", "Hungary", "Iceland", "Iran", "Japan", "Kazakhstan",
"SouthKorea", "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania", "Macedonia", "Moldova",
"Montenegro", "NewZealand", "Poland", "Romania", "Serbia", "Slovakia", "Slovenia", "Spain",
"Tajikistan", "Turkey", "Ukraine", "Uzbekistan"];

    addData(data, "1976 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus", "Belgium",
 "Bolivia", "Bosnia and Herzegovina", "China", "Costa Rica", "Croatia", "Cyprus",
 "Czech Republic", "Georgia", "Greece", "Iceland", "Kazakhstan", "SouthKorea", "Kyrgyzstan",
 "Latvia", "Lebanon", "Lithuania", "Macedonia", "Moldova", "Mongolia", "Montenegro",
 "NewZealand", "Poland", "Romania", "Serbia", "Slovakia", "Slovenia", "Spain", "Tajikistan",
 "Ukraine", "Uzbekistan"];

    addData(data, "1980 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus", "Belgium",
  "Bolivia", "Bosnia and Herzegovina", "British Virgin Islands", "Bulgaria", "Chile",
  "China", "Chinese Taipei", "Costa Rica", "Croatia", "Cyprus", "Czech Republic", "Egypt",
  "Georgia", "Greece", "Hungary", "Iceland", "Kazakhstan", "NorthKorea", "SouthKorea",
  "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania", "Macedonia", "Mexico", "Moldova",
  "Mongolia", "Montenegro", "Morocco", "Netherlands", "NewZealand", "Poland", "Puerto Rico",
  "Romania", "Senegal", "Serbia", "Slovakia", "Slovenia", "Spain", "Tajikistan", "Turkey",
  "Ukraine", "Uzbekistan"];

    addData(data, "1984 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus", "Belgium",
 "Bosnia and Herzegovina", "Bulgaria", "Chile", "China", "Chinese Taipei", "Costa Rica",
 "Croatia", "Cyprus", "Czech Republic", "Denmark", "Fiji", "Georgia", "UnitedKingdom", "Greece",
 "Guam", "Guatemala", "Hungary", "Iceland", "India", "Jamaica", "Kazakhstan", "NorthKorea",
 "SouthKorea", "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania", "Luxembourg", "Macedonia",
 "Mexico", "Moldova", "Mongolia", "Montenegro", "Morocco", "NewZealand", "Philippines",
 "Poland", "Portugal", "Puerto Rico", "Romania", "Serbia", "Slovakia", "Slovenia", "Spain",
 "Tajikistan", "Turkey", "Ukraine", "Uzbekistan", "Virgin Islands"];

    addData(data, "1988 Winter Olympics", country_arr);

    country_arr = ["Algeria", "Argentina", "Armenia", "Australia", "Azerbaijan", "Belarus",
"Belgium", "Bosnia and Herzegovina", "Brazil", "Bulgaria", "Chile", "Chinese Taipei",
"Costa Rica", "Croatia", "Cyprus", "Denmark", "Estonia", "Georgia", "UnitedKingdom", "Greece",
 "Honduras", "Hungary", "Iceland", "India", "Ireland", "Jamaica", "Kazakhstan", "Kyrgyzstan",
 "Latvia", "Lebanon", "Lithuania", "Macedonia", "Mexico", "Moldova", "Mongolia", "Montenegro",
 "Morocco", "Philippines", "Poland", "Puerto Rico", "Romania", "Senegal", "Serbia", "Slovakia",
 "Slovenia", "Swaziland", "Tajikistan", "Turkey", "Ukraine", "Uzbekistan", "Virgin Islands"];

    addData(data, "1992 Winter Olympics", country_arr);

    country_arr = ["American Samoa", "Argentina", "Armenia", "Belgium", "Brazil", "Bulgaria",
 "Chile", "Chinese Taipei", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Fiji",
 "Georgia", "Greece", "Hungary", "Iceland", "Israel", "Jamaica", "Kyrgyzstan", "Latvia",
 "Lithuania", "Luxembourg", "Mexico", "Moldova", "Mongolia", "NewZealand", "Poland",
 "Portugal", "Puerto Rico", "Romania", "Senegal", "Slovakia", "SouthAfrica", "Spain",
 "Trinidad and Tobago", "Turkey", "Virgin Islands"];

    addData(data, "1994 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Azerbaijan", "Brazil", "Chile", "Chinese Taipei",
 "Croatia", "Cyprus", "Estonia", "Georgia", "Greece", "Hungary", "Iceland", "India", "Iran",
 "Ireland", "Israel", "Jamaica", "Kenya", "NorthKorea", "Kyrgyzstan", "Latvia", "Lithuania",
 "Luxembourg", "Macedonia", "Moldova", "Mongolia", "NewZealand", "Poland", "Portugal",
 "Puerto Rico", "Romania", "Slovakia", "Slovenia", "SouthAfrica", "Spain", "Trinidad and Tobago",
 "Turkey", "Uruguay", "Uzbekistan", "Venezuela", "Virgin Islands"];

    addData(data, "1998 Winter Olympics", country_arr);

    country_arr = ["Argentina", "Armenia", "Azerbaijan", "Belgium", "Brazil", "Cameroon",
"Chile", "Chinese Taipei", "Costa Rica", "Cyprus", "Denmark", "Fiji", "Georgia", "Greece",
"HongKong", "Hungary", "Iceland", "India", "Iran", "Ireland", "Israel", "Jamaica", "Kazakhstan",
 "Kenya", "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania", "Macedonia", "Mexico", "Moldova",
 "Mongolia", "Nepal", "NewZealand", "Puerto Rico", "Romania", "Slovakia", "SouthAfrica", "Spain",
 "Tajikistan", "Thailand", "Trinidad and Tobago", "Turkey", "Ukraine", "Uzbekistan", "Venezuela",
 "Virgin Islands"];

    addData(data, "2002 Winter Olympics", country_arr);

    country_arr = ["Albania", "Algeria", "Argentina", "Armenia", "Azerbaijan", "Belgium",
"Bosnia and Herzegovina", "Brazil", "Chile", "Chinese Taipei", "Costa Rica", "Cyprus",
"Denmark", "Ethiopia", "Georgia", "Greece", "HongKong", "Hungary", "Iceland", "India",
"Iran", "Ireland", "Israel", "Kazakhstan", "Kenya", "NorthKorea", "Kyrgyzstan", "Lebanon",
"Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Moldova", "Mongolia", "Nepal",
"NewZealand", "Portugal", "Romania", "Senegal", "Slovenia", "SouthAfrica", "Spain",
"Tajikistan", "Thailand", "Turkey", "Uzbekistan", "Venezuela", "Virgin Islands"];

    addData(data, "2006 Winter Olympics", country_arr);

    data["1924 Winter Olympics"]["Yugoslavia"] = {};
    data["1924 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1924 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1924 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1924 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1928 Winter Olympics"]["Yugoslavia"] = {};
    data["1928 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1928 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1928 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1928 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1936 Winter Olympics"]["Yugoslavia"] = {};
    data["1936 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1936 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1936 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1936 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1948 Winter Olympics"]["Yugoslavia"] = {};
    data["1948 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1948 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1948 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1948 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1952 Winter Olympics"]["Yugoslavia"] = {};
    data["1952 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1952 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1952 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1952 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1956 Winter Olympics"]["Yugoslavia"] = {};
    data["1956 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1956 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1956 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1956 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1964 Winter Olympics"]["Yugoslavia"] = {};
    data["1964 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1964 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1964 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1964 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1968 Winter Olympics"]["Yugoslavia"] = {};
    data["1968 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1968 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1968 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1968 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1972 Winter Olympics"]["Yugoslavia"] = {};
    data["1972 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1972 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1972 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1972 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1980 Winter Olympics"]["Yugoslavia"] = {};
    data["1980 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1980 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1980 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1980 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1992 Winter Olympics"]["Yugoslavia"] = {};
    data["1992 Winter Olympics"]["Yugoslavia"]["Bronze"] = 0;
    data["1992 Winter Olympics"]["Yugoslavia"]["Silver"] = 0;
    data["1992 Winter Olympics"]["Yugoslavia"]["Gold"] = 0;
    data["1992 Winter Olympics"]["Yugoslavia"]["Total"] = 0;

    data["1980 Summer Olympics"]["Canada"] = {};
    data["1980 Summer Olympics"]["Canada"]["Bronze"] = 0;
    data["1980 Summer Olympics"]["Canada"]["Silver"] = 1;
    data["1980 Summer Olympics"]["Canada"]["Gold"] = 1;
    data["1980 Summer Olympics"]["Canada"]["Total"] = 2;

    delete(data["1896 Summer Olympics"]["Estonia"]);

    return data;
};


function data_arrSort(a, b) {
    if(parseInt(a["Total"]) < parseInt(b["Total"])) {
        return 1;
    }
    if(parseInt(a["Total"]) > parseInt(b["Total"])) {
        return -1;
    }
    return 0;
}

function populationString(population_str) {
    if(typeof population_str != "string") {
        population_str = population_str.toString();
    }
    new_string = "";
    for(var i = 1; i <= population_str.length; i++) {
        new_string = population_str[population_str.length - i] + new_string;
        if(i % 3 == 0 && i != population_str.length) {
            new_string = "," + new_string;
        }
    }
    return new_string
}