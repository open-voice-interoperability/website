import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import SponsoringMemberPreview from "./cms-preview-templates/sponsoring_member";
import SupportersPreview from "./cms-preview-templates/supporters";
import JoinPreview from "./cms-preview-templates/join";
import AboutPreview from "./cms-preview-templates/about";
import AmbassadorsPreview from "./cms-preview-templates/ambassadors";
import CommunitiesPreview from "./cms-preview-templates/communities";
import FAQPreview from "./cms-preview-templates/faq";
import ResourcesPreview from "./cms-preview-templates/resources";
import IndustryAdvisorCouncilPreview from "./cms-preview-templates/industry-advisor-council";
import ContactPreview from "./cms-preview-templates/contact";
import VoiceInteroperabilityPreview from "./cms-preview-templates/voice_interoperability_form";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("sponsoring_member", SponsoringMemberPreview);
CMS.registerPreviewTemplate("friends-of-the-open-voice-network", SupportersPreview);
CMS.registerPreviewTemplate("industry-advisor-council", IndustryAdvisorCouncilPreview);
CMS.registerPreviewTemplate("join", JoinPreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("ambassadors", AmbassadorsPreview);
CMS.registerPreviewTemplate("communities", CommunitiesPreview);
CMS.registerPreviewTemplate("faq", FAQPreview);
CMS.registerPreviewTemplate("resources", ResourcesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("voice_interoperability_form", VoiceInteroperabilityPreview);
CMS.init();
