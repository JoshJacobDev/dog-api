function formSubmit() {
    $('#js-form').submit(event => {
        event.preventDefault();
        const desiredQuantity = $('#quantity').val();
        retrieveDogPhotos(desiredQuantity);
    })
}

function retrieveDogPhotos(desiredQuantity) {
    const url = `https://dog.ceo/api/breeds/image/random/${desiredQuantity}`;
    
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayDogPhotos(responseJson))
    .catch(error => alert('Error: System forgot how to execute the magic trick.'));
}

function displayDogPhotos(responseJson) {
    console.log(responseJson);

    let listOfImages = responseJson.message;
    let magicTrickProp = listImages(listOfImages);

    $('.results').removeClass('hidden');
    $('.results').html(magicTrickProp);
}

function listImages(listOfImages) {
    let magicTrick = '';
    for(let i = 0; i < listOfImages.length; i++) {
        magicTrick += `
        <img src=${listOfImages[i]}>
        `;
    }
    return magicTrick;
}

$(formSubmit);