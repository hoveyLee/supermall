import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000
  });

  instance.interceptors.request.use(
    config => {
      // console.log(res);
      return config;
    },
    err => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );

  return instance(config);
}


// 函数调用时 | 数据会被压入函数栈（保存函数中的所有变量）
// 函数调用完时 | 数据会被弹出函数栈（释放函数中的所有变量）

// function test() {
//   const list = ["苹果", "橘子", "葡萄"];
//   console.log(list);
// }
//
// test()
