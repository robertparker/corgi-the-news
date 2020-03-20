
chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === 'getCorgiPhotos'){
    let bearer = 'Client-ID ' + 'Client_ID';
    fetch('https://api.unsplash.com/search/photos?query=corgi&per_page=30', {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
      .then(response => response.text())
      .then(json => {
        let data = JSON.parse(json);
        let photos = [];
        const results = data['results'];
        for (let j = 0; j < results.length; j++){
          photos.push(results[j]['urls']['raw']);
        }
        senderResponse({data: photos})
      })
      .catch(error => {
        console.log("error", error);
      })
    return true;  // Will respond asynchronously.
  }
});

chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg == 'getCorgiPhotosStatic'){
    senderResponse({'data': corgiPhotos});
    return true;
  }
})
// qwant api - rappers
let url = 'https://api.qwant.com/api/search/images?q=famous%20rapper&t=images&count=50&safesearch=1&locale=en_en&uiv=4'
chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === 'getRapperPhotos'){
    fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
            }
        })
      .then(response => response.text())
      .then(json => {
        let data = JSON.parse(json);
        let photos = [];
        const results = data['data']['result']['items'];
        for (let j = 0; results.length; j++){
          photos.push(results[j]['media'])
        }
        senderResponse({data: photos})
      })
      .catch(error => {
        console.log("error", error)
        // const results = data['data']['data']['result']['items'];
        senderResponse({data: rapperPhotos})
      })
    return true;  // Will respond asynchronously.
  }
});

// dog.ceo
// chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
//   if(message.msg === "image"){
//     fetch('https://dog.ceo/api/breed/corgi/images/random')
//           .then(response => response.text())
//           .then(data => {
//             let dataObj = JSON.parse(data);
//             senderResponse({data: dataObj.message, index: message.index});
//           })
//           .catch(error => console.log("error", error))
//       return true;  // Will respond asynchronously.
//   }
// });
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
  "https://images.unsplash.com/photo-1567127648672-c67f77a888a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
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
  // "https://images.unsplash.com/photo-1534236220777-5954b29b3d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMTAyOH0",
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

const rapperPhotos = [
  "https://imgix.ranker.com/user_node_img/68/1347110/original/kanye-west-photo-u149?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
  "https://1.bp.blogspot.com/-LfW_aMs52yE/T4bYx-BvrjI/AAAAAAAAAL0/fT5RAx5dJQQ/s1600/48959.jpg",
  "https://4.bp.blogspot.com/-30JB9_uAC7A/T3109ViE1HI/AAAAAAAAAFU/6DgQ5psT_Q8/w1200-h630-p-k-no-nu/pdiddy.jpg",
  "https://i.ytimg.com/vi/kWE6qhnucvU/maxresdefault.jpg",
  "https://i.ytimg.com/vi/pdFf5TD6n3M/maxresdefault.jpg",
  "https://thoughtcatalog.files.wordpress.com/2013/09/shutterstock_95987254.jpg?w=584&h=880",
  "https://thoughtcatalog.files.wordpress.com/2013/09/shutterstock_1126591221.jpg",
  "https://2.bp.blogspot.com/-P7G_0uNimtM/T5p3q8yw9DI/AAAAAAAAASA/IBCkLBJeHoE/s1600/lilwayne.jpg",
  "https://cdn.quotesgram.com/img/39/32/1225814684-retouched.jpg",
  "https://i0.wp.com/xttrawave.com/wp-content/uploads/2019/01/Top-20-Best-Rappers-in-Hip-Hop-%E2%80%93-2019-Kendrick-Lamar.jpg?fit=735%2C400&ssl=1",
  "https://2.bp.blogspot.com/-MireB7SREPw/T5p4EfkWMYI/AAAAAAAAASY/jWBfgs7tSs0/s1600/ice_cube.jpg",
  "https://i.ytimg.com/vi/aGPM6ZMNApU/maxresdefault.jpg",
  "https://i.ytimg.com/vi/-bG_LuUKbMQ/maxresdefault.jpg",
  "https://i.ytimg.com/vi/OD-EJ9moBXM/hqdefault.jpg",
  "https://www.themost10.com/wp-content/uploads/2012/06/Wiz-Khalifa.jpg",
  "https://mzinferno.files.wordpress.com/2011/03/e3.jpg?w=655",
  "https://i.ytimg.com/vi/TqeJko2WCEM/maxresdefault.jpg",
  "https://imgix.ranker.com/list_img_v2/16899/1756899/original/rappers-who-have-been-shot-u2?w=817&h=427&fm=jpg&q=50&fit=crop",
  "https://cdn01.dailycaller.com/wp-content/uploads/2019/02/21-Savage-e1549296037762.jpg",
  "https://img1.nickiswift.com/img/uploads/2017/08/rappers-who-haven_t-figured-out-they-aren_t-famous-anymore-780x438_rev1.jpg",
  "https://www.topteny.com/wp-content/uploads/2014/12/50-Cent.jpg?x38733",
  "https://i.ytimg.com/vi/B5d0g6zSBuQ/maxresdefault.jpg",
  "https://1847884116.rsc.cdn77.org/tamil/news/xxxtentacion-uproxx-jpg-3-c21.jpeg",
  "https://imgix.ranker.com/list_img_v2/3087/2143087/original/the-best-80s-rappers-u1?w=817&h=427&fm=jpg&q=50&fit=crop?fm=pjpg&q=80",
  "https://i.ytimg.com/vi/Gcg4c0WC0FM/maxresdefault.jpg",
  "https://djbooth.net/.image/t_share/MTY0MjI1MjUyNTI2NjYzNjI3/hire-famous-rapper-snoop-dogg-sitw.jpg",
  "https://i.ytimg.com/vi/U_QKxvjkQYU/maxresdefault.jpg",
  "https://www.wonderslist.com/wp-content/uploads/2015/09/Ice-Cube.jpg",
  "https://img1.nickiswift.com/img/gallery/rappers-who-havent-figured-out-they-arent-famous-anymore/intro-1501605951.jpg",
  "https://i.ytimg.com/vi/PCSQZygxC_M/maxresdefault.jpg",
  "https://2.bp.blogspot.com/-Mv6lhI4KB4s/UZOPL0flpzI/AAAAAAAAAO4/qQcKW0nrIkM/s1600/rick+ross+3.jpg",
  "https://top10reviewof.com/wp-content/uploads/2016/06/10-1-450x299.jpg",
  "https://i.ytimg.com/vi/4nX5XhFHybU/hqdefault.jpg",
  "https://images.rapgenius.com/9008c452e491b8e18c04b036159db860.610x407x1.jpg",
  "https://omgtoptens.com/wp-content/uploads/2012/10/7.-Ludacris.jpg",
  "https://imgix.ranker.com/list_img_v2/5732/2085732/original/best-british-rappers?w=817&h=427&fm=jpg&q=50&fit=crop",
  "https://s3.amazonaws.com/hiphopdx-production/2017/03/Screen-Shot-2017-03-08-at-4.17.14-PM-799x600.png",
  "https://cdn.ppcorn.com/wp-content/uploads/sites/14/2015/08/top-rappers-to-actors-ppcorn.jpg",
  "https://i1.ytimg.com/vi/oP-qeTfvCJE/hqdefault.jpg",
  "https://img2.nickiswift.com/img/gallery/rappers-who-havent-figured-out-they-arent-famous-anymore/soulja-boy-1503601267.jpg",
  "https://tribktla.files.wordpress.com/2013/09/rapper-the-game.jpg",
  "https://i.ytimg.com/vi/Ab3HXMvUK4E/maxresdefault.jpg",
  "https://i.ytimg.com/vi/ZP86Eva8VFc/hqdefault.jpg",
  "https://i.ytimg.com/vi/-LqlFnH-Vv0/maxresdefault.jpg",
  "https://i.ytimg.com/vi/OPhKVk0ppBw/maxresdefault.jpg",
  "https://i.ytimg.com/vi/UZ1S59ukQpE/hqdefault.jpg",
  "https://i.ytimg.com/vi/vu6L6AlOrLA/maxresdefault.jpg",
  "https://2.bp.blogspot.com/_sH-hM9UBdCg/TVSXsy6qCOI/AAAAAAAAA7I/8tIkMj-7OAc/s1600/Jay-Z.jpg",
  "https://i.ytimg.com/vi/WQuQDQbkAcw/maxresdefault.jpg",
  "https://caltventertainment.files.wordpress.com/2013/12/rappers.jpg"
]