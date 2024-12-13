function Header() {
    return (
        <div className="w-full h-16 pr-4 pl-4 border-b-[1px] border-solid border-s-[#0505050f]">
            <div className="w-full flex h-full">
                <div className="w-1/6 flex items-center">
                    <div className="w-full">
                        <img src="/logo/study4_logo.png" alt="" className="w-4/6" />
                    </div>
                </div>

                <div className="flex-1 flex justify-end text-[14px]">
                    <ul className="h-full flex">
                        <li className="hover:text-[var(--button-primary-color)] h-full flex items-center justify-center p-2 cursor-pointer font-semibold text-[var(--button-color)]">
                            Chương trình học
                        </li>
                        <li className="hover:text-[var(--button-primary-color)] h-full flex items-center justify-center p-2 cursor-pointer font-semibold text-[var(--button-color)]">
                            Đề thi online
                        </li>
                        <li className="hover:text-[var(--button-primary-color)] h-full flex items-center justify-center p-2 cursor-pointer font-semibold text-[var(--button-color)]">
                            Flashcard
                        </li>
                        <li className="hover:text-[var(--button-primary-color)] h-full flex items-center justify-center p-2 cursor-pointer font-semibold text-[var(--button-color)]">
                            Blog
                        </li>
                        <li className="hover:text-[var(--button-primary-color)] h-full flex items-center justify-center p-2 cursor-pointer font-semibold text-[var(--button-color)]">
                            Kích hoạt tài khoản
                        </li>
                        <li className="hover:opacity-80 h-full flex items-center justify-center p-2 cursor-pointer font-semibold text-[var(--white)]">
                            <div className="pt-2 pb-2 pr-3 pl-3 bg-[var(--button-primary-color)] rounded-full">Đăng nhập</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
