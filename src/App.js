import React, { Component } from "react";

import Container from "./container";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  changeTotalSum = () => {
    this.setState({
      total: this.state.total + 1,
    });
  };

  changeTotalSub = () => {
    if (this.state.total > 0)
      this.setState({
        total: this.state.total - 1,
      });
  };
  render() {
    return (
      // <Heading/>
      <div className="card">
        <Container
          onChangeSum={this.changeTotalSum}
          onChangeSub={this.changeTotalSub}
          theimage={
            "https://www.apple.com/v/iphone-11-pro/a/images/meta/og__smc3haxsdn2q_overview.png?201909101843"
          }
        />
        <Container
          onChangeSum={this.changeTotalSum}
          onChangeSub={this.changeTotalSub}
          theimage={
            "https://th.bing.com/th/id/OIP.mqCILmuXUAbpaIkE8lXa7gHaJ4?pid=ImgDet&rs=1://www.bing.com/images/search?view=detailV2&ccid=ldi9QpLt&id=A8A1320C98A0D27842A6135D9EB426D981D024D9&thid=OIP.ldi9QpLtOXgO-c9yxlQQ8QHaD4&mediaurl=https%3a%2f%2fwww.apple.com%2fv%2fiphone-11-pro%2fa%2fimages%2fmeta%2fog__smc3haxsdn2q_overview.png%3f201909101843&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.95d8bd4292ed39780ef9cf72c65410f1%3frik%3d2STQgdkmtJ5dEw%26pid%3dImgRaw%26r%3d0&exph=630&expw=1200&q=iphone+11&simid=608027095648521760&FORM=IRPRST&ck=C356E6E4D81FA1AF878BC9CE0A06D136&selectedIndex=9&qft=+filterui%3aimagesize-large"
          }
        />
        <Container
          onChangeSum={this.changeTotalSum}
          onChangeSub={this.changeTotalSub}
          theimage={
            "https://store.stormfront.co.uk/content/images/thumbs/0010907_iphone_11_p_1jpg.jpeg"
          }
        />
        <h1>Total:{this.state.total}</h1>
      </div>
      /* <Footer/> */
    );
  }
}
export default App;
