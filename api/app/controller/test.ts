import { BaseController } from 'egg-cool-controller';
import router from 'egg-cool-router';

/**
* 控制器功能描述
*/
@router.prefix('/test', ['add', 'delete', 'update', 'info', 'list', 'page'])
export default class TestController extends BaseController {
    init() {
        this.setEntity(this.ctx.repo.test.Test);
        this.setService(this.service.test.test)
        // this.setService(this.ctx.service.xxx);
        console.log(this.ctx.repo)

        //筛选分页的数据
        this.setPageOption({
            keyWordLikeFields: ['name'],
            fieldEq: ['name'] //字段等等于？
        })
    }

    /**
    * 其他接口
    */
    // @router.post('/xxx')
    // async xxx() {
    //     await this.OpService.xxx(this.getBody());
    //     this.res();
    // }
    @router.get('/data')
    public async data() {
        // this.res({ data: await this.service.test.test.data(this.getQuery()) })
        this.res({data: await this.OpService.data(this.getQuery())})
    }
}