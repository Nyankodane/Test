import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'egg-cool-entity';

/**
* 数据模型描述
* 测试表
*/
@Entity({ name: 'test' })
export default class TestTest extends BaseEntity {
    // 字段描述
    // @Index({ unique: true })
    //名称
    @Column()
    name: string;

    //年龄
    @Column()
    age: number;
}