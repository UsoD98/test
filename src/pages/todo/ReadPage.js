import { useParams} from "react-router-dom";

import ReadComponent from "../../components/todo/ReadComponent";

function ReadPage() {
    const {tno} = useParams()


    return (
        <div className="w-full text-3xl font-extrabold">

            <div className="font-extrabold w-full bg-white mt-6">
                Todo Read Page Component {tno}
                <ReadComponent tno={tno}/>

            </div>


        </div>
    );
}

export default ReadPage;