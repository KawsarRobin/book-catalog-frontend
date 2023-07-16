import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

interface IProps {
  book: IBook;
}

export default function productCard({ book }: IProps) {
  const handleAddBook = (book: IBook) => {
    toast({
      description: 'book Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <img src={book?.imageLink} alt="book" />
        <h1 className="text-xl font-semibold">{book?.title}</h1>
        <p>Genre: {book?.genre}</p>
        <p className="text-sm">Publication year: {book?.publicationDate}</p>
        <p className="text-sm">Author: {book?.author}</p>
        <Link to={`/product-details/${book._id}`} className="w-full">
          <Button variant="default" onClick={() => handleAddBook(book)}>
            More Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
