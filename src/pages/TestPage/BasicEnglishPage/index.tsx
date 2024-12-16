import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import QuestionForm from '../../../components/QuestionForm';
import { GeneralTestReturnedInformation } from '../../../props/props';

function BasicEnglishPage() {
    const location = useLocation();
    const processRef = useRef<HTMLDivElement | null>(null);
    const [order, setOrder] = useState(0);

    const setNextOrder = () => {
        if (processRef.current instanceof HTMLDivElement) {
            processRef.current.style.width = 5 * (order + 2) + '%';
        }
        setOrder(order + 1);
    };

    const setPrevOrder = () => {
        if (processRef.current instanceof HTMLDivElement) {
            processRef.current.style.width = 5 * order + '%';
        }
        setOrder(order - 1);
    };

    const { data }: { data: GeneralTestReturnedInformation } = location.state;
    console.log(data);

    return (
        <DefaultLayout>
            <div className="max-w-[768px] mx-auto py-9 px-6 ">
                <div className="w-full p-4">
                    <h1 className="font-bold text-[20px] text-center">{data.ExamTitle}</h1>
                </div>

                <div className="w-full bg-white shadow-lg rounded-lg p-4">
                    <div className="w-full flex">
                        <div className="text-[14px] font-bold px-1">00:00</div>
                        <div className="text-[14px] font-bold px-1 flex flex-auto">
                            <div className="w-12">{order < 10 ? '0' + (order + 1) : order + 1}/20</div>
                            <div className="w-full h-[21px] py-1">
                                <div className="w-full h-full bg-[#f8fafd] rounded-full overflow-hidden">
                                    <div className="w-[5%] h-full bg-[#35509a] rounded-full transition-all" ref={processRef}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <QuestionForm data={data.Question[order]} />

                    <div
                        className={clsx('w-full flex mt-3', {
                            'justify-between': order != 0,
                            'justify-end': order == 0,
                        })}
                    >
                        <div
                            className={clsx(
                                'bg-[#e8f2ff] text-[#35509a] px-3 py-1 inline-block rounded-lg font-semibold hover:bg-[#35509a] hover:text-[#e8f2ff] cursor-pointer',
                                {
                                    hidden: order == 0,
                                    block: order != 0,
                                }
                            )}
                            onClick={setPrevOrder}
                        >
                            <LeftCircleOutlined className="transition-none" /> Câu trước
                        </div>

                        <div
                            className={clsx(
                                'bg-[#e8f2ff] text-[#35509a] px-3 py-1 inline-block rounded-lg font-semibold hover:bg-[#35509a] hover:text-[#e8f2ff] cursor-pointer',
                                {
                                    hidden: order == 19,
                                    block: order != 19,
                                }
                            )}
                            onClick={setNextOrder}
                        >
                            Câu sau <RightCircleOutlined className="transition-none" />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default BasicEnglishPage;
