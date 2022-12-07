const WorkCard = ({ image, name, github }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[400px] max-w-[300px] min-w-[300px] m-[10px] content-div"
    >
      <div className="opacity-0 group-hover:opacity-100 w-full bg-black">
        {/*Container*/}
        <div className="pt-8 text-white text-center">
          <h3 className="mb-5">{name}</h3>
          <a href={github} target="_blank" rel="noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:scale-110 duration-500">
              View on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
