import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className=" border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center h-[72px]">
          <div>
            <a href="#">
              <img src={logo} alt="수코딩 로고" width={40} />
            </a>
          </div>
          <nav className="">
            <ul>
              <li>로그인</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
