import { Button } from "@/components/ui/button";
import gradient from "@/assets/images/gray-gradient.png";

const Home = () => {
  const isMobile = true;

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full flex flex-col justify-center items-center md:py-28 py-6"
      >
        <div className="flex flex-col gap-2">
          <h2 className="md:text-3xl text-base text-center">
            <b>
              1001<span className="text-whale-800">+</span> things
            </b>{" "}
            for you to discover!
          </h2>
          <p className="max-w-[700px] text-center md:text-[20px] text-xs leading-none">
            Uncover timeless <b>albums</b>, must-watch <b>movies</b>, and
            unforgettable <b>moments</b> that will redefine your bucket list.
          </p>
        </div>

        <div className="flex md:flex-row flex-col gap-3 md:gap-20 md:mt-[60px] mt-5">
          <Button
            size={isMobile ? "sm" : "lg"}
            variant="primary"
            className="font-bold"
          >
            Album of the Day
          </Button>
          <Button
            size={isMobile ? "sm" : "lg"}
            variant="primary"
            className="font-bold"
            disabled
          >
            Movie of the Day
          </Button>
        </div>
      </div>

      <div className="p-12 flex flex-row gap-10 justify-center items-center">
        <span className="font-bold text-2xl">Em construção...</span>
      </div>
    </div>
  );
};

export default Home;
