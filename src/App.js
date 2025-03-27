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
        <button className="bg-slate-900 px-8 text-s h-fit rounded-full hover:bg-gray-700">
          Download App
        </button>
        </div>
      </header>

      <div className="bg-yellow-400 flex flex-row px-4 py-8 rounded-xl">
        <div className="flex flex-col gap-4 basis-1/2">
          <span className="text-sm">Sales Analytics</span>
          <div className="mb-6">
            <span className="text-4xl md:text-6xl md:font-bold lg:text-6xl lg:font-bold font-semibold">
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
            <span className="order-2">
              <MailIcon />
            </span>
          </div>
        </div>
        <div className="basis-1/2 lg:pl-44">
          <img src={require("./hombre.png")} />
        </div>
      </div>
      <div className="flex flex-row gap-3 mt-2">
        <div className="bg-slate-800 rounded-lg basis-4/6 py-2 px-2">
          <div className="flex justify-between">
            <div className="self-end bg-slate-800 text-white rounded-full px-2 py-0.5 h-6 border text-xs font-normal">
              Track Sales
            </div>
            <div className="px-1 top-5 right-5">
              <div>
                <ArrowOutwardIcon style={{ color: "white" }} />
              </div>
            </div>
          </div>
          <div>
            <img src={require("./graph.png")} />
          </div>
        </div>
        <div className="bg-red-300 rounded-2xl w-52 py-5 px-2 flex flex-col gap-9 my-2 ml-10">
          <div className="flex justify-between">
            <div>
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
          <text className="font-normal text-xs mt-2">
            Business lectures
            <br />
            <span className="font-bold text-4xl">400+</span>
          </text>
        </div>
        <div className="bg-blue-400 rounded-2xl py-3 w-52 pl-2 px-2 flex flex-col gap-9 my-2">
          <div className="flex justify-between">
            <div className="self-end bg-black text-white rounded-full pr-2 hover:bg-slate-600">
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
              <text className="ml-1 text-xs">34 metrics</text>
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
