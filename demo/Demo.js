import styles from "./Demo.css";
import cssModules from "react-css-modules";
import TableDemo from "./TableDemo/TableDemo";
import IconDemo from "./IconDemo/IconDemo";
import LoaderDemo from "./LoaderDemo/LoaderDemo";
import HotelsoftLogo from "./HotelsoftLogo/HotelsoftLogo";
import BreadCrumbDemo from "./BreadCrumbDemo/BreadCrumbDemo";
import CenterDemo from "./CenterDemo/CenterDemo";
import LangDemo from "./LangDemo/LangDemo";
import PageDemo from "./PageDemo/PageDemo";
import FullScreenButtonDemo from "./FullScreenButtonDemo/FullScreenButtonDemo";
import WidgetDemo from "./WidgetDemo/WidgetDemo";
import FlagDemo from "./FlagDemo/FlagDemo";
import MenuDropDownDemo from "./MenuDropDownDemo/MenuDropDownDemo";
import LanguageDropDownDemo from "./LanguageDropDownDemo/LanguageDropDownDemo";
import PropertyDropDownDemo from "./PropertyDropDownDemo/PropertyDropDownDemo";
import FormLevelDateDemo from "./FormLevelDateDemo/FormLevelDateDemo";
import ApiLoaderDemo from "./ApiLoaderDemo/ApiLoaderDemo";
import StoreLoaderDemo from "./StoreLoaderDemo/StoreLoaderDemo";
import FormLevelSelectDemo from "./FormLevelSelectDemo/FormLevelSelectDemo";
import PrevNextNavigationDemo from "./PrevNextNavigationDemo/PrevNextNavigationDemo";
import LeftNavMenuDemo from "./LeftNavMenuDemo/LeftNavMenuDemo";
import FloatLeftDemo from "./FloatLeftDemo/FloatLeftDemo";
import FloatRightDemo from "./FloatRightDemo/FloatRightDemo";
import BandChartDemo from "./BandChartDemo/BandChartDemo";
import FormLevelInputDemo from "./FormLevelInputDemo/FormLevelInputDemo";
import FormLevelSliderDemo from "./FormLevelSliderDemo/FormLevelSliderDemo";
import SpinLoaderDemo from "./SpinLoaderDemo/SpinLoaderDemo";
import TabsDemo from "./TabsDemo/TabsDemo";
import RadioButtonDemo from "./RadioButtonDemo/RadioButtonDemo";
import LinkWithTooltipDemo from "./LinkWithTooltipDemo/LinkWithTooltipDemo";
import FormLevelRadioGroupDemo from "./FormLevelRadioGroupDemo/FormLevelRadioGroupDemo";
import CheckboxDemo from "./CheckboxDemo/CheckboxDemo";
import FormLevelCheckBoxDemo from "./FormLevelCheckBoxDemo/FormLevelCheckBoxDemo";
import FormLevelMultiSelectDemo from "./FormLevelMultiSelectDemo/FormLevelMultiSelectDemo";
import DragDemo from "./DragDemo/DragDemo";
import util from "@hotelsoft/utils";
import React, {Component} from "react";
import ReactDom from "react-dom";
import {StateViewerPopup} from "@hotelsoft/react-components";

class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.demoConfig = {
      "Simple Form Component": {
        CheckBox: <CheckboxDemo/>,
        RadioButton: <RadioButtonDemo/>
      },
      "Form Level Components": {
        FormLevelInput: <FormLevelInputDemo/>,
        FormLevelDate: <FormLevelDateDemo/>,
        FormLevelSelect: <FormLevelSelectDemo/>,
        FormLevelCheckBox: <FormLevelCheckBoxDemo/>,
        FormLevelRadioGroup: <FormLevelRadioGroupDemo />,
        FormLevelSlider: <FormLevelSliderDemo/>,
        FormLevelMultiSelect: <FormLevelMultiSelectDemo/>
      },
      MenuDropDown: <MenuDropDownDemo />,
      Tabs: <TabsDemo/>,
      Table: <TableDemo/>,
      ApiLoader: <ApiLoaderDemo/>,
      StoreLoader: <StoreLoaderDemo/>,
      Loader: {
        Loader: <LoaderDemo />,
        SpinLoader: <SpinLoaderDemo />
      },
      Icon: <IconDemo/>,
      HotelsoftLogo: <HotelsoftLogo/>,
      BreadCrumb: <BreadCrumbDemo/>,
      "CSS Level": {
        Drag: <DragDemo/>,
        Center: <CenterDemo/>,
        FloatLeft: <FloatLeftDemo/>,
        FloatRight: <FloatRightDemo/>,
        LinkWithTooltip: <LinkWithTooltipDemo />
      },
      Page: <PageDemo/>,
      FullScreenButton: <FullScreenButtonDemo/>,
      Widget: <WidgetDemo/>,
      Flag: <FlagDemo/>,
      LanguageDropDown: <LanguageDropDownDemo/>,
      LeftNavMenu: <LeftNavMenuDemo/>,
      PrevNextNavigation: <PrevNextNavigationDemo/>,
      Lang: <LangDemo/>,
      PropertyDropDown: <PropertyDropDownDemo/>,
      BandChart: <BandChartDemo/>
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
      <StateViewerPopup/>
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
