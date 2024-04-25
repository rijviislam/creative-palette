export default function AddCraftItem() {
  return (
    <div className="flex items-center justify-center w-full my-5">
      <div className="flex flex-col w-10/12  p-6 rounded-md sm:p-10 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Add your craft item</h1>
        </div>
        <form className="space-y-12">
          <div className=" flex items-center gap-5">
            <div className="w-1/2">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Image
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="use image URL"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                </div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Item Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="subcategory_Name" className="text-sm">
                    Subcategory Name
                  </label>
                </div>
                <input
                  type="subcategory_Name"
                  name="subcategory_Name"
                  id="subcategory_Name"
                  placeholder="subcategory name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="shortdescription" className="text-sm">
                    Short Description
                  </label>
                </div>
                <input
                  type="shortdescription"
                  name="shortdescription"
                  id="shortdescription"
                  placeholder="short description"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="price" className="text-sm">
                    Price
                  </label>
                </div>
                <input
                  type="price"
                  name="price"
                  id="price"
                  placeholder="Price"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="rating" className="text-sm">
                    Rating
                  </label>
                </div>
                <input
                  type="rating"
                  name="rating"
                  id="rating"
                  placeholder="rating"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="processing_time" className="text-sm">
                    Processing Time
                  </label>
                </div>
                <input
                  type="processing_time"
                  name="processing_time"
                  id="processing_time"
                  placeholder="Processing Time"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="useremail" className="text-sm">
                    User Email
                  </label>
                </div>
                <input
                  type="useremail"
                  name="useremail"
                  id="useremail"
                  placeholder="User Email"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="username" className="text-sm">
                    User Name
                  </label>
                </div>
                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="User Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="name" className="text-sm">
                    Item Name
                  </label>
                </div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Item Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
                Add Craft
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
