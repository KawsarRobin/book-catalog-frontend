import { Button } from '@/components/ui/button';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleBookQuery(id);
  console.log(id, data?.data);

  return (
    <>
      <div className="flex items-center mx-auto border-b border-gray-300 max-w-7xl">
        <div className="w-[50%]">
          <img src={data?.data?.imageLink} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{data?.data?.title}</h1>
          <p className="text-xl">Rating: {data?.data?.genre}</p>
          {/* <ul className="space-y-1 text-lg">
            {data?.data?.reviews?.map((review: string) => (
              <li key={review}>{review}</li>
            ))}
          </ul> */}
          <Button>Add to cart</Button>
        </div>
      </div>
      {/* { <ProductReview reviews: String[] = {data?.data?.reviews} /> } */}
    </>
  );
}
