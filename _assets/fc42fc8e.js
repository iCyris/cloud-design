import {c as createElement} from "./index.c7468b78.js";
import {H as He} from "./676b8be8.js";
import "./3bb20657.js";
import "./0591e911.js";
import "./0a77e8e6.js";
import "./75ec77ea.js";
import "./b5ac2a31.js";
import "./b3c1dd91.js";
import "./dbc8bb3f.js";
import "./a759073d.js";
import "./7bdfe4b5.js";
import {M as MenuButton} from "./9ec6f8e1.js";
import "./ab9d0c3d.js";
const {Item} = MenuButton;
const menu = ["Undo", "Redo", "Cut", "Copy", "Paste"].map((item) => /* @__PURE__ */ createElement(Item, {
  key: item
}, item));
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(MenuButton, {
    label: "Document Edit"
  }, menu), "  ", /* @__PURE__ */ createElement(MenuButton, {
    type: "primary",
    label: "Document Edit"
  }, menu), "  ", /* @__PURE__ */ createElement(MenuButton, {
    type: "secondary",
    label: "Document Edit"
  }, menu), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement(MenuButton, {
    text: true,
    label: "Document Edit"
  }, menu), "  ", /* @__PURE__ */ createElement(MenuButton, {
    text: true,
    type: "primary",
    label: "Document Edit"
  }, menu), "  ", /* @__PURE__ */ createElement(MenuButton, {
    text: true,
    type: "secondary",
    label: "Document Edit"
  }, menu)));
}
const Style = He.div``;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
const {Item: Item$1, Group, Divider} = MenuButton;
function selectItem(id) {
  console.log(id);
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(MenuButton, {
    type: "primary",
    label: "Document Edit",
    onItemClick: selectItem
  }, /* @__PURE__ */ createElement(Item$1, {
    key: "undo"
  }, "Undo"), /* @__PURE__ */ createElement(Item$1, {
    key: "redo"
  }, "Redo"), /* @__PURE__ */ createElement(Divider, null), /* @__PURE__ */ createElement(Group, null, /* @__PURE__ */ createElement(Item$1, {
    key: "cut"
  }, "Cut"), /* @__PURE__ */ createElement(Item$1, {
    key: "copy"
  }, "Copy"), /* @__PURE__ */ createElement(Item$1, {
    key: "paste"
  }, "Paste"))));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const {Item: Item$2} = MenuButton;
const menu$1 = ["Undo", "Redo", "Cut", "Copy", "Paste"].map((item) => /* @__PURE__ */ createElement(Item$2, {
  key: item
}, item));
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(MenuButton, {
    label: "Document Edit",
    selectMode: "single",
    onSelect: (keys) => console.log(keys)
  }, menu$1)));
}
const Style$2 = He.div``;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
const {Item: Item$3} = MenuButton;
const menu$2 = ["Undo", "Redo", "Cut", "Copy", "Paste"].map((item) => /* @__PURE__ */ createElement(Item$3, {
  key: item
}, item));
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(MenuButton, {
    label: "Edit Document",
    size: "small"
  }, menu$2), " ", "   ", /* @__PURE__ */ createElement(MenuButton, {
    label: "Edit Document",
    size: "medium"
  }, menu$2), " ", "   ", /* @__PURE__ */ createElement(MenuButton, {
    label: "Edit Document",
    size: "large"
  }, menu$2)));
}
const Style$3 = He.div``;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const modules = {};
modules["_basic"] = m0;
modules["_menu"] = m1;
modules["_select"] = m2;
modules["_size"] = m3;
export default modules;
