/* 从"react" 包中导入所有内容，并将其命名为 React。React 是一个 JavaScript 库，用于构建用户界面，尤其是单页面应用。*/ 
import * as React from "react";

/*从同一目录下的 button.module.css 文件中导入样式，并命名为 styles。*/
import styles from "./button.module.css";

/*定义 名为IconButton 的 React 组件*/
/*定义了一个名为 IconButton 的函数组件，并导出它。函数组件是一种简单的 React 组件类型，它接收一些属性（props）并返回要渲染的 React 元素。 */
export function IconButton(props: {
  onClick?: () => void;             /*组件接受的一个可选的属性（prop）。它是一个函数，当按钮被点击时，这个函数会被调用。 */
  icon: JSX.Element;                /*这是一个必需的属性，它是一个 JSX 元素，表示按钮的图标 */
  text?: string;                    /*这是一个可选的属性，表示按钮上的文字。*/
  bordered?: boolean;               /*这是一个可选的属性，如果它为 true，那么按钮将有边框。*/
  className?: string;
}) {
  return (
    <div
      className={
        styles["icon-button"] +
        ` ${props.bordered && styles.border} ${props.className ?? ""}`
      }
    >
      <div className={styles["icon-button-icon"]}>{props.icon}</div>
      {props.text && (
        <div className={styles["icon-button-text"]}>{props.text}</div>
      )}
    </div>
  );
}