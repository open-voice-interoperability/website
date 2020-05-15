import React from "react";
import { List } from "immutable";

import Jumbotron from "./components/jumbotron";

export default class ResourcesPreview extends React.Component {
	render() {
		const { entry, getAsset } = this.props;

		let image = getAsset(entry.getIn(["data", "image"]));

		// Bit of a nasty hack to make relative paths work as expected as a background image here
		if (image && !image.fileObj) {
			image =
				window.parent.location.protocol +
				"//" +
				window.parent.location.host +
				image;
		}

		return
		<div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />


    </div>;
  
	}
}
