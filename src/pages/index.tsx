import type { NextPage, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const { t } = useTranslation("footer");
  return (
    <div>
      <h1>Hello</h1>
      <footer>{t("description")}</footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ru", ["common", "footer"])),
    },
  };
};

export default Home;
