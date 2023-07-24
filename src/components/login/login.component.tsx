import Button from 'components/button/button.component';
import LabelAndInput from 'components/label-and-input/label-and-input.component';
import React from 'react';

const Login = () => {
    const [userAccount, setUserAccount] = React.useState({
        account: '',
        password: '',
    });

    const handleUserAccountOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        setUserAccount({
            ...userAccount,
            [name]: value,
        });
    };

    return (
        <div className=" bg-white h-1/3 rounded border-x-neutral-700 w-1/3 flex flex-col justify-center">
            <div className="p-10">
                <LabelAndInput
                    className="mb-10"
                    name="account"
                    onChange={handleUserAccountOnChange}
                    value={userAccount.account}
                >
                    帳號
                </LabelAndInput>
                <LabelAndInput
                    className="mb-3"
                    imputType="password"
                    name="password"
                    onChange={handleUserAccountOnChange}
                    value={userAccount.password}
                >
                    密碼
                </LabelAndInput>
            </div>
            <div className="flex justify-center mt-5">
                <Button className="w-1/2 text-xl">登入</Button>
            </div>
        </div>
    );
};

export default Login;
