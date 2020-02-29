# utils.js

> 将该文件导入

- 存储对象 session & local <br/>

  _这两个对象都有`set`, `get`, `remove` 三个函数_

  **使用 : 以 local 为例**

  ```javascript
  /**
   * key { String } 键
   * value { Any } 值
   * 存储的时候是什么类型取出的时候就是什么类型 
   */
  local.set("key", "value");
  let something = local.get("key");
  local.remove("key");
  ```
