import {c as createElement, C as Component} from "./index.c7468b78.js";
import {h as hooks} from "./cf6ed2e0.js";
import {H as He} from "./676b8be8.js";
import "./3bb20657.js";
import "./0591e911.js";
import "./0a77e8e6.js";
import "./75ec77ea.js";
import {N as NextBalloon} from "./5576421d.js";
import "./b5ac2a31.js";
import "./bca3dfe8.js";
import "./6ddac949.js";
import {N as NextInput} from "./2e1eb8ae.js";
import "./b3c1dd91.js";
import "./dbc8bb3f.js";
import "./a759073d.js";
import "./7bdfe4b5.js";
import "./8df6240b.js";
import "./436acc20.js";
import "./76a52747.js";
import "./67d9b842.js";
import {N as NextDatePicker} from "./d555c04a.js";
import "./351d3faf.js";
import {e as exported} from "./2f64e77a.js";
import "./ab9d0c3d.js";
import {S as Select} from "./885c5786.js";
const {Tooltip} = NextBalloon;
const innerButton = /* @__PURE__ */ createElement(exported, {
  className: "btrigger"
}, "Fill in form");
const triggerTooltip = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"}
}, "show tooltip");
const App = () => /* @__PURE__ */ createElement("div", {
  className: "container nested"
}, /* @__PURE__ */ createElement(NextBalloon, {
  id: "inner-a11y-balloon-1",
  autoFocus: true,
  trigger: /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, "Fill in sub-form"),
  popupContainer: (trigger) => trigger.parentNode,
  triggerType: "click"
}, "please input your age:", /* @__PURE__ */ createElement(NextInput, {
  placeholder: "Age",
  size: "small",
  label: "Age :",
  id: "balloon-input-1"
}), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)), "        ", /* @__PURE__ */ createElement(NextBalloon, {
  id: "a11y-balloon",
  type: "primary",
  autoFocus: true,
  trigger: innerButton,
  triggerType: "click"
}, /* @__PURE__ */ createElement(NextBalloon, {
  id: "inner-a11y-balloon",
  autoFocus: true,
  trigger: /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, "Fill in sub-form"),
  popupContainer: (trigger) => trigger.parentNode,
  triggerType: "click"
}, "please input your age:", /* @__PURE__ */ createElement(NextInput, {
  placeholder: "Age",
  size: "small",
  label: "Age :",
  id: "balloon-input-2"
}), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)), /* @__PURE__ */ createElement("br", null), "please input your name:", /* @__PURE__ */ createElement(NextInput, {
  placeholder: "Name",
  size: "small",
  label: "Name :",
  id: "balloon-input-3"
}), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null)), "        ", /* @__PURE__ */ createElement(Tooltip, {
  trigger: triggerTooltip,
  id: "aria-tooltip"
}, /* @__PURE__ */ createElement("p", null, "This is content for tooltip.")));
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(App, null));
}
const Style = He.div`
  .container.nested {
    margin-left: 100px;
    margin-bottom: 50px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const top = /* @__PURE__ */ createElement(exported, {
  id: "top",
  style: {margin: "5px"},
  className: "btrigger"
}, "top");
const right = /* @__PURE__ */ createElement(exported, {
  id: "right",
  style: {margin: "5px"},
  className: "btrigger"
}, "right");
const bottom = /* @__PURE__ */ createElement(exported, {
  id: "bottom",
  style: {margin: "5px"},
  className: "btrigger"
}, "bottom");
const left = /* @__PURE__ */ createElement(exported, {
  id: "left",
  style: {margin: "5px"},
  className: "btrigger"
}, "left");
const topLeft = /* @__PURE__ */ createElement(exported, {
  id: "topLeft",
  style: {margin: "5px"},
  className: "btrigger"
}, "top left");
const topRight = /* @__PURE__ */ createElement(exported, {
  id: "topRight",
  style: {margin: "5px"},
  className: "btrigger"
}, "top right");
const rightTop = /* @__PURE__ */ createElement(exported, {
  id: "rightTop",
  style: {margin: "5px"},
  className: "btrigger"
}, "right top");
const rightBottom = /* @__PURE__ */ createElement(exported, {
  id: "rightBottom",
  style: {margin: "5px"},
  className: "btrigger"
}, "right bottom");
const bottomLeft = /* @__PURE__ */ createElement(exported, {
  id: "bottomLeft",
  style: {margin: "5px"},
  className: "btrigger"
}, "bottom left");
const bottomRight = /* @__PURE__ */ createElement(exported, {
  id: "bottomRight",
  style: {margin: "5px"},
  className: "btrigger"
}, "bottom right");
const leftTop = /* @__PURE__ */ createElement(exported, {
  id: "leftTop",
  style: {margin: "5px"},
  className: "btrigger"
}, "left top");
const leftBottom = /* @__PURE__ */ createElement(exported, {
  id: "leftBottom",
  style: {margin: "5px"},
  className: "btrigger"
}, "left bottom");
const Content = () => /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h4", {
  style: {marginTop: 0}
}, "balloon title"), /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement("p", null, "balloon content"));
const App$1 = () => /* @__PURE__ */ createElement("div", {
  style: {paddingLeft: 320, paddingTop: 100}
}, /* @__PURE__ */ createElement("div", {
  style: {marginLeft: 75}
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: topLeft,
  align: "tl",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: top,
  align: "t",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: topRight,
  align: "tr",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null))), /* @__PURE__ */ createElement("div", {
  style: {width: 80, float: "left"}
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: leftTop,
  align: "lt",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: left,
  align: "l",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: leftBottom,
  align: "lb",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null))), /* @__PURE__ */ createElement("div", {
  style: {width: 80, marginLeft: 290}
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: rightTop,
  align: "rt",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: right,
  align: "r",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: rightBottom,
  align: "rb",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null))), /* @__PURE__ */ createElement("div", {
  style: {marginLeft: 80, clear: "both"}
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: bottomLeft,
  align: "bl",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: bottom,
  align: "b",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null)), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: bottomRight,
  align: "br",
  alignEdge: true,
  triggerType: "click",
  style: {width: 300}
}, /* @__PURE__ */ createElement(Content, null))));
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const defaultTrigger = /* @__PURE__ */ createElement(exported, {
  className: "btrigger",
  style: {margin: "5px"}
}, "default style");
const disabledTrigger = /* @__PURE__ */ createElement(exported, {
  disabled: true,
  className: "btrigger",
  style: {margin: "5px"}
}, "default style");
const primary = /* @__PURE__ */ createElement(exported, {
  className: "btrigger",
  style: {margin: "5px"}
}, "primary style");
const Demo = () => /* @__PURE__ */ createElement("div", {
  className: "container"
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: defaultTrigger,
  closable: false
}, "default"), /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  trigger: primary,
  triggerType: "click"
}, "primary"), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: disabledTrigger,
  closable: false
}, "disabeled default"));
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
class App$2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  hide() {
    this.setState({
      visible: false
    });
  }
  handleVisibleChange(visible) {
    this.setState({visible});
  }
  onClose() {
    console.log("onClose doing!");
  }
  afterClose() {
    console.log("afterClose doing!");
  }
  render() {
    const visibleTrigger = /* @__PURE__ */ createElement(exported, {
      type: "primary",
      style: {margin: "5px"}
    }, "click to popup the card");
    const clickTrigger = /* @__PURE__ */ createElement(exported, {
      type: "primary",
      style: {margin: "5px"}
    }, "hover to popup the card");
    const content2 = /* @__PURE__ */ createElement("div", null, "click the button", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("a", {
      style: {right: 0},
      id: "confirmBtn",
      onClick: this.hide.bind(this)
    }, "confirm"), /* @__PURE__ */ createElement("a", {
      style: {marginLeft: "4px"},
      id: "cancelBtn",
      onClick: this.hide.bind(this)
    }, "cancel"));
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBalloon, {
      trigger: visibleTrigger,
      triggerType: "click",
      visible: this.state.visible,
      onVisibleChange: this.handleVisibleChange.bind(this)
    }, content2), /* @__PURE__ */ createElement(NextBalloon, {
      trigger: clickTrigger,
      triggerType: "hover",
      onClose: this.onClose.bind(this),
      afterClose: this.afterClose.bind(this)
    }, content2));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(App$2, null));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const showSelect = /* @__PURE__ */ createElement(exported, {
  className: "btrigger"
}, "Show Select");
const showDatePicker = /* @__PURE__ */ createElement(exported, {
  className: "btrigger"
}, "Show DatePicker");
const innerButton$1 = /* @__PURE__ */ createElement(exported, {
  className: "btrigger"
}, "Show Inner Balloon");
const dateValue = hooks("2018-01-01", "YYYY-MM-DD", true);
const App$3 = () => /* @__PURE__ */ createElement("div", {
  className: "container nested"
}, /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  autoFocus: true,
  trigger: showSelect,
  closable: false,
  triggerType: "click"
}, /* @__PURE__ */ createElement(Select, {
  dataSource: ["apple", "banana", "orange"],
  followTrigger: true
})), "         ", /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  autoFocus: true,
  trigger: showDatePicker,
  closable: false,
  triggerType: "click"
}, /* @__PURE__ */ createElement(NextDatePicker, {
  defaultValue: dateValue,
  followTrigger: true
})), "         ", /* @__PURE__ */ createElement(NextBalloon, {
  type: "primary",
  autoFocus: true,
  trigger: innerButton$1,
  closable: false,
  triggerType: "click"
}, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: /* @__PURE__ */ createElement(exported, {
    type: "primary"
  }, "please click"),
  followTrigger: true,
  triggerType: "click"
}, "nesting balloon content")));
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(App$3, null));
}
const Style$4 = He.div`
  .container.nested {
    margin-bottom: 50px;
  }
`;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
class App$4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  onClose() {
    console.log("onClose doing!");
  }
  onClick() {
    this.setState({visible: true});
  }
  render() {
    const visibleTrigger = /* @__PURE__ */ createElement(exported, {
      onClick: this.onClick.bind(this),
      type: "primary"
    }, "click to pupup the card");
    const content2 = /* @__PURE__ */ createElement("div", null, "content");
    return /* @__PURE__ */ createElement("div", {
      style: {marginBottom: "100px"}
    }, /* @__PURE__ */ createElement(NextBalloon, {
      trigger: visibleTrigger,
      triggerType: "click",
      visible: this.state.visible,
      onClose: this.onClose.bind(this)
    }, content2));
  }
}
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(App$4, null));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const Tooltip$1 = NextBalloon.Tooltip;
const top$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "top",
  className: "btrigger"
}, "top");
const right$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "right",
  className: "btrigger"
}, "right");
const bottom$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "bottom",
  className: "btrigger"
}, "bottom");
const left$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "left",
  className: "btrigger"
}, "left");
const topLeft$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "topLeft",
  className: "btrigger"
}, "top left");
const topRight$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "topRight",
  className: "btrigger"
}, "top right");
const rightTop$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "rightTop",
  className: "btrigger"
}, "right top");
const rightBottom$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "rightBottom",
  className: "btrigger"
}, "right bottom");
const bottomLeft$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "bottomLeft",
  className: "btrigger"
}, "bottom left");
const bottomRight$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "bottomRight",
  className: "btrigger"
}, "bottom right");
const leftTop$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "leftTop",
  className: "btrigger"
}, "left top");
const leftBottom$1 = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"},
  id: "leftBottom",
  className: "btrigger"
}, "left bottom");
const App$5 = () => /* @__PURE__ */ createElement("div", {
  style: {paddingLeft: 220, paddingTop: 100}
}, /* @__PURE__ */ createElement("div", {
  style: {marginLeft: 75}
}, /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: topLeft$1,
  align: "tl"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: top$1,
  align: "t"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: topRight$1,
  align: "tr"
}, "text text")), /* @__PURE__ */ createElement("div", {
  style: {width: 80, float: "left"}
}, /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: leftTop$1,
  align: "lt"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: left$1,
  align: "l"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: leftBottom$1,
  align: "lb"
}, "text text")), /* @__PURE__ */ createElement("div", {
  style: {width: 80, marginLeft: 290}
}, /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: rightTop$1,
  align: "rt"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: right$1,
  align: "r"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: rightBottom$1,
  align: "rb"
}, "text text")), /* @__PURE__ */ createElement("div", {
  style: {marginLeft: 80, clear: "both"}
}, /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: bottomLeft$1,
  align: "bl"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: bottom$1,
  align: "b"
}, "text text"), /* @__PURE__ */ createElement(Tooltip$1, {
  trigger: bottomRight$1,
  align: "br"
}, "text text")));
function DemoComponent$6() {
  return /* @__PURE__ */ createElement(Style$6, null, /* @__PURE__ */ createElement(App$5, null));
}
const Style$6 = He.div`
  .code-box-demo .sui-btn {
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$6
});
const content = /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "content"));
const MoveTarget = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"}
}, "hover");
const ClickTarget = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"}
}, "click");
const FocusTarget = /* @__PURE__ */ createElement(exported, {
  style: {margin: "5px"}
}, "focus");
const HoverInputTarget = /* @__PURE__ */ createElement(NextInput, {
  placeholder: "hover",
  style: {marginRight: "20px"}
});
const ClickInputTarget = /* @__PURE__ */ createElement(NextInput, {
  placeholder: "click",
  style: {marginRight: "20px"}
});
const FocusInputTarget = /* @__PURE__ */ createElement(NextInput, {
  placeholder: "focus"
});
const App$6 = () => /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextBalloon, {
  trigger: MoveTarget,
  triggerType: "hover"
}, content), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: ClickTarget,
  triggerType: "click"
}, content), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: FocusTarget,
  triggerType: "focus"
}, content), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: HoverInputTarget,
  triggerType: "hover"
}, content), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: ClickInputTarget,
  triggerType: "click"
}, content), /* @__PURE__ */ createElement(NextBalloon, {
  trigger: FocusInputTarget,
  triggerType: "focus"
}, content));
function DemoComponent$7() {
  return /* @__PURE__ */ createElement(Style$7, null, /* @__PURE__ */ createElement(App$6, null));
}
const Style$7 = He.div``;
var m7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$7
});
const modules = {};
modules["_accessibility"] = m0;
modules["_alignment"] = m1;
modules["_basic"] = m2;
modules["_control"] = m3;
modules["_nested"] = m4;
modules["_onCloseClick"] = m5;
modules["_tooltip"] = m6;
modules["_triggerType"] = m7;
export default modules;
