export const Next = ({ onNext }: { onNext: () => void }) => {
  return (
    <button
      onClick={onNext}
      className="group border text-lg rounded-lg px-4 cursor-pointer transition-all ease-in duration-150 hover:bg-[#95D2EE] hover:text-black"
    >
      Next{" "}
      <i className="ri-arrow-right-line ml-2 relative group-hover:left-1"></i>
    </button>
  );
};
export const Back = ({ onBack }: { onBack: () => void }) => {
  return (
    <button
      onClick={onBack}
      className="group border text-lg rounded-lg px-4 cursor-pointer transition-all ease-in duration-150 hover:bg-[#95D2EE] hover:text-black"
    >
      <i className="ri-arrow-left-line ml-2 relative group-hover:right-1"></i>{" "}
      Back
    </button>
  );
};

<button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Figma
</button>;
