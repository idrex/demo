"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
module.exports = (appInfo) => {
    const config = (exports = {});
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1541510581780_3944';
    config.middleware = [];
    config.view = {
        templateViewEngine: 'nunjucks',
        root: path.join(appInfo.appDir, 'src/app/view'),
        mapping: {
            '.html': 'nunjucks'
        }
    };
    config.assets = {
        publicPath: 'public'
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBRTdCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFZLEVBQUUsRUFBRTtJQUNoQyxNQUFNLE1BQU0sR0FBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUVuQyx1RUFBdUU7SUFDdkUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBRW5ELE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBRXZCLE1BQU0sQ0FBQyxJQUFJLEdBQUc7UUFDWixrQkFBa0IsRUFBRSxVQUFVO1FBQzlCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDO1FBQy9DLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxVQUFVLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIn0=