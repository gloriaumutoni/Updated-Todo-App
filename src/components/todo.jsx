import { useSelector } from "react-redux";
import SearchBar from "./searchbar";


const Todo = () => {
    const selector=useSelector(state=>state.action.SearchBar)
    return ( 
        <div>
        <h2 className="text-center font-medium text-8xl text-gray-200">todos</h2>
        <form>
            <SearchBar/>
        </form>
        </div>
     );
}
 
export default Todo;