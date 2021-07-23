export default () => (
  <div className="text-gray-700 text-sm flex flex-col items-center">
    <div className="flex flex-col items-center justify-center max-w-sm p-8 mb-12 bg-gray-200 rounded-lg sm:flex-row">
      <img
        src="img/headshot.jpeg"
        className="w-32 h-32 mb-8 mr-0 rounded-full sm:mb-0 sm:mr-8"
      ></img>
      <div className="flex-col">
        <p className="mb-2 font-bold">Jeff Smith</p>
        <p>636 Arrowhead Drive</p>
        <p className="mb-2">Earlysville, VA 22936</p>
        <a href="tel:434-981-9136">+1 434 981 9136</a>
      </div>
    </div>
  </div>
);
