function Icon(id){
    switch (id) {
        case "1":
            ChangeIcon(id);
            break;
        case "2":
            ChangeIcon(id);
            break;
        case "3":
            ChangeIcon(id);
            break;
        case "4":
            ChangeIcon(id);
            break;
        case "5":
            ChangeIcon(id);
            break;
        case "6":
            ChangeIcon(id);
            break;
        case "7":
            ChangeIcon(id);
            break;
        case "8":
            ChangeIcon(id);
            break;
        case "9":
            ChangeIcon(id);
            break;
        case "10":
            ChangeIcon(id);
            break;
        case "11":
            ChangeIcon(id);
            break;
        case "12":
            ChangeIcon(id);
            break;
        case "13":
            ChangeIcon(id);
            break;
        case "14":
            ChangeIcon(id);
            break;
        case "15":
            ChangeIcon(id);
            break;
        case "16":
            ChangeIcon(id);
            break;
        case "17":
            ChangeIcon(id);
            break;
        case "18":
            ChangeIcon(id);
            break;
        case "19":
            ChangeIcon(id);
            break;
        case "20":
            ChangeIcon(id);
            break;
        case "21":
            ChangeIcon(id);
            break;
        case "22":
            ChangeIcon(id);
            break;
    }
}

function ChangeIcon(id){

    var ChangeIcon = document.getElementById(id);

    if (ChangeIcon.classList.contains("fa-equals")) {
        ChangeIcon.classList.remove("fa-equals");
        ChangeIcon.classList.add("fa-sort-down");
    } 
    else if (ChangeIcon.classList.contains("fa-sort-down")){
        ChangeIcon.classList.remove("fa-sort-down");
        ChangeIcon.classList.add("fa-caret-up");
    }
    else if (ChangeIcon.classList.contains("fa-caret-up")){
        ChangeIcon.classList.remove("fa-caret-up");
        ChangeIcon.classList.add("fa-equals");
    }

}