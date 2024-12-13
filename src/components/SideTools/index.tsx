import { UpOutlined, CloseOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

function SideTools() {
    const upArrow = useRef<HTMLLIElement>(null);
    const [visible, setVisible] = useState(false);
    const [tool, setTool] = useState('https://m.dict.laban.vn/');
    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(false);

    const handleClick = ({ link, id }: { link: string; id: number }) => {
        setTool(link);
        setActive(id);
    };

    const navData = [
        {
            id: 1,
            name: 'Anh-Việt',
            link: 'https://m.dict.laban.vn/',
        },
        {
            id: 2,
            name: 'WordReference',
            link: 'https://www.wordreference.com/definition/',
        },
        {
            id: 3,
            name: 'Thesaurus',
            link: 'https://onelook.com/thesaurus/',
        },
        {
            id: 4,
            name: 'Tiếng Trung',
            link: 'https://vtudien.com/trung-viet/dictionary/nghia-cua-tu-%E4%BD%A0%E5%A5%BD',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(currentScrollPos > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Cuộn mượt
        });
    };

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="w-14 rounded-l-[8px] shadow-2xl !sticky right-0 px-1 py-2 bg-white">
                <ul>
                    <li className="hover:opacity-80 cursor-pointer flex justify-center flex-wrap w-full p-1.5" onClick={handleClose}>
                        <img className="w-2/3 rounded-md" src="/home/tool/dictionary.png" alt="" />
                        <span className="text-[9px]">Từ điển</span>
                    </li>
                    <li className="hover:opacity-80 cursor-pointer w-full p-1.5">
                        <a target="_blank" className="w-full h-full flex justify-center flex-wrap" href="https://m.me/study4.support">
                            <img className="w-2/3 rounded-md" src="/home/tool/messenger.png" alt="" />
                        </a>
                    </li>
                    <li className="hover:opacity-80 cursor-pointer w-full p-1.5">
                        <a target="_blank" className="w-full h-full flex justify-center flex-wrap" href="https://zalo.me/study4">
                            <img className="w-2/3 rounded-md" src="/home/tool/zalo.jpg" alt="" />
                        </a>
                    </li>
                    <li
                        className={clsx('hover:opacity-80 cursor-pointer flex justify-center flex-wrap w-full p-1.5', {
                            hidden: !visible,
                        })}
                        ref={upArrow}
                        onClick={scrollToTop}
                    >
                        <UpOutlined className="text-[10px]" />
                    </li>
                </ul>
            </div>
            <div
                className={clsx(
                    'w-[600px] h-[500px] text-[#1a1a1a] p-2 z-20 fixed right-16 top-20 bg-white rounded-[15px] overflow-hidden shadow-2xl',
                    {
                        block: open,
                        hidden: !open,
                    }
                )}
            >
                <div className="absolute top-0 right-0">
                    <div className="hover:bg-[#ccc] cursor-pointer inline-block p-2" onClick={handleClose}>
                        <CloseOutlined />
                    </div>
                </div>
                <div className="leading-5 font-medium text-sm mb-2 text-[#1a1a1a]">
                    {navData.map((item) => {
                        return (
                            <span
                                key={item.id}
                                onClick={() => {
                                    handleClick({ link: item.link, id: item.id });
                                }}
                            >
                                <a
                                    className={clsx('cursor-pointer', {
                                        'text-[var(--button-primary-color)] font-bold': active == item.id,
                                    })}
                                    data-href={item.link}
                                >
                                    {item.name}
                                </a>
                                <span className="px-2">|</span>
                            </span>
                        );
                    })}
                </div>
                <div className="jqdictionary-iframe absolute top-10 left-0 right-0 bottom-0">
                    <iframe className="w-full h-full" loading="lazy" frameBorder="0" src={tool}></iframe>
                </div>
            </div>
        </>
    );
}

export default SideTools;
