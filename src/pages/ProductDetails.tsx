import { Button } from '@/components/ui/button';
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from '@/redux/features/books/bookApi';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleBookQuery(id);
  // console.log(id, data?.data);

  const [deleteBookMutation, { isError, isSuccess }] = useDeleteBookMutation();

  const handleDelete = (id: string) => {
    const accessToken = localStorage.getItem('accessToken');
    const result = deleteBookMutation({ id, accessToken });
    console.log(result);
  };

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
          <Link to={`/book-edit/${data?.data?._id}`} className="w-full">
            <Button variant="default">Edit Book</Button>
          </Link>

          <Link onClick={() => handleDelete(data?.data?._id)} className="w-ful">
            <Button variant="default">Delete Book</Button>
          </Link>
        </div>
      </div>
      {/* { <ProductReview reviews: String[] = {data?.data?.reviews} /> } */}
    </>
  );
}
