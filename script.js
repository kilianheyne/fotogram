// Aufgaben für Fotogram

// 1. Bilder über JavaScript integrieren (siehe Checkliste)
//  1.1. Bilder bei Pixabay heraussuchen
//  1.2. Bilder als Array hinterlegen (hierfür das Terminal nutzen)
//  1.3. Am besten lädt die Bilder-Funktion als onload-Event
// 2. erstellte Bilder mit einem Hover-Effekt versehen 
// 3. Bildern ein Klick-Event verleihen, dass ein Overlay einblendet 
// 4. Bilder in einem Array anordnen, sodass die Pfeile rechts und links genutzt werden können
// 5. Ein Klick außerhalb des Overlays, oder auf einen X-Button schließt das Overlay

const italyVacation = [
    'focaccia-3771454_1280.jpg',
    'hallway-5443115_1280.jpg',
    'hill-side-3826329_1280.jpg',
    'houses-5748983_1280.jpg',
    'island-387826_1280.jpg',
    'lemons-4815496_1280.jpg',
    'napoli-5711208_1280.jpg',
    'pizza-874530_1280.jpg',
    'sign-2325041_1280.jpg',
    'sorrento-2331766_1280.jpg',
    'sorrento-2579576_1280.jpg',
    'window-779552_1280.jpg',
]

function renderPictures(){
    console.log('renderPictures() wurde aufgerufen!')
    let idRef = document.getElementById('pictureContent');
    
    for(index = 0; index < italyVacation.length; index++){
        idRef.innerHTML += getSinglePictures(index);
    }
    console.log(idRef);
}

function getSinglePictures(index){   //HTML und JS immer voneinander "trennen" - mehr Übersichtlichkeit, besser lesbar
    return `<img src="./imgs/${italyVacation[index]}" class="singlePicture">`
}

