"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const midway_1 = require("midway");
let UserModel = class UserModel {
    async findUserProfile() {
        // Similar: return await query('select * from user where uid = ?', uid);
        return {
            name: '淘小宝',
            department: '技术部',
            avatar: 'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
            userid: 10001,
        };
    }
};
UserModel = __decorate([
    midway_1.provide('userModel')
], UserModel);
exports.UserModel = UserModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbW9kZWwvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1DQUFpQztBQUlqQyxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0lBQ3BCLEtBQUssQ0FBQyxlQUFlO1FBQ25CLHdFQUF3RTtRQUN4RSxPQUFPO1lBQ0wsSUFBSSxFQUFFLEtBQUs7WUFDWCxVQUFVLEVBQUUsS0FBSztZQUNqQixNQUFNLEVBQ0osa0VBQWtFO1lBQ3BFLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBWFksU0FBUztJQURyQixnQkFBTyxDQUFDLFdBQVcsQ0FBQztHQUNSLFNBQVMsQ0FXckI7QUFYWSw4QkFBUyJ9