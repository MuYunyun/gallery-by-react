require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
})(imageDatas);



class GalleryByReactApp extends React.Component {
	render() {
		return (
			<section className="stage">
				
			</section>
		);
	}
}

GalleryByReactApp.defaultProps = {};

export default GalleryByReactApp;