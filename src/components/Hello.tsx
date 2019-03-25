import * as React from 'react';

/**
 * 这里是接口规范的运用 interface
 */
export interface Iprops {
    name: string;
    enthusiasmLevel?: number;
}

/**
 * 基础
 * @param {string} name
 * @param {number} enthusiasmLevel
 * @returns {any}
 * @constructor
 * 原始数据类型
 * 任意值
 * 类型推论
 * 联合类型
 * 对象的类型——接口
 * 数组的类型
 * 函数的类型
 * 类型断言
 * 声明文件
 * 内置对象
 * JavaScript 的类型分为两种
 *  原始数据类型（Primitive data types）和 对象类型（Object types）
 *  原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
 *  本节主要介绍前五种原始数据类型在 TypeScript 中的应用。
 */

//  代表ts中，方法内部没有返回的值定义
function alertName(): void {
    alert('My name is Tom');
}


class Hello extends React.Component{

    constructor(props:any){
        super(props);

        //  声明boolean类型
        const isBool: boolean = false;
        //  let isBool:boolean =  new Boolean(1);   //会编译失败, 因为Boolean是对象
        //  使用 number 定义数值类型：
        const decLiteral: number = 6;
        const hexLiteral: number = 0xf00d;
        // ES6 中的二进制表示法
        const binaryLiteral: number = 0b1010;
        // ES6 中的八进制表示法
        const octalLiteral: number = 0o744;
        const notANumber: number = NaN; //  正常编译
        const infinityNumber: number = Infinity;    //  正常编译


        //  字符串

        const myName: string = 'Tom';
        const myAge: number = 25;

        // 模板字符串
        const sentence: string = `Hello, my name is ${myName}.
        I'll be ${myAge + 1} years old next month.`;

        // 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：

        const u: undefined = undefined;
        const n: null = null;

        /**
         * 与 void 的区别是，undefined 和 null 是所有类型的子类型。
         * 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
         */
        // 这里报错了, undefined
        // const num1: number = undefined

        // 这样也要报错
        //  let u1: undefined;

        //  let num1: number = u;


    }

    public preview(e:any) {
        e.preventDefault();

    }

    public render() {
        return (
            <div className="hello">
                <div className="greeting">
                    Hello
                </div>
                <form method='post' >
                    <a>
                        <span>修改头像</span>
                        <input type="file" id="fileUp" accept="image/png,image/jpeg" />
                    </a>
                </form>
            </div>)
    }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
