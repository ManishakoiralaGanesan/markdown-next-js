// import listOfContent from "./list";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import styles from "./../styles/List.module.css";
import { listOfContent } from "./list";
export default function ShowList({ filterItem }) {
  console.log(filterItem);
  const router = useRouter();
  //   function handleClick(item) {
  //     console.log(item);
  //     const query = item.title;
  //     router.push(`/${query}`);
  //   }
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          {filterItem.map((item) => {
            return (
              <div className={styles.videoContent}>
                <iframe width="1400" height="815" src={item.videoUrl}></iframe>
                <h1>{item.title}</h1>
              </div>
            );
          })}

          <div className={styles.rightSideNav}>
            {listOfContent.map((item, index) => {
              return (
                <Link href={`/video/${item.videoID}`}>
                  <div className={styles.list} key={index}>
                    <p className={styles.listTitle}>{item.title}</p>
                    <p>4 mins</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
