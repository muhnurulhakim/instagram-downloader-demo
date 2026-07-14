var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-W5OwlB/functionsWorker-0.514998666870289.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var btch = (function(exports) {
  "use strict";
  var configData = {
    config: {
      baseUrl: "https://backend1.tioo.eu.org"
    },
    issues: "https://github.com/hostinger-bot/btch-downloader/issues"
  };
  var site_default = configData;
  var watermark = {
    /** The developer handle used in responses. */
    dev: "@prm2.0"
  };
  var config_default = watermark;
  var package_default = {
    version: "6.0.37"
  };
  var API_URL = site_default.config.baseUrl;
  var developer = config_default.dev;
  var issues = site_default.issues;
  var VERSION = package_default.version;
  async function httpGet(endpoint, param) {
    const url = `${API_URL}/${endpoint}?url=${encodeURIComponent(param)}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Request failed`);
    }
    try {
      return await res.json();
    } catch {
      return await res.text();
    }
  }
  __name(httpGet, "httpGet");
  __name2(httpGet, "httpGet");
  var wm = developer;
  async function igdl2(url) {
    try {
      const data = await httpGet("igdl", url);
      if (!data || data.length === 0) {
        return { developer: wm, status: false, message: "No results found", note: `Please report issues to ${issues}` };
      }
      const result = [];
      for (const item of data) {
        result.push({
          thumbnail: (item == null ? void 0 : item.thumbnail) || "",
          url: (item == null ? void 0 : item.url) || ""
        });
      }
      return {
        developer: wm,
        status: true,
        result
      };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(igdl2, "igdl2");
  __name2(igdl2, "igdl");
  async function ttdl(url) {
    var _a, _b, _c, _d, _e;
    try {
      const data = await httpGet("ttdl", url);
      return {
        developer: wm,
        status: true,
        title: (_a = data == null ? void 0 : data.title) != null ? _a : void 0,
        title_audio: (_b = data == null ? void 0 : data.title_audio) != null ? _b : void 0,
        thumbnail: (_c = data == null ? void 0 : data.thumbnail) != null ? _c : void 0,
        video: (_d = data == null ? void 0 : data.video) != null ? _d : [],
        audio: (_e = data == null ? void 0 : data.audio) != null ? _e : []
      };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(ttdl, "ttdl");
  __name2(ttdl, "ttdl");
  async function twitter(url) {
    var _a, _b;
    try {
      const data = await httpGet("twitter", url);
      return {
        developer: wm,
        status: true,
        title: (_a = data == null ? void 0 : data.title) != null ? _a : void 0,
        url: (_b = data == null ? void 0 : data.url) != null ? _b : void 0
      };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(twitter, "twitter");
  __name2(twitter, "twitter");
  async function youtube(url) {
    var _a, _b, _c, _d, _e;
    try {
      const data = await httpGet("youtube", url);
      return {
        developer: wm,
        status: true,
        title: (_a = data == null ? void 0 : data.title) != null ? _a : void 0,
        thumbnail: (_b = data == null ? void 0 : data.thumbnail) != null ? _b : void 0,
        author: (_c = data == null ? void 0 : data.author) != null ? _c : void 0,
        mp3: (_d = data == null ? void 0 : data.mp3) != null ? _d : void 0,
        mp4: (_e = data == null ? void 0 : data.mp4) != null ? _e : void 0
      };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(youtube, "youtube");
  __name2(youtube, "youtube");
  async function fbdown(url) {
    var _a, _b;
    try {
      const data = await httpGet("fbdown", url);
      return {
        developer: wm,
        status: true,
        Normal_video: (_a = data == null ? void 0 : data.Normal_video) != null ? _a : void 0,
        HD: (_b = data == null ? void 0 : data.HD) != null ? _b : void 0
      };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(fbdown, "fbdown");
  __name2(fbdown, "fbdown");
  async function mediafire(url) {
    console.warn("[btch-downloader] mediafire() is deprecated and no longer actively maintained.");
    try {
      const data = await httpGet("mediafire", url);
      return { developer: wm, status: true, result: data != null ? data : void 0 };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(mediafire, "mediafire");
  __name2(mediafire, "mediafire");
  async function capcut(url) {
    try {
      const data = await httpGet("capcut", url);
      return { developer: wm, status: true, ...data };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(capcut, "capcut");
  __name2(capcut, "capcut");
  async function gdrive(url) {
    try {
      const data = await httpGet("gdrive", url);
      return { developer: wm, status: true, result: data != null ? data : void 0 };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(gdrive, "gdrive");
  __name2(gdrive, "gdrive");
  async function pinterest(query) {
    try {
      const data = await httpGet("pinterest", query);
      return { developer: wm, status: true, result: data != null ? data : void 0 };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(pinterest, "pinterest");
  __name2(pinterest, "pinterest");
  async function aio(url) {
    console.warn("[btch-downloader] aio() is deprecated and no longer actively maintained.");
    try {
      const data = await httpGet("aio", url);
      return {
        developer: wm,
        status: true,
        ...data
      };
    } catch (err) {
      return {
        developer: wm,
        status: false,
        message: err.message,
        note: `Please report issues to ${issues}`
      };
    }
  }
  __name(aio, "aio");
  __name2(aio, "aio");
  async function xiaohongshu(url) {
    try {
      const data = await httpGet("rednote", url);
      const actualData = data.result || data;
      if (!actualData || !actualData.noteId && !actualData.notes) {
        return { developer: wm, status: false, message: "No results found", note: `Please report issues to ${issues}` };
      }
      return { developer: wm, status: true, result: actualData };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(xiaohongshu, "xiaohongshu");
  __name2(xiaohongshu, "xiaohongshu");
  async function xiaohongshuProfile(url) {
    try {
      const data = await httpGet("rednote-profile", url);
      const actualData = data.result || data;
      if (!actualData || !actualData.user && !actualData.stats) {
        return { developer: wm, status: false, message: "No results found", note: `Please report issues to ${issues}` };
      }
      return { developer: wm, status: true, result: actualData };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(xiaohongshuProfile, "xiaohongshuProfile");
  __name2(xiaohongshuProfile, "xiaohongshuProfile");
  async function douyin(url) {
    try {
      const data = await httpGet("douyin", url);
      return { developer: wm, status: true, result: data != null ? data : void 0 };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(douyin, "douyin");
  __name2(douyin, "douyin");
  async function snackvideo(url) {
    try {
      const data = await httpGet("snackvideo", url);
      return { developer: wm, status: true, result: data != null ? data : void 0 };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(snackvideo, "snackvideo");
  __name2(snackvideo, "snackvideo");
  async function cocofun(url) {
    try {
      const data = await httpGet("cocofun", url);
      return { developer: wm, status: true, result: data != null ? data : void 0 };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(cocofun, "cocofun");
  __name2(cocofun, "cocofun");
  async function spotify(url) {
    var _a;
    try {
      const data = await httpGet("spotify", url);
      if (data == null ? void 0 : data.res_data) {
        if (data.res_data.server === "rapidapi") delete data.res_data.server;
        if (data.res_data.message === "success") delete data.res_data.message;
        if (data.res_data.message) delete data.res_data.message;
        delete data.message;
      }
      return { developer: wm, status: true, result: (_a = data == null ? void 0 : data.res_data) != null ? _a : void 0 };
    } catch (err) {
      return {
        developer: wm,
        status: false,
        message: err.message,
        note: `Please report issues to ${issues}`
      };
    }
  }
  __name(spotify, "spotify");
  __name2(spotify, "spotify");
  async function yts(query) {
    try {
      const data = await httpGet("yts", query);
      return { developer: wm, status: true, result: data != null ? data : void 0 };
    } catch (err) {
      return { developer: wm, status: false, message: err.message, note: `Please report issues to ${issues}` };
    }
  }
  __name(yts, "yts");
  __name2(yts, "yts");
  async function soundcloud(url) {
    try {
      const data = await httpGet("soundcloud", url);
      return {
        developer: wm,
        status: true,
        result: data != null ? data : void 0
      };
    } catch (err) {
      return {
        developer: wm,
        status: false,
        message: err.message,
        note: `Please report issues to ${issues}`
      };
    }
  }
  __name(soundcloud, "soundcloud");
  __name2(soundcloud, "soundcloud");
  async function threads(url) {
    try {
      const data = await httpGet("threads", url);
      return {
        developer: wm,
        status: true,
        result: data != null ? data : void 0
      };
    } catch (err) {
      return {
        developer: wm,
        status: false,
        message: err.message,
        note: `Please report issues to ${issues}`
      };
    }
  }
  __name(threads, "threads");
  __name2(threads, "threads");
  async function kuaishou(url) {
    try {
      const data = await httpGet("kuaishou", url);
      if (!data || !data.success) {
        return {
          developer: wm,
          status: false,
          message: "No results found or failed to fetch",
          note: `Please report issues to ${issues}`
        };
      }
      return {
        developer: wm,
        status: true,
        result: data
      };
    } catch (err) {
      return {
        developer: wm,
        status: false,
        message: err.message,
        note: `Please report issues to ${issues}`
      };
    }
  }
  __name(kuaishou, "kuaishou");
  __name2(kuaishou, "kuaishou");
  var igdl22 = igdl2;
  var ttdl2 = ttdl;
  var twitter2 = twitter;
  var youtube2 = youtube;
  var fbdown2 = fbdown;
  var mediafire2 = mediafire;
  var capcut2 = capcut;
  var gdrive2 = gdrive;
  var pinterest2 = pinterest;
  var aio2 = aio;
  var xiaohongshu2 = xiaohongshu;
  var xiaohongshuProfile2 = xiaohongshuProfile;
  var douyin2 = douyin;
  var snackvideo2 = snackvideo;
  var cocofun2 = cocofun;
  var spotify2 = spotify;
  var yts2 = yts;
  var soundcloud2 = soundcloud;
  var threads2 = threads;
  var kuaishou2 = kuaishou;
  exports.VERSION = VERSION;
  exports.aio = aio2;
  exports.capcut = capcut2;
  exports.cocofun = cocofun2;
  exports.developer = developer;
  exports.douyin = douyin2;
  exports.fbdown = fbdown2;
  exports.gdrive = gdrive2;
  exports.igdl = igdl22;
  exports.issues = issues;
  exports.kuaishou = kuaishou2;
  exports.mediafire = mediafire2;
  exports.pinterest = pinterest2;
  exports.snackvideo = snackvideo2;
  exports.soundcloud = soundcloud2;
  exports.spotify = spotify2;
  exports.threads = threads2;
  exports.ttdl = ttdl2;
  exports.twitter = twitter2;
  exports.xiaohongshu = xiaohongshu2;
  exports.xiaohongshuProfile = xiaohongshuProfile2;
  exports.youtube = youtube2;
  exports.yts = yts2;
  return exports;
})({});
async function onRequestPost(context) {
  const { request } = context;
  try {
    const body = await request.json();
    const rawUrl = body.url;
    if (typeof rawUrl !== "string" || rawUrl.length > 300) {
      return new Response(JSON.stringify({ status: "error", message: "URL tidak valid atau terlalu panjang." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    let cleanUrl = "";
    try {
      const parsedUrl = new URL(rawUrl);
      if (!["instagram.com", "www.instagram.com"].includes(parsedUrl.hostname)) {
        return new Response(JSON.stringify({ status: "error", message: "Hanya URL Instagram yang didukung." }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
      cleanUrl = `${parsedUrl.origin}${parsedUrl.pathname}`;
    } catch (e) {
      return new Response(JSON.stringify({ status: "error", message: "Format URL tidak valid." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log(`[Cloudflare API] Memproses download: ${cleanUrl}`);
    const response = await (void 0)(cleanUrl);
    if (!response || !response.status || !response.result || response.result.length === 0) {
      throw new Error("Gagal mengambil media dari Instagram.");
    }
    const resultData = response.result;
    if (resultData.length === 1) {
      return new Response(JSON.stringify({
        status: "success",
        data: {
          status: "redirect",
          url: resultData[0].url,
          thumbnail: resultData[0].thumbnail
        }
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        status: "success",
        data: {
          status: "picker",
          picker: resultData.map((item) => ({
            url: item.url,
            thumb: item.thumbnail
          }))
        }
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Downloader API error:", error);
    return new Response(JSON.stringify({ status: "error", message: "Gagal mengekstrak media. Mungkin akun di-private atau terjadi kesalahan server." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequestPost, "onRequestPost");
__name2(onRequestPost, "onRequestPost");
var routes = [
  {
    routePath: "/api/download",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
__name2(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name2(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// ../../../.nvm/versions/node/v24.14.0/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// ../../../.nvm/versions/node/v24.14.0/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-fISeqN/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = middleware_loader_entry_default;

// ../../../.nvm/versions/node/v24.14.0/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-fISeqN/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=functionsWorker-0.514998666870289.js.map
