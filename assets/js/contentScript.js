let images = document.getElementsByTagName('img');

let pictures = document.getElementsByTagName('picture');

function changeSrc(htmlTag, photoURL){
    htmlTag.src = photoURL;
    htmlTag['data-src'] = photoURL;
    htmlTag['data-default-src'] = photoURL;
    htmlTag['srcset'] = photoURL;
    htmlTag['style'] = `max-height: 100%; background-image: url('${photoURL}');`;  
    // htmlTag['style'] = 'max-height: 100%;';  
}

const corgiPhotos = [
  "https://images.unsplash.com/photo-1519098901909-b1553a1190af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1508814389023-fe39a089973a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1534235261404-7625cd79bdb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1534176043700-789edb4e2f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1507449863419-a3aa39ac22d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1500042832734-904e884bd7ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1523567353-71ea31cb9f73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1501762248-ab9b555f5d94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1517527181905-db18299d4d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1559132286-2f23224a1d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1577767615229-56376d1d878a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575852442080-15e8d4ac78c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1518996842-64fc49f6e446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1550884632-95ab8633b454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1573567256057-809b4ea09bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575862190741-57157577897c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1559132264-20eca04ff346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1567720441966-d8a357525219?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1546975554-31053113e977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692901-e16f2046918a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1583496320291-274b3c782981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1509937433536-27e7aad1147d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1577767603416-184b60b0960a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1561852184-92b9bb821045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692918-e27df3c74d74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575862216565-5d315235249d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1560465381-50856ddae178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1577109127707-01e09af2dd23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1577767578667-fc33da8cc28d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1565034957450-544d60c320b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554693190-383dd5302125?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1549950844-e6a5d47f8324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575862166978-878e8447d903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575862254952-d70bc698495b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1546975490-a79abdd54533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1574222644979-06784614ed5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1559132252-594e76c41a6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1558697048-060e0d6bb4a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1564941415794-e8cbb4a27ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575862202417-c725ea3f899c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1570566998157-0df9e6f8d5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1577767627402-de41348ed152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1508547003855-6502567e0cc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1577767650197-e3c45dad02dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692936-82776f9406db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1550159930-40066082a4fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554128970-c4b38bec484a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1523295408381-f5afe84a443f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692937-643f164bb243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1557973964-ee879969b96d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1557973557-ddfa9ee8c5bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1557973989-4ea43af05a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0"
]

let photos = corgiPhotos;
for(let i = 0; i < images.length; i++){
  const photoURL = photos[Math.floor(Math.random() * photos.length)]
  changeSrc(images[i], photoURL);
}
for (let j = 0; j < pictures.length; j++){
  const photoURL = photos[Math.floor(Math.random() * photos.length)];
  pic = pictures[j];
  for (let k = 0; k < pic.childNodes.length; k++) {
    changeSrc(pic.childNodes[k], photoURL);
  }
}