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
let UserController = class UserController {
    /**
     * GET /user/profile
     */
    async profile() {
        const res = await this.service.profile();
        this.ctx.body = res.data;
    }
    /**
     * POST /user/login
     */
    async login() {
        const { username, password } = this.ctx.query;
        if (username === 'admin' && password === 'admin') {
            this.ctx.body = {
                status: 200,
                statusText: 'ok',
                currentAuthority: 'admin',
            };
        }
        else if (username === 'user' && password === 'user') {
            this.ctx.body = {
                status: 200,
                statusText: 'ok',
                currentAuthority: 'user',
            };
        }
        else {
            this.ctx.body = {
                status: 401,
                statusText: 'unauthorized',
                currentAuthority: 'guest',
            };
        }
    }
    /**
     * POST /user/register
     */
    async register() {
        this.ctx.body = {
            status: 200,
            statusText: 'ok',
            currentAuthority: 'user',
        };
    }
    /**
     * POST /user/logout
     */
    async logout() {
        this.ctx.body = {
            status: 200,
            statusText: 'ok',
            currentAuthority: 'guest',
        };
    }
};
__decorate([
    midway_1.inject(),
    __metadata("design:type", Object)
], UserController.prototype, "ctx", void 0);
__decorate([
    midway_1.inject('userService'),
    __metadata("design:type", Object)
], UserController.prototype, "service", void 0);
__decorate([
    midway_1.get('/profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "profile", null);
__decorate([
    midway_1.post('/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    midway_1.post('/register'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    midway_1.post('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
UserController = __decorate([
    midway_1.provide(),
    midway_1.controller('/user')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlci91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXlFO0FBS3pFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFRekI7O09BRUc7SUFFSCxLQUFLLENBQUMsT0FBTztRQUNYLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUU5QyxJQUFJLFFBQVEsS0FBSyxPQUFPLElBQUksUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDZCxNQUFNLEVBQUUsR0FBRztnQkFDWCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsZ0JBQWdCLEVBQUUsT0FBTzthQUMxQixDQUFDO1NBQ0g7YUFBTSxJQUFJLFFBQVEsS0FBSyxNQUFNLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDZCxNQUFNLEVBQUUsR0FBRztnQkFDWCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsZ0JBQWdCLEVBQUUsTUFBTTthQUN6QixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO2dCQUNkLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFVBQVUsRUFBRSxjQUFjO2dCQUMxQixnQkFBZ0IsRUFBRSxPQUFPO2FBQzFCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxRQUFRO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLE1BQU07U0FDekIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLE9BQU87U0FDMUIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBakVDO0lBREMsZUFBTSxFQUFFOzsyQ0FDSTtBQUdiO0lBREMsZUFBTSxDQUFDLGFBQWEsQ0FBQzs7K0NBQ0E7QUFNdEI7SUFEQyxZQUFHLENBQUMsVUFBVSxDQUFDOzs7OzZDQUlmO0FBTUQ7SUFEQyxhQUFJLENBQUMsUUFBUSxDQUFDOzs7OzJDQXVCZDtBQU1EO0lBREMsYUFBSSxDQUFDLFdBQVcsQ0FBQzs7Ozs4Q0FPakI7QUFNRDtJQURDLGFBQUksQ0FBQyxTQUFTLENBQUM7Ozs7NENBT2Y7QUFuRVUsY0FBYztJQUYxQixnQkFBTyxFQUFFO0lBQ1QsbUJBQVUsQ0FBQyxPQUFPLENBQUM7R0FDUCxjQUFjLENBb0UxQjtBQXBFWSx3Q0FBYyJ9