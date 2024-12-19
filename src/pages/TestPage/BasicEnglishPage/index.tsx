import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import QuestionForm from '../../../components/QuestionForm';
import { GeneralTestReturnedInformation } from '../../../props/props';

import { useSelector } from 'react-redux';
import { questionBasicEnglishTestSelectors } from '../../../redux/selectors';
import axios from '../../../config/axios';

function BasicEnglishPage() {
    const location = useLocation();
    const { data, info }: { data: GeneralTestReturnedInformation; info: { name: string; phone: string; city: string; subject: string } } =
        location.state;
    // console.log(data);

    const processRef = useRef<HTMLDivElement | null>(null);
    const [order, setOrder] = useState(0);
    const [time, setTime] = useState('00:00');
    const [countdown, setCountdown] = useState(Number(data.TimeOfExam) * 60);

    const state = useSelector(questionBasicEnglishTestSelectors);

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

    const submit = async () => {
        try {
            console.log({
                info,
                answer: state,
                time,
            });
            const response = await axios.post('http://localhost:3000/api/v1/level-test/get-score', {
                data: {
                    info,
                    answer: state,
                    time,
                },
            });

            console.log({ res: response.data });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            if (countdown <= 0) {
                clearInterval(timerId);
                return;
            }

            setCountdown((p) => p - 1);
            const s = (countdown - 1) % 60;
            const m = Math.floor((countdown - 1) / 60);

            setTime(`${m}:${s < 10 ? '0' + s : s}`);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [countdown]);

    useEffect(() => {
        console.log(state);
    }, [order, state]);

    return (
        <DefaultLayout>
            <div className="max-w-[768px] mx-auto py-9 px-6 ">
                <div className="w-full p-4">
                    <h1 className="font-bold text-[20px] text-center">{data.ExamTitle}</h1>
                </div>

                <div className="w-full bg-white shadow-lg rounded-lg p-4">
                    <div className="w-full flex">
                        <div className="text-[14px] font-bold px-1">{time}</div>
                        <div className="text-[14px] font-bold px-1 flex flex-auto">
                            <div className="w-12">{order < 10 ? '0' + (order + 1) : order + 1}/20</div>
                            <div className="w-full h-[21px] py-1">
                                <div className="w-full h-full bg-[#f8fafd] rounded-full overflow-hidden">
                                    <div
                                        className="w-[5%] h-full bg-[var(--button-primary-color)] rounded-full transition-all"
                                        ref={processRef}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <QuestionForm data={data.Question[order]} state={state} />

                    <div
                        className={clsx('w-full flex mt-3', {
                            'justify-between': order != 0,
                            'justify-end': order == 0,
                        })}
                    >
                        <div
                            className={clsx(
                                'bg-[var(--button-bg)] text-[var(--button-primary-color)] px-3 py-1 inline-block rounded-lg font-semibold hover:bg-[var(--button-primary-color)] hover:text-[var(--button-bg)] cursor-pointer',
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
                                'bg-[var(--button-bg)] text-[var(--button-primary-color)] px-3 py-1 inline-block rounded-lg font-semibold hover:bg-[var(--button-primary-color)] hover:text-[var(--button-bg)] cursor-pointer',
                                {
                                    hidden: order == 19,
                                    block: order != 19,
                                }
                            )}
                            onClick={setNextOrder}
                        >
                            Câu sau <RightCircleOutlined className="transition-none" />
                        </div>

                        <div
                            className={clsx(
                                'bg-[var(--button-bg)] text-[var(--button-primary-color)] px-3 py-1 inline-block rounded-lg font-semibold hover:bg-[var(--button-primary-color)] hover:text-[var(--button-bg)] cursor-pointer',
                                {
                                    hidden: order != 19,
                                    block: order == 19,
                                }
                            )}
                            onClick={submit}
                        >
                            Nộp bài <RightCircleOutlined className="transition-none" />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default BasicEnglishPage;
