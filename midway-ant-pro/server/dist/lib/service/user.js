"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const midway_1 = require("midway");
let UserService = class UserService {
    async profile() {
        const data = await this.model.findUserProfile();
        return { data };
    }
};
__decorate([
    midway_1.inject('userModel'),
    __metadata("design:type", Object)
], UserService.prototype, "model", void 0);
UserService = __decorate([
    midway_1.provide('userService')
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmljZS91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXlDO0FBSXpDLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFJdEIsS0FBSyxDQUFDLE9BQU87UUFDWCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBO0FBTkM7SUFEQyxlQUFNLENBQUMsV0FBVyxDQUFDOzswQ0FDZDtBQUZLLFdBQVc7SUFEdkIsZ0JBQU8sQ0FBQyxhQUFhLENBQUM7R0FDVixXQUFXLENBUXZCO0FBUlksa0NBQVcifQ==