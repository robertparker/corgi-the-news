let images = document.getElementsByTagName('img');
corgiImages = [];
rapperImages = [];

for (let k = 0; k < images.length; k++){
  Math.random() > 0.3 ? corgiImages.push(images[k]) : rapperImages.push(images[k])
}


chrome.runtime.sendMessage({msg: 'getCorgiPhotosStatic'}, function(data) {
  let photos = data['data'];
  for(let i = 0; i < corgiImages.length; i++){
    const photoURL = photos[Math.floor(Math.random() * photos.length)]
    corgiImages[i].src = photoURL;
    corgiImages[i]['data-src'] = photoURL;
    corgiImages[i]['data-default-src'] = photoURL;
    corgiImages[i]['srcset'] = photoURL;
  }
});

chrome.runtime.sendMessage({msg: 'getRapperPhotos'}, function(data) {
  let photos = data['data'];
  for(let i = 0; i < rapperImages.length; i++){
    const photoURL = photos[Math.floor(Math.random() * photos.length)]
    rapperImages[i].src = photoURL;
    rapperImages[i]['data-src'] = photoURL;
    rapperImages[i]['data-default-src'] = photoURL;
    rapperImages[i]['srcset'] = photoURL;
  }
});
