import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Feelstar</a>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/login">
          <a className="mr-4">로그인</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
    </header>
  );
}
