"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const faction_1 = __importDefault(require("./faction"));
exports.default = redux_1.combineReducers({
  faction: faction_1.default
});
