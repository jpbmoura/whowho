"use client";

const StarRating = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating?: (arg0: number) => void;
}) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            className={`${
              setRating && "hover:cursor-pointer hover:text-violet-400"
            }
            ${rating >= star ? "text-purple-600" : "text-neutral-700"}
            start font-light text-sm cursor-default`}
            // style={{
            //   color: rating >= star ? "#7c3aed" : "#525252",
            // }}
            onClick={() => {
              if (setRating) {
                setRating(star);
              }
            }}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
