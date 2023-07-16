import ProductCard from '@/components/ProductCard';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';

export default function Products() {
  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('./data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // const { toast } = useToast();

  // //! Dummy Data

  // const status = true;
  // const priceRange = 100;

  // //! **

  // const handleSlider = (value: number[]) => {
  //   console.log(value);
  // };

  // let productsData;

  // if (status) {
  //   productsData = data.filter(
  //     (item) => item.status === true && item.price < priceRange
  //   );
  // } else if (priceRange > 0) {
  //   productsData = data.filter((item) => item.price < priceRange);
  // } else {
  //   productsData = data;
  // }

  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data?.data);

  return (
    <div className="relative grid grid-cols-12 mx-auto max-w-7xl ">
      {/* <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        {/* <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div className="flex items-center mt-3 space-x-2">
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
        </div>
      </div> */}
      <div className="grid grid-cols-3 col-span-9 gap-10 pb-20">
        {data?.data?.map((book: IBook) => (
          <ProductCard book={book} />
        ))}
      </div>
    </div>
  );
}
