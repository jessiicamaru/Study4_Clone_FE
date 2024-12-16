import { useState } from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import { ConfigProvider, Form, Input, Radio, RadioChangeEvent } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LevelTest() {
    const [subject, setSubject] = useState<string | null>(null);
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const navigate = useNavigate();
    const onChangeSubject = (e: RadioChangeEvent) => {
        setSubject(e.target.value);
    };

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleOnChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const handleOnChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    const options = [
        { label: '#IELTS', value: 'IELTS' },
        { label: '#Tiếng Anh cơ bản', value: 'BasicEnglish' },
    ];

    const sendData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/level-test?subject=${subject}&name=${name}&phone=${phone}&city=${city}`);

            console.log(response.data);
            navigate('/courses/level-test/basic-english-test', { state: { data: response.data } });
        } catch {
            console.log('error');
        }
    };

    return (
        <DefaultLayout>
            <div className="w-full bg-[url('/level-test/leveltest_background.webp')] p-14 grayscale-[0.3]">
                <Form className="w-[516px] bg-white mx-auto p-8 rounded-lg shadow-lg">
                    <h1 className="text-[32px] font-bold text-center">Kiểm tra trình độ miễn phí</h1>
                    <Form.Item
                        name="subject"
                        rules={[
                            {
                                message: 'Chọn môn học',
                            },
                        ]}
                        className="py-2"
                    >
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#677788',
                                    borderRadius: 2,
                                    colorBgContainer: '#fff',
                                },
                            }}
                        >
                            <Radio.Group
                                className="text-[var(--social-icon)]"
                                options={options}
                                onChange={onChangeSubject}
                                value={subject}
                                block
                                optionType="button"
                                buttonStyle="solid"
                            />
                        </ConfigProvider>
                    </Form.Item>

                    <Form.Item
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập họ và tên',
                            },
                        ]}
                    >
                        <Input className="py-3" value={name} placeholder="Họ và tên" onChange={handleOnChangeName} />
                    </Form.Item>

                    <Form.Item
                        name="Phone"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập số điện thoại',
                            },
                        ]}
                    >
                        <Input className="py-3" value={phone} placeholder="Số điện thoại" onChange={handleOnChangePhone} />
                    </Form.Item>

                    <Form.Item
                        name="City"
                        rules={[
                            {
                                required: true,
                                message: 'Nhập tỉnh/thành phố',
                            },
                        ]}
                    >
                        <Input className="py-3" value={city} placeholder="Tỉnh/thành phố" onChange={handleOnChangeCity} />
                    </Form.Item>

                    <button
                        className="w-full rounded-md text-center bg-[var(--button-primary-color)] text-[var(--white)] p-2 font-bold cursor-pointer hover:opacity-80 py-3 text-lg"
                        onClick={sendData}
                    >
                        Bắt đầu làm bài
                    </button>
                </Form>
            </div>
        </DefaultLayout>
    );
}

export default LevelTest;
