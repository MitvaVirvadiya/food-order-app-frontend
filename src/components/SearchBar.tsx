import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const fromSchema = z.object({
  searchQuery: z.string({
    required_error: "restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof fromSchema>;

type Props = {
  onSubmit: (FormData: SearchForm) => void;
  placeholder: string;
  onReset?: () => void;
};

const SearchBar = ({ onSubmit, placeholder, onReset }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(fromSchema),
  });

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`flex items-center justify-between gap-3 flex-row border-2 rounded-full p-3 ${form.formState.errors.searchQuery} && border-red-500`}>
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholder}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          variant={"outline"}
          onClick={handleReset}
          className="rounded-full"
          type="button"
        >
          Reset
        </Button>
        <Button type="submit" className="rounded-full bg-orange-500">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
