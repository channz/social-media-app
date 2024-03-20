import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";
import AccountSettings from "./account";

const Setting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");

  function handleTabChange(value: string) {
    searchParams.set("tab", value);
    for (const entry of searchParams.entries()) {
      if (entry[0] !== "tab") searchParams.delete(entry[0]);
    }
    setSearchParams(searchParams);
  }
  return (
    <Layout>
      <h1 className="font-3xl font-bold">Settings</h1>
      <Tabs
        className="w-full"
        defaultValue={tabParam ?? "account"}
        onValueChange={(e) => handleTabChange(e)}
      >
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AccountSettings />
        </TabsContent>
        <TabsContent value="appearance"></TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Setting;
