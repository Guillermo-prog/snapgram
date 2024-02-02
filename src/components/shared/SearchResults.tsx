import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostsList from "./GridPostsList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0)
    return <GridPostsList posts={searchedPosts.documents} />;

  return <p className="text-ligth-4 mt-10 text-center w-full">No results</p>;
};

export default SearchResults;
