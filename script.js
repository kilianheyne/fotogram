let singlePictureRef = document.getElementById('singlePictureContent');

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
];

function renderPictures(){
    let galleryRef = document.getElementById('pictureContent');
    
    for(index = 0; index < italyVacation.length; index++){
        galleryRef.innerHTML += getSinglePictures(index);
    }
}

function getSinglePictures(index){   //HTML und JS immer voneinander "trennen" - mehr Übersichtlichkeit, besser lesbar
    return `<img src="./imgs/${italyVacation[index]}" 
            class="singlePicture" 
            onclick="toggleOverlay(${index})">`
}

function toggleOverlay(index){
    let refOverlay = document.getElementById('overlay');

    refOverlay.style.zIndex = "1";
    refOverlay.classList.remove('d_none');
    refOverlay.classList.add('d_yes');

    singlePictureRef.innerHTML = insertOnePicture(index);

}

function insertOnePicture(index){
    return `<div id="toTheLeft" class="navigationButton" onclick="moveToTheLeft(${index})">&lang;</div>
            <img src="./imgs/${italyVacation[index]}">
            <div id="toTheRight" class="navigationButton" onclick="moveToTheRight(${index})">&rang;</div>`;
}

function insertNextPicture(index){
    singlePictureRef.innerHTML = `<div id="toTheLeft" class="navigationButton" onclick="moveToTheLeft(${index})">&lang;</div>
            <img src="./imgs/${italyVacation[index]}">
            <div id="toTheRight" class="navigationButton" onclick="moveToTheRight(${index})">&rang;</div>`;
}

function insertPreviousPicture(index){
    singlePictureRef.innerHTML = `<div id="toTheLeft" class="navigationButton" onclick="moveToTheLeft(${index})">&lang;</div>
            <img src="./imgs/${italyVacation[index]}">
            <div id="toTheRight" class="navigationButton" onclick="moveToTheRight(${index})">&rang;</div>`;
}

function closeOverlay(){
    let closeRef = document.getElementById('overlay');
    closeRef.style.zIndex = "0";
    closeRef.classList.add('d_none');
    closeRef.classList.remove('d_yes');
}

function moveToTheRight(index){
    
    let rightIndex = index + 1;

    if (rightIndex >= italyVacation.length){
        rightIndex = 0;
    }

    insertNextPicture(rightIndex);
}

function moveToTheLeft(index){
    let leftIndex = index - 1;

    if (leftIndex <= 0){
        leftIndex = 11;
    }

    insertPreviousPicture(leftIndex);
}