let cred = {
    username: '',
    password: '',
    usernameInvalid: 'abc@test.com',
    passwordInvalid: 'zyz',
}

if (process.env.ENV == 'dev') {
    cred = {
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
    }
};
if (process.env.ENV == 'qa') {
    cred = {
        username: 'tuan.nq.sutrix@gmail.com',
        password: 'ABCD@1234',
    }
};

export default cred;