import { Review } from "./review";

export const Reviews = ({ reviews }: any) => {
  return (
    <div className="flex-row items-center justify-between min-h-screen">
      <div className="flex flex-col items-center">
        {reviews.map((review: any) => (
          <Review
            key={review.id}
            id={review.id}
            name={review.name}
            message={review.message}
            rating={review.rating}
            isValid={review.isValid}
          />
        ))}
      </div>
    </div>
  );
};