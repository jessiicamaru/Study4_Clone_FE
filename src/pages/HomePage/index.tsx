import { Form, Input } from 'antd';
import TestItem from '../../components/TestItem';
import DefaultLayout from '../../layouts/DefaultLayout';

import { TestProps } from '../../props/props';
import { CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const fakeData: TestProps[] = [
        {
            id: '1',
            title: 'IELTS Simulation Listening test 1',
            time: 40,
            users: 769719,
            comments: 2311,
            parts: 4,
            questions: 40,
            hastag: ['IELTS Academic', 'Listening'],
        },
        {
            id: '2',
            title: 'IELTS Simulation Listening test 10',
            time: 40,
            users: 249435,
            comments: 635,
            parts: 4,
            questions: 40,
            hastag: ['IELTS Academic', 'Listening'],
        },
        {
            id: '3',
            title: 'IELTS Simulation Listening test 2',
            time: 40,
            users: 313037,
            comments: 662,
            parts: 4,
            questions: 40,
            hastag: ['IELTS Academic', 'Listening'],
        },
        {
            id: '4',
            title: 'IELTS Simulation Listening test 3',
            time: 40,
            users: 769719,
            comments: 2311,
            parts: 4,
            questions: 40,
            hastag: ['IELTS Academic', 'Listening'],
        },
        {
            id: '5',
            title: 'IELTS Simulation Listening test 4',
            time: 40,
            users: 158184,
            comments: 361,
            parts: 4,
            questions: 40,
            hastag: ['IELTS Academic', 'Listening'],
        },
        {
            id: '6',
            title: 'IELTS Simulation Listening test 5',
            time: 40,
            users: 136092,
            comments: 252,
            parts: 4,
            questions: 40,
            hastag: ['IELTS Academic', 'Listening'],
        },
        {
            id: '7',
            title: 'IELTS Simulation Listening test 6',
            time: 40,
            users: 121221,
            comments: 208,
            parts: 4,
            questions: 40,
            hastag: ['IELTS Academic', 'Listening'],
        },
        {
            id: '8',
            title: 'IELTS Simulation Listening test 7',
            time: 40,
            users: 87105,
            comments: 179,
            parts: 4,
            questions: 40,
            hastag: ['IELTS Academic', 'Listening'],
        },
    ];

    const navigate = useNavigate();

    const handleNavigateLevelTest = () => {
        navigate('/courses/level-test');
    };

    return (
        <DefaultLayout>
            <div className="w-full">
                <img src="/home/1.png" alt="" className="w-full" />
            </div>

            <div className="w-4/5 mx-auto">
                <div className="w-full flex justify-center p-8 cursor-pointer" onClick={handleNavigateLevelTest}>
                    <img src="/home/2.webp" alt="" className="w-full" />
                </div>

                <div className="w-full">
                    <h1 className="font-bold text-[26px] text-center mb-3">Đề thi mới nhất</h1>

                    <div className="w-full flex flex-wrap gap-y-2">
                        {fakeData.map((i) => {
                            return <TestItem key={i.id} {...i} />;
                        })}
                    </div>
                </div>

                <div className="my-16">
                    <h1 className="font-bold text-[26px] text-center mb-3">Luyện thi IELTS, TOEIC, HSK, TOPIK ... không giới hạn</h1>
                    <div className="w-full flex justify-center">
                        <div className="inline-flex">
                            <div className="w-[35px] h-[35px] rounded-full overflow-hidden border-solid border-[1px] border-[var(--white)]">
                                <img src="/home/users/u1.jpg" alt="" className="w-full h-full" />
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full overflow-hidden border-solid border-[1px] border-[var(--white)] ml-[-17px]">
                                <img src="/home/users/u2.jpg" alt="" className="w-full h-full" />
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full overflow-hidden border-solid border-[1px] border-[var(--white)] ml-[-17px]">
                                <img src="/home/users/u3.jpg" alt="" className="w-full h-full" />
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full overflow-hidden border-solid border-[1px] border-[var(--white)] ml-[-17px]">
                                <img src="/home/users/u4.webp" alt="" className="w-full h-full" />
                            </div>
                            <div className="w-[35px] h-[35px] rounded-full overflow-hidden border-solid border-[1px] border-[var(--white)] ml-[-17px]">
                                <img src="/home/users/u5.webp" alt="" className="w-full h-full" />
                            </div>
                            <h1 className="ml-2 text-[20px] text-center">
                                <i>và hơn 1 triệu học viên hoạt động mỗi tháng</i>
                            </h1>
                        </div>
                    </div>
                    <div className="w-full flex mt-8">
                        <div className="w-2/5">
                            <img src="/home/community.webp" alt="" />
                        </div>
                        <div className="flex-1 px-8">
                            <div className="w-ful my-3">
                                <CheckOutlined className="text-[var(--button-primary-color)] mr-2" />
                                Cộng đồng học tiếng Anh và luyện thi sôi nổi với hơn 1 triệu học viên mỗi tháng
                            </div>
                            <div className="w-ful my-3">
                                <CheckOutlined className="text-[var(--button-primary-color)] mr-2" />
                                Đặt câu hỏi cho đội ngũ trợ giảng cũng như các học viên khác để nhận giải đáp sau 30 phút
                            </div>
                            <div className="w-ful my-3">
                                <CheckOutlined className="text-[var(--button-primary-color)] mr-2" />
                                Chia sẻ kinh nghiệm học tập và làm bài thi với các thành viên khác
                            </div>
                            <div className="w-ful my-3">
                                <CheckOutlined className="text-[var(--button-primary-color)] mr-2" />
                                Luyện tập kỹ năng nói & viết và nhận được nhận xét, chấm điểm từ bạn học và giáo viên
                            </div>

                            <div className="w-full rounded-md text-center bg-[var(--button-primary-color)] text-[var(--white)] p-2 font-bold cursor-pointer hover:opacity-80">
                                Bắt đầu luyện thi
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[url('/home/contact.webp')] py-16 relative z-0 bg-center">
                <div className="absolute bg-black top-0 left-0 right-0 bottom-0 opacity-40 z-[-1]"></div>
                <h1 className="font-bold text-[26px] text-center text-[var(--white)] mb-3 drop-shadow-lg">Đăng ký thông tin khoá học</h1>
                <div className="flex justify-center">
                    <Form className="w-[516px] bg-white p-4 rounded-lg">
                        <Form.Item
                            name="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập họ tên',
                                },
                            ]}
                            className="rounded-lg mb-4"
                        >
                            <Input className="w-full py-2 px-3" placeholder="Họ tên*" />
                        </Form.Item>

                        <Form.Item
                            name="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập số điện thoại',
                                },
                            ]}
                            className="rounded-lg mb-4"
                        >
                            <Input className="w-full py-2 px-3" placeholder="Số điện thoại*" />
                        </Form.Item>

                        <Form.Item
                            name="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập Thành phố/Tỉnh',
                                },
                            ]}
                            className="rounded-lg mb-4"
                        >
                            <Input className="w-full py-2 px-3" placeholder="Thành phố/Tỉnh*" />
                        </Form.Item>

                        <button className="w-full rounded-md text-center bg-[var(--button-primary-color)] text-[var(--white)] p-2 font-bold cursor-pointer hover:opacity-80">
                            Đăng kí tư vấn miễn phí
                        </button>
                    </Form>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default HomePage;
