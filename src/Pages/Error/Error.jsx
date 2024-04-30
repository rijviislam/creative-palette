import { Link } from "react-router-dom";
import Error1 from "../../assets/error.svg";

export default function Error() {
  return (
    <section className="flex items-center h-full sm:p-16 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img src={Error1} alt="error" />
        <p className="text-3xl">
          Looks like our services are currently offline
        </p>
        <Link
          to="/"
          rel="noopener noreferrer"
          href="#"
          className="px-8 py-3 font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
