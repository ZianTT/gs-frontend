import {Alert, Button} from 'antd';
import {GithubOutlined, WindowsOutlined, HomeOutlined} from '@ant-design/icons';

import {to_auth} from '../utils';

import './LoginOther.less';

export function LoginOther() {
    return (
        <div className="slim-container">
            <div className="login-instruction">
                <p><b>选择登录方式</b></p>
                <p>
                    <Button size="large" onClick={()=>to_auth('github/login')}>
                        <GithubOutlined /> GitHub
                    </Button>
                    &emsp;
                    <Button size="large" onClick={()=>to_auth('microsoft/login')}>
                        <WindowsOutlined /> Microsoft
                    </Button>
                </p>
            </div>
        </div>
    );
}