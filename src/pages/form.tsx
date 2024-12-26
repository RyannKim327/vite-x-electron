import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { prop } from "../interfaces";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Form(props: prop) {
  return (
    <div id="form-1" className="flex flex-col justify-center items-center z-10 bg-[rgba(33,33,33,0.7)] fixed w-full h-full">
      <form className="bg-white w-1/2 p-2 rounded-md">
        <div className="flex justify-end p-2">
          {/* header */}
          <FontAwesomeIcon className="text-rose-700 hover:text-rose-900 cursor-pointer" icon={ faX } />
        </div>
        
      </form>
    </div>
  );
}
