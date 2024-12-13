import { ClockCircleOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import { TestProps } from '../../props/props';

function TestItem({ title, time, users, comments, parts, questions, hastag }: TestProps) {
    return (
        <div className="w-[25%]">
            <div className="rounded-lg hover:-translate-y-1 & hover:drop-shadow-lg bg-[var(--test-bg-color)] border-[2px] border-solid border-s-[#0505050f] p-4 mx-2 min-h-[265px] flex flex-col justify-between">
                <div className="w-full">
                    <h1 className="font-bold">{title}</h1>
                    <ul className="w-full my-2">
                        <li className="inline-block p-1 text-[14px]">
                            <ClockCircleOutlined />
                            {time} phút
                        </li>
                        <li className="inline-block p-1 text-[14px]">
                            <UserOutlined />
                            {users}
                        </li>
                        <li className="inline-block p-1 text-[14px]">
                            <MessageOutlined />
                            {comments}
                        </li>
                        <li className="inline-block p-1 text-[14px]">{parts} phần thi </li>
                        <li className="inline-block p-1 text-[14px]">{questions} câu hỏi</li>
                    </ul>

                    <ul className="w-full">
                        {hastag.map((tag, index) => (
                            <li
                                key={index}
                                className="text-[var(--button-primary-color)] bg-[var(--hastag-bg-color)] inline-block text-[12px] mr-1 py-2 px-3 rounded-full"
                            >
                                #{tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-ful border-solid border-[1px] border-[#35509a] py-3 px-2 text-[#35509a] rounded-lg cursor-pointer hover:bg-[#35509a] hover:text-white mt-5 text-center">
                    Chi tiết
                </div>
            </div>
        </div>
    );
}

export default TestItem;
