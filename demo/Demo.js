import styles from "./Demo.css";
import cssModules from "react-css-modules";
import IconDemo from "./IconDemo/IconDemo";
import util from "../src/util";
import React, {Component} from "react";
import ReactDom from "react-dom";

class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.demoConfig = {
      "Simple Component": {
        Icon: <IconDemo/>
      }
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.counter = 0;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    var dom = ReactDom.findDOMNode(this);
    this.subgroup = dom.querySelectorAll(".subgroup");
    this.sidebarEle = dom.querySelector("#sidebar");
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  renderDemoConfig() {
    return <div className="row">
      <nav className="col-xs-3 bs-docs-sidebar">
        <ul id="sidebar" className="nav nav-stacked fixed">
          {
            util.mapObject(this.demoConfig, function (v, i) {
              return <li ref={i} key={i}><a href={`#${i}`}>{i}</a>
                {
                  (function () {
                    if (v.$$typeof === undefined) {
                      return <ul className="nav nav-stacked">
                        {
                          util.mapObject(v, function (z, j) {
                            return <li ref={j} key={j}><a href={`#${j}`}>{j}</a></li>;
                          })
                        }
                      </ul>;
                    }
                  })()
                }
              </li>;
            })
          }
        </ul>
      </nav>
      <div className="col-xs-9">
        <h1>Demo - React Components</h1>
        {
          util.mapObject(this.demoConfig, function (v, i) {
            return <section key={i} id={i} className="group">
              <h3>{i}</h3>
              {
                (function () {
                  if (v.$$typeof === undefined) {
                    return util.mapObject(v, function (z, j) {
                      return <div key={j} id={j} className="subgroup">
                        <h4 className="compHeading">{j}</h4>
                        {z}
                      </div>;
                    });
                  } else {
                    return <div id={i} className="subgroup">
                      <h4 className="compHeading">{i}</h4>
                      {v}
                    </div>;
                  }
                })()
              }
            </section>;
          })
        }
      </div>
    </div>;
  }

  handleScroll() {
    this.counter = this.counter + 1;
    if (this.counter % 10 === 0) {
      const winH = window.innerHeight;
      const doc = document;
      const scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
      const scrollBottom = scrollTop + winH;
      var visibleIds = [...this.subgroup].map(function (el) {
        const elTop = el.offsetTop;
        const elBottom = elTop + el.offsetHeight;

        if ((elTop < scrollBottom) && (elBottom > scrollTop)) {
          return el.id;
        } else {
          return undefined;
        }
      }).filter(function (v) {
        return v !== undefined;
      });

      [...this.sidebarEle.querySelectorAll(".active")].forEach(function (ele) {
        ele.classList.remove("active");
      });
      visibleIds.forEach((v) => {
//        if (i === 0) {
//          location.hash = `#${v}`;
//        }
        this.refs[v].classList.add("active");
        if (this.refs[v].parentElement.id !== "sidebar") {
          this.refs[v].parentElement.parentElement.classList.add("active");
        }
      });
    }
  }

  render() {
    return <div className={this.props.className} styleName="container">
      {
        this.renderDemoConfig()
      }
    </div>;
  }
}
export default cssModules(Demo, styles);
