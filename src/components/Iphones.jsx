import { Link } from "react-router-dom";

const Iphones = () => {
  // Sample data for iPhones with online SVG image URLs
  const iphones = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$999",
      img: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184&width=1445",
    },
    {
      id: 2,
      name: "iPhone 14",
      price: "$799",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlArBqAEt4wWUnk__Sreh8FF0FV11Z8apaB89QjBc0U4YxTJiW3g9kTzTypgvWF3Rd38&usqp=CAU",
    },
    {
      id: 3,
      name: "iPhone 13",
      price: "$699",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyCUGEIIbbxebhxffXv9Ex-yc2Ks6ArIuvil9SX0UzjDhXD5cVOfv4BMgJ_3HsI-Bo08&usqp=CAU",
    },
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$999",
      img: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184&width=1445",
    },
    {
      id: 2,
      name: "iPhone 14",
      price: "$799",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlArBqAEt4wWUnk__Sreh8FF0FV11Z8apaB89QjBc0U4YxTJiW3g9kTzTypgvWF3Rd38&usqp=CAU",
    },
    {
      id: 3,
      name: "iPhone 13",
      price: "$699",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyCUGEIIbbxebhxffXv9Ex-yc2Ks6ArIuvil9SX0UzjDhXD5cVOfv4BMgJ_3HsI-Bo08&usqp=CAU",
    },
  ];

  return (
    <section className="p-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Available iPhones</h1>{" "}
      {/* Centered title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {iphones.map((iphone) => (
          <div
            key={iphone.id}
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center"
          >
            {" "}
            {/* Flexbox for centering */}
            <img
              src={iphone.img}
              alt={iphone.name}
              className="w-full mb-5 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-center">
              {iphone.name}
            </h2>{" "}
            {/* Centered text */}
            <p className="text-lg font-medium mb-3 text-center">
              {iphone.price}
            </p>{" "}
            {/* Centered text */}
            <Link
              to="/"
              className="btn bg-blue-500 text-white py-2 px-4 rounded-full text-center"
            >
              {" "}
              {/* Centered Button */}
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Iphones;
