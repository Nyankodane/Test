import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'egg-cool-entity';

/**
* 数据模型描述
*/
@Entity({ name: 'user' })
export default class XXxxx extends BaseEntity {
    // 字段描述
    // @Index({ unique: true })
    //用户名
    @Column()
    username: string;

    //密码
    @Column()
    password: string;
}