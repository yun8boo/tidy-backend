"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getPageInfo = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var cheerio_1 = __importDefault(require("cheerio"));
exports.getPageInfo = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var metaProps, site_name, title, description, image;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getMetaProps(url)];
            case 1:
                metaProps = _a.sent();
                site_name = resolveSiteName(metaProps);
                title = resolveTitle(metaProps);
                description = resolveDesc(metaProps);
                image = resolveImageUrl(metaProps);
                return [2 /*return*/, { site_name: site_name, title: title, description: description, image: image }];
        }
    });
}); };
var resolveSiteName = function (metaProps) {
    var ogSiteName = getMetaPropContent(metaProps, 'og:site_name');
    if (ogSiteName)
        return ogSiteName;
    return '(No SiteName)';
};
var resolveTitle = function (metaProps) {
    var ogTitle = getMetaPropContent(metaProps, 'og:title');
    if (ogTitle)
        return ogTitle;
    return '(No Title)';
};
var resolveDesc = function (metaProps) {
    var ogDesc = getMetaPropContent(metaProps, 'og:description');
    if (ogDesc)
        return ogDesc;
    return '';
};
var resolveImageUrl = function (metaProps) {
    var ogImage = getMetaPropContent(metaProps, 'og:image');
    if (ogImage)
        return ogImage;
    return '';
};
var getMetaPropContent = function (metaProps, propKey) {
    var mpObj = metaProps.find(function (d, i, arr) {
        return d[propKey];
    });
    if (mpObj)
        return mpObj[propKey];
    return '';
};
var getMetaProps = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, node_fetch_1["default"](url).then(function (res) {
                    if (res.ok) {
                        return res.text();
                    }
                }).then(function (html) {
                    var metaProps = extractMetaProps(html);
                    return metaProps;
                })["catch"](function (e) {
                    throw e;
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
var extractMetaProps = function (html) {
    var $ = cheerio_1["default"].load(html);
    var results = [];
    $('head meta').each(function (i, el) {
        var _a;
        var property = $(el).attr('property');
        var content = $(el).attr('content');
        if (property && content) {
            results.push((_a = {}, _a[property] = content, _a));
        }
    });
    results.sort(function (a, b) {
        if (Object.keys(a)[0] < Object.keys(b)[0])
            return -1;
        if (Object.keys(a)[0] > Object.keys(b)[0])
            return 1;
        return 0;
    });
    return results;
};
//# sourceMappingURL=getPageInfo.js.map