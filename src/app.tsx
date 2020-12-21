/*
 * @Description:
 * @Author: tangyu
 * @Date: 2020-12-17 23:15:31
 * @LastEditTime: 2020-12-18 10:27:22
 * @LastEditors: tangyu
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

const Hello: React.FunctionComponent<{
  compiler: string;
  framework: string;
}> = (props) => {
  return <div>111</div>;
};

ReactDOM.render(
  <Hello compiler="typescript" framework="react" />,
  document.getElementById("root")
);
