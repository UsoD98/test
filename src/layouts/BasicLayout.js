import BasicHeader from "./BasicHeader";
import BasicFooter from "./BasicFooter";

const BasicLayout = ({children}) => {
    return (
        <>
            {/* 기존 헤더 대신 BasicMenu*/}
            <BasicHeader/>

            {/* 상단 여백 my-5 제거 */}

            <main className="flex-grow py-6 px-4">

                {children}

            </main>

            <BasicFooter/>
        </>
    );
};

export default BasicLayout;
