import BasicHeader from "../layouts/BasicHeader";
import BasicFooter from "../layouts/BasicFooter";

const CommunityPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <BasicHeader/>

            {/* Content */}
            <main className="flex-grow py-6 px-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <div className=" text-3xl">Community Page</div>
                </div>
            </main>

            <BasicFooter/>
        </div>
    );
}

export default CommunityPage;
