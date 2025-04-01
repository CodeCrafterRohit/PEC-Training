import React from "react";

const DeleteAccount = () => {
  //! We will write the logic for the delete account

  return (
    <section className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <article className="w-[60%] bg-gray-900 rounded-t-md px-4">
        <header className="w-full">
          <h1 className="text-3xl font-bold uppercase py-8 px-4">
            Deleting Account
          </h1>
        </header>
        <div className="py-2 px-4 text-lg">
          <p>
            Deleting your account will remove all of your information from our
            database.
          </p>
          <p>This cannot be recover.</p>
        </div>
      </article>
      <main className="w-[60%] bg-gray-900 px-4">
        <form>
          <div className="py-2 px-4 text-lg">
            <label htmlFor="confirmText">
              To confirm this, type
              <code className="bg-gray-700 mx-2">"DELETE"</code>
            </label>
          </div>
          <div className="mb-6 px-4 py-2 text-lg flex justify-between items-center">
            <input
              type="text"
              name="confirmText"
              id="confirmText"
              className="px-2 py-2 bg-white outline-none rounded-md font-semibold focus:ring-2 focus:ring-red-600 text-red-600"
            />
            <button
            //   className={`py-2 px-20 rounded-md ${
            //     confirmText === "DELETE"
            //       ? "bg-red-600 hover:bg-red-700 cursor-pointer"
            //       : "bg-gray-600 cursor-not-allowed"
            //   } `}
            //   disabled={confirmText !== "DELETE"}
            >
              Delete
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default DeleteAccount;
