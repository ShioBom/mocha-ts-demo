import { stringify } from "querystring";

export class Kata {
    /**
     * revrot 将字符串切成指定大小的子字符串，如果最后一个块长度不足sz，则抛弃该块，如果子字符串的数字和能被2整除，则翻转该子字符串，否则该子字符串左移一位
     * 对所有的子字符串做此操作后，拼接起来，返回拼接后的字符串。
     * @param str 接受的由数字组成的字符串
     * @param sz 子字符串的尺寸
     * @return string 
     */
    public static revrot(str: string, sz: number): string { 
        if (!(sz <= 0 || str === '' || sz > str.length)) {
            // 将该字符串分割成等长的子字符串数组
            let reg = new RegExp("[0-9]{"+sz+"}", 'g');
            let arr = str.match(reg);
            // 操作每个子字符串
            if (arr != null) {
                arr.forEach((ele,index) => {
                    // 第二个参数是当前值，利用了隐式转换
                    let chunkArr =  ele.split("");
                    let chunkSum = chunkArr.reduce((prev,next)=> prev + +next,0); 
                    // 第二种方法
                    // let chunkSum = ele.match(/\d/g).reduce((prev,next)=> prev + +next,0);
                    if(chunkSum%2===0){
                        if(arr != null)
                        arr[index] = chunkArr.reverse().join("");
                    }else{
                        if(arr != null)
                        arr[index] =  chunkArr.slice(1).concat(chunkArr.slice(0,1)).join("")
                    }
                })
                // 拼接字符串
                return arr.join(""); 
            }
        } else {
            return "";
        }
        return ""; 
    };
    //Roman Numerals Decoder
    // Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）
    public static solution(roman: string): number {
        
        return 1
    }
}