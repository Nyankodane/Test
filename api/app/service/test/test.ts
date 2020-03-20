import { BaseService } from 'egg-cool-service';

/**
* 服务类描述
*/
export default class TestService extends BaseService {

    /**
    * 方法描述
    * @param param
    */
    async data(query) {
        // console.log(param)
        const { age } = query;
        const sql = `
        SELECT * FROM test a
        WHERE 1=1
        ${this.setSql(age, 'and a.age > ?', [age])}
        `;
        return await this.sqlRenderPage(sql, query)
    }
}