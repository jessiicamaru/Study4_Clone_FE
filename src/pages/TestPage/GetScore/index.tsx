import { useLocation } from 'react-router-dom';
import DefaultLayout from '../../../layouts/DefaultLayout';
import { QuestionProps } from '../../../props/reduxProps';

type DataType = {
    message: { result: string; comment: string[] };
    answer: QuestionProps[];
    grade: string;
    timeToFinish: string;
};

function GetScore() {
    const location = useLocation();

    const { data }: { data: DataType } = location.state;

    console.log(data);

    return (
        <DefaultLayout>
            <div className="w-full bg-[url(/level-test/leveltest_background.webp)] p-4">
                <div className="w-[calc(100vw*2/3)] mx-auto bg-white p-6 rounded-lg">
                    <h1 className="font-bold text-[24px] my-4">Kết quả kiểm tra trình độ</h1>
                    <div className="py-1">
                        <span className="font-bold">Thời gian hoàn thành: </span>
                        {data.timeToFinish}
                    </div>
                    <div className="py-1">
                        <span className="font-bold">Bạn làm đúng: </span>
                        {data.grade}
                    </div>
                    <div className="font-bold">Đánh giá về trình độ:</div>
                    <div className="py-1">
                        {data.message.result}

                        <div className="pl-16 text-[15px] py-3 text-justify">
                            {data.message.comment[0]}
                            <div className="p-1"></div>
                            {data.message.comment[1]}
                        </div>
                    </div>

                    <h1 className="font-bold my-4">Các khóa học phù hợp với trình độ của bạn</h1>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default GetScore;
