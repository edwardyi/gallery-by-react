require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// 取得圖片數據
let data = require('../data/imagedata.json')

// 取得圖片資料陣列
let imageData = (function getImageDataArr(imageData){
  for(let i=0; i < imageData.length; i++){
      let singleData = imageData[i];
      imageData.imageURL = require('../images/' + singleData.filename)
      imageData[i] = imageData;
  }
  return imageData;
})(data);

// console.log(imageData)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="image-sec"></section>
        <nav class="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
