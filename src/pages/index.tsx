import { prop } from "./../interfaces";

export default function Index(props: prop) {
  return (
    <div className={`${props} flex flex-col gap-1 p-2 w-[50%]`}>
      <header className="flex flex-col bg-[rgba(33,33,33,0.2)] items-center rounded-sm">
        <h1 className="text-lg">Header</h1>
        <h3>Hello</h3>
      </header>
      <div className="flex flex-col bg-[rgba(33,33,33,0.2)] rounded-sm p-2">
        <h1>hello</h1>
      </div>
    </div>
  );
}
