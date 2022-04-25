import React from "react";

export default class JumbotronGradient extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return<div class="h7 bg-center" style={{ backgroundImage: image && `url(${image})` }}>
    <div class="mw7 center ">
      <div class="db ">
        <div class="mw7 relative bg-fix-primary" style="text-shadow: 0 2px 3px rgba(0, 0, 0, 0.993)"> 
          <h1 class="f2 f1-l b di lh-title white">
            {title}
          </h1>
        </div>e
        <div class="mw7 relative bg-fix-primary" style="text-shadow: 0 2px 3px rgba(0, 0, 0, 0.993)">       
          <h4 class="b f4 di lh-title mb3 white mw6 ">
            {subtitle}
          </h4>     
        </div>
      </div>
    </div> 
    </div>
  }
}
  