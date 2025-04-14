import Link from "next/link";
import { reviewLinks } from "@/lib/data";
import Container from "@/components/layout/Container";

export default function ReviewEncouragementSection() {
  return (
    <div className='smaller-section'>
      <Container>
        <h4 className='text-center text-lg md:text-4xl font-sourceSerif4'>
          Help Us Grow - Share Your Experience!
        </h4>
        <h5>
          Your review helps others discover our trusted landscaping and
          construction services.
        </h5>
        <div className='flex flex-col lg:flex-row justify-center gap-3 lg:gap-5'>
          {reviewLinks.map((reviewLink) => (
            <Link
              key={reviewLink.name}
              href={reviewLink.url}
              className={`px-3 py-4 rounded-lg text-nowrap
                ${
                  reviewLink.name == "FacebookReview"
                    ? "bg-facebook-blue text-accent"
                    : "px-10 border border-gray-border"
                }`}
            >
              <div className='flex justify-center items-center'>
                <p className='button-text mx-4'>{reviewLink.label}</p>
                <reviewLink.icon
                  className={`text-3xl
                ${
                  reviewLink.name == "FacebookReview"
                    ? "text-accent text-4xl"
                    : "text-red-600"
                }`}
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
