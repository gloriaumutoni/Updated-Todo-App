const SearchBar = (props) => {
    return (
      <div className="flex justify-center mt-3 ">
        <input
          onChange={props.handleChange}
          type="text"
          placeholder="Add todo..."
          value={props.value}
          className="text-black relative pl-6 border-2 rounded-3xl shadow-lg shadow-slate-500 w-[50%] py-3"
        />
        <i onClick={props.handleSubmit} className="fa-solid fa-circle-plus absolute right-[27%] top-[41%] text-[#58d0ac] text-2xl"></i>
      </div>
    );
  };
  
  export default SearchBar;
  