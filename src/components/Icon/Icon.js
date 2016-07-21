import React from "react";
import util from "../../util";
import styles from "./Icon.css";
import cssModules from "react-css-modules";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import uuid from "uuid";

var Icon = function (props) {
  var style = util.clone(props.style);
  if (props.fast === true) {
    style.animationDuration = "0.5s";
  }
  var mainContent = <i
    style={style}
    onClick={props.onClick}
    className={`fa bn fa-fw fa-${props.icon} fa-${props.size} ${util.iff(props.spin, " fa-spin", "")}
      ${util.iff(props.className === undefined, "", props.className)}`}></i>;

  if (props.tooltip !== "") {
    return <OverlayTrigger placement={props.tooltipPlacement} overlay={<Tooltip id={`Icon_${uuid.v4()}`}>{props.tooltip}</Tooltip>}>
      {mainContent}
    </OverlayTrigger>;
  } else {
    return <p>Hello World!</p>;
  }
};

Icon.propTypes = {
  style: React.PropTypes.object,
  spin: React.PropTypes.bool,
  fast: React.PropTypes.bool,
  icon: React.PropTypes.string.isRequired,
  tooltip: React.PropTypes.any,
  size: React.PropTypes.string,
  onClick: React.PropTypes.func,
  tooltipPlacement: React.PropTypes.string
};

Icon.defaultProps = {
  style: {},
  spin: false,
  fast: false,
  icon: "",
  tooltip: "",
  tooltipPlacement: "right",
  size: "normal",
  onClick: function () {
    //TODO
  }
};

export default cssModules(Icon, styles);
