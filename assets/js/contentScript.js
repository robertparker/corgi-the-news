function changeSrc(htmlTag, photoURL){
  if (htmlTag.id === 'corgiLoading'){
    return;
  }
  photoURL = photoURL || getRandomPhotoURL();
  /* terrible forecast image replacement on bbc.com */
  if (htmlTag.className == 'forecast--image') {
    return;
  }
  let origOffset = htmlTag['offsetHeight'];
  let origSrc = htmlTag['src'];
  htmlTag.src = photoURL;
  htmlTag['data-src'] = photoURL;
  htmlTag['data-default-src'] = photoURL;
  htmlTag['srcset'] = photoURL;
  htmlTag.style['object-fit'] = 'cover';  

  if (typeof origOffset !== 'undefined' && origOffset !== 0){
    htmlTag.style['height'] = origOffset + 'px';
  }
  htmlTag.style['background-image'] = `url('${photoURL}')`;  
}

/* used for BBC */
function insertImg(parentNode, photoURL){
  photoURL = photoURL || getRandomPhotoURL();
  let img =document.createElement('img');
  img.src = photoURL;
  img['data-src'] = photoURL;
  img['data-default-src'] = photoURL;
  img['srcset'] = photoURL;
  // img.style['max-height'] = '100%'; 
  if(typeof parentNode['offsetHeight'] !== 'undefined' && parentNode['offsetHeight'] !== 0){
    img.style['height'] = parentNode['offsetHeight'];
  }
  img.style['background-image'] = `url('${photoURL}')`;  
  img.style['object-fit'] = 'cover';  

  parentNode.appendChild(img);
  return img;
}

const cdnPhotos = [
  "https://ik.imagekit.io/69mp7bhac/default-image.jpg",
  "https://ik.imagekit.io/69mp7bhac/photo-1574144113084-b6f450cc5e0c_Y5IvSc6b4.jpeg",
  "https://ik.imagekit.io/69mp7bhac/photo-1574144113084-b6f450cc5e0c_MpYf03m27.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot3_zQSlTs3bb.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot2_oR1Vn5amZ.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot0_6ETzsKqtE.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot5_SYCuqgLtN.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot4_amj2Uhtdn.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot6_1cVamjitn.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot7_qahG_1UJw.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot8_bdLys1GT4g.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot9__2JC-cSVXf.webp",
  "https://ik.imagekit.io/69mp7bhac/8_ayleXw36Az.webp",
  "https://ik.imagekit.io/69mp7bhac/9_SRVP344gQ.webp",
  "https://ik.imagekit.io/69mp7bhac/headshot10_RDUZ_g0s7.webp",
  "https://ik.imagekit.io/69mp7bhac/4_H23oIclgJ.webp",
  "https://ik.imagekit.io/69mp7bhac/30_5qrwusGcd.webp",
  "https://ik.imagekit.io/69mp7bhac/7_jIhhnFI00.webp",
  "https://ik.imagekit.io/69mp7bhac/5_8n4wUNSqC.webp",
  "https://ik.imagekit.io/69mp7bhac/33_t031ZqLd8.webp",
  "https://ik.imagekit.io/69mp7bhac/31_P7pZ8YR9W.webp",
  "https://ik.imagekit.io/69mp7bhac/32_XQD8zy3ta.webp",
  "https://ik.imagekit.io/69mp7bhac/3_i-r7oe4Eo.webp",
  "https://ik.imagekit.io/69mp7bhac/6_jm_UFBnrH.webp",
  "https://ik.imagekit.io/69mp7bhac/34_xIwbrsJ54.webp",
  "https://ik.imagekit.io/69mp7bhac/37_ZBONOu-r5.webp",
  "https://ik.imagekit.io/69mp7bhac/36_9YhnV7M_A.webp",
  "https://ik.imagekit.io/69mp7bhac/35_dln2jZD1i.webp",
  "https://ik.imagekit.io/69mp7bhac/40_vhTXj2o6R.webp",
  "https://ik.imagekit.io/69mp7bhac/41_UHzjh3jaJ.webp",
  "https://ik.imagekit.io/69mp7bhac/39_R6zZr2qD_.webp",
  "https://ik.imagekit.io/69mp7bhac/43_M4p2MiJIBa.webp",
  "https://ik.imagekit.io/69mp7bhac/42_g0NOZRFaj.webp",
  "https://ik.imagekit.io/69mp7bhac/38_Y01RWx6HYB.webp",
  "https://ik.imagekit.io/69mp7bhac/49_mPa1O8JEl.webp",
  "https://ik.imagekit.io/69mp7bhac/47_J51G_u_NQ.webp",
  "https://ik.imagekit.io/69mp7bhac/48_t1rljnkuSf.webp",
  "https://ik.imagekit.io/69mp7bhac/50_CYlho1Y1k.webp",
  "https://ik.imagekit.io/69mp7bhac/51__fEjSmbCk.webp",
  "https://ik.imagekit.io/69mp7bhac/53_pEYCX8q7U.webp",
  "https://ik.imagekit.io/69mp7bhac/55_akqtxi07H.webp",
  "https://ik.imagekit.io/69mp7bhac/44_xxAWlJ_g5.webp",
  "https://ik.imagekit.io/69mp7bhac/54_q6tXxMeQw.webp",
  "https://ik.imagekit.io/69mp7bhac/56_YMI0KiyIh2.webp",
  "https://ik.imagekit.io/69mp7bhac/59_JlLYI3I7k.webp",
  "https://ik.imagekit.io/69mp7bhac/57_MyOLyfPBsA.webp",
  "https://ik.imagekit.io/69mp7bhac/61_7XNU_Z0iiX.webp",
  "https://ik.imagekit.io/69mp7bhac/64_MSegUx_EX.webp",
  "https://ik.imagekit.io/69mp7bhac/66_o64Ljvzkqm.webp",
  "https://ik.imagekit.io/69mp7bhac/58_s6LGGTCle.webp",
  "https://ik.imagekit.io/69mp7bhac/62_4cSSYdOZO.webp",
  "https://ik.imagekit.io/69mp7bhac/60_qWYFBXFuZ.webp",
  "https://ik.imagekit.io/69mp7bhac/63_rqknoL2Gl.webp",
  "https://ik.imagekit.io/69mp7bhac/65_SXT6RGQU-C.webp",
  "https://ik.imagekit.io/69mp7bhac/67_DxPXjh2th.webp",
  "https://ik.imagekit.io/69mp7bhac/71_OGF2zAmFy.webp",
  "https://ik.imagekit.io/69mp7bhac/68_RvICz1Xjuh.webp",
  "https://ik.imagekit.io/69mp7bhac/72_anQhpaf5lK.webp",
  "https://ik.imagekit.io/69mp7bhac/69_URmq8snmMc.webp",
  "https://ik.imagekit.io/69mp7bhac/21_-DxCyp5Q2i.webp",
  "https://ik.imagekit.io/69mp7bhac/23_6kbMJyzSK.webp",
  "https://ik.imagekit.io/69mp7bhac/45_PxsczHX0u.webp",
  "https://ik.imagekit.io/69mp7bhac/22_bkIQjwQvJq.webp",
  "https://ik.imagekit.io/69mp7bhac/46_lFjT9S4xg.webp",
  "https://ik.imagekit.io/69mp7bhac/26_1t4YfuQjl.webp",
  "https://ik.imagekit.io/69mp7bhac/24_bmuUzlH2-.webp",
  "https://ik.imagekit.io/69mp7bhac/27_0JRYjCbWsY.webp",
  "https://ik.imagekit.io/69mp7bhac/0_thKZWvqYe.webp",
  "https://ik.imagekit.io/69mp7bhac/29_0Q8Qeaz6v.webp",
  "https://ik.imagekit.io/69mp7bhac/28_VOnTYCIXv.webp",
  "https://ik.imagekit.io/69mp7bhac/25_3-mYrJNcq.webp",
  "https://ik.imagekit.io/69mp7bhac/1_xJ-OVCSBk.webp",
  "https://ik.imagekit.io/69mp7bhac/12_Jjobv57TT.webp",
  "https://ik.imagekit.io/69mp7bhac/10_7GFea6bRx.webp",
  "https://ik.imagekit.io/69mp7bhac/14_5J7P-6tH8.webp",
  "https://ik.imagekit.io/69mp7bhac/13_tCDoI5fdT.webp",
  "https://ik.imagekit.io/69mp7bhac/20_4sfbuqZR-.webp",
  "https://ik.imagekit.io/69mp7bhac/2_K_G8MLki1.webp",
  "https://ik.imagekit.io/69mp7bhac/15_mE7RQHGy_.webp",
  "https://ik.imagekit.io/69mp7bhac/17_29XgtqW3a.webp",
  "https://ik.imagekit.io/69mp7bhac/18_F1uhGz1oi.webp",
  "https://ik.imagekit.io/69mp7bhac/19_XsQobw50c.webp",
  "https://ik.imagekit.io/69mp7bhac/16_tPxUghxnY.webp",
  "https://ik.imagekit.io/69mp7bhac/11_LcQ9R-qL9.webp"
]

function getRandomPhotoURL(){
  const photos = cdnPhotos;
  const photoURL = photos[Math.floor(Math.random() * photos.length)];
  return photoURL;
}


/* listen for new images added to the DOM */
document.addEventListener("DOMNodeInserted", function(e) {
  const acceptableTags = ['SOURCE', 'IMG'];
  /* CNN.com inserts entire sections into the DOM */
  let elementsToChange = [];
  if(e.target.childElementCount > 0){
      let images = Array.from(e.target.getElementsByTagName("img"));
      let sources = Array.from(e.target.getElementsByTagName("source"));
      elementsToChange = elementsToChange.concat(images);
      elementsToChange = elementsToChange.concat(sources);
  } else {
    if(acceptableTags.includes(e.target.tagName)){
      elementsToChange.push(e.target);
    }
  }
  for (let j = 0; j < elementsToChange.length; j++){
    const elem = elementsToChange[j];
    if(elem.src.includes('/opinion/')){
      /* TODO: get headshots for NYT */
      changeSrc(elem);
    } else {
      changeSrc(elem);
    }
  }
}, false);


var loadingIcon = '';

document.addEventListener("DOMContentLoaded", function(){
  
  /* display the loader as soon as the DOM is ready */
  loadingIcon = document.createElement('img');
  loadingIcon.src = chrome.extension.getURL('assets/images/corgiLoading.gif');
  loadingIcon.style['position'] = 'fixed';
  loadingIcon.style['left'] = '-10px';
  loadingIcon.style['top'] = '-10px';
  loadingIcon.style['height'] = '200px';
  loadingIcon.style['width'] = '200px';

  loadingIcon.style['z-index'] = 999999;
  loadingIcon.id = 'corgiLoading';
  document.body.appendChild(loadingIcon);

  let images = document.getElementsByTagName('img');
  for(let i = 0; i < images.length; i++){
    changeSrc(images[i]);
  }

  let pictures = document.getElementsByTagName('picture');
  for (let j = 0; j < pictures.length; j++){
    const photoURL = getRandomPhotoURL();
    pic = pictures[j];
    for (let k = 0; k < pic.childNodes.length; k++) {
      const acceptableTags = ['SOURCE', 'IMG']
      if (acceptableTags.includes(pic.childNodes[k].tagName)) {
        changeSrc(pic.childNodes[k], photoURL);
      }
    }
  }

  /* bbc.com */
  let responsiveImages = document.getElementsByClassName('responsive-image');
  for (let j = 0; j < responsiveImages.length; j++){
    let div = responsiveImages[j];
    if(div.childNodes.length > 0) {
      for (let k = 0; k < div.childNodes.length; k++) {
        div.childNodes[k].remove();
      }
    }
    insertImg(div);
  }

  /* cjonline.com */
  let imageDivs = document.getElementsByClassName('image');
  for (let l = 0; l < imageDivs.length; l++){
    let div = imageDivs[l];
    if (div.style['background-image']){
      changeSrc(div);
    }
  }
});

window.addEventListener('load', (event) => {
  loadingIcon.remove();
});