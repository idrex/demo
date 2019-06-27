"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
module.exports = (appInfo) => {
    const config = (exports = {});
    config.assets = {
        publicPath: 'public',
        devServer: {
            autoPort: true,
            command: 'cross-env umi dev --port={port}',
            debug: true,
            portPath: path.join(appInfo.baseDir, '../run/assetsPort'),
            env: {
                APP_ROOT: path.join(__dirname, '../../../client'),
                BROWSER: 'none',
                SOCKET_SERVER: 'http://127.0.0.1:{port}'
            }
        }
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmxvY2FsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9jb25maWcubG9jYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFFN0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQVksRUFBRSxFQUFFO0lBQ2hDLE1BQU0sTUFBTSxHQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRW5DLE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxpQ0FBaUM7WUFDMUMsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDO1lBQ3pELEdBQUcsRUFBRTtnQkFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSxNQUFNO2dCQUNmLGFBQWEsRUFBRSx5QkFBeUI7YUFDekM7U0FDRjtLQUNGLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMifQ==