import {GithubOutlined} from '@ant-design/icons';

import './Footer.less';

export function Footer() {
    return (
        <div className="footer">
            <p>
                Bytes Security
                <br />
                <a href="#/license"><GithubOutlined /> 比赛平台开放源代码</a>
                <br />
                前端BVersion 1.6 后端BVersion 0.12
            </p>
        </div>
    );
}