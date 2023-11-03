import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetFoodListParams {
    query: string,
    category: string,
    page: string
}

export const getFoods =  async (params: GetFoodListParams) => {
    const { query, category, page } = params
    
    try {
        const foods = await readClient.fetch(
          groq`${buildQuery({
            type: 'food',
            query,
            category,
            page: parseInt(page),
          })}{
            name,
            _id,
            "image": image.asset->url,
            ingredients,
            slug,
            price,
            category
          }`
        );
    
        return foods;
      } catch (error) {
        console.log(error);
      }
} 