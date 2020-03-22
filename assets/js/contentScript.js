let images = document.getElementsByTagName('img');

let pictures = document.getElementsByTagName('picture');

let responsiveImages = document.getElementsByClassName('responsive-image');

/* no longer necessary since we're listening for DOMNodeInserted  */
// let lazyImages = document.querySelectorAll('div[data-testid="lazyimage-container"]')

function changeSrc(htmlTag, photoURL){
  /* terrible forecast image replacement on bbc.com */
  if (htmlTag.className == 'forecast--image') {
    return;
  }
  htmlTag.src = photoURL;
  htmlTag['data-src'] = photoURL;
  htmlTag['data-default-src'] = photoURL;
  htmlTag['srcset'] = photoURL;
  htmlTag.style['max-height'] = '100%'; 
  htmlTag.style['background-image'] = `url('${photoURL}')`;  
  htmlTag.style['object-fit'] = 'cover';  
}

/* used for BBC */
function insertImg(parentNode, photoURL){
  let img =document.createElement('img');
  img.src = photoURL;
  img['data-src'] = photoURL;
  img['data-default-src'] = photoURL;
  img['srcset'] = photoURL;
  // img.style['max-height'] = '100%'; 
  img.style['background-image'] = `url('${photoURL}')`;  
  img.style['object-fit'] = 'cover';  

  parentNode.appendChild(img);
  return img;
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
  // "https://images.unsplash.com/photo-1577767615229-56376d1d878a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575852442080-15e8d4ac78c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1518996842-64fc49f6e446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1550884632-95ab8633b454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1573567256057-809b4ea09bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1575862190741-57157577897c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1559132264-20eca04ff346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1567720441966-d8a357525219?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1546975554-31053113e977?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692901-e16f2046918a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1583496320291-274b3c782981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1509937433536-27e7aad1147d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1577767603416-184b60b0960a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1561852184-92b9bb821045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692918-e27df3c74d74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575862216565-5d315235249d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1560465381-50856ddae178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1577109127707-01e09af2dd23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1577767578667-fc33da8cc28d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1565034957450-544d60c320b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554693190-383dd5302125?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1549950844-e6a5d47f8324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575862166978-878e8447d903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1575862254952-d70bc698495b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1546975490-a79abdd54533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1574222644979-06784614ed5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1559132252-594e76c41a6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1558697048-060e0d6bb4a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1564941415794-e8cbb4a27ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1575862202417-c725ea3f899c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1570566998157-0df9e6f8d5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1577767627402-de41348ed152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1508547003855-6502567e0cc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  // "https://images.unsplash.com/photo-1577767650197-e3c45dad02dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692936-82776f9406db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1550159930-40066082a4fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554128970-c4b38bec484a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1554692937-643f164bb243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1557973964-ee879969b96d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1557973557-ddfa9ee8c5bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1557973989-4ea43af05a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
  "https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-driving-car.jpg?w=1024&ssl=1",
  "https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2017/12/royal-corgis.jpg?w=1024&ssl=1",
  "https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/pembroke-corgi-running-in-snow.jpg?resize=1024%2C683&ssl=1",
  "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-with-its-tongue-out.jpg?resize=1024%2C681&ssl=1",
  "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-superman-1.jpg?w=1024&ssl=1",
  "https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2017/12/royal-corgis.jpg?w=1024&ssl=1",
  "https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-butt.jpg?w=1024&ssl=1",
  "https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/goofy-corgi-2.jpg?w=1024&ssl=1",
  "https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/Loki-Ham.jpg?w=1024&ssl=1",
  "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-leaves.jpg?w=1024&ssl=1",
  "https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-puppy.jpg?w=1024&ssl=1",
  "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-butt-2.jpg?w=1024&ssl=1",
  "https://theawesomedaily.com/wp-content/uploads/2017/04/corgi-puppies-3a-1.jpg",
  "https://i.redd.it/9i0kgi8lseiy.jpg",
  "https://files.brightside.me/files/news/part_53/532710/1592310-nNAnkTHnZdqkdqoE-9sK7FeFj3g6jjxhsQ7Ai9rSK4c-1528716791-728-1249fbc9b1-1528900112.jpg",
  "https://preview.redd.it/i5sjywpn9pc31.jpg?width=640&crop=smart&auto=webp&s=dc1c52ef7241e9ef7e031de09c177c4960fc5858",
  "https://preview.redd.it/bg56ht97a2b31.jpg?width=640&crop=smart&auto=webp&s=17934d75980bd728f7ded06197f7589f28306622",
  "https://preview.redd.it/vvncs7ggqth31.jpg?width=640&crop=smart&auto=webp&s=0dcc031cc4dcbf705c23684e8c7d59d4574afad1",
  "https://preview.redd.it/ivms1tbfxjy31.jpg?width=640&crop=smart&auto=webp&s=5b0dffbb34db5694a5459be1c1910c717a67004f",
  "https://pd-stuytown-cd.stuytown.com/-/media/lily-the-corgi-at-resident-services-750x750-px.jpg?mw=375",
  "https://www.qualitycorgipupshome.com/slide/904495000000005003/Corgi%20HD%20Wallpaper%20For%20Desktop.jpg",
  "https://www.animalhi.com/thumbnails/detail/20121102/water%20nature%20dogs%20corgi%20canine%20welsh%20corgi%201956x2564%20wallpaper_www.animalhi.com_59.jpg",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-05/enhanced-buzz-13440-1533139621-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-06/enhanced-buzz-11356-1533139650-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-04/enhanced-buzz-3624-1533139688-1.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-05/enhanced-buzz-13648-1533139670-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-02/enhanced-buzz-9961-1533139780-3.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-04/enhanced-buzz-3324-1533139749-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-06/enhanced-buzz-11806-1533139808-1.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-02/enhanced-buzz-10138-1533139761-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-05/enhanced-buzz-13118-1533139840-3.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-04/enhanced-buzz-3767-1533139853-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-05/enhanced-buzz-13136-1533139865-10.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-01/enhanced-buzz-16886-1533139876-2.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-01/enhanced-buzz-17888-1533140065-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-01/enhanced-buzz-17332-1533140075-7.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-03/enhanced-buzz-25287-1533140087-4.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-05/enhanced-buzz-14284-1533140098-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-05/enhanced-buzz-14171-1533140214-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-04/enhanced-buzz-4023-1533140201-1.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-05/enhanced-buzz-15733-1533141301-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/12/enhanced/buzzfeed-prod-web-04/enhanced-buzz-5556-1533141275-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/13/enhanced/buzzfeed-prod-web-03/enhanced-buzz-29709-1533142949-7.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/13/enhanced/buzzfeed-prod-web-02/enhanced-buzz-14822-1533142961-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/13/enhanced/buzzfeed-prod-web-03/enhanced-buzz-29709-1533142923-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/13/enhanced/buzzfeed-prod-web-03/enhanced-buzz-29553-1533142936-1.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/13/enhanced/buzzfeed-prod-web-05/enhanced-buzz-17848-1533143199-8.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/13/enhanced/buzzfeed-prod-web-06/enhanced-buzz-16146-1533143209-6.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/13/enhanced/buzzfeed-prod-web-02/enhanced-buzz-14822-1533143217-1.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  // "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/1/13/enhanced/buzzfeed-prod-web-02/enhanced-buzz-15206-1533143190-0.jpg?downsize=400:*&output-format=auto&output-quality=auto",
  "https://external-preview.redd.it/VrcvlKvLCWTOeZdZNtO1HbDQdpu6Ot8WAgkJBSU8ARg.jpg?auto=webp&s=423a985fa41bf04f69f17a313b46b1cd2b1a56ac",
  "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-with-its-tongue-out.jpg?resize=1024%2C681&ssl=1",
  "https://images3.alphacoders.com/866/866472.jpg",
  "https://i.ebayimg.com/images/g/34QAAOSwhQpeQgz2/s-l800.jpg"

]

const corgiHeadShots = [
  "https://i.pinimg.com/originals/85/4c/5f/854c5fbd87b28b89447c2493da05791e.jpg",
  "https://i.pinimg.com/originals/85/4c/5f/854c5fbd87b28b89447c2493da05791e.jpg",
  "https://i0.wp.com/bestlifeonline.com/content/uploads/2018/06/corgi-surprised-1-1024x1019.jpg?resize=1024%2C1019&ssl=1",
  // "https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/corgi-surprised-1.jpg?w=1024&ssl=1",
  "https://i.pinimg.com/originals/6c/a1/e2/6ca1e2111625766bf43db1b0a0c86629.jpg",
  "https://66.media.tumblr.com/8d62560b82e7aeac0b2b515abc81be94/tumblr_pxby4cgWze1sg969vo1_640.jpg",
  "https://www.kthanna.com/wp-content/uploads/2012/01/Kirasmile.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQmrWsiDIQFrQScbmHB88nBx_O4ezS83_y5MWJQzabb5FRZqyj",
  "https://i.redd.it/vw28ffzhaevy.jpg",
  "https://images.squarespace-cdn.com/content/v1/5394c1cae4b048e47283d808/1555046509085-EF34WEK5GGDLZNTM76H0/ke17ZwdGBToddI8pDm48kEC1nzeOqOWbAil2_WPkHuF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmB31meU_oJxsmuSSsgGF397zf-NmlPDPcqRBt8lbBopW/80s+Fashion+Pet+Photoshoot+Corgi+Dog+Los+Angeles+Photographer+Miranda+Kelton+Photography-11.JPG",
  "https://thumbs.dreamstime.com/b/smart-welsh-corgi-pembroke-portrait-seen-side-white-background-172610661.jpg"
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
    const acceptableTags = ['SOURCE', 'IMG']
    if (acceptableTags.includes(pic.childNodes[k].tagName)) {
      changeSrc(pic.childNodes[k], photoURL);
    }
  }
}

for (let j = 0; j < responsiveImages.length; j++){
  const photoURL = photos[Math.floor(Math.random() * photos.length)];
  let div = responsiveImages[j];
  if(div.childNodes.length > 0) {
    for (let k = 0; k < div.childNodes.length; k++) {
      div.childNodes[k].remove();
    }
  }
  insertImg(div, photoURL);
}

/* listen for new images added to the DOM */
document.addEventListener("DOMNodeInserted", function(e) {
  let photoURL = '';
  if (e.target.tagName == 'IMG'){
    if(e.target.src.includes('/opinion/')){
      photoURL = corgiHeadShots[Math.floor(Math.random() * corgiHeadShots.length)];
    } else {
      photoURL = photos[Math.floor(Math.random() * photos.length)];
    }
    changeSrc(e.target, photoURL);
  }
}, false);
