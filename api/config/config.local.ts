import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {};
    config.cluster = {
        listen: {
            port: 7001,
            hostname: '0.0.0.0',
        },
    };
    config.typeorm = {
        client: {
            type: 'mysql',
            host: '127.0.0.1',
            port: 3308,
            username: 'test',
            password: '123456',
            database: 'test',
            synchronize: true,
            logging: false,
            charset: 'utf8mb4'
        },
    };
    return config;
};
