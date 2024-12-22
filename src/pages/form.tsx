import { prop } from "../interfaces";

export default function Form(props: prop) {
  return (
    <div className="flex flex-col justify-center items-center z-10 bg-[rgba(33,33,33,0.7)] fixed w-full h-full">
      <form className="bg-white w-1/2 p-2 rounded-md">
        <h1>Hello</h1>
      </form>
    </div>
  );
}
