// 全局类型声明文件
// 用于声明项目中用到的全局类型、接口、枚举等

// 全局接口声明
interface Window {
  // 可以在这里添加 window 对象的扩展属性
  // 例如：customProperty: string;
}

// 全局类型别名
type Theme = 'light' | 'dark';
type Size = 'small' | 'medium' | 'large';

// 全局枚举
declare enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

// 全局常量类型
declare const __APP_VERSION__: string;
declare const __BUILD_TIME__: string;

// 全局函数类型
declare function globalFunction(param: string): void;

// 全局命名空间
declare namespace GlobalTypes {
  interface ApiResponse<T = any> {
    code: number;
    message: string;
    data: T;
  }
  
  interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
  }
  
  interface PaginationParams {
    page: number;
    pageSize: number;
    total?: number;
  }
}

// 扩展第三方库的类型（如果需要）
declare module 'some-third-party-library' {
  interface SomeInterface {
    customProperty: string;
  }
}

// 全局变量声明
declare var globalConfig: {
  apiBaseUrl: string;
  appName: string;
  version: string;
};

// 全局模块声明（用于处理没有类型定义的第三方库）
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
