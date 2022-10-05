import ShowList from "../../components/showList";
import { listOfContent } from "../../components/list";
import { useRouter } from "next/router";
export default function videoList({ filterItem }) {
  return <ShowList filterItem={filterItem}></ShowList>;
}
export async function getServerSideProps(context) {
  const videoId = context.query.videoId;
  console.log(videoId);
  console.log(listOfContent);
  const filterItem = listOfContent.filter((item) => item.videoID == videoId);
  console.log(filterItem);
  return {
    props: {
      filterItem,
    }, // will be passed to the page component as props
  };
}
