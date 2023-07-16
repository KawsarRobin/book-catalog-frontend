import { FiSend } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function ProductReview(reviews: string[]) {
  return (
    <div className="mx-auto mt-5 max-w-7xl">
      <div className="flex items-center gap-5">
        <Textarea className="min-h-[30px]" />
        <Button className="rounded-full h-10 w-10 p-2 text-[25px]">
          <FiSend />
        </Button>
      </div>
      <div className="mt-10">
        {reviews?.map((review: string, index: number) => (
          <div key={index} className="flex items-center gap-3 mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
