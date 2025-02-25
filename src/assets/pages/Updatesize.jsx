import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Head from "../componant/Head";
import axios from "axios";
import Shoftmessagemodel from "../componant/Shoftmessagemodel";

const Updatesize = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL; // Env file URL
  const [shoftmodel, setshoftmodel] = useState("-100%");
  const [showdata, setshowdata] = useState({ size: "", status: "display" });
  const { _id } = useParams();
  const nav = useNavigate();

  // ✅ Fetch Individual Size Data
  const getindivisualsize = async () => {
    try {
      const response = await axios.get(`${apiUrl}/size/get-size/${_id}`);
      if (response.status === 200) {
        setshowdata(response.data.data);
      }
    } catch (err) {
      console.log("Something went wrong", err.message);
    }
  };

  useEffect(() => {
    getindivisualsize();
  }, []);

  // ✅ Update Size Function
  const updatesize = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${apiUrl}/size/update-size/${_id}`, showdata);
      console.log(response);
      setshoftmodel("50px"); // Show success message
      setTimeout(() => {
        nav("/size/view-size"); // Redirect after 2 seconds
      }, 2000);
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      {/* Success Message */}
      <div
        style={{ right: shoftmodel }}
        className="transition-all duration-200 bg-[#88bf882d] border w-[300px] text-center border-green-400 font-semibold p-4 text-white rounded-lg fixed bottom-[20px] z-20"
      >
        <Shoftmessagemodel message="Size Updated Successfully" />
        <p>Redirecting...</p>
      </div>

      <section className="w-full h-[100vh] overflow-auto">
        <div className="sticky top-0 z-[10] bg-[#313131]">
          <Head />
          <div className="border-b-[1px] border-slate-600 text-white p-[10px_20px] opacity-80">
            <span className="text-blue-500">
              <Link to={"/"}>Home</Link>
            </span>{" "}
            / Dashboard
          </div>
        </div>

        <div className="p-[20px]">
          <div className="text-white rounded-[10px] opacity-80 border border-slate-500 overflow-hidden">
            <header className="bg-slate-700 p-[10px_10px] font-semibold">Update Size</header>
            <form className="p-[20px]" onSubmit={updatesize}>
              <p>Size Name</p>
              <input
                className="block border w-full my-[15px] p-[5px_10px] rounded-[8px] border-slate-500 outline-none focus:shadow-[1px_1px_5px_white] transition-all duration-200"
                type="text"
                placeholder="Add Size"
                name="size"
                value={showdata.size}
                onChange={(e) => setshowdata({ ...showdata, size: e.target.value })}
              />

              <div className="flex gap-[15px] my-[15px]">
                <span>Status</span>
                <span>:</span>
                <span>
                  <input
                    type="radio"
                    name="status"
                    value="display"
                    checked={showdata.status === "display"}
                    onChange={(e) => setshowdata({ ...showdata, status: e.target.value })}
                  />
                </span>
                <span>Display</span>
                <span>
                  <input
                    type="radio"
                    name="status"
                    value="hide"
                    checked={showdata.status === "hide"}
                    onChange={(e) => setshowdata({ ...showdata, status: e.target.value })}
                  />
                </span>
                <span>Hide</span>
              </div>

              <button
                type="submit"
                className="p-[8px_15px] rounded-[8px] bg-[#6261CC] cursor-pointer"
              >
                Update Size
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Updatesize;
