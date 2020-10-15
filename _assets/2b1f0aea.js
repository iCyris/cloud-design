import {c as createElement, C as Component} from "./index.c7468b78.js";
import {H as He} from "./676b8be8.js";
import "./3bb20657.js";
import "./0591e911.js";
import "./0a77e8e6.js";
import {N as NextIcon} from "./75ec77ea.js";
import "./b5ac2a31.js";
import "./6ddac949.js";
import "./2e1eb8ae.js";
import "./b3c1dd91.js";
import "./dbc8bb3f.js";
import "./a759073d.js";
import "./7bdfe4b5.js";
import "./8df6240b.js";
import "./436acc20.js";
import {T as Timeline} from "./1d0cf187.js";
import "./ab9d0c3d.js";
import {S as Select} from "./885c5786.js";
const TimelineItem = Timeline.Item;
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement(Timeline, null, /* @__PURE__ */ createElement(TimelineItem, {
    title: "Receipt",
    state: "process"
  }), /* @__PURE__ */ createElement(TimelineItem, {
    title: "Ship"
  }), /* @__PURE__ */ createElement(TimelineItem, {
    title: "Order"
  })));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const TimelineItem$1 = Timeline.Item;
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(Timeline, null, /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Sign",
    content: "[Hangzhou] has received the sign, the signer is Alibaba Post Office, thank you for using STO, looking forward to serving you again",
    time: "2016-06-10 10:30:00",
    state: "process"
  }), /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Delivery",
    content: "[Hangzhou]Express has reached Hangzhou Hangzhou Binjiang Company",
    time: "2016-06-10 09:30:00"
  }), /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Delivery",
    content: "[Hangzhou] Zhejiang Hangzhou Binjiang Company dispatches members for you",
    time: "2016-06-10 09:03:00"
  }), /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Transport",
    content: "[Hangzhou] Zhejiang Hangzhou Transshipment Center has been issued",
    time: "2016-06-10 06:10:00"
  }), /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Transport",
    content: "[Dongguan City] Guangdong Dongguan Transshipment Center has been issued",
    time: "2016-06-09 18:00:00"
  }), /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Processing",
    content: "[Dongguan City] Shentong Express Guangdong Fenggang Branch of Guangdong Province",
    time: "2016-06-09 16:12:00"
  }), /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Processing",
    content: "[Dongguan City] The merchant is informing the express company to insert",
    time: "2016-06-09 14:00:00"
  }), /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Processing",
    content: "[Dongguan City] Your order to be picked",
    time: "2016-06-09 10:12:19"
  }), /* @__PURE__ */ createElement(TimelineItem$1, {
    title: "Processing",
    content: "[Dongguan] Your order starts processing",
    time: "2016-06-09 10:01:09",
    icon: "atm"
  })));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const TimelineItem$2 = Timeline.Item;
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement(Timeline, null, /* @__PURE__ */ createElement(TimelineItem$2, {
    title: "Receipt",
    state: "process",
    icon: "smile",
    time: "2017-10-21"
  }), /* @__PURE__ */ createElement(TimelineItem$2, {
    title: "Ship",
    dot: /* @__PURE__ */ createElement("span", {
      className: "custom-node"
    }, " 😂 "),
    state: "success",
    time: "2017-10-22"
  }), /* @__PURE__ */ createElement(TimelineItem$2, {
    title: "Order",
    dot: /* @__PURE__ */ createElement(NextIcon, {
      type: "success",
      size: "xl",
      style: {color: "#1DC11D"}
    }),
    content: "Congratulations, successful orders!",
    time: "2017-10-23"
  })));
}
const Style$2 = He.div`
  .custom-node {
    color: #1dc11d;
    position: relative;
    left: 3px;
    font-size: 14px;
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const TimelineItem$3 = Timeline.Item;
class Demo extends Component {
  constructor(props) {
    super(props);
    this.onTimelineAnimation = (value) => {
      this.setState({timelineAnimation: value});
    };
    this.state = {
      timelineAnimation: true
    };
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", {
      className: "custom-step-option"
    }, /* @__PURE__ */ createElement(Select, {
      placeholder: "Whether to start animation",
      onChange: this.onTimelineAnimation,
      className: "custom-select",
      defaultValue: true
    }, [true, false].map((item, index) => /* @__PURE__ */ createElement(Select.Option, {
      value: item,
      key: index
    }, item ? "Animation on" : "Animation off")))), /* @__PURE__ */ createElement(Timeline, {
      animation: this.state.timelineAnimation,
      fold: [
        {foldArea: [1, 2], foldShow: false},
        {foldArea: [5], foldShow: false}
      ]
    }, /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Sign",
      content: "[Hangzhou] has received the sign, the signer is Alibaba Post Office, thank you for using STO, looking forward to serving you again",
      time: "2016-06-10 10:30:00",
      state: "process"
    }), /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Delivery",
      content: "[Hangzhou]Express has reached Hangzhou Hangzhou Binjiang Company",
      time: "2016-06-10 09:30:00"
    }), /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Delivery",
      content: "[Hangzhou] Zhejiang Hangzhou Binjiang Company dispatches members for you",
      time: "2016-06-10 09:03:00"
    }), /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Transport",
      content: "[Hangzhou] Zhejiang Hangzhou Transshipment Center has been issued",
      time: "2016-06-10 06:10:00"
    }), /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Transport",
      content: "[Dongguan City] Guangdong Dongguan Transshipment Center has been issued",
      time: "2016-06-09 18:00:00"
    }), /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Processing",
      content: "[Dongguan City] Shentong Express Guangdong Fenggang Branch of Guangdong Province",
      time: "2016-06-09 16:12:00"
    }), /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Processing",
      content: "[Dongguan City] The merchant is informing the express company to insert",
      time: "2016-06-09 14:00:00"
    }), /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Processing",
      content: "[Dongguan City] Your order to be picked",
      time: "2016-06-09 10:12:19"
    }), /* @__PURE__ */ createElement(TimelineItem$3, {
      title: "Processing",
      content: "[Dongguan] Your order starts processing",
      time: "2016-06-09 10:01:09"
    })));
  }
}
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement(Demo, null));
}
const Style$3 = He.div`
  .custom-step-option {
    margin-bottom: 20px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const TimelineItem$4 = Timeline.Item;
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(Timeline, null, /* @__PURE__ */ createElement(TimelineItem$4, {
    title: "Cloudy",
    time: "2016-06-10 10:30:00",
    state: "process"
  }), /* @__PURE__ */ createElement(TimelineItem$4, {
    title: "Sunny",
    time: "2016-06-11",
    state: "success"
  }), /* @__PURE__ */ createElement(TimelineItem$4, {
    title: "Rainy",
    time: "2016-06-09",
    state: "error"
  })));
}
const Style$4 = He.div``;
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
const TimelineItem$5 = Timeline.Item;
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement(Timeline, null, /* @__PURE__ */ createElement(TimelineItem$5, {
    title: "Sign",
    state: "process",
    timeLeft: "2016-10-03"
  }), /* @__PURE__ */ createElement(TimelineItem$5, {
    title: "Ship",
    timeLeft: "2016-10-02"
  }), /* @__PURE__ */ createElement(TimelineItem$5, {
    title: "Order",
    timeLeft: "2016-10-01"
  })));
}
const Style$5 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const modules = {};
modules["_basic"] = m0;
modules["_content"] = m1;
modules["_custom"] = m2;
modules["_fold"] = m3;
modules["_state"] = m4;
modules["_timeLeft"] = m5;
export default modules;
