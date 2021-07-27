const ImageStack = ({ folder, count }) => {
  const list = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <div className="max-w-xl grid grid-cols-1 gap-2">
      {list.map((number) => (
        <img
          src={`/img/${folder}/${number}.jpg`}
          className="w-full overflow-hidden"
        ></img>
      ))}
    </div>
  );
};

export default ImageStack;
