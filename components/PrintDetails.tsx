import Image from "next/image";

export default function PrintDetails() {
  return (
    <div className="flex">
      <Image
        src={"/img/biba.png"}
        width={0}
        height={0}
        alt="biba"
        sizes="100vw"
        priority
        className="w-full h-auto"
      ></Image>
      <div className="p-5">
        <h1 className="font-semibold">Biba</h1>
        <div className="text-xs">
          120mm 6x7 Black & White Negative to C-Type Print
        </div>
        <br />
        <form action="">
          <select name="printSize" id="printSize" className="bg-zinc-200">
            <option value="12x14">
              12x14in C-Type Fuji Matt Print - £40.00
            </option>
            <option value="24x28">
              24x28in C-Type Fuji Matt Print - £90.00
            </option>
            <option value="48x56">
              48x56in C-Type Fuji Matt Print - £220.00
            </option>
          </select>
          <br />
          <br />
          <button className="bg-black text-white p-2 hover:bg-zinc-400">
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
}
