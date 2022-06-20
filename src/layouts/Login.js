import React, { useState, useEffect } from 'react'
import axios from 'axios';
import LoginForm from './LoginForm';
import '.../../../src/assets/css/login.css';

function Login() {
    // const [dataUser, setDataUser] = useState([]); // Panelden gelen kullanıcı adını tutmak için
    // const [dataUserPwd, setDataUserPwd] = useState([]); // Panelden gelen kullanıcı şifresini tutuyoruz

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => {
    //             setDataUser(res.data[0].name); // İsim bilgisini çekiyoruz
    //             setDataUserPwd(res.data[0].username); // Username bilgisini çekiyoruz - Şifre
    //         })
    //         .catch(err => console.log(err))
    // }, [dataUser]);

    // console.log("Gelen Data: ", dataUser, "-", dataUserPwd); // Veri Akışını takip ediyoruz

    const adminUser = { // Kullanıcı bilgilerini Login' değişkenine aktarıyoruz.
        username: "a",
        password: "a",
        version: "v1.0.4"
    };

    const [user, setUser] = useState({ username: '', password: '', version: "v1.0.4" }); // email and password are empty strings 
    const [error, setError] = useState(""); // Hata mesajının görünümünün boş olduğu durumdur.

    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/posts', { user })
            .then(res => {
                console.log("Post Bilgisi: ",res.data.user);
            })
            .catch(err => console.log(err))
    }, [user]);

    const Login = details => {
        console.log("Login Bilgileri: ", details);

        if (details.username === adminUser.username && details.password === adminUser.password) {
            console.log("Giriş Başarılı");

            setUser({ // İsim ve email bilgilerini setUser fonksiyonuna gönderiyoruz. 
                username: details.username,
                password: details.name
            });
        }
        else { // Hata mesajının görünümünün güncellendiği durumdur.
            console.log("Hatalı Giriş");
            setError("Hatalı Giriş");
        }
    };

    // const Logout = () => { // Logout is a function
    //     setUser({ username: "", password: "", version: "v1.0.4" });
    // };

    const yönlendir = () => {
        window.location.href = "http://localhost:3000/admin/dashboard";
    }

    return (
        <div className="login">
            {(user.username !== "") ? ( // Bilgiler doğru ise sisteme login yapabiliyoruz.
                <div>
                    {/* <h1>Hoşgediniz,  <span>{user.username}</span></h1>
                    <a href="/admin/dashboard">2. Aşamalı Doğruma İçin Tıklayınız</a>
                    <button onClick={Logout}>Logout</button> */}
                    {yönlendir()}
                </div>
            ) : (
                <LoginForm error={error} Login={Login} /> // Giriş yapılmadıysa LoginForm componentini göster
            )}
        </div>

    );
}

export default Login;