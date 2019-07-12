import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import JoinPreview from "./cms-preview-templates/join";
import AboutPreview from "./cms-preview-templates/about";
import ContactPreview from "./cms-preview-templates/contact";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
      style={{height: "80px"}}
      type="color"
      value={this.props.value}
      onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("join", JoinPreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerWidget("color", ColorControl);
