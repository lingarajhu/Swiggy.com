const Contact = () => {
  return (
    <div className="w-6/12 mx-auto bg-gray-50 text-center my-10">
      <h1 className="font-bold text-4xl p-2">This is contact info</h1>
      <div className="w-6/12 mx-auto">
        <form className="grid">
          <input
            className="m-2 p-2 rounded-2xl w-80 border border-orange-400 "
            placeholder="Type your name"
          />
          <textarea
            className="m-2 p-2 rounded-2xl w-80 border border-orange-400 "
            placeholder="Type your issue"
          />
          <button className="m-2 p-2 w-80 rounded-lg font-bold text-xl bg-orange-400 border border-orange-400">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
