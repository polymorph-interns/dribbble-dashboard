import "./App.css";
import MailIcon from "@mui/icons-material/Mail";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export default function App() {
  return (
    <div className="bg-slate-900 rounded-lg h-full w-full px-3 my-1">
      <header className="flex justify-between p-3 text-white">
        <nav className="flex space-x-8 py-2 text-xs font-light">
          <h1 className="-mt-3 text-2xl font-bold">METLY</h1>
          <a href="#" className="hover:underline">
            CONTACT SALES
          </a>
          <a href="#" className="hover:underline">
            CONTACT SALES
          </a>
          <a href="#" className="hover:underline">
            CONTACT SALES
          </a>
        </nav>
        <div className="">
          <button className="bg-slate-900 py-1 text-s h-fit rounded-full hover:bg-gray-700">
            Download App
          </button>
        </div>
      </header>

      <div className="bg-yellow-400 flex flex-row px-4 py-8 rounded-xl">
        <div className="flex flex-col gap-4 basis-1/2">
          <span className="text-sm">Sales Analytics</span>
          <div className="mb-6">
            <span className="text-4xl md:text-6xl font-bold">
              We Make &{" "}
              <img
                className="inline-block w-8 md:w-12 lg:w-12 pb-2"
                src={require("./knot.png")}
              />{" "}
              <br />
              Your Business <br />
              Different
            </span>
          </div>
          <div className="border-b-[1.5px] border-black flex justify-between mt-16 mr-8">
            <span className="font-medium">BOOK A CONSULTATION</span>
            <span className="justify-end">
              <MailIcon />
            </span>
          </div>
        </div>
        <div className="basis-1/2 lg:pl-44">
          <img src={require("./hombre.png")} />
        </div>
      </div>
      <div className="flex flex-row gap-3 mt-2 pb-2">
        <div className="flex basis-4/6 my-2 px-2 w-9">
          <div className="w-full">
            <div className="flex justify-between bg-slate-800 rounded-r-2xl rounded-tl-xl pt-0">
              <div className="flex justify-between bg-slate-800 px-4 rounded-md w-96 p-0">
                <div className="self-end bg-slate-800 text-white rounded-full px-2 py-[3px] mb-2 h-6 border-[0.25px] text-xs font-normal">
                  Track Sales
                </div>
              </div>
              <div className="bg-slate-900 rounded-bl-2xl rounded-ss-sm rounded-tr-2xl">
                <div className="px-1 place-self-end -mr-1 right-5 -mt-1 mb-2">
                  <div className="p-2 bg-slate-800  rounded-xl m-1">
                    <ArrowOutwardIcon
                      fontSize="medium"
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-4 rounded-tr-xl rounded-b-lg">
              <img src={require("./graph.png")} className="rounded-lg " />
            </div>
          </div>
        </div>
        <div className="bg-red-300 rounded-2xl w-52 py-5 px-2 flex flex-col gap-9 my-2">
          <div className="flex justify-between p-2 py-2.5">
            <div className="">
              <PlayCircleIcon style={{ color: "white" }} fontSize="large" />
            </div>
            <div className="order-last flex flex-row px-2">
              <img
                className="w-8 h-8 rounded-full z-10 object-cover"
                src={require("./carti.jpeg")}
              />
              <img
                className="w-8 h-8 rounded-full z-0 -ml-2 object-cover"
                src={require("./gettyimages-juice.jpg")}
              />
            </div>
          </div>
          <text className="font-normal text-xs mt-2 order-last">
            Business lectures
            <br />
            <span className="font-bold text-4xl">400+</span>
          </text>
        </div>
        <div className="bg-blue-400 rounded-2xl py-3 w-52 pl-2 px-2 flex flex-col gap-9 my-2">
          <div className="flex justify-between py-2.5">
            <div className="self-end bg-black text-white rounded-full hover:bg-slate-600 p-0.5">
              <ShowChartIcon
                style={{
                  margin: "1px",
                  backgroundColor: "#B7BFFE",
                  borderRadius: "100px",
                  marginLeft: "5px",
                  marginTop: "5px",
                  marginBottom: "5px",
                  color: "black",
                }}
                fontSize=""
              />
              <text className="ml-1 text-xs p-1">34 metrics</text>
            </div>
            <div className="order-last flex flex-row px-2">
              <div>
                <ArrowOutwardIcon />
              </div>
            </div>
          </div>
          <text className="font-medium text-base mt-10">
            Easily track
            <br />
            business metrics
          </text>
        </div>
      </div>
    </div>
  );
}
