"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.prisma = void 0;
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
// import router
var articles_1 = __importDefault(require("./routers/articles"));
var auth_1 = __importDefault(require("./routers/auth"));
var ogp_1 = __importDefault(require("./routers/ogp"));
exports.prisma = new client_1.PrismaClient();
var app = express_1["default"]();
var port = process.env.PORT || 8000;
app.use(helmet_1["default"]());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(cors_1["default"]());
app.use('/articles', articles_1["default"]);
app.use('/auth', auth_1["default"]);
app.use('/ogp', ogp_1["default"]);
app.listen(port, function () {
    console.log("listening on port: " + port);
});
//# sourceMappingURL=index.js.map