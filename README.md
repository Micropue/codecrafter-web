## 基于vue开发的论坛系统

### 项目部署：

```bash
npm i
npm run dev
```

### 项目`src`目录

1.`/api`为存储类型定义、全局配置、封装接口

​	`config.ts`修改网站cookie配置、数量等。

2.`/assets`为存储项目的静态资源

3.`/components`为存储小型组件「包含相关功能」和自定义组件

4.`/error`错误页面的组价存储位置

5.`/store` 全局状态管理，使用`vuex`（因为`pinia`不好使）

6.`/view`所有页面组件

> [!TIP]
>
> 大部分代码都有注释，一看就懂

### 更新日志

#### 2025-03-10

支持显示搜索历史

添加了登录检测

在`api/config.ts`存储了论坛的相关配置信息

定义了检测登录的API返回数据类型`api/apitypes.ts`

封装了xhr请求函数：`api/xhr.ts`

新增了搜索历史保存功能，最多保存数量可以通过`api/config.ts`来设置

#### 2025-3-11

重启了项目，使用`soberjs`组件库开发。

支持自定义主题、切换深色模式，自适应模式并保存到cookie。显示cookie名称。

添加**关于**功能，通过读取markdown文件的方式渲染，开发者修改markdown即可。

添加新自定义组件：`HeadlineList`使用方法：

| prop | 值                                           | 用途                                                         |
| :--: | -------------------------------------------- | ------------------------------------------------------------ |
| list | 类型：`Array<{name:string,location:number}>` | 显示文章目录并滚动，`name`用于展示字段，`location`表示字段的位置（用于滚动）。 |

在设备宽度低于1200时会隐藏并显示切换显示图标。

添加了404页面。

添加了转场动画

#### 2025-3-12

支持显示与删除搜索历史

添加主页。

添加了加入我们的功能

设置功能区的展示cookie名称改为显示不可控的`switch`组件。

#### 2025-3-13

路由守卫点击个人按钮未登录时会跳转到`/auth/login`。

#### 2025-3-14

修改了目录逻辑，变为`/auth/login` `/auth/register` `/auth/restpwd`

完善了注册和登录系统

#### 2025-3-16

完善了重置密码系统

登录完成后会跳转到`auth`页面。

给隐私政策内添加了一些内容。