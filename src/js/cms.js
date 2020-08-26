import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import JoinPreview from "./cms-preview-templates/join";
import AboutPreview from "./cms-preview-templates/about";
import CommunitiesPreview from "./cms-preview-templates/communities";
import ResourcesPreview from "./cms-preview-templates/resources";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("join", JoinPreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("communities", CommunitiesPreview);
CMS.registerPreviewTemplate("resources", ResourcesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
