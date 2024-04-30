import { useTypewriter } from "react-simple-typewriter";

export default function Testimonial() {
  const [typewriter] = useTypewriter({
    words: ["our customers say"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-3xl font-semibold my-5">
        <span>What </span>
        {typewriter}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-5 gap-3 mb-10  place-items-center">
        <div
          className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-500
        "
        >
          <div className="card-body flex flex-col items-center justify-center">
            <div className="flex gap-1">
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
            </div>
            <p>
              Exceptional communication, outstanding quality of work, and
              remarkable professionalism I highly recommend Your Name/Your
              Company for anyone in need of service provided.
            </p>
            <div className="card-actions justify-end">
              <figure>
                <img
                  className="w-[50px] h-[50px] border-2 border-blue-600 object-contain rounded-full"
                  src="https://i.ibb.co/MD2vtDD/th-1.jpg"
                  alt="client"
                />
              </figure>
              <h2 className="card-title">Karim Benzima</h2>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-500">
          <div className="card-body flex flex-col items-center justify-center">
            <div className="flex gap-1">
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
            </div>
            <p>
              Exceptional communication, outstanding quality of work, and
              remarkable professionalism I highly recommend Your Name/Your
              Company for anyone in need of service provided.
            </p>
            <div className="card-actions justify-end">
              <figure>
                <img
                  className="w-[50px] h-[50px] border-2 border-blue-600 object-contain rounded-full"
                  src="https://i.ibb.co/18ZZW30/R.jpg"
                  alt="client"
                />
              </figure>
              <h2 className="card-title">Brahim Diaz</h2>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl border border-gray-500">
          <div className="card-body flex flex-col items-center justify-center">
            <div className="flex gap-1">
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
              <img
                className="w-3 h-3"
                src="https://i.ibb.co/9H9Qxmv/star.png"
                alt=""
              />
            </div>
            <p>
              Exceptional communication, outstanding quality of work, and
              remarkable professionalism I highly recommend Your Name/Your
              Company for anyone in need of service provided.
            </p>
            <div className="card-actions justify-end">
              <figure>
                <img
                  className="w-[50px] h-[50px] border-2 border-blue-600 object-contain rounded-full"
                  src="https://i.ibb.co/jvrF6dJ/th.jpg"
                  alt="client"
                />
              </figure>
              <h2 className="card-title">Arda Gular</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
