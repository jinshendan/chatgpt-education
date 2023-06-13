import Link from "next/link";

/* 当服务器出现内部错误导致无法完成请求时，将显示这个页面。
   500: Server Error
*/
export default function FiveOhFive() {
  return (
    <>
      <h1>500 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}