import {L as createContext, M as forwardRef, c as createElement, C as Component, N as getAugmentedNamespace, x as createCommonjsModule, K as require$$0, z as getDefaultExportFromCjs, R as React} from "./index.c7468b78.js";
import "./4ba7b312.js";
import {i as stylis_min, m as memoize, u as unitlessKeys, H as He} from "./676b8be8.js";
import "./3bb20657.js";
import "./0a77e8e6.js";
import "./75ec77ea.js";
import "./b5ac2a31.js";
import {N as NextInput} from "./2e1eb8ae.js";
import "./dc83d567.js";
import "./da31bc8d.js";
import {N as NextForm} from "./82482e0f.js";
import "./93628a1f.js";
import {N as NextLoading} from "./50ab3bec.js";
import {e as exported} from "./2f64e77a.js";
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var inheritsLoose = _inheritsLoose;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      var _tag = createStyleElement(this);
      var before;
      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }
      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64;
        sheet.insertRule(rule, isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var delimiter = "/*|*/";
var needle = delimiter + "}";
function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + "}");
  }
}
var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet2(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    case 1: {
      switch (content.charCodeAt(0)) {
        case 64: {
          Sheet.current.insert(content + ";");
          return "";
        }
        case 108: {
          if (content.charCodeAt(2) === 98) {
            return "";
          }
        }
      }
      break;
    }
    case 2: {
      if (ns === 0)
        return content + delimiter;
      break;
    }
    case 3: {
      switch (ns) {
        case 102:
        case 112: {
          Sheet.current.insert(selectors[0] + content);
          return "";
        }
        default: {
          return content + (at === 0 ? delimiter : "");
        }
      }
    }
    case -2: {
      content.split(needle).forEach(toSheet);
    }
  }
};
var createCache = function createCache2(options) {
  if (options === void 0)
    options = {};
  var key = options.key || "css";
  var stylisOptions;
  if (options.prefix !== void 0) {
    stylisOptions = {
      prefix: options.prefix
    };
  }
  var stylis = new stylis_min(stylisOptions);
  var inserted = {};
  var container;
  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function(node) {
      var attrib = node.getAttribute("data-emotion-" + key);
      attrib.split(" ").forEach(function(id) {
        inserted[id] = true;
      });
      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }
  var _insert;
  {
    stylis.use(options.stylisPlugins)(ruleSheet);
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;
      stylis(selector, serialized.styles);
      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= k >>> 24;
    h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles = interpolation.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 && !couldBeSelectorInterpolation ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);
    if (stringMode) {
      styles += strings[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
};
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var EmotionCacheContext = createContext(typeof HTMLElement !== "undefined" ? createCache() : null);
var ThemeContext = createContext({});
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  var render3 = function render4(props, ref) {
    return createElement(EmotionCacheContext.Consumer, null, function(cache) {
      return func(props, cache, ref);
    });
  };
  return forwardRef(render3);
};
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var hasOwnProperty = Object.prototype.hasOwnProperty;
var render = function render2(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme);
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles);
  var rules = insertStyles(cache, serialized, typeof type === "string");
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && true) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = createElement(type, newProps);
  return ele;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  if (typeof props.css === "function") {
    return createElement(ThemeContext.Consumer, null, function(theme) {
      return render(cache, props, theme, ref);
    });
  }
  return render(cache, props, null, ref);
});
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty.call(props, "css")) {
    return createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  createElementArgArray[1] = newProps;
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return createElement.apply(null, createElementArgArray);
};
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles = props.styles;
  if (typeof styles === "function") {
    return createElement(ThemeContext.Consumer, null, function(theme) {
      var serialized2 = serializeStyles([styles(theme)]);
      return createElement(InnerGlobal, {
        serialized: serialized2,
        cache
      });
    });
  }
  var serialized = serializeStyles([styles]);
  return createElement(InnerGlobal, {
    serialized,
    cache
  });
});
var InnerGlobal = /* @__PURE__ */ function(_React$Component) {
  inheritsLoose(InnerGlobal2, _React$Component);
  function InnerGlobal2(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }
  var _proto = InnerGlobal2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    });
    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + '="' + this.props.serialized.name + '"]');
    if (node !== null) {
      this.sheet.tags.push(node);
    }
    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }
    this.insertStyles();
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };
  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== void 0) {
      insertStyles(this.props.cache, this.props.serialized.next, true);
    }
    if (this.sheet.tags.length) {
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }
    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };
  _proto.render = function render3() {
    return null;
  };
  return InnerGlobal2;
}(Component);
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var ClassNames = withEmotionCache(function(props, context) {
  return createElement(ThemeContext.Consumer, null, function(theme) {
    var hasRendered = false;
    var css2 = function css3() {
      if (hasRendered && false) {
        throw new Error("css can only be used during render");
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var serialized = serializeStyles(args, context.registered);
      {
        insertStyles(context, serialized, false);
      }
      return context.key + "-" + serialized.name;
    };
    var cx = function cx2() {
      if (hasRendered && false) {
        throw new Error("cx can only be used during render");
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return merge(context.registered, css2, classnames(args));
    };
    var content = {
      css: css2,
      cx,
      theme
    };
    var ele = props.children(content);
    hasRendered = true;
    return ele;
  });
});
var core_browser_esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CacheProvider,
  ClassNames,
  Global,
  ThemeContext,
  jsx,
  keyframes,
  withEmotionCache,
  css
});
var _core = /* @__PURE__ */ getAugmentedNamespace(core_browser_esm);
var skeleton = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Skeleton2;
  exports.skeletonStyles = exports.skeletonKeyframes = exports.defaultHighlightColor = exports.defaultBaseColor = void 0;
  var _react = _interopRequireDefault(require$$0);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(source, true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"]);
    _templateObject = function _templateObject2() {
      return data;
    };
    return data;
  }
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
  }
  var defaultBaseColor = "#eee";
  exports.defaultBaseColor = defaultBaseColor;
  var defaultHighlightColor = "#f5f5f5";
  exports.defaultHighlightColor = defaultHighlightColor;
  var skeletonKeyframes = (0, _core.keyframes)(_templateObject());
  exports.skeletonKeyframes = skeletonKeyframes;
  var skeletonStyles = /* @__PURE__ */ (0, _core.css)("background-color:", defaultBaseColor, ";background-image:linear-gradient( 90deg,", defaultBaseColor, ",", defaultHighlightColor, ",", defaultBaseColor, " );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;");
  exports.skeletonStyles = skeletonStyles;
  function Skeleton2(_ref) {
    var count = _ref.count, duration = _ref.duration, width = _ref.width, Wrapper = _ref.wrapper, height = _ref.height, circle = _ref.circle, customStyle = _ref.style, customClassName = _ref.className;
    var elements = [];
    for (var i = 0; i < count; i++) {
      var style = {};
      if (width !== null) {
        style.width = width;
      }
      if (height !== null) {
        style.height = height;
      }
      if (width !== null && height !== null && circle) {
        style.borderRadius = "50%";
      }
      var className = "react-loading-skeleton";
      if (customClassName) {
        className += " " + customClassName;
      }
      elements.push((0, _core.jsx)("span", {
        key: i,
        className,
        css: /* @__PURE__ */ (0, _core.css)(skeletonStyles, " animation:", skeletonKeyframes, " ", duration, "s ease-in-out infinite;label:Skeleton;"),
        style: _objectSpread({}, customStyle, {}, style)
      }, "‌"));
    }
    return (0, _core.jsx)("span", null, Wrapper ? elements.map(function(element, i2) {
      return (0, _core.jsx)(Wrapper, {
        key: i2
      }, element, "‌");
    }) : elements);
  }
  Skeleton2.defaultProps = {
    count: 1,
    duration: 1.2,
    width: null,
    wrapper: null,
    height: null,
    circle: false
  };
});
var skeletonTheme = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _react = _interopRequireWildcard(require$$0);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SkeletonTheme = /* @__PURE__ */ function(_Component) {
    _inherits(SkeletonTheme2, _Component);
    function SkeletonTheme2() {
      _classCallCheck(this, SkeletonTheme2);
      return _possibleConstructorReturn(this, _getPrototypeOf(SkeletonTheme2).apply(this, arguments));
    }
    _createClass(SkeletonTheme2, [{
      key: "render",
      value: function render3() {
        var _this$props = this.props, color = _this$props.color, highlightColor = _this$props.highlightColor, children = _this$props.children;
        var themeStyles = /* @__PURE__ */ (0, _core.css)(".react-loading-skeleton{background-color:", color, ";background-image:linear-gradient( 90deg,", color, ",", highlightColor, ",", color, " );};label:SkeletonTheme;");
        return (0, _core.jsx)("div", {
          css: themeStyles
        }, children);
      }
    }]);
    return SkeletonTheme2;
  }(_react.Component);
  exports.default = SkeletonTheme;
  _defineProperty(SkeletonTheme, "defaultProps", {
    color: skeleton.defaultBaseColor,
    highlightColor: skeleton.defaultHighlightColor
  });
});
var lib = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _skeleton.default;
    }
  });
  Object.defineProperty(exports, "SkeletonTheme", {
    enumerable: true,
    get: function get() {
      return _skeletonTheme.default;
    }
  });
  var _skeleton = _interopRequireDefault(skeleton);
  var _skeletonTheme = _interopRequireDefault(skeletonTheme);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
});
var Skeleton = /* @__PURE__ */ getDefaultExportFromCjs(lib);
function DemoComponent() {
  return /* @__PURE__ */ createElement(Style, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("div", null, "LTR", /* @__PURE__ */ createElement(NextLoading, {
    tip: "加载中..."
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test"))), /* @__PURE__ */ createElement("div", null, "RTL", /* @__PURE__ */ createElement(NextLoading, {
    tip: "加载中...",
    rtl: true
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test")))));
}
const Style = He.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
`;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent
});
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
    this.state = {
      visible: false
    };
  }
  onClick() {
    this.setState({visible: !this.state.visible});
  }
  render() {
    return /* @__PURE__ */ createElement("span", null, /* @__PURE__ */ createElement(NextLoading, {
      visible: this.state.visible,
      fullScreen: true,
      shape: "fusion-reactor",
      safeNode: this.btn,
      onVisibleChange: this.onClose.bind(this)
    }, /* @__PURE__ */ createElement(exported, {
      onClick: this.onClick.bind(this),
      ref: (ref) => this.btn = ref
    }, "Full Screen")));
  }
}
function DemoComponent$1() {
  return /* @__PURE__ */ createElement(Style$1, null, /* @__PURE__ */ createElement(App, null));
}
const Style$1 = He.div``;
var m1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$1
});
const indicator1 = /* @__PURE__ */ createElement("div", {
  className: "load-container load1"
}, /* @__PURE__ */ createElement("div", {
  className: "loader"
}, "loading..."));
const indicator7 = /* @__PURE__ */ createElement("div", {
  className: "load-container load7"
}, /* @__PURE__ */ createElement("div", {
  className: "loader"
}, "loading..."));
function DemoComponent$2() {
  return /* @__PURE__ */ createElement(Style$2, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextLoading, {
    tip: "default animation"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test")), /* @__PURE__ */ createElement(NextLoading, {
    indicator: indicator1
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test")), /* @__PURE__ */ createElement(NextLoading, {
    indicator: indicator7
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test"))));
}
const Style$2 = He.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }

  /* start copy from here */

  .load-container {
    margin: 0 auto;
    position: relative;
  }

  /* animation 1 */
  .load1 .loader,
  .load1 .loader:before,
  .load1 .loader:after {
    background: #5584ff;
    color: #5584ff;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  .load1 .loader:before,
  .load1 .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .load1 .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load1 .loader {
    text-indent: -9999em;
    margin: 0 auto !important;
    position: relative;
    font-size: 11px;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .load1 .loader:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  /* animation 2 */
  .load7 .loader:before,
  .load7 .loader:after,
  .load7 .loader {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    top: -36px;
  }
  .load7 .loader {
    margin: 0 auto !important;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .load7 .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load7 .loader:after {
    left: 3.5em;
  }
  .load7 .loader:before,
  .load7 .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em #5584ff;
    }
    40% {
      box-shadow: 0 2.5em 0 0 #5584ff;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em #5584ff;
    }
    40% {
      box-shadow: 0 2.5em 0 0 #5584ff;
    }
  }
`;
var m2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$2
});
function DemoComponent$3() {
  return /* @__PURE__ */ createElement(Style$3, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextLoading, {
    tip: "normal(size default large)"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test")), /* @__PURE__ */ createElement(NextLoading, {
    tip: "large",
    size: "large"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test")), /* @__PURE__ */ createElement(NextLoading, {
    tip: "medium",
    size: "medium"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test"))));
}
const Style$3 = He.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`;
var m3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$3
});
const Demo = (props) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    style: {width: 400}
  }, /* @__PURE__ */ React.createElement(Skeleton, {
    count: 5
  })), /* @__PURE__ */ React.createElement("p", null, "本骨架屏组件导出自", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.npmjs.com/package/react-loading-skeleton",
    target: "_blank"
  }, "react-loading-skeleton"), "，更多用法请查阅它的文档。"));
};
var m4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: Demo
});
const FormItem = NextForm.Item;
const layout = {
  labelCol: {
    fixedSpan: 4
  },
  wrapperCol: {
    span: 18
  }
};
class App$1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  setVisible(visible) {
    this.setState({
      visible
    });
  }
  render() {
    return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextLoading, {
      visible: this.state.visible,
      shape: "fusion-reactor"
    }, /* @__PURE__ */ createElement(NextForm, {
      style: {width: 500}
    }, /* @__PURE__ */ createElement(FormItem, {
      label: "Username",
      ...layout
    }, /* @__PURE__ */ createElement(NextInput, null)), /* @__PURE__ */ createElement(FormItem, {
      label: "Password",
      ...layout
    }, /* @__PURE__ */ createElement(NextInput, {
      htmlType: "password",
      placeholder: "please input"
    })), /* @__PURE__ */ createElement(FormItem, {
      label: "Detail",
      ...layout
    }, /* @__PURE__ */ createElement(NextInput, {
      multiple: true
    })))), /* @__PURE__ */ createElement("div", {
      style: {paddingLeft: 80}
    }, /* @__PURE__ */ createElement(exported, {
      onClick: this.setVisible.bind(this, true),
      type: "primary"
    }, "Submit"), /* @__PURE__ */ createElement(exported, {
      onClick: this.setVisible.bind(this, false),
      style: {marginLeft: 5}
    }, "Cancel")));
  }
}
function DemoComponent$4() {
  return /* @__PURE__ */ createElement(Style$4, null, /* @__PURE__ */ createElement(App$1, null));
}
const Style$4 = He.div``;
var m5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$4
});
function DemoComponent$5() {
  return /* @__PURE__ */ createElement(Style$5, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(NextLoading, {
    tip: "default"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test")), /* @__PURE__ */ createElement(NextLoading, {
    tip: "right",
    tipAlign: "right"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test")), /* @__PURE__ */ createElement(NextLoading, {
    tip: "bottom",
    tipAlign: "bottom"
  }, /* @__PURE__ */ createElement("div", {
    className: "demo"
  }, "test"))));
}
const Style$5 = He.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`;
var m6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DemoComponent$5
});
const modules = {};
modules["_basic"] = m0;
modules["_fullscreen"] = m1;
modules["_indicator"] = m2;
modules["_size"] = m3;
modules["_skeleton"] = m4;
modules["_state"] = m5;
modules["_tipAlign"] = m6;
export default modules;
