import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryServices";

export default function useCategories (){
          const {data , isLoading} = useQuery({
                    queryKey : "categories",
                    queryFn : getCategoryApi
          })
          const {categories : rawCategories = []} = data || {};
          const categories = categories.map((item) => ({
                    label : item.title,
                    value : item._id
          }))
          const transformedCategories = categories.map((item) => ({
                    label : item.title,
                    value : item.englishTitle
          }))
          return {isLoading ,  categories , transformedCategories}
}