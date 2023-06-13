import Link from "next/link";

/*定义了一个名为 FourOhFour 的 React 组件。
  这个组件会在用户尝试访问不存在的页面（即服务器返回 404 状态码）时显示。 
  
  在这个 <Link> 组件中，我们设置了 href 属性为 "/"
  意味着当用户点击这个链接时，他们将被带回应用的首页。
*/
export default function FourOhFour() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}