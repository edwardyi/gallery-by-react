require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// 取得圖片數據
let data = require('../data/imagedata.json')

// 取得圖片資料陣列
let imageDatas = (function getImageDataArr(imageData){
  for(let i=0; i < imageData.length; i++){
      let singleData = imageData[i];
      singleData.imageURL = require('../images/' + singleData.filename)
      // 把設定好的imageURL屬性加到原先的物件中
      imageData[i] = singleData;
  }
  return imageData;
})(data);

// console.log(imageData)
var ImageFigure = React.createClass({
  render: function() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
            <h2 className="img-title">
              {this.props.data.title}
            </h2>
        </figcaption>
      </figure>
    )
  }
})

class AppComponent extends React.Component {
  render() {
    let imageFigureArr = [];

      imageDatas.forEach(function(value,key){
        imageFigureArr.push(<ImageFigure key={key} data={value}></ImageFigure>)
      });

    return (
      <section className="stage">
        <section className="image-sec">
          {imageFigureArr}
        </section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
