import { Link } from "react-router-dom";

import Errorr from "../assets/errorr.jpg";
function PageNotFound() {
  return (
    <main>
      <section className="h-screen my-6  items-center max-w-8xl space-y-1 flex flex-col">
        <div>
          <h1 className="text-center font-bold text-5xl my-4 dark:text-slate-100">
            Oops!
          </h1>
        </div>
        <div className="flex flex-col items-center py-5">
          <p className="dark:text-slate-100">404 - Page Not found</p>
          <p className="dark:text-slate-100">
            The page you are might be looking for is disabled or check the
            correct route.
          </p>
          <img src={Errorr} className="h-64 my-3 rounded-lg" alt="" />
        </div>
        <div className="">
          <Link to="/">
            <button className="px-5 py-1 text-white rounded font-bold bg-gradient-to-r from-blue-400 to-sky-600">
              Back to Home Page
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
