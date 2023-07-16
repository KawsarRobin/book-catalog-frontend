import { decodeAccessToken } from '@/lib/jwthelper';
import { useAddBookMutation } from '@/redux/features/books/bookApi';
import { useForm } from 'react-hook-form';

export default function AddBook() {
  interface IDecodedToken {
    userEmail: string;
    id: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addBookMutation, { isLoading, isError, isSuccess }] =
    useAddBookMutation();
  const accessToken = localStorage.getItem('accessToken');

  const decodedToken =
    accessToken && (decodeAccessToken(accessToken) as IDecodedToken);

  const onSubmit = (data: any) => {
    const bookData = {
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationDate: parseInt(data.publicationDate),

      description: data.description,
      user: decodedToken?.id,
    };
    console.log(bookData);
    addBookMutation(bookData);
  };

  return (
    <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Add New Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-bold" htmlFor="title">
            Title
          </label>
          <input
            placeholder="Write Title Name Of Book"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-bold" htmlFor="author">
            Author
          </label>
          <input
            placeholder="Write Author Name Of Book"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('author', { required: 'Author is required' })}
          />
          {errors.author && (
            <p className="mt-1 text-sm text-red-500">{errors.author.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-bold" htmlFor="genre">
            Genre
          </label>
          <input
            placeholder="Write Genre Of Book. Ex: Fiction/Non-Fiction"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('genre', { required: 'Genre is required' })}
          />
          {errors.genre && (
            <p className="mt-1 text-sm text-red-500"> {errors.genre.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block mb-1 text-sm font-bold"
            htmlFor="publicationDate"
          >
            Publication Date (Year)
          </label>
          <input
            placeholder="Write Publication Year in Number"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('publicationDate', {
              required: 'Publication Date is required',
            })}
          />
          {errors.publicationDate && (
            <p className="mt-1 text-sm text-red-500">
              {errors.publicationDate.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-bold" htmlFor="description">
            Description
          </label>
          <textarea
            placeholder="Write Description Of Book"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('description')}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Adding Book...' : 'Add Book'}
        </button>
        {isError && <p className="mt-2 text-red-500">Error adding book</p>}
        {isSuccess && (
          <p className="mt-2 text-green-500">Book added successfully</p>
        )}
      </form>
    </div>
  );
}
