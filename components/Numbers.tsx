
const Numbers = () => {
  return (
    <div className="py-16">
      <div
        className="grid grid-cols-3 items-center relative isolate bg-cover bg-no-repeat overflow-hidden rounded-2xl lg:p-16 md:8 p-6"
        style={{ backgroundImage: "url('/numbers-img.webp')" }}
      >
        <div className="absolute inset-0 bg-primary/80 -z-50"></div>
        {[
          { num: "1000+", text: "Satisfied Customers" },
          { num: "500+", text: "Completed Projects" },
          { num: "10+", text: "Years of Experience" },
        ].map((item, index) => (
          <div
            className={`text-white ${index !== 2 && "border-r"} ${index !== 0 && "text-center"}`}
          >
            <p className="lg:text-[56px] text-lg font-bold">{item.num}</p>
            <p className="md:font-semibold text-xs md:text-sm lg:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers
