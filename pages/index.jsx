import HoverImg from "../molecules/HoverImg";

export default () => {
  return (
    <div className="max-w-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      <HoverImg src="img/1/5.jpg" href="/projects/1"></HoverImg>
      <HoverImg src="img/2/2.jpg" href="/projects/2"></HoverImg>
      <HoverImg src="img/3/2.jpg" href="/projects/3"></HoverImg>
      <HoverImg src="img/4/2.jpg" href="/projects/4"></HoverImg>
      <HoverImg src="img/5/15.jpg" href="/projects/5"></HoverImg>
      <HoverImg src="img/6/1.jpg" href="/projects/6"></HoverImg>
      <HoverImg src="img/7/1.jpg" href="/projects/7"></HoverImg>
      <HoverImg src="img/8/2.jpg" href="/projects/8"></HoverImg>
      <HoverImg src="img/9/2.jpg" href="/projects/9"></HoverImg>
    </div>
  );
};
