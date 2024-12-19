import { Radio } from 'antd';
import { CaretRightFilled, PauseOutlined, SoundFilled, MutedFilled } from '@ant-design/icons';
import React, { useEffect, useRef, useState, memo } from 'react';
import clsx from 'clsx';
import { Answer, Question } from '../../props/props';
import { useDispatch } from 'react-redux';
import { BasicEnglishSlice } from '../../slice/BasicEnglishSlice';
// import { useSelector } from 'react-redux';
// import { questionBasicEnglishTestSelectors } from '../../redux/selectors';
import { QuestionProps } from '../../props/reduxProps';

function QuestionForm({ data, state }: { data: Question; state: QuestionProps[] }) {
    const dispatch = useDispatch();
    // const state = useSelector(questionBasicEnglishTestSelectors);

    // // console.log(state);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [play, setPlay] = useState(true);
    const [mute, setMute] = useState(false);
    const [volumne, setVolumne] = useState(100);
    const [timeline, setTimeline] = useState(0);
    const [duration, setDuration] = useState('0:00');
    const [answer, setAnswer] = useState<string>('');

    const handleChangeRadio = (i: Answer) => {
        dispatch(
            BasicEnglishSlice.actions.setAnswerForQuestion({
                answer: {
                    id: i.AnswerID,
                    content: i.Answer,
                    value: i.AnswerValue,
                    isCorrect: i.IsCorrect,
                },

                question: {
                    id: data.QuestionID,
                    order: data.OrderNumber,
                    content: data.Question,
                },
            })
        );
    };

    const handleChangeVolumne = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const audioElement = audioRef.current;
            audioElement.volume = Number(e.target.value) / 100;
        }
        if (Number(e.target.value) == 0) {
            setMute(true);
        }
        setVolumne(Number(e.target.value));
    };

    const handleChangeTimeline = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeline(Number(e.target.value));
    };

    const handleClickPlay = () => {
        setPlay((prev) => {
            if (!prev) {
                if (audioRef.current) {
                    audioRef.current.play();
                }
            } else {
                if (audioRef.current) {
                    audioRef.current.pause();
                }
            }

            return !prev;
        });
    };

    const handleClickMute = () => {
        setMute((prev) => {
            if (!prev) {
                if (audioRef.current) {
                    const audioElement = audioRef.current;
                    audioElement.volume = 0;
                }
                setVolumne(0);
            } else {
                if (audioRef.current) {
                    const audioElement = audioRef.current;
                    audioElement.volume = 1;
                }
                setVolumne(100);
            }
            return !prev;
        });
    };

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleOnTimeUpdate = () => {
            if (audioElement) {
                const timesCurrent = Math.floor(audioElement.currentTime);
                const minutesCurrent = Math.floor(timesCurrent / 60);
                const secondsCurrent = timesCurrent - 60 * minutesCurrent;
                setDuration(`${minutesCurrent}:${secondsCurrent >= 10 ? secondsCurrent : `0${secondsCurrent}`}`);
                setTimeline(Math.ceil((audioElement.currentTime / audioElement.duration) * 100));
            }
        };

        if (audioElement) {
            audioElement.addEventListener('timeupdate', handleOnTimeUpdate);
        }

        return () => {
            if (audioElement) {
                audioElement.removeEventListener('timeupdate', handleOnTimeUpdate);
            }
        };
    }, [data.OrderNumber]);

    useEffect(() => {
        const t = state.find((i) => {
            return i.id == data.QuestionID && i.order == data.OrderNumber;
        });

        if (t && Object.keys(t).length > 0) {
            setAnswer(String(t.choosenAnswer));
        }
    }, [data.OrderNumber, data.QuestionID, state]);

    return (
        <>
            <div
                className={clsx('w-full flex p-3', {
                    hidden: !data.AudioPath,
                    block: data.AudioPath,
                })}
            >
                <audio autoPlay src={data.AudioPath} preload="metadata" ref={audioRef} />
                <div className="flex w-4/5">
                    <div className="h-8 flex justify-center items-center cursor-pointer hover:bg-[var(--button-bg)]" onClick={handleClickPlay}>
                        <CaretRightFilled
                            className={clsx('w-8 text-[20px]', {
                                block: !play,
                                hidden: play,
                            })}
                        />
                        <PauseOutlined
                            className={clsx('w-8 text-[20px]', {
                                block: play,
                                hidden: !play,
                            })}
                        />
                    </div>
                    <input
                        type="range"
                        defaultValue={'100%'}
                        className="flex-auto appearance-auto w-full"
                        onChange={handleChangeTimeline}
                        value={timeline}
                        step={0.5}
                        min={0}
                        max={100}
                    />
                    <div className="h-full px-2 text-[14px] leading-[1.5] flex items-center">{duration}</div>
                </div>

                <div className="flex w-1/5">
                    <div className="h-8 flex justify-center items-center cursor-pointer hover:bg-[var(--button-bg)]" onClick={handleClickMute}>
                        <SoundFilled
                            className={clsx('w-8 inline-block', {
                                block: !mute,
                                hidden: mute,
                            })}
                        />
                        <MutedFilled
                            className={clsx('w-8 inline-block', {
                                block: mute,
                                hidden: !mute,
                            })}
                        />
                    </div>
                    <input
                        type="range"
                        defaultValue={'100%'}
                        className="flex-auto appearance-auto w-full"
                        onChange={handleChangeVolumne}
                        value={volumne}
                        step={10}
                        min={0}
                        max={100}
                    />
                </div>
            </div>

            <div className="w-full flex py-3">
                <div className="w-12">
                    <div className="bg-[var(--button-bg)] text-[var(--button-primary-color)] font-bold text-center w-12 h-12 flex items-center justify-center rounded-full">
                        {data.OrderNumber}
                    </div>
                </div>
                <div className="flex-auto">
                    <h1 className="p-4">{data.Question}</h1>
                    <Radio.Group
                        onChange={(e) => {
                            const t = data.Answer.find((i) => i.AnswerID == e.target.value);
                            if (t) handleChangeRadio(t);
                        }}
                        value={answer}
                    >
                        <div className="w-full flex flex-col px-4">
                            {data.Answer.map((i) => {
                                return (
                                    <Radio
                                        key={i.AnswerID}
                                        className="py-1 text-[16px] flex items-center"
                                        value={i.AnswerID}
                                        checked={i.AnswerID == answer}
                                    >
                                        {i.Answer}
                                    </Radio>
                                );
                            })}
                        </div>
                    </Radio.Group>
                </div>
            </div>
        </>
    );
}

export default memo(QuestionForm);
