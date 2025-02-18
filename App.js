import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div>
      <header>
          <div class="headeritems">
            <img class="logo" src="/logoITDE-withoutbg.png" alt="Logo" />
          </div>
      </header>

      <div>
          <div class="dangnhap">
              <h1>Đăng nhập</h1>
              <h4>Đăng nhập với vai trò là:</h4>
              <form>
                  <select id="" name="">
                      <option value="Sinh viên">Sinh viên</option>
                      <option value="Giảng viên">Giảng viên</option>
                  </select>
              </form>
              <br></br>
              <input type="text" id="username" name="username" placeholder='Tên đăng nhập' required></input>
              <br></br>
              <br></br>
              <input type="password" id="password" name="password" placeholder='Mật khẩu' required></input>
              <i>Quên mật khẩu?</i>
              <br></br>
              <p class="nutdangnhap">Đăng nhập</p>
              <br></br>
              <p class="nutdangky">Chưa có tài khoản? Đăng ký</p>
              <h6>Điều khoản sử dụng</h6>

          </div>

      </div>

      <footer>

      </footer>
    </div>
  );
}

export default App;



