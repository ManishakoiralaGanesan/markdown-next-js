import ContentLayout from "../../Layout/ContentLayoutout";
import SideNavLayout from "../../Layout/SidenavLayoutout";
import MainContentLayout from "../../Layout/MainContentLayoutout";
import Link from "next/link";
import { useRouter } from "next/router";
export default function SampleDesign() {
  const navList = [
    {
      name: "module1",
    },
    {
      name: "module2",
    },
    {
      name: "module3",
    },
    {
      name: "module4",
    },
    {
      name: "module5",
    },
    {
      name: "module6",
    },
    {
      name: "module7",
    },
    {
      name: "module8",
    },
    {
      name: "module9",
    },
    {
      name: "module10",
    },
  ];
  return (
    <ContentLayout>
      <SideNavLayout>
        <nav className="side-nav-tab">
          {navList.map((item, index) => {
            return (
              <a href={`#${item.name}`} key={index}>
                {item.name}
              </a>
            );
          })}
        </nav>
      </SideNavLayout>

      <MainContentLayout>hai</MainContentLayout>
    </ContentLayout>
  );
}
