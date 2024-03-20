import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useSearchParams } from "react-router-dom";
import AccountSettings from "./account";
import AppearanceSettings from "./appearance";

const Setting = () => {
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const tabParam = searchParams.get("tab");

  //   function handleTabChange(value: string) {
  //     searchParams.set("tab", value);
  //     for (const entry of searchParams.entries()) {
  //       if (entry[0] !== "tab") searchParams.delete(entry[0]);
  //     }
  //     setSearchParams(searchParams);
  //   }

  return (
    <Layout>
      <div className="w-full mx-8 my-4 space-y-5">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Tabs
          className="w-full space-y-5"
          defaultValue="account"
          // onValueChange={(e) => handleTabChange(e)}
        >
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <AccountSettings />
          </TabsContent>
          <TabsContent value="appearance">
            <AppearanceSettings />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Setting;
