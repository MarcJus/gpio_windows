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
var child_process_1 = require("child_process");
var commands_1 = __importDefault(require("./commands"));
/**
 *
 * @param command Commande a executer
 * @returns Informations sur la commande
 */
function executeCommand(command) {
    var result = {
        error: false,
        stderr: false,
        message: ""
    };
    child_process_1.exec(command, function (error, stdout, stderr) {
        if (error != null) {
            result.error = true;
            result.message = error.message;
            console.log("error");
        }
        if (stderr) {
            result.stderr = true;
        }
        result.message = stdout;
    });
    console.log(result);
    return result;
}
// function checkCommand(command: string): boolean{
//     if(command.startsWith("Erreur commande : "))
//         return false;
//     if(command.startsWith("Stderr : "))
//         return false;
//     return true;
// }
/**
 * @async
 * @param key Touche entr??e
 * @returns Informations sur le retour de la commande
 */
function default_1(key) {
    return __awaiter(this, void 0, void 0, function () {
        var result, command, success;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = { error: false, stderr: false, message: "" };
                    command = commands_1["default"][key];
                    if (!(typeof command == "string")) return [3 /*break*/, 1];
                    console.log(command);
                    command = command;
                    result = executeCommand(command);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, command()];
                case 2:
                    success = _a.sent();
                    if (!success) {
                        result = {
                            error: true,
                            stderr: false,
                            message: ""
                        };
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/, result];
            }
        });
    });
}
exports["default"] = default_1;
