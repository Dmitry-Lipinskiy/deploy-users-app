import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Context from '../../Context/Context';
import http from '../../http';
import { ILogin } from './ILogin';

const loginData: ILogin = {
  username: 'mor_2314',
  password: '83r5^_',
}

// const loginData: ILogin = {
//     username: '',
//     password: ''
// }

const Auth = () => {

  const { setIsAuth, setOpenModal } = useContext(Context);
  const [value, setValue] = useState<ILogin>(loginData);

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post('https://fakestoreapi.com/auth/login', value).then((res) => {
      setValue(loginData);
      localStorage.setItem('token', res.data.token);
      setIsAuth(true);
      setOpenModal(false);
      console.log(res);
    }).catch((err) => {
        setIsAuth(false);
        console.log(err);
      });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    // console.log(event);
    setValue({ ...value, [field]: event.target.value });
  };

  return (
    <div>
      <form className="mb-3" onSubmit={(event) => login(event)}>
        {Object.keys(loginData).map((field) => (
          <div className="mb-3" key={field}>
            <label htmlFor={field} className="form-label">
              {field}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={`${field}`}
              id={field}
              value={value[field as keyof ILogin]}
              onChange={(event) => onChange(event)}
            />
          </div>
        ))}
        <button className="btn btn-success" onClick={() => login}>
          Sing in
        </button>
      </form>
      {/* {`isAuth - ${isAuth}`} */}
    </div>
  );

};

export default Auth;
