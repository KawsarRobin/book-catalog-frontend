import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';
import React from 'react';

export default function Products() {
  const [inputValue, setInputValue] = React.useState('');
  const [genre, setGenre] = React.useState('');
  const [publicationYear, setPublicationYear] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setInputValue(value);
  };
  const handlePublicationYearChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setPublicationYear(value);
  };
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setGenre(value);
  };
  const query = inputValue.trim();
  const queryParams = new URLSearchParams();
  if (query) {
    queryParams.append('query', query);
  }
  if (genre) {
    queryParams.append('genre', genre);
  }
  if (publicationYear) {
    queryParams.append('publicationDate', publicationYear);
  }

  const { data } = useGetBooksQuery(queryParams.toString());
  console.log(data?.data);

  return (
    <div className="relative grid grid-cols-12 mx-auto max-w-7xl ">
      <div className="self-start col-span-12 p-5 mb-5 mr-10 space-y-5 border z rounded-2xl border-gray-200/80 top-16">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div className="flex items-center mt-3 space-x-2">
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Search Book</h1>
          <div>
            <Input value={inputValue} onChange={handleInputChange} />
            <Select />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl uppercase">Genre</h1>
          <div>
            <select value={genre} onChange={handleGenreChange}>
              <option value="">Select Genre</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="romantic">Romantic</option>
              <option value="motivational">Motivational</option>
              <option value="story">Story</option>
            </select>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl uppercase">Publication Year</h1>
          <div>
            <Input
              value={publicationYear}
              onChange={handlePublicationYearChange}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 col-span-12 gap-10 pb-20">
        {data?.data?.map((book: IBook) => (
          <ProductCard book={book} />
        ))}
      </div>
    </div>
  );
}
